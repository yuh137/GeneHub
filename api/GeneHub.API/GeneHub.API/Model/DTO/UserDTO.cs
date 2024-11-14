using GeneHub.API.Enum;
using System.ComponentModel.DataAnnotations;

namespace GeneHub.API.Model.DTO
{
    public class UserDTO
    {
        public Guid UserID { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public UserType UserType { get; set; }
    }
}
