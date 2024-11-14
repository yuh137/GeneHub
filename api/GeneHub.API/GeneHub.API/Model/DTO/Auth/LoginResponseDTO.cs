namespace GeneHub.API.Model.DTO.Auth
{
    public class LoginResponseDTO
    {
        public string JwtToken { get; set; }
        public Guid UserID { get; set; }
    }
}
