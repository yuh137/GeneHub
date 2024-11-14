using GeneHub.API.Enum;

namespace GeneHub.API.Model.DTO.Auth
{
    public class RegisterRequestDTO
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public UserType UserType { get; set; }
        public string[] Roles { get; set; }
    }
}
