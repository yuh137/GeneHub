using GeneHub.API.Model.Domain.Auth;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GeneHub.API.Data
{
    public class GeneHubAuthDbContext : IdentityDbContext<GenehubUser>
    {
        public GeneHubAuthDbContext(DbContextOptions<GeneHubAuthDbContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var readerId = "be4af7fe-6dbd-4d4e-abb9-d944a10f3bbc";
            var writerId = "88533d17-f8d6-40b3-b844-59bf0350f2da";

            var roles = new List<IdentityRole>
            {
                new IdentityRole
                {
                    Id = readerId,
                    ConcurrencyStamp = readerId,
                    Name = "Reader",
                    NormalizedName = "READER"
                },
                new IdentityRole
                {
                    Id = writerId,
                    ConcurrencyStamp = writerId,
                    Name = "Writer",
                    NormalizedName = "WRITER"
                },
            };

            builder.Entity<IdentityRole>().HasData(roles);
        }
    }
}
