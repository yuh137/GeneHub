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

        public async Task<User?> GetUserByIDAsync(Guid id)
        {
            var user = await dbContext.Users.FirstOrDefaultAsync(item => item.UserID == id);

            return user;
        }

        public async Task<User?> CreateUserAsync(User user)
        {
            await dbContext.Users.AddAsync(user);
            await dbContext.SaveChangesAsync();

            return user;
        }

        public async Task<User?> GetUserByUsername(string username)
        {
            return await dbContext.Users.FirstOrDefaultAsync(user => user.Username == username);
        }
    }
}
