using GeneHub.API.Enum;
using Microsoft.AspNetCore.Identity;

namespace GeneHub.API.Model.Domain.Auth
{
    public class GenehubUser : IdentityUser
    {
        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public DateTime ModifiedDate { get; set; } = DateTime.Now;
        public DateTime LastLogin { get; set; } = DateTime.Now;
        public UserType UserType { get; set; } = UserType.Guest;
    }
}
