using AutoMapper;
using GeneHub.API.Model.Domain;
using GeneHub.API.Model.DTO;
using GeneHub.API.Model.DTO.Auth;

namespace GeneHub.API.Mappings
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles() {
            CreateMap<User, AddUserDTO>().ReverseMap();
            CreateMap<RegisterRequestDTO, User>();
            CreateMap<User, UserDTO>().ReverseMap();
        }
    }
}
