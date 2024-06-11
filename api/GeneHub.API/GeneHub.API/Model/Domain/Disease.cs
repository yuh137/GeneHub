using Microsoft.EntityFrameworkCore;

namespace GeneHub.API.Model.Domain
{
    public class ClinicalTrials
    {
        public string Description { get; set; }
        public string Link { get; set; }
    }
    public class Disease
    {
        public Guid DiseaseID { get; set; }
        public string DiseaseName { get; set; }
        public string Gene { get; set; }
        public string Inheritance { get; set; }
        public string BioName { get; set; }
        public ICollection<string> Symptomps { get; set; }
        public string Description { get; set; }
        public string Treatment { get; set; }
        public ICollection<string> UsefulLinks { get; set; }
        public ICollection<string> Keywords { get; set; }
        public ICollection<ClinicalTrials> Clinical { get; set; }
    }
}
