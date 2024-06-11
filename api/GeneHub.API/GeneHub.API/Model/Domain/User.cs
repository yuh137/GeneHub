using System.ComponentModel.DataAnnotations;

namespace GeneHub.API.Model.Domain
{
    public class User
    {
        public Guid UserID { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Email { get; set; }
    }
}
