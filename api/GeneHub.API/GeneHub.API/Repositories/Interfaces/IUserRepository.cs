using GeneHub.API.Model.Domain;

namespace GeneHub.API.Repositories.Interfaces
{
    public interface IUserRepository
    {
        Task<List<User>> GetAllUserAsync(string? filterOn = null, string? filterQuery = null);
        Task<User> GetUserByIDAsync(Guid id);
    }
}
