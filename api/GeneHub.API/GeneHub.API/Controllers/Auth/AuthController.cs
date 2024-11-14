using AutoMapper;
using GeneHub.API.Model.Domain.Auth;
using GeneHub.API.Model.DTO.Auth;
using GeneHub.API.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using GeneHub.API.Model.Domain;
using GeneHub.API.Model.DTO;

namespace GeneHub.API.Controllers.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<GenehubUser> userManager;
        private readonly ITokenRepository tokenRepository;
        private readonly IUserRepository userRepository;
        private readonly IMapper mapper;

        public AuthController(UserManager<GenehubUser> userManager, ITokenRepository tokenRepository, IUserRepository userRepository, IMapper mapper)
        {
            this.userManager = userManager;
            this.tokenRepository = tokenRepository;
            this.userRepository = userRepository;
            this.mapper = mapper;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDTO requestDTO)
        {
            var identityUser = new GenehubUser
            {
                UserName = requestDTO.Username,
                Email = requestDTO.Email,
                UserType = requestDTO.UserType,
            };

            var identityResult = await userManager.CreateAsync(identityUser, requestDTO.Password);

            if (identityResult.Succeeded)
            {
                if (requestDTO.Roles != null && requestDTO.Roles.Any())
                {
                    identityResult = await userManager.AddToRolesAsync(identityUser, requestDTO.Roles);

                    var userModel = new User
                    {
                        Username = requestDTO.Username,
                        UserType = requestDTO.UserType,
                        Email = requestDTO.Email,
                    };

                    var createdUser = await userRepository.CreateUserAsync(userModel);

                    if (identityResult.Succeeded && createdUser != null)
                    {
                        return Ok("User successfully registered");
                    }
                }
            }

            return BadRequest("Something went wrong");
        }

        [HttpPost]
        [Route("LoginByUsername")]
        public async Task<IActionResult> LoginByUsername([FromBody] LoginByUsernameRequestDTO requestDTO)
        {
            var user = await userManager.FindByNameAsync(requestDTO.Username);

            if (user != null)
            {
                var checkPasswordResult = await userManager.CheckPasswordAsync(user, requestDTO.Password);

                if (checkPasswordResult)
                {
                    var roles = await userManager.GetRolesAsync(user);

                    if (roles != null)
                    {
                        var jwtToken = tokenRepository.CreateJWTToken(user, roles.ToList());

                        var userModel = await userRepository.GetUserByUsername(requestDTO.Username);

                        var userDTO = mapper.Map<UserDTO>(userModel);

                        var response = new LoginResponseDTO
                        {
                            JwtToken = jwtToken,
                            UserID = userDTO.UserID,
                        };
    
                        return Ok(response);
                    }

                }

                return BadRequest("Password incorrect");
            }

            return BadRequest("User do not exist");
        }
    }
}
