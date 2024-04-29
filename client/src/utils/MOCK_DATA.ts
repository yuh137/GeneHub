export interface SearchData {
  id: string;
  gene: string;
  inheritance: string;
  disease_name: string;
  bio_name: string;
  symptomps: string[];
  description: string;
  treatment: string;
  clinical?: {
    description: string;
    link: string;
  }[];
  useful_links: string[];
  keywords?: string[];
}

export const carousel_data = [
  {
    imgSrc: "/images/img_1.jpg",
    price: "Cystic Fibrosis",
    city: ["CFTR"],
    symptoms: [
      "Persistent coughing up sputum",
      "Repeat lung infections",
      "Greasy stools",
      "Poor weight gain and growth",
    ],
  },
  {
    imgSrc: "/images/img_2.jpg",
    price: "Alzheimer",
    city: ["APOE"],
    symptoms: [
      "Forgetfulness",
      "Challenges with problem-solving",
      "Changes in mood and personality",
      "Problems with language",
    ],
  },
  {
    imgSrc: "/images/img_3.jpg",
    price: "Hereditary Stroke",
    city: ["MTHFR"],
    symptoms: [
      "Neurological deficits",
      "Severe headache",
      "Cognitive or behavioral changes",
      "Loss of consciousness",
    ],
  },
  {
    imgSrc: "/images/img_4.jpg",
    price: "Parkinson",
    city: ["SNCA", "LRRK2"],
    symptoms: [
      "Tremors",
      "Bradykinesia",
      "Rigidity",
      "Postural instability",
    ],
  },
  {
    imgSrc: "/images/img_5.jpg",
    price: "Zellweger Syndrome",
    city: ["PEX1", "PEX6", "PEX26"],
    symptoms: [
      "Severe hypotonia",
      "Facial dysmorphism",
      "Hepatomegaly",
      "Vision and hearing impairmentsy",
    ],
  },
  {
    imgSrc: "/images/img_6.jpg",
    price: "Huntington",
    city: ["HTT"],
    symptoms: [
      "Movement abnormalities",
      "Cognitive decline",
      "Behavioral changes",
      "Decline in motor skills",
    ],
  },
  {
    imgSrc: "/images/img_7.jpg",
    price: "Ehlers Danlos",
    city: ["COL5A1/A2", "COL1A1/A2"],
    symptoms: [
      "Joint/ Skin hypermobility",
      "Tissue fragility",
      "Chronic pain",
      "Easy bruising",
    ],
  },
  {
    imgSrc: "/images/img_8.jpg",
    price: "Hereditary Hypertension",
    city: ["AGT", "ACE", "CYP11B2"],
    symptoms: [
      "High Blood Pressure",
      "Dizziness or Lightheadedness",
      "Fatigue and Weakness",
      "Blurred Vision",
    ],
  },
];

