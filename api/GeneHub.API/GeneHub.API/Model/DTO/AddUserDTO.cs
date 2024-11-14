using GeneHub.API.Enum;
using System.ComponentModel.DataAnnotations;

namespace GeneHub.API.Model.DTO
{
    public class AddUserDTO
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public UserType UserType { get; set; }
    }
}
