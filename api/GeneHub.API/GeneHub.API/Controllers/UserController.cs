using AutoMapper;
using GeneHub.API.Model.DTO;
using GeneHub.API.Repositories.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GeneHub.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository userRepository;
        private readonly IMapper mapper;

        public UserController(IUserRepository userRepository, IMapper mapper)
        {
            this.mapper = mapper;
            this.userRepository = userRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUserAsync([FromQuery] string? filterOn, [FromQuery] string? filterQuery)
        {
            var usersDomain = await userRepository.GetAllUserAsync(filterOn, filterQuery);
            return Ok();
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetUserByIDAsync([FromRoute] Guid id)
        {
            var userModel = await userRepository.GetUserByIDAsync(id);

            if (userModel == null)
            {
                return NotFound();
            }

            var userDTO = mapper.Map<UserDTO>(userModel);

            return Ok(userDTO);
        }
    }
}