export const feedback_carousel_data = [
  {
    imageSrc: "/images/person_1-min.jpg",
    name: "Tetyana Vasylyeva",
    quote:
      "Doctor of Medical Science, is a Professor in the Department of Pediatrics at Texas Tech University Health Sciences Center in Amarillo, Texas. Her primary interest is in the treatment of genetic diseases, and she is also a founder of SciencePower Publishing House, LLC. As a full professor at Texas Tech University Health Sciences Center, Dr. Vasylyeva has established a new nephrology service for the Texas Panhandle area. She is the author of 136 peer-reviewed researchpapers, multiple book chapters, and many abstracts.",
    role: "Doctor of Medicine, PhD",
  },
  {
    imageSrc: "/images/person_4-min.jpg",
    name: "Md Saimul Islam",
    quote:
      "Is a geneticist who primarily focuses on molecular genetic disorders. His journey began during his doctoral studies when he investigated the molecular genetic status of the HPV gene and its role in breast cancer pathogenesis. He also explored genetic and epigenetic changes associated with drug resistance in breast cancer using in-vitro systems and patient samples. Concurrently, Islam contributed to enhanced molecular understanding of PML gene regulation in oncogenesis through a systematic approach. He made significant contributions to NCBI GenBank and ClinVar database by submitting novel splice form sequences and clinical variants of congenital nephroticsyndrome.",
    role: "Senior Researcher",
  },
  {
    imageSrc: "/images/person_3-min.jpg",
    name: "Seungyeon Baek",
    quote:
      "She is building the web-based model. She made substantial contributions to project development.",
    role: "TTU student - software developer",
  },
  {
    imageSrc: "/images/null_avatar.png",
    name: "Trey Edison Money",
    quote:
      "Graduated from the University of Texas at Austin with BS in Human Biology and Nutritional Sciences. He participated in the Inventors Program Practicum as a pathway to experience what it means to solve real-world problems and translate ideas into societal impact. The Inventors program was designed to empower students to engage in inventorship activities early in their undergraduate education. As a student, he was given a problem statement and spent the semester learning about problems experienced by real potential users of products, specifically in a healthcare setting. He learned about customer segmenting, how to interview to learn from customers-patients, and how to make a business model around our innovation (s). His team developed a proof-of-concept for a mobile application targeting physical therapy rehab patients.",
    role: "Bachelor of Science",
  },
  {
    imageSrc: "/images/null_avatar.png",
    name: "Tommy Dang",
    quote:
      "Is an Assistant Professor of Computer Science at Texas Tech University where he directs the interactive Data Visualization Lab (iDVL). His research on big data visualization and visual analytics has appeared in Computer Graphics Forum and IEEE Transactions on Visualization and Computer Graphics and has been presented at IEEE Information Visualization, IEEE Visual Analytics Science and Technology, EG/VGTC Conference on Visualization, among others. Dr. Dang has previously been a post-doc on a DARPA-funded project on biological network visualization at the Electronic Visualization Lab at the University of Illinois at Chicago which focuses on advanced virtual reality, notably the CAVE2™ hybrid reality environment and the SAGE2™ scalable amplified group environment.",
    role: "Assistant Professor of Computer Science",
  },
  {
    imageSrc: "/images/null_avatar.png",
    name: "Huy Nguyen",
    quote:
      "Based on genetic information, it is a pathway that connects treatment methods and understanding of the overall treatment process for both medical staff and patients. On this homepage, you can see distant information and symptoms together up close.",
    role: "Developer",
  },
];

