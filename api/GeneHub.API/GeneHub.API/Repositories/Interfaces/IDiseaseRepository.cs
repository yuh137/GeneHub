using GeneHub.API.Model.Domain;

namespace GeneHub.API.Repositories.Interfaces
{
    public interface IDiseaseRepository
    {
        Task<List<Disease>> GetAllDiseaseAsync(string? filterOn, string? filterQuery);
        Task<Disease> GetDiseaseByIDAsync(Guid id);

    }
}
