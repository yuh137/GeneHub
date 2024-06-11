using GeneHub.API.Data;
using GeneHub.API.Model.Domain;
using GeneHub.API.Repositories.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace GeneHub.API.Repositories.SQLImplementation
{
    public class SQLUserRepository : IUserRepository
    {
        private readonly GeneHubDbContext dbContext;
        public SQLUserRepository(GeneHubDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<List<User>> GetAllUserAsync(string? filterOn = null, string? filterQuery = null)
        {
            var users = dbContext.Users.AsQueryable();

            if (string.IsNullOrWhiteSpace(filterOn) == false && string.IsNullOrWhiteSpace(filterQuery) == false)
            {
                users = users.Where(user => user.Username.Contains(filterQuery) || user.Email.Contains(filterQuery));
            }

            return await users.ToListAsync();
        }

        public Task<User> GetUserByIDAsync(Guid id)
        {
            throw new NotImplementedException();
        }
    }
}
