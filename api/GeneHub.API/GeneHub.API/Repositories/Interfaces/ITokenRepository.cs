using GeneHub.API.Model.Domain.Auth;
using Microsoft.AspNetCore.Identity;

namespace GeneHub.API.Repositories.Interfaces
{
    public interface ITokenRepository
    {
        public string CreateJWTToken(GenehubUser user, List<string> roles);
    }
}