export const search_items: SearchData[] = [
  {
    id: "1",
    gene: "TRIP11",
    inheritance: "Autosomal recessive",
    disease_name: "Aarskog Syndrome",
    bio_name: "Achondrogenesis type IA (Houston-Harris type)",
    symptomps: ["short limb", "narrow chest", "short ribs", "long ribs", "short ribs"],
    description: "Affected infants have extremely short limbs, a narrow chest, short ribs that fracture easily, and a lack of normal bone formation (ossification) in the skull, spine, and pelvis. As a result of serious health problems, infants with achondrogenesis usually die before birth, are stillborn, or die soon after birth from respiratory failure. Some infants have lived for a short time with intensive medical support",
    treatment: "Supportive therapy directed toward the specific symptoms.",
    clinical: [
      { description: "None", link: "https://clinicaltrials.gov/" }
    ],
    useful_links: ["https://rarediseases.org/rare-diseases/", "https://en.wikipedia.org/wiki/TRIP11", "https://medlineplus.gov/genetics/condition/achondrogenesis/", "https://medlineplus.gov/genetics/gene/trip11/"],
  },
  {
    id: "2",
    gene: "MTTP",
    inheritance: "Autosomal recessive",
    disease_name: "Abetalipoproteinemia",
    bio_name: "Abetalipoproteinemia",
    symptomps: ["Progressive neurological deterioration", "Muscle weakness", "Difficulty walking", "Acanthocytosis", "Anemia", "Facial anomaly", "Limb abnormalities", "Genital abnormalities", "Retinitis Pigmentosa"],
    description: "Abetalipoproteinemia is an inherited disorder that impairs the normal absorption of fats and certain vitamins from the diet. Many of the signs and symptoms of abetalipoproteinemia result from a severe shortage (deficiency) of fat-soluble vitamins (vitamins A, E, and K). The first signs and symptoms of abetalipoproteinemia appear in infancy. They often include failure to gain weight and grow at the expected rate (failure to thrive); diarrhea; and fatty, foul-smelling stools (steatorrhea).\nAs an individual with this condition ages, additional signs and symptoms include disturbances in nerve function that may lead to poor muscle coordination and difficulty with balance and movement (ataxia). They can also experience a loss of certain reflexes, impaired speech (dysarthria), tremors or other involuntary movements (motor tics), a loss of sensation in the extremities (peripheral neuropathy), or muscle weakness. The muscle problems can disrupt skeletal development, leading to an abnormally curved lower back, a rounded upper back that also curves to the side, high-arched feet, or an inward- and upward-turning foot. \nIndividuals with this condition may also develop an eye disorder called retinitis pigmentosa. Experience anemia. Prognosis can vary heavily based on the severity of the neurological dysfunction.",
    clinical: [
      { description: "CArotenoid in hypoChOlesterolemia (CaCo)", link: "https://classic.clinicaltrials.gov/ct2/show/NCT05208879?cond=Abetalipoproteinemia&draw=2&rank=2" },
      { description: "Inherited Retinal Degenerative Disease Registry (MRTR)", link: "https://classic.clinicaltrials.gov/ct2/show/NCT02435940?cond=Abetalipoproteinemia&draw=2&rank=4" },
      { description: "Vitamin Replacement in Abetalipoproteinemia", link: "https://classic.clinicaltrials.gov/ct2/show/NCT00004574?cond=Abetalipoproteinemia&draw=2&rank=1" },
      { description: "Vitamin E Supplement in Patients with Cirrhosis and Acanthocytosis", link: "https://classic.clinicaltrials.gov/ct2/show/NCT01463735?cond=Abetalipoproteinemia&draw=2&rank=3" },
    ],
    treatment: "High-dose Vitamin E therapy helps the body restore and produce lipoproteins, which people with abetalipoproteinemia usually lack. Common additional supplementation includes medium chain fatty acids and linoleic acids. Developmental coordination disorder and muscle weakness are usually treated with physiotherapy or occupational therapy. Dietary restriction of triglycerides has also been useful.",
    useful_links: ["https://rarediseases.org/rare-diseases/abetalipoproteinemia/", "https://medlineplus.gov/genetics/condition/abetalipoproteinemia/#resources", "https://www.ncbi.nlm.nih.gov/omim/?term=Abetalipoproteinemia", "https://en.wikipedia.org/wiki/Abetalipoproteinemia"],
  },
  {
    id: "3",
    gene: "TWIST2",
    inheritance: "Autosomal dominant",
    disease_name: "Ablepharon-Macrostomia Syndrome",
    bio_name: "Achondrogenesis type IA (Houston-Harris type)",
    symptomps: ["Absent eyelids", "Underdeveloped eyelids", "Ablepharon", "Microblepharon", "Syndactyly", "Camptodactyly"],
    description: "Ablepharon-macrostomia syndrome (AMS) is a congenital ectodermal dysplasia. Absent or underdeveloped eyelids (ablepharon or microblepharon) and a wide mouth (macrostomia). Characteristics mainly involve the face and skin and rarely involve the internal organs (viscera). Common signs include low-set ears with attached earlobes, distortion or fusion of the digits (syndactyly or camptodactyly), bulging cheeks, absent or very small nipples, wrinkled and redundant skin, absent or sparse hair and genital malformations. Other, less frequently reported findings include umbilical abnormalities, growth delay and intellectual disability. The life expectancy of patients diagnosed with AMS is normal.",
    clinical: [
      { description: "None", link: "https://clinicaltrials.gov/" }
    ],
    treatment: "Supportive therapy directed toward the specific symptoms. Lubrication to the eyes to relieve pain and dryness; antibiotics may also be prescribed to prevent infections and inflammation. Surgical measures can be taken, and a plastic surgeon can correct the lack of eyelids through reconstructive surgery.",
    useful_links: ["https://rarediseases.org/rare-diseases/ablepharon-macrostomia-syndrome/", "https://www.ncbi.nlm.nih.gov/omim/?term=Ablepharon-macrostomia+syndrome+(AMS)+is+a+congenital+ectodermal+dysplasia", "https://medlineplus.gov/genetics/condition/achondrogenesis/", "https://en.wikipedia.org/wiki/Ablepharon_macrostomia_syndrome"],
  },
  {
    id: "4",
    gene: "CP",
    inheritance: "Autosomal recessive",
    disease_name: "Aceruloplasminemia",
    bio_name: "Aceruloplasminemia",
    symptomps: ["Cognitive impairment", "Movement disorders", "Degeneration of the retina", "Diabetes"],
    description: "Disorder characterized by the abnormal accumulation of iron in the brain and various internal organs. Approximately 1 in 2 million adults. Affected individuals develop neurological symptoms including cognitive impairment and movement disorders. Degeneration of the retina and diabetes may also occur. Symptoms usually become apparent during adulthood between 20 and 60 years of age. The liver cannot synthesize the protein ceruloplasmin properly, which is needed to transport copper around the blood.",
    clinical: [
      { description: "TIRCON International NBIA Registry (TIRCON)", link: "https://classic.clinicaltrials.gov/ct2/show/NCT05522374?recrs=ab&cond=Aceruloplasminemia&draw=2&rank=2" }
    ],
    treatment: "Treatment includes the use of iron chelating agents (desferrioxamine  https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/021882s006lbl.pdf).\nCombined with fresh-frozen human plasma (https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?CFRPart=640&showFR=1&subpartNode=21:7.0.1.1.7.4). \nAntioxidants such as vitamin E can be used simultaneously to prevent tissue damage to the liver and pancreas.",
    useful_links: ["https://medlineplus.gov/genetics/condition/aceruloplasminemia/#synonyms", "https://rarediseases.org/rare-diseases/aceruloplasminemia/", "https://www.ncbi.nlm.nih.gov/omim/?term=Aceruloplasminemia", "https://en.wikipedia.org/wiki/Aceruloplasminemia"],
    keywords: ["Aceruloplasminemia", "Deficiency of ferroxidase", "Familial apoceruloplasmin deficiency", "Hereditary ceruloplasmin deficiency", "Hypoceruloplasminemia", "Systemic hemosiderosis due to aceruloplasminemia"]
  },
  {
    id: "5",
    gene: "SLC26A2",
    inheritance: "Autosomal recessive",
    disease_name: "Achondrogenesis type IA (Houston-Harris type)",
    bio_name: "Achondrogenesis type IB (Fraccaro type)",
    symptomps: ["Short limb", "Narrow chest", "Prominent abdomen"],
    description: "Short trunk and limbs, narrow chest, and prominent abdomen. Affected infants may have a protrusion around the belly-button (umbilical hernia), or near the groin (inguinal hernia), and have short fingers and toes with feet turned inward. The face may be flat, the palate may be cleft and the neck is usually short.",
    clinical: [
      { description: "None", link: "https://clinicaltrials.gov/" }
    ],
    treatment: "Supportive therapy directed toward the specific symptoms.",
    useful_links: ["https://rarediseases.org/rare-diseases/achondrogenesis/", "https://medlineplus.gov/genetics/gene/slc26a2/", "https://medlineplus.gov/genetics/condition/achondrogenesis/", "https://medlineplus.gov/genetics/gene/trip11/"],
  },
  {
    id: "6",
    gene: "COL2A1",
    inheritance: "Autosomal dominant",
    disease_name: "Achondrogenesis type IB (Fraccaro type)",
    bio_name: "Achondrogenesis type IB (Fraccaro type)",
    symptomps: ["Short limb", "Narrow chest", "Prominent abdomen"],
    description: "Short trunk and limbs, narrow chest, and prominent abdomen. Affected infants may have a protrusion around the belly-button (umbilical hernia), or near the groin (inguinal hernia), and have short fingers and toes with feet turned inward. The face may be flat, the palate may be cleft and the neck is usually short.",
    clinical: [
      { description: "None", link: "https://clinicaltrials.gov/" }
    ],
    treatment: "Supportive therapy directed toward the specific symptoms.",
    useful_links: ["https://rarediseases.org/rare-diseases/achondrogenesis/", "https://medlineplus.gov/genetics/gene/slc26a2/", "https://medlineplus.gov/genetics/condition/achondrogenesis/", "https://medlineplus.gov/genetics/gene/trip11/"],
  },
  {
    id: "7",
    gene: "COL2A1",
    inheritance: "Autosomal dominant",
    disease_name: "Achondrogenesis type II (Langer-Saldino type)",
    bio_name: "Achondrogenesis type II (Langer-Saldino type)",
    symptomps: ["Short limb", "Narrow chest", "Prominent abdomen", "Underdeveloped lungs", "Small chin", "Cleft palate", "Club feet"],
    description: "A narrow chest, abnormally small or short bones in the arms and/or legs, thin ribs, flat vertebra or deficient ossification of vertebral bodies, underdeveloped lungs, small chin, cleft palate and club feet. Bone formation is abnormal in the spine and pelvis. The abdomen may be enlarged.",
    clinical: [
      { description: "A Natural History Study in Children With a Type II Collagen Disorder With Short Stature (ROCKET)", link: "https://classic.clinicaltrials.gov/ct2/show/NCT05408715?recrs=ab&cond=Achondrogenesis%2C+Type+II&draw=2&rank=1" }
    ],
    treatment: "Supportive therapy directed toward the specific symptoms.",
    useful_links: ["https://rarediseases.org/rare-diseases/achondrogenesis/", "https://medlineplus.gov/genetics/gene/slc26a2/", "https://medlineplus.gov/genetics/condition/achondrogenesis/", "https://medlineplus.gov/genetics/gene/col2a1/"],
  },
  {
    id: "8",
    gene: "FGFR3",
    inheritance: "Autosomal dominant",
    disease_name: "ACH achondroplastic dwarfism, achondroplastic",
    bio_name: "Achondroplasia",
    symptomps: ["Short stature", "disproportionately shortened limbs", "macrocephaly"],
    description: "Disorder of bone growth, resulting in shortened stature",
    clinical: [
      { description: "5 recruiting as of 04/25/24", link: "https://clinicaltrials.gov/search?locStr=United%20States&country=United%20States&cond=Achondroplasia&aggFilters=status:rec" }
    ],
    treatment: "Vosoritide - helps treat decreased growth in children",
    useful_links: ["https://rarediseases.org/rare-diseases/achondroplasia/", "https://www.genome.gov/Genetic-Disorders/Achondroplasia", "https://medlineplus.gov/genetics/condition/achondroplasia/"],
  },
  {
    id: "9",
    gene: "Type A,B: SMPD1; Type C: NPC1, NPC2",
    inheritance: "Autosomal recessive",
    disease_name: "Acid Sphingomyelinase Deficiency",
    bio_name: "ASMD ASM Deficiency Acid Sphingomyelinase-deficient Niemann-Pick Disease ASM-deficient Niemann-Pick Disease",
    symptomps: ["Failure to thrive", "enlarged liver and spleen", "cherry-red spot in eyes"],
    description: "Deficiency in sphingomyelinase leads to build up of sphingomyelin in various tissues of the body, resulting in cell damage and death.",
    clinical: [
      { description: "9 recruiting as of 04/25/24", link: "https://clinicaltrials.gov/search?locStr=United%20States&country=United%20States&cond=Niemann-Pick%20Disease&aggFilters=status:rec%20not" }
    ],
    treatment: "Enzyme replacement therapy.",
    useful_links: ["https://rarediseases.org/rare-diseases/acid-sphingomyelinase-deficiency/", "https://medlineplus.gov/genetics/gene/smpd1/", "https://medlineplus.gov/genetics/condition/niemann-pick-disease/"],
  },
  {
    id: "10",
    gene: "MMUT, MMAA, MMAB, MMADHC, MCEE",
    inheritance: "Autosomal recessive",
    disease_name: "Acidemia, Methylmalonic",
    bio_name: "Methylmalonic Aciduria",
    symptomps: ["In infants: vomiting", "dehydration", "poor muscle tone (hypotonia)", "developmental delays", "lethargy", "failure to thrive"],
    description: "Methylmalonyl-CoA mutase is mutated/broken preventing methylmalonic acid from being broken down, resulting in build-up ",
    clinical: [
      { description: "4 recruiting as of 04/25/24", link: "https://clinicaltrials.gov/search?locStr=United%20States&country=United%20States&cond=Methylmalonic%20Acidemia&aggFilters=status:rec%20not" }
    ],
    treatment: "Vitamin B12 (cobalamin). Limiting dietary intake of proteins: limit intake of isoleucine, threonine, methionine, and valine. Supportive care for individual symptoms.",
    useful_links: ["https://rarediseases.org/rare-diseases/acidemia-methylmalonic/", "https://medlineplus.gov/genetics/condition/methylmalonic-acidemia/"],
  },
  {
    id: "11",
    gene: "KIF7, GLI3 (Greig cephalopolysyndactyly syndrome)",
    inheritance: "Autosomal recessive (KIF7), Autosomal dominant (GLI3)",
    disease_name: "Acrocallosal Syndrome, Schinzel Type",
    bio_name: "Absence of Corpus Callosum, Schinzel Type ACLS ACS Hallux Duplication, Postaxial Polydactyly, and Absence of Corpus Callosum Schinzel Acrocallosal Syndrome",
    symptomps: ["extra digits (polydactyly)", "delayed development", "widely spaced eyes"],
    description: "Affected genes play key roles in the differentiation of cells during fetal development. The Corpus Callosum does not develop, leaving the two hemispheres of the brain unconnected resulting in delayed mental development and/or mental retardation. Extra digits (fingers/toes) also develop.",
    clinical: [
      { description: "None", link: "https://clinicaltrials.gov/" }
    ],
    treatment: "Supportive treatment for individual symptoms.",
    useful_links: ["https://rarediseases.org/rare-diseases/acrocallosal-syndrome-schinzel-type/", "https://medlineplus.gov/genetics/condition/acrocallosal-syndrome/", "https://medlineplus.gov/genetics/gene/kif7/", "https://medlineplus.gov/genetics/gene/gli3/"],
  },
  {
    id: "12",
    gene: "SLC39A4",
    inheritance: "Autosomal recessive",
    disease_name: "Acrodermatitis Enteropathica",
    bio_name: "AE Brandt syndrome Danbolt-Cross syndrome zinc deficiency, congenital",
    symptomps: ["Pustular dermatitis around the mouth and/or anus", "diarrhea", "nail dystrophy (abnormal nails)", "short stature"],
    description: "Poor zinc absorption results in zinc deficiency, resulting in the typical presenting symptoms.",
    clinical: [
      { description: "0 enrolling as of 04/26/24", link: "https://clinicaltrials.gov/search?cond=Acrodermatitis%20Enteropathica&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec" }
    ],
    treatment: "Zinc supplements",
    useful_links: ["https://rarediseases.org/rare-diseases/acrodermatitis-enteropathica/", "https://www.omim.org/entry/607059", "https://rarediseases.info.nih.gov/diseases/5723/acrodermatitis-enteropathica"],
  },
]