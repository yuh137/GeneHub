namespace GeneHub.API.Model.DTO.Auth
{
    public class LoginByUsernameRequestDTO
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
    public class LoginByEmailRequestDTO 
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
