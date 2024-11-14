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
    symptoms: ["Tremors", "Bradykinesia", "Rigidity", "Postural instability"],
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
    imageSrc: "/images/person-5.png",
    name: "Professor Tetyana L. Vasylyeva",
    quote:
      "Doctor of Medical Science, is a Professor in the Department of Pediatrics at Texas Tech University Health Sciences Center in Amarillo, Texas. Her primary interest is in the treatment of genetic diseases, and she is also a founder of SciencePower Publishing House, LLC. As a full professor at Texas Tech University Health Sciences Center, Dr. Vasylyeva has established a new nephrology service for the Texas Panhandle area. She is the author of 136 peer-reviewed researchpapers, multiple book chapters, and many abstracts.",
    role: "MD, PhD, FAAP, CEO/Founder/PI",
  },
  {
    imageSrc: "/images/person-1.png",
    name: "Dr. Md Saimul Islam, PhD",
    quote:
      "Is a geneticist who primarily focuses on molecular genetic disorders. His journey began during his doctoral studies when he investigated the molecular genetic status of the HPV gene and its role in breast cancer pathogenesis. He also explored genetic and epigenetic changes associated with drug resistance in breast cancer using in-vitro systems and patient samples. Concurrently, Islam contributed to enhanced molecular understanding of PML gene regulation in oncogenesis through a systematic approach. He made significant contributions to NCBI GenBank and ClinVar database by submitting novel splice form sequences and clinical variants of congenital nephroticsyndrome.",
    role: "Entrepreneur Leader, Senior Research Scientist",
  },
  {
    imageSrc: "/images/person-4.png",
    name: "Seungyeon Baek, MS",
    quote:
      "She is building the web-based model. She made substantial contributions to project development.",
    role: "IT student - developer",
  },
  {
    imageSrc: "/images/person-3.png",
    name: "Trey Edison Money, BS",
    quote:
      "Graduated from the University of Texas at Austin with BS in Human Biology and Nutritional Sciences. He participated in the Inventors Program Practicum as a pathway to experience what it means to solve real-world problems and translate ideas into societal impact. The Inventors program was designed to empower students to engage in inventorship activities early in their undergraduate education. As a student, he was given a problem statement and spent the semester learning about problems experienced by real potential users of products, specifically in a healthcare setting. He learned about customer segmenting, how to interview to learn from customers-patients, and how to make a business model around our innovation (s). His team developed a proof-of-concept for a mobile application targeting physical therapy rehab patients.",
    role: "Team Leader, Research Aid",
  },
  {
    imageSrc: "/images/person-2.png",
    name: "Dr. Tommy Dang, PhD",
    quote:
      "Is an Assistant Professor of Computer Science at Texas Tech University where he directs the interactive Data Visualization Lab (iDVL). His research on big data visualization and visual analytics has appeared in Computer Graphics Forum and IEEE Transactions on Visualization and Computer Graphics and has been presented at IEEE Information Visualization, IEEE Visual Analytics Science and Technology, EG/VGTC Conference on Visualization, among others. Dr. Dang has previously been a post-doc on a DARPA-funded project on biological network visualization at the Electronic Visualization Lab at the University of Illinois at Chicago which focuses on advanced virtual reality, notably the CAVE2™ hybrid reality environment and the SAGE2™ scalable amplified group environment.",
    role: "Technical Leader, Assistant Professor of Computer Science",
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
    symptomps: [
      "short limb",
      "narrow chest",
      "short ribs",
      "long ribs",
      "short ribs",
    ],
    description:
      "Affected infants have extremely short limbs, a narrow chest, short ribs that fracture easily, and a lack of normal bone formation (ossification) in the skull, spine, and pelvis. As a result of serious health problems, infants with achondrogenesis usually die before birth, are stillborn, or die soon after birth from respiratory failure. Some infants have lived for a short time with intensive medical support",
    treatment: "Supportive therapy directed toward the specific symptoms.",
    clinical: [{ description: "None", link: "https://clinicaltrials.gov/" }],
    useful_links: [
      "https://rarediseases.org/rare-diseases/",
      "https://en.wikipedia.org/wiki/TRIP11",
      "https://medlineplus.gov/genetics/condition/achondrogenesis/",
      "https://medlineplus.gov/genetics/gene/trip11/",
    ],
  },
  {
    id: "2",
    gene: "MTTP",
    inheritance: "Autosomal recessive",
    disease_name: "Abetalipoproteinemia",
    bio_name: "Abetalipoproteinemia",
    symptomps: [
      "Progressive neurological deterioration",
      "Muscle weakness",
      "Difficulty walking",
      "Acanthocytosis",
      "Anemia",
      "Facial anomaly",
      "Limb abnormalities",
      "Genital abnormalities",
      "Retinitis Pigmentosa",
    ],
    description:
      "Abetalipoproteinemia is an inherited disorder that impairs the normal absorption of fats and certain vitamins from the diet. Many of the signs and symptoms of abetalipoproteinemia result from a severe shortage (deficiency) of fat-soluble vitamins (vitamins A, E, and K). The first signs and symptoms of abetalipoproteinemia appear in infancy. They often include failure to gain weight and grow at the expected rate (failure to thrive); diarrhea; and fatty, foul-smelling stools (steatorrhea).\nAs an individual with this condition ages, additional signs and symptoms include disturbances in nerve function that may lead to poor muscle coordination and difficulty with balance and movement (ataxia). They can also experience a loss of certain reflexes, impaired speech (dysarthria), tremors or other involuntary movements (motor tics), a loss of sensation in the extremities (peripheral neuropathy), or muscle weakness. The muscle problems can disrupt skeletal development, leading to an abnormally curved lower back, a rounded upper back that also curves to the side, high-arched feet, or an inward- and upward-turning foot. \nIndividuals with this condition may also develop an eye disorder called retinitis pigmentosa. Experience anemia. Prognosis can vary heavily based on the severity of the neurological dysfunction.",
    clinical: [
      {
        description: "CArotenoid in hypoChOlesterolemia (CaCo)",
        link: "https://classic.clinicaltrials.gov/ct2/show/NCT05208879?cond=Abetalipoproteinemia&draw=2&rank=2",
      },
      {
        description: "Inherited Retinal Degenerative Disease Registry (MRTR)",
        link: "https://classic.clinicaltrials.gov/ct2/show/NCT02435940?cond=Abetalipoproteinemia&draw=2&rank=4",
      },
      {
        description: "Vitamin Replacement in Abetalipoproteinemia",
        link: "https://classic.clinicaltrials.gov/ct2/show/NCT00004574?cond=Abetalipoproteinemia&draw=2&rank=1",
      },
      {
        description:
          "Vitamin E Supplement in Patients with Cirrhosis and Acanthocytosis",
        link: "https://classic.clinicaltrials.gov/ct2/show/NCT01463735?cond=Abetalipoproteinemia&draw=2&rank=3",
      },
    ],
    treatment:
      "High-dose Vitamin E therapy helps the body restore and produce lipoproteins, which people with abetalipoproteinemia usually lack. Common additional supplementation includes medium chain fatty acids and linoleic acids. Developmental coordination disorder and muscle weakness are usually treated with physiotherapy or occupational therapy. Dietary restriction of triglycerides has also been useful.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/abetalipoproteinemia/",
      "https://medlineplus.gov/genetics/condition/abetalipoproteinemia/#resources",
      "https://www.ncbi.nlm.nih.gov/omim/?term=Abetalipoproteinemia",
      "https://en.wikipedia.org/wiki/Abetalipoproteinemia",
    ],
  },
  {
    id: "3",
    gene: "TWIST2",
    inheritance: "Autosomal dominant",
    disease_name: "Ablepharon-Macrostomia Syndrome",
    bio_name: "Achondrogenesis type IA (Houston-Harris type)",
    symptomps: [
      "Absent eyelids",
      "Underdeveloped eyelids",
      "Ablepharon",
      "Microblepharon",
      "Syndactyly",
      "Camptodactyly",
    ],
    description:
      "Ablepharon-macrostomia syndrome (AMS) is a congenital ectodermal dysplasia. Absent or underdeveloped eyelids (ablepharon or microblepharon) and a wide mouth (macrostomia). Characteristics mainly involve the face and skin and rarely involve the internal organs (viscera). Common signs include low-set ears with attached earlobes, distortion or fusion of the digits (syndactyly or camptodactyly), bulging cheeks, absent or very small nipples, wrinkled and redundant skin, absent or sparse hair and genital malformations. Other, less frequently reported findings include umbilical abnormalities, growth delay and intellectual disability. The life expectancy of patients diagnosed with AMS is normal.",
    clinical: [{ description: "None", link: "https://clinicaltrials.gov/" }],
    treatment:
      "Supportive therapy directed toward the specific symptoms. Lubrication to the eyes to relieve pain and dryness; antibiotics may also be prescribed to prevent infections and inflammation. Surgical measures can be taken, and a plastic surgeon can correct the lack of eyelids through reconstructive surgery.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/ablepharon-macrostomia-syndrome/",
      "https://www.ncbi.nlm.nih.gov/omim/?term=Ablepharon-macrostomia+syndrome+(AMS)+is+a+congenital+ectodermal+dysplasia",
      "https://medlineplus.gov/genetics/condition/achondrogenesis/",
      "https://en.wikipedia.org/wiki/Ablepharon_macrostomia_syndrome",
    ],
  },
  {
    id: "4",
    gene: "CP",
    inheritance: "Autosomal recessive",
    disease_name: "Aceruloplasminemia",
    bio_name: "Aceruloplasminemia",
    symptomps: [
      "Cognitive impairment",
      "Movement disorders",
      "Degeneration of the retina",
      "Diabetes",
    ],
    description:
      "Disorder characterized by the abnormal accumulation of iron in the brain and various internal organs. Approximately 1 in 2 million adults. Affected individuals develop neurological symptoms including cognitive impairment and movement disorders. Degeneration of the retina and diabetes may also occur. Symptoms usually become apparent during adulthood between 20 and 60 years of age. The liver cannot synthesize the protein ceruloplasmin properly, which is needed to transport copper around the blood.",
    clinical: [
      {
        description: "TIRCON International NBIA Registry (TIRCON)",
        link: "https://classic.clinicaltrials.gov/ct2/show/NCT05522374?recrs=ab&cond=Aceruloplasminemia&draw=2&rank=2",
      },
    ],
    treatment:
      "Treatment includes the use of iron chelating agents (desferrioxamine  https://www.accessdata.fda.gov/drugsatfda_docs/label/2009/021882s006lbl.pdf).\nCombined with fresh-frozen human plasma (https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?CFRPart=640&showFR=1&subpartNode=21:7.0.1.1.7.4). \nAntioxidants such as vitamin E can be used simultaneously to prevent tissue damage to the liver and pancreas.",
    useful_links: [
      "https://medlineplus.gov/genetics/condition/aceruloplasminemia/#synonyms",
      "https://rarediseases.org/rare-diseases/aceruloplasminemia/",
      "https://www.ncbi.nlm.nih.gov/omim/?term=Aceruloplasminemia",
      "https://en.wikipedia.org/wiki/Aceruloplasminemia",
    ],
    keywords: [
      "Aceruloplasminemia",
      "Deficiency of ferroxidase",
      "Familial apoceruloplasmin deficiency",
      "Hereditary ceruloplasmin deficiency",
      "Hypoceruloplasminemia",
      "Systemic hemosiderosis due to aceruloplasminemia",
    ],
  },
  {
    id: "5",
    gene: "SLC26A2",
    inheritance: "Autosomal recessive",
    disease_name: "Achondrogenesis type IA (Houston-Harris type)",
    bio_name: "Achondrogenesis type IB (Fraccaro type)",
    symptomps: ["Short limb", "Narrow chest", "Prominent abdomen"],
    description:
      "Short trunk and limbs, narrow chest, and prominent abdomen. Affected infants may have a protrusion around the belly-button (umbilical hernia), or near the groin (inguinal hernia), and have short fingers and toes with feet turned inward. The face may be flat, the palate may be cleft and the neck is usually short.",
    clinical: [{ description: "None", link: "https://clinicaltrials.gov/" }],
    treatment: "Supportive therapy directed toward the specific symptoms.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/achondrogenesis/",
      "https://medlineplus.gov/genetics/gene/slc26a2/",
      "https://medlineplus.gov/genetics/condition/achondrogenesis/",
      "https://medlineplus.gov/genetics/gene/trip11/",
    ],
  },
  {
    id: "6",
    gene: "COL2A1",
    inheritance: "Autosomal dominant",
    disease_name: "Achondrogenesis type IB (Fraccaro type)",
    bio_name: "Achondrogenesis type IB (Fraccaro type)",
    symptomps: ["Short limb", "Narrow chest", "Prominent abdomen"],
    description:
      "Short trunk and limbs, narrow chest, and prominent abdomen. Affected infants may have a protrusion around the belly-button (umbilical hernia), or near the groin (inguinal hernia), and have short fingers and toes with feet turned inward. The face may be flat, the palate may be cleft and the neck is usually short.",
    clinical: [{ description: "None", link: "https://clinicaltrials.gov/" }],
    treatment: "Supportive therapy directed toward the specific symptoms.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/achondrogenesis/",
      "https://medlineplus.gov/genetics/gene/slc26a2/",
      "https://medlineplus.gov/genetics/condition/achondrogenesis/",
      "https://medlineplus.gov/genetics/gene/trip11/",
    ],
  },
  {
    id: "7",
    gene: "COL2A1",
    inheritance: "Autosomal dominant",
    disease_name: "Achondrogenesis type II (Langer-Saldino type)",
    bio_name: "Achondrogenesis type II (Langer-Saldino type)",
    symptomps: [
      "Short limb",
      "Narrow chest",
      "Prominent abdomen",
      "Underdeveloped lungs",
      "Small chin",
      "Cleft palate",
      "Club feet",
    ],
    description:
      "A narrow chest, abnormally small or short bones in the arms and/or legs, thin ribs, flat vertebra or deficient ossification of vertebral bodies, underdeveloped lungs, small chin, cleft palate and club feet. Bone formation is abnormal in the spine and pelvis. The abdomen may be enlarged.",
    clinical: [
      {
        description:
          "A Natural History Study in Children With a Type II Collagen Disorder With Short Stature (ROCKET)",
        link: "https://classic.clinicaltrials.gov/ct2/show/NCT05408715?recrs=ab&cond=Achondrogenesis%2C+Type+II&draw=2&rank=1",
      },
    ],
    treatment: "Supportive therapy directed toward the specific symptoms.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/achondrogenesis/",
      "https://medlineplus.gov/genetics/gene/slc26a2/",
      "https://medlineplus.gov/genetics/condition/achondrogenesis/",
      "https://medlineplus.gov/genetics/gene/col2a1/",
    ],
  },
  {
    id: "8",
    gene: "FGFR3",
    inheritance: "Autosomal dominant",
    disease_name: "ACH achondroplastic dwarfism, achondroplastic",
    bio_name: "Achondroplasia",
    symptomps: [
      "Short stature",
      "disproportionately shortened limbs",
      "macrocephaly",
    ],
    description: "Disorder of bone growth, resulting in shortened stature",
    clinical: [
      {
        description: "5 recruiting as of 04/25/24",
        link: "https://clinicaltrials.gov/search?locStr=United%20States&country=United%20States&cond=Achondroplasia&aggFilters=status:rec",
      },
    ],
    treatment: "Vosoritide - helps treat decreased growth in children",
    useful_links: [
      "https://rarediseases.org/rare-diseases/achondroplasia/",
      "https://www.genome.gov/Genetic-Disorders/Achondroplasia",
      "https://medlineplus.gov/genetics/condition/achondroplasia/",
    ],
  },
  {
    id: "9",
    gene: "Type A,B: SMPD1; Type C: NPC1, NPC2",
    inheritance: "Autosomal recessive",
    disease_name: "Acid Sphingomyelinase Deficiency",
    bio_name:
      "ASMD ASM Deficiency Acid Sphingomyelinase-deficient Niemann-Pick Disease ASM-deficient Niemann-Pick Disease",
    symptomps: [
      "Failure to thrive",
      "enlarged liver and spleen",
      "cherry-red spot in eyes",
    ],
    description:
      "Deficiency in sphingomyelinase leads to build up of sphingomyelin in various tissues of the body, resulting in cell damage and death.",
    clinical: [
      {
        description: "9 recruiting as of 04/25/24",
        link: "https://clinicaltrials.gov/search?locStr=United%20States&country=United%20States&cond=Niemann-Pick%20Disease&aggFilters=status:rec%20not",
      },
    ],
    treatment: "Enzyme replacement therapy.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/acid-sphingomyelinase-deficiency/",
      "https://medlineplus.gov/genetics/gene/smpd1/",
      "https://medlineplus.gov/genetics/condition/niemann-pick-disease/",
    ],
  },
  {
    id: "10",
    gene: "MMUT, MMAA, MMAB, MMADHC, MCEE",
    inheritance: "Autosomal recessive",
    disease_name: "Acidemia, Methylmalonic",
    bio_name: "Methylmalonic Aciduria",
    symptomps: [
      "In infants: vomiting",
      "dehydration",
      "poor muscle tone (hypotonia)",
      "developmental delays",
      "lethargy",
      "failure to thrive",
    ],
    description:
      "Methylmalonyl-CoA mutase is mutated/broken preventing methylmalonic acid from being broken down, resulting in build-up ",
    clinical: [
      {
        description: "4 recruiting as of 04/25/24",
        link: "https://clinicaltrials.gov/search?locStr=United%20States&country=United%20States&cond=Methylmalonic%20Acidemia&aggFilters=status:rec%20not",
      },
    ],
    treatment:
      "Vitamin B12 (cobalamin). Limiting dietary intake of proteins: limit intake of isoleucine, threonine, methionine, and valine. Supportive care for individual symptoms.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/acidemia-methylmalonic/",
      "https://medlineplus.gov/genetics/condition/methylmalonic-acidemia/",
    ],
  },
  {
    id: "11",
    gene: "KIF7, GLI3 (Greig cephalopolysyndactyly syndrome)",
    inheritance: "Autosomal recessive (KIF7), Autosomal dominant (GLI3)",
    disease_name: "Acrocallosal Syndrome, Schinzel Type",
    bio_name:
      "Absence of Corpus Callosum, Schinzel Type ACLS ACS Hallux Duplication, Postaxial Polydactyly, and Absence of Corpus Callosum Schinzel Acrocallosal Syndrome",
    symptomps: [
      "extra digits (polydactyly)",
      "delayed development",
      "widely spaced eyes",
    ],
    description:
      "Affected genes play key roles in the differentiation of cells during fetal development. The Corpus Callosum does not develop, leaving the two hemispheres of the brain unconnected resulting in delayed mental development and/or mental retardation. Extra digits (fingers/toes) also develop.",
    clinical: [{ description: "None", link: "https://clinicaltrials.gov/" }],
    treatment: "Supportive treatment for individual symptoms.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/acrocallosal-syndrome-schinzel-type/",
      "https://medlineplus.gov/genetics/condition/acrocallosal-syndrome/",
      "https://medlineplus.gov/genetics/gene/kif7/",
      "https://medlineplus.gov/genetics/gene/gli3/",
    ],
  },
  {
    id: "12",
    gene: "SLC39A4",
    inheritance: "Autosomal recessive",
    disease_name: "Acrodermatitis Enteropathica",
    bio_name:
      "AE Brandt syndrome Danbolt-Cross syndrome zinc deficiency, congenital",
    symptomps: [
      "Pustular dermatitis around the mouth and/or anus",
      "diarrhea",
      "nail dystrophy (abnormal nails)",
      "short stature",
    ],
    description:
      "Poor zinc absorption results in zinc deficiency, resulting in the typical presenting symptoms.",
    clinical: [
      {
        description: "0 enrolling as of 04/26/24",
        link: "https://clinicaltrials.gov/search?cond=Acrodermatitis%20Enteropathica&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      },
    ],
    treatment: "Zinc supplements",
    useful_links: [
      "https://rarediseases.org/rare-diseases/acrodermatitis-enteropathica/",
      "https://www.omim.org/entry/607059",
      "https://rarediseases.info.nih.gov/diseases/5723/acrodermatitis-enteropathica",
    ],
  },
  {
    id: "13",
    gene: "PRKAR1A, PDE4D",
    inheritance: "Autosomal Dominant",
    disease_name: "Acrodysostosis",
    bio_name:
      "acrodysostosis with or without hormone resistance Arkless-Graham syndrome Maroteaux-Malamut syndrome",
    symptomps: [
      "skeletal malformations bones resulting in spinal deformities",
      "short limbs",
      "underdeveloped skull/facial features",
      "frequent ear infections",
      "neurological/intellectual disability",
      "poor response to hormones",
    ],
    description:
      "Affected genes play key roles in the cAMP signaling pathway, limiting the effect of hormones during development.",
    clinical: [
      {
        description: "Clinical trials: 0 enrolling",
        link: "https://clinicaltrials.gov/search?cond=acrodysostosis&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      },
    ],
    treatment: "Supportive treatment for individual symptoms",
    useful_links: [
      "https://rarediseases.org/rare-diseases/acrodysostosis/",
      "https://medlineplus.gov/ency/article/001248.htm",
    ],
  },
  {
    id: "14",
    gene: "NPR2, GDF5, BMPR1B",
    inheritance:
      "Autosomal recessive, except for Osebold-Remondini type which seems to be Autosomal dominant",
    disease_name: "Acromesomelic Dysplasia",
    bio_name: "acromesomelic dwarfism",
    symptomps: [
      "Poor growth of long bones",
      "resulting in short-limbed dwarfism",
      "abnormal cartilage and bone development",
      "frontal bossing",
      "occipital prominence",
      "macrocephaly",
    ],
    description:
      "Shortening of the fore-arms and lower legs relative to the upper parts of those limbs, and shortening of the hands and feet",
    clinical: [
      {
        description: "Clinical trials: None found ",
        link: "https://clinicaltrials.gov/search?cond=acromesomelic%20dysplasia&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      },
    ],
    treatment: "Supportive treatment for individual symptoms",
    useful_links: [
      "https://rarediseases.org/rare-diseases/acromesomelic-dysplasia/",
      "https://rarediseases.info.nih.gov/diseases/6/acromesomelic-dysplasia",
    ],
  },
  {
    id: "15",
    gene: "FBN1",
    inheritance: "Autosomal dominant",
    disease_name: "Acromicric Dysplasia",
    bio_name: "Acromicric Skeletal Dysplasia",
    symptomps: [
      "short stature",
      "short limbs",
      "\u201cstiff\u201d joints",
      "distinct facial features",
    ],
    description:
      "Extremely rare inherited disorder, severe shortening of the hands and feet, while long may also be affected. Delayed bone maturation eventually results in short stature (dwarfism)",
    clinical: [
      {
        description: "Clinical trials: None found",
        link: "https://clinicaltrials.gov/search?cond=acromicric%20dysplasia&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      },
    ],
    treatment: "Supportive treatment for individual symptoms.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/acromicric-dysplasia/",
      "https://medlineplus.gov/genetics/condition/acromicric-dysplasia/",
    ],
  },
  {
    id: "16",
    gene: "PIK3CD (APDS1), PIK3R1 (APDS2)",
    inheritance: "Autosomal dominant",
    disease_name: "Activated Phosphoinositide 3-Kinase Delta Syndrome (APDS)",
    bio_name:
      "p110-delta-activating mutation causing senescent T cells, lymphadenopathy, and immunodeficiency (PASLI) Immunodeficiency 14 PI3K- delta syndrome",
    symptomps: [
      "frequent upper respiratory, ear, sinus and/or lung infections",
    ],
    description:
      "Affected genes are responsible for subunits of phosphatidylinositol 3-kinase. PI3K delta is a part of cell-signaling in the proliferation and function of T and B immune cells. Changes can either cause immunodeficiency, resulting in frequent infections, or autoimmunity.",
    clinical: [
      {
        description: "Clinical trials: 1 found",
        link: "https://clinicaltrials.gov/study/NCT05693129",
      },
    ],
    treatment:
      "Immunoglobulin replacement therapy,  immunosuppressive medications (autoimmunity),  Hematopoietic stem cell therapy,  antibiotics for bacterial infections",
    useful_links: [
      "https://clinicaltrials.gov/search?cond=Activated%20PI3K-delta%20Syndrome&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      "https://rarediseases.org/rare-diseases/activated-phosphoinositide-3-kinase-delta-syndrome-apds/",
      "https://medlineplus.gov/genetics/condition/activated-pi3k-delta-syndrome/",
    ],
  },
  {
    id: "17",
    gene: "HMBS",
    inheritance: "Autosomal dominant",
    disease_name: "Acute Intermittent Porphyria",
    bio_name: "AIP Swedish Porphyria",
    symptomps: [
      "severe abdominal pain",
      "constipation",
      "tachycardia",
      "hypertension",
    ],
    description:
      "Affected genes are responsible for turning porphyrins to heme, a component of hemoglobin and other hemoproteins. Porphyrin builds up while proteins that use heme can not be synthesized.",
    clinical: [
      {
        description: "Clinical trials: 2 found",
        link: "https://clinicaltrials.gov/study/NCT05502133",
      },
    ],
    treatment: "Supportive treatment for individual symptoms",
    useful_links: [
      "https://clinicaltrials.gov/study/NCT01561157",
      "https://clinicaltrials.gov/search?cond=Acute%20Intermittent%20Porphyria&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      "https://rarediseases.org/rare-diseases/acute-intermittent-porphyria/",
      "https://medlineplus.gov/genetics/gene/hmbs/",
      "https://www.omim.org/entry/609806",
    ],
  },
  {
    id: "18",
    gene: "ARHGAP31, DLL4, DOCK6, EOGT, NOTCH1, RBPJ",
    inheritance:
      "Autosomal dominant (ARHGAP31, DLL4, NOTCH1, RBPJ), autosomal recessive (DOCK6, EOGT)",
    disease_name: "Adams-Oliver Syndrome",
    bio_name: "",
    symptomps: [
      "Absence of areas of skin",
      "short or missing fingers, hands, toes or feet",
      "cardiac issues at birth (pulmonary hypertension)",
      "neurological delays and/or learning disability",
    ],
    description:
      "Limb scalp and skull defects AOS congenital scalp defects with distal limb anomalies congenital scalp defects with distal limb reduction anomalies limb, scalp, and skull defects Adams Oliver syndrome",
    clinical: [
      {
        description: "Clinical trials: None found",
        link: "https://clinicaltrials.gov/search?cond=adams-oliver%20syndrome&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      },
    ],
    treatment: "Supportive treatment for individual symptoms",
    useful_links: [
      "https://rarediseases.org/rare-diseases/adams-oliver-syndrome/",
    ],
  },
  {
    id: "19",
    gene: "ADCY5",
    inheritance: "Autosomal dominant",
    disease_name: "ADCY5-Related Dyskinesia",
    bio_name: "",
    symptomps: [
      "abnormal muscle movements (choreiform, myoclonic, or dystonic)",
    ],
    description:
      "The affected gene’s enzyme helps convert ATP into cAMP. The specific mutation is a “gain-of-function” mutation, resulting in excessive cAMP in muscle tissue which lead to excessive contractions or tone than desired.",
    clinical: [
      {
        description: "Clinical trials: None found",
        link: "https://clinicaltrials.gov/search?cond=ADCY5-related%20Dyskinesia&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      },
    ],
    treatment: "Supportive treatment for individual symptoms.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/adcy5-related-dyskinesia/",
      "https://medlineplus.gov/genetics/condition/adcy5-related-dyskinesia/",
      "https://medlineplus.gov/genetics/gene/adcy5/",
    ],
  },
  {
    id: "20",
    gene: "ADSL",
    inheritance: "Autosomal recessive",
    disease_name: "Adenylosuccinate Lyase Deficiency",
    bio_name: "Coming Soon",
    symptomps: [
      "Fatal neonatal: small size",
      "microcephaly",
      "hypokinesia",
      "encephalopathy",
      "possible respiratory failure",
      "seizures",
    ],
    description:
      "Diminished function mutation for the ADSL gene, which produces the adenylosuccinate lyase enzyme. This is a key component in purine nucleotide biosynthesis.\nASLD-I: slow thought and physical movements (psychomotor impairment), muscle weakness on the trunk (axial hypotonia), behaviors associated with autism spectrum disorder.\nASLD-I: slow thought and physical movements (psychomotor impairment), muscle weakness on the trunk (axial hypotonia), behaviors associated with autism spectrum disorder.",
    clinical: [
      {
        description: "Clinical trials: 1 recruiting",
        link: "https://clinicaltrials.gov/study/NCT06092346",
      },
      {
        description: "Clinical trials: 1 recruiting",
        link: "https://clinicaltrials.gov/search?locStr=United%20States&country=United%20States&cond=Adenylosuccinate%20Lyase%20Deficiency&aggFilters=status:not%20rec",
      },
    ],
    treatment:
      "Supportive treatment for individual symptoms; Typical treatments for seizures (Keppra, dilantin, etc)",
    useful_links: [
      "https://rarediseases.org/rare-diseases/adenylosuccinate-lyase-deficiency/",
      "https://medlineplus.gov/genetics/condition/adenylosuccinate-lyase-deficiency/",
      "https://medlineplus.gov/genetics/gene/adsl/",
    ],
  },
  {
    id: "21",
    gene: "ADNP",
    inheritance: "Autosomal dominant",
    disease_name: "ADNP Syndrome",
    bio_name:
      "ADNP-related intellectual disability, autism-related spectrum disorder Helsmoortel-Van Der Aa syndrome (HVDAS)",
    symptomps: [
      "hypotonia",
      "mild to severe intellectual disability",
      "seizures",
      "behaviors associated with autism spectrum disorder",
      "GERD",
      "congenital heart defects (atrial or ventricle septal defect, enlarged aorta)",
      "distinctive facial features (prominent forehead, high hairline, droopy eyelids, broad nasal bridge, eyes farther apart than normal)",
    ],
    description:
      "Affected gene plays a key role in chromatin (DNA and associated proteins when packed into chromosomes) remodeling, which affects the expression of a large number of genes (over 400 known). It is thought that some of the genes ADNP helps regulate are either up or down regulated due to the change in chromatin remodeling.",
    clinical: [
      {
        description: "Clinical trials: 2 found",
        link: "https://clinicaltrials.gov/study/NCT03718936",
      },
      {
        description: "Clinical trials: 2 found",
        link: "https://clinicaltrials.gov/study/NCT01238250",
      },
    ],
    treatment: "Supportive treatment for individual symptoms.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/adnp-syndrome/",
      "https://medlineplus.gov/genetics/condition/adnp-syndrome/",
      "https://medlineplus.gov/genetics/gene/adnp/",
    ],
  },
  {
    id: "22",
    gene: "CLN6 (type A), CTSF (type B), PPT1, CLN5, CTSD, GRN, CLN3, MFSD8, DNAJC5",
    inheritance: "Autosomal recessive; autosomal dominant (DNAJC5)",
    disease_name: "Adult Neuronal Ceroid Lipofuscinosis",
    bio_name:
      "Adult NCL ANCL Kufs syndrome Kufs disease Parry disease neuronal ceroid lipofuscinosis, adult type",
    symptomps: [
      "Type A: progressive myoclonic epilepsy (muscle contractions (myoclonus) and epileptic seizures)",
      "Type A: ataxia (difficulty coordinating voluntary movements)",
      "Type B: myoclonus, tics/tremors, ataxia, intellectual/cognitive decline (dementia)",
    ],
    description:
      "Affected proteins are responsible for the breakdown of pigmented lipids (ceroid and lipofuscin). These lipids accumulate in neurons and other tissues; typical symptoms are thought to occur due to cells not being able to remove the lipids properly.",
    clinical: [
      {
        description: "Clinical trials: None found",
        link: "https://clinicaltrials.gov/search?cond=Adult%20Neuronal%20Ceroid%20Lipofuscinosis&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      },
    ],
    treatment: "Supportive treatment for individual symptoms.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/kufs-disease/",
      "https://medlineplus.gov/ency/article/001613.htm",
      "https://medlineplus.gov/genetics/condition/cln4-disease/",
      "https://medlineplus.gov/genetics/gene/dnajc5/",
    ],
  },
  {
    id: "23",
    gene: "GBE1",
    inheritance: "Autosomal recessive",
    disease_name: "Adult Polyglucosan Body Disease",
    bio_name: "APBD polyglucosan body disease, adult form",
    symptomps: [
      "neurogenic bladder (typically develop around age 50 y/o, increased frequency and eventual incontinence)",
      "weakness in extremities",
    ],
    description:
      "GBE1 is the glycogen branching enzyme, which is responsible for causing glycogen to branch off from the “main” branch, allowing for more compact storage in the liver. This results in polyglucosan bodies forming, notably in astrocyte nerve cells in the brain and spinal cord, as well as peripheral nerves.",
    clinical: [
      {
        description: "Clinical trials: 1 found",
        link: "https://clinicaltrials.gov/study/NCT02683512",
      },
    ],
    treatment: "Supportive treatment for individual symptoms",
    useful_links: [
      "https://rarediseases.org/rare-diseases/adult-polyglucosan-body-disease/",
      "https://medlineplus.gov/genetics/condition/adult-polyglucosan-body-disease/",
      "https://medlineplus.gov/genetics/gene/gbe1/",
    ],
  },
  {
    id: "24",
    gene: "Coming Soon",
    inheritance: "Coming Soon",
    disease_name: "Adie Syndrome",
    bio_name: "Coming Soon",
    symptomps: [],
    description:
      "Adie's Pupil Adie's Syndrome Adie's Tonic Pupil Holmes-Adie Syndrome tonic pupil syndrome",
    clinical: [],
    treatment: "",
    useful_links: ["https://rarediseases.org/rare-diseases/adie-syndrome/"],
  },
  {
    id: "25",
    gene: "Coming Soon",
    inheritance: "Coming Soon",
    disease_name: "Adult Neuronal Ceroid Lipofuscinosis",
    bio_name: "Coming Soon",
    symptomps: [],
    description:
      "Adult NCL ANCL Kufs syndrome Kufs disease Parry disease neuronal ceroid lipofuscinosis, adult type",
    clinical: [],
    treatment: "",
    useful_links: ["https://rarediseases.org/rare-diseases/adie-syndrome/"],
  },
  {
    id: "26",
    gene: "CSF1R",
    inheritance: "Autosomal dominant",
    disease_name:
      "Adult-Onset Leukoencephalopathy with Axonal Spheroids and Pigmented Glia",
    bio_name: "hereditary diffuse leukoencephalopathy with spheroids (HDLS)",
    symptomps: [
      "Mild psychological changes including personality changes, anxiety, depression, apathy, irritability, socially inappropriate behaviors (disinhibition)",
      "Mild cognitive changes that worsen including development of dementia, memory loss, difficulty speaking (aphasia), difficulty with voluntary muscle movements (apraxia), decreased judgment and problem-solving ability",
      "Overactive reflexes (hyperreflexia), increased muscle tone (hypertonicity), muscle spasms, one-sided weakness (hemiparesis) or in all limbs (quadriparesis)",
      "Seizures",
    ],
    description:
      "Affected genes are responsible for CSF-1 receptors, which are found on the outside of certain cells including glial cells. The mutation is thought to alter signaling pathways that use the CSF-1 receptor, leading to eventual degradation of the axons of neurons/white matter of the brain (leukoencephalopathy).",
    clinical: [
      {
        description: "Clinical trials: 1 found",
        link: "https://clinicaltrials.gov/study/NCT05020743",
      },
      {
        description: "Clinical trials search results",
        link: "https://clinicaltrials.gov/search?cond=Adult-Onset%20Leukoencephalopathy%20With%20Axonal%20Spheroids%20and%20Pigmented%20Glia&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      },
    ],
    treatment: "Supportive treatment for individual symptoms.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/adult-onset-leukoencephalopathy-with-axonal-spheroids-and-pigmented-glia/",
      "https://medlineplus.gov/genetics/condition/adult-onset-leukoencephalopathy-with-axonal-spheroids-and-pigmented-glia/",
      "https://medlineplus.gov/genetics/gene/csf1r/",
      "https://www.omim.org/entry/164770",
      "https://www.omim.org/entry/221820",
    ],
  },
  {
    id: "27",
    gene: "Unknown",
    inheritance: "Unknown",
    disease_name: "Adult-Onset Still’s Disease",
    bio_name: "adult Still's disease (AOSD), Wissler-Fanconi syndrome",
    symptomps: [
      "Spiking fever",
      "Skin rash",
      "Myalgias",
      "Arthralgia",
      "Sore throat",
      "Abdominal pain",
      "Nausea",
      "Splenomegaly",
      "Hepatomegaly",
      "Lymphadenopathy",
    ],
    description:
      "Rare idiopathic systemic inflammatory disorder. Affected people may develop symptoms similar to a severe infection. Progression seems to differ widely between individuals, with symptoms possibly lasting a very short time and never returning, or symptoms becoming a chronic, disabling condition.",
    clinical: [
      {
        description: "Clinical trials: 3 recruiting",
        link: "https://clinicaltrials.gov/study/NCT06405152",
      },
      {
        description: "Clinical trial",
        link: "https://clinicaltrials.gov/study/NCT03510442",
      },
      {
        description: "Clinical trial",
        link: "https://clinicaltrials.gov/study/NCT04402086",
      },
      {
        description: "Clinical trials search results",
        link: "https://clinicaltrials.gov/search?cond=Adult-Onset%20Still%27s%20Disease&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      },
    ],
    treatment:
      "Supportive treatment for individual symptoms; NSAIDS, corticosteroids, immunosuppressants, Canakinumab (as of 2020).",
    useful_links: [
      "https://rarediseases.org/rare-diseases/adult-onset-stills-disease/",
      "https://medlineplus.gov/ency/article/000450.htm",
      "https://www.mayoclinic.org/diseases-conditions/adult-stills-disease/symptoms-causes/syc-20351907?p=1",
    ],
  },
  {
    id: "28",
    gene: "TP63",
    inheritance: "Autosomal dominant",
    disease_name: "AEC Syndrome",
    bio_name:
      "ankyloblepharon-ectodermal defects-cleft lip/palate syndrome (Hay-Wells syndrome, Rapp-Hodgkin syndrome)",
    symptomps: [
      "Abnormal tissue development that can partially or completely close the eyelids (ankyloblepharon)",
      "Skin erosion",
      "Sparse, brittle hair",
      "Cleft palate and/or cleft lip",
      "Underdeveloped jaw (maxilla)",
    ],
    description:
      "TP63 plays a role in controlling DNA transcription, which influences the activity of other genes. Affected genes are most apparent in ectodermal structures, such as the skin, hair, teeth, and nails, along with facial features.",
    clinical: [
      {
        description: "Clinical trials: 0 recruiting",
        link: "https://clinicaltrials.gov/search?cond=aec%20syndrome&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      },
    ],
    treatment: "Supportive treatment for individual symptoms.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/aec-syndrome/",
      "https://medlineplus.gov/genetics/condition/ankyloblepharon-ectodermal-defects-cleft-lip-palate-syndrome/",
      "https://medlineplus.gov/genetics/gene/tp63/",
    ],
  },
  {
    id: "29",
    gene: "Unknown (possibly SLC40A1)",
    inheritance: "Unknown",
    disease_name: "African Iron Overload",
    bio_name: "African siderosis, Bantu siderosis",
    symptomps: [
      "Hepatomegaly",
      "Fibrosis of the portal vein resulting in portal hypertension",
      "Ascites",
      "Cirrhosis",
      "Liver failure",
    ],
    description:
      "Originally described in sub-Saharan African communities that drank homemade beer with high iron content, it was found that there was no link between the beer and disease development. It is thought the disease is genetic in nature, though the true cause has not been discovered yet.",
    clinical: [
      {
        description: "Clinical trials: 0 recruiting",
        link: "https://clinicaltrials.gov/search?cond=african%20iron%20overload&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      },
    ],
    treatment:
      "Iron chelators (removes excess iron); supportive treatment for individual symptoms.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/african-iron-overload/",
      "https://medlineplus.gov/genetics/condition/african-iron-overload/",
      "https://medlineplus.gov/genetics/gene/slc40a1/",
    ],
  },
  {
    id: "30",
    gene: "BTK",
    inheritance: "X-linked",
    disease_name: "Agammaglobulinemia (XLA)",
    bio_name: "Hypogammaglobulinemia",
    symptomps: ["Symptoms associated with infections"],
    description:
      "Primary immunodeficiency resulting from diminished maturation/function of B-cells. As a result, people with agammaglobulinemia have frequent infections due to the limited efficacy of the immune system.",
    clinical: [
      {
        description: "Clinical trials: 7 recruiting",
        link: "https://clinicaltrials.gov/search?locStr=United%20States&country=United%20States&cond=Agammaglobulinemia&aggFilters=status:not%20rec",
      },
    ],
    treatment: "IV gammaglobulin replacement therapy.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/agammaglobulinemia/",
      "https://medlineplus.gov/genetics/gene/btk/",
    ],
  },
  {
    id: "31",
    gene: "Unknown, SLC12A6",
    inheritance: "Autosomal recessive, X-linked dominant",
    disease_name: "Agenesis of Corpus Callosum",
    bio_name: "ACC, Corpus Callosum Agenesis",
    symptomps: [
      "Epileptic seizures",
      "Impaired physical and mental development",
      "Microcephaly",
      "Neuropathy",
      "Intellectual disability (Andermann syndrome)",
    ],
    description:
      "The corpus callosum does not develop, resulting in impaired communication between the two brain hemispheres. Typically, the first symptoms are epileptic seizures during the first 2 years of life.",
    clinical: [
      {
        description: "Clinical trials: 2 recruiting",
        link: "https://clinicaltrials.gov/search?locStr=United%20States&country=United%20States&cond=Agenesis%20of%20Corpus%20Callosum&aggFilters=status:not%20rec",
      },
    ],
    treatment: "Supportive treatment for individual symptoms.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/agenesis-of-corpus-callosum/",
      "https://medlineplus.gov/genetics/gene/slc12a6/",
    ],
  },
  {
    id: "32",
    gene: "Not typically considered a genetic disorder, some cases of hyperprolactinemia can be linked to genetic factors including the PRLR gene, AIP gene, and MEN1 gene.",
    inheritance:
      "Not typically considered a hereditary condition. Primarily an endocrine disorder.",
    disease_name: "Ahumada-Del Castillo Syndrome",
    bio_name:
      "Amenorrhea-Galactorrhea-FSH Decrease Syndrome, Argonz-Del Castillo Syndrome, Galactorrhea-Amenorrhea without Pregnancy, Nonpuerperal Galactorrhea-Amenorrhea",
    symptomps: [
      "Galactorrhea",
      "Amenorrhea",
      "Anovulation",
      "Infertility",
      "Lack of obvious causes like pregnancy, lactation, or pituitary tumors",
    ],
    description:
      "Also known as Ahumada-Del Castillo-Bickel Syndrome or lactation-amenorrhea syndrome, this rare endocrine disorder primarily affects women and is characterized by impairment in the function of the pituitary and hypothalamus glands. Symptoms include galactorrhea (inappropriate lactation) and amenorrhea (absence of menstrual periods) without an obvious cause, such as pregnancy or a pituitary tumor.",
    clinical: [
      {
        description: "Clinical trials: 0 recruiting",
        link: "https://clinicaltrials.gov/search?cond=Ahumada-del%20Castillo%20Syndrome",
      },
    ],
    treatment:
      "Treatments aim to address the underlying hormonal imbalance, including dopamine agonists, hormone therapy, and in rare cases, surgery or radiation therapy if secondary to a tumor and unresponsive to medication.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/ahumada-del-castillo-syndrome/",
    ],
  },
  {
    id: "33",
    gene: "The exact genetic cause is unknown, but it is believed to be related to mutations in genes on the X chromosome.",
    inheritance:
      "Not typically inherited but occurs as a de novo mutation. Suggestive of an X-linked dominant pattern.",
    disease_name: "Aicardi Syndrome",
    bio_name: "Distinct from Aicardi-Goutieres Syndrome",
    symptomps: [
      "Agenesis of the Corpus Callosum",
      "Seizures (often begin as infantile seizures and can evolve into various types of epilepsy)",
      "Developmental delays (mild to severe)",
      "Ocular abnormalities (chorioretinal lacunae, micropthalmia, and coloboma)",
      "Skeletal anomalies",
      "Characteristic facial features",
      "Other brain malformations such as microcephaly",
    ],
    description:
      "Aicardi Syndrome is a rare genetic disorder resulting from an X-linked genetic defect that is typically fatal in males and therefore primarily manifests in females (except for rare 47, XXY cases). It is characterized by a specific set of neurological, ocular, and developmental anomalies. The syndrome is marked by a triad of major features including Agenesis of the Corpus Callosum, Chorioretinal Lacunae, and infantile spasms.",
    clinical: [
      {
        description: "Clinical trials: 4 recruiting",
        link: "https://clinicaltrials.gov/search?cond=Aicardi%20Syndrome&locStr=United%20States&country=United%20States&aggFilters=status:not%20rec",
      },
    ],
    treatment:
      "No known cure. Treatment focuses on symptom management, including seizure management with antiepileptic drugs (AEDs), developmental support, and vision care with ophthalmologic evaluations and interventions as needed.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/aicardi-syndrome/",
      "https://radiopaedia.org/articles/aicardi-syndrome?lang=gb",
      "https://rarediseases.info.nih.gov/diseases/5764/aicardi-syndrome",
      "https://www.orpha.net/en/disease/detail/50",
    ],
  },
  {
    id: "34",
    gene: "TREX1, RNASEH2A, RNASEH2B, RNASEH2C, SAMHD1, ADAR1, IFIH1",
    inheritance:
      "Primarily autosomal recessive. In the case of the TREX1 gene, AGS can exhibit autosomal dominant inheritance patterns.",
    disease_name: "Aicardi-Goutières Syndrome",
    bio_name: "AGS",
    symptomps: [
      "Early onset encephalopathy",
      "Intracranial calcifications",
      "Seizures",
      "Microcephaly",
      "Progressive neurological dysfunction",
    ],
    description:
      "Aicardi-Goutières Syndrome (AGS) is a rare, genetically inherited neuroinflammatory disorder that primarily affects infants and young children. The condition mimics congenital viral infections and is characterized by severe neurological dysfunction due to abnormal immune activation. AGS leads to progressive brain damage as the immune system attacks its own tissues, particularly the brain, resulting in significant developmental challenges and physical disabilities. Symptom severity and progression can vary widely among affected individuals.",
    clinical: [
      {
        description: "Clinical trials: 4 recruiting",
        link: "https://clinicaltrials.gov/search?cond=Aicardi-Gouti%C3%A8res%20Syndrome%20%5C(AGS%5C)",
      },
    ],
    treatment:
      "Primarily supportive care, focusing on symptom management and quality of life. Other treatments include immunosuppressive-focused therapy.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/aicardi-goutieres-syndrome/",
      "http://www.aicardi-goutieres.org/",
      "https://ghr.nlm.nih.gov/condition/aicardi-goutieres-syndrome",
      "https://www.clinicaltrials.gov/",
    ],
  },
  {
    id: "35",
    gene: "ALAD (δ-Aminolevulinic Acid Dehydratase)",
    inheritance: "Autosomal recessive pattern.",
    disease_name: "ALAD Porphyria",
    bio_name:
      "δ-Aminolevulinic Acid Dehydratase Deficiency Porphyria (ADP), Doss Porphyria",
    symptomps: [
      "Neurovisceral symptoms",
      "Abdominal pain",
      "Dark colored urine (due to accumulation of porphyrins)",
      "Hypertension",
      "Psychiatric manifestations (anxiety/confusion/hallucinations)",
      "Hematological manifestations including hemolytic anemia",
    ],
    description:
      "ALAD Porphyria is a rare form of acute hepatic porphyria caused by mutations in the ALAD gene, leading to deficient activity of the δ-aminolevulinic acid dehydratase enzyme. This results in the accumulation of neurotoxic intermediates, primarily δ-aminolevulinic acid (ALA), causing a range of neurovisceral and systemic symptoms.",
    clinical: [
      {
        description: "Clinical trials available",
        link: "https://clinicaltrials.gov/search?cond=ADP%20Porphyria",
      },
    ],
    treatment:
      "Management focuses on preventing and treating acute flares. Main treatments include hemin infusions, glucose loading, supportive care, and fluid/electrolyte management.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/alad-porphyria/",
      "https://www.porphyriafoundation.org/",
      "https://www.orpha.net/",
    ],
  },
  {
    id: "36",
    gene: "JAG1 (Jagged1), NOTCH2",
    inheritance: "Autosomal Dominant pattern.",
    disease_name: "Alagille Syndrome",
    bio_name: "ALGS, AGS, Alagille’s syndrome",
    symptomps: [
      "Cholestasis",
      "Jaundice",
      "Posterior embryotoxon",
      "Splenomegaly",
      "Facial characteristics (deep-set eyes, wide/prominent forehead, pointed small chin)",
    ],
    description:
      "Alagille Syndrome is caused by mutations in the JAG1 or NOTCH2 genes, which are critical for the Notch signaling pathway involved in cell differentiation and organ development. The syndrome presents with a broad range of clinical features, the most notable being liver disease due to bile duct paucity, congenital heart defects, and distinctive facial features. The severity of symptoms can vary widely, even among affected individuals in the same family.",
    clinical: [
      {
        description: "Clinical trials available",
        link: "https://clinicaltrials.gov/search?cond=Alagille%20Syndrome",
      },
    ],
    treatment:
      "Treatment is typically symptomatic and supportive in nature. Nutritional support is a mainstay with close follow up by a multidisciplinary team. Liver disease and cardiac management (UDCA, Fat-soluble vitamin supplementation, Pruritus management) are essential, with liver transplant being an option in severe cases.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/alagille-syndrome/",
      "https://www.alagille.org/",
      "https://www.hopkinsmedicine.org/health/conditions-and-diseases/alagille-syndrome",
      "https://www.niddk.nih.gov/health-information/liver-disease/alagille-syndrome/definition-facts",
    ],
  },
  {
    id: "37",
    gene: "GFAP (Glial Fibrillary Acidic Protein)",
    inheritance:
      "Typically due to de novo mutations of the GFAP gene. Known to have an autosomal dominant inheritance pattern.",
    disease_name: "Alexander Disease",
    bio_name:
      "ALX, AxD, Alexander's Disease Leukodystrophy, Demylinogenic Leukodystrophy, Fibrinoid Leukodystrophy, Hyaline panneurpathy, White matter disease",
    symptomps: [
      "Macrocephaly",
      "Progressive neurological decline",
      "Bulbar symptoms",
      "Ataxia",
      "Leukodystrophy",
      "Cognitive decline",
    ],
    description:
      "Alexander Disease is a rare neurodegenerative disorder that primarily affects the white matter of the brain and spinal cord. Classified as a leukodystrophy, the disease is caused by mutations in the GFAP gene, leading to the formation of abnormal protein aggregates within astrocytes, which disrupts normal brain function. Depending on the age of onset, it can present as a severe, rapidly progressing condition in infants or as a more slowly progressing disorder in juveniles and adults.",
    clinical: [
      {
        description: "Clinical trials available",
        link: "https://clinicaltrials.gov/search?cond=Alexander%20Disease",
      },
    ],
    treatment:
      "Primarily supportive care with symptom management, physical and occupational therapy, nutritional support, and regular close follow-up monitoring.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/alexander-disease/",
      "http://www.alexander-disease.org/",
      "https://www.ncbi.nlm.nih.gov/books/NBK562242/",
      "https://www.ncbi.nlm.nih.gov/books/NBK1172/",
    ],
  },
  {
    id: "38",
    gene: "HGD (Homogentisate 1,2-Dioxygenase)",
    inheritance: "Autosomal recessive inheritance.",
    disease_name: "Alkaptonuria",
    bio_name: "AKU, Black Urine Disease",
    symptomps: [
      "Dark urine",
      "Ochronosis",
      "Arthropathy",
      "Cardiac issues (CAD, heart valve calcifications)",
    ],
    description:
      "Alkaptonuria is a rare inherited metabolic disorder characterized by the accumulation of homogentisic acid in the body due to a deficiency in the enzyme homogentisate 1,2-dioxygenase, caused by a mutation of the HGD gene. Over time, the accumulation of homogentisic acid causes widespread tissue damage, leading to debilitating arthritis, kidney stones, and cardiovascular complications. Alkaptonuria typically presents in early childhood with dark urine but progresses to more severe symptoms in adulthood.",
    clinical: [
      {
        description: "Clinical trials available",
        link: "https://clinicaltrials.gov/search?cond=Alkaptonuria",
      },
    ],
    treatment:
      "Primarily supportive care with symptom management including administration of Nitisinone (NTBC), pain management, physical therapy, dietary restriction and fluid monitoring. In severe cases of arthropathy, surgical intervention may be indicated.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/alkaptonuria/",
      "https://www.ncbi.nlm.nih.gov/books/NBK1457/",
      "https://www.nhs.uk/conditions/alkaptonuria/#:~:text=Alkaptonuria%2C%20or%20black%20urine%20disease,homogentisic%20acid%20in%20the%20body",
    ],
  },
  {
    id: "39",
    gene: "POLG (DNA Polymerase Gamma)",
    inheritance: "Autosomal recessive inheritance.",
    disease_name: "Alpers Disease",
    bio_name: "Alpers-Huttenlocher Syndrome (AHS), Alpers Syndrome",
    symptomps: [
      "Refractory epilepsy",
      "Developmental regression",
      "Liver disease",
      "Spasticity",
      "Vision loss",
      "Ataxia",
    ],
    description:
      "Alpers Disease, also known as Alpers-Huttenlocher Syndrome, is a rare, progressive neurodegenerative disorder that primarily affects the brain and liver. It is caused by mutations in the POLG gene, leading to impaired mitochondrial function. Disease onset typically begins in early childhood and is characterized by intractable epilepsy, developmental regression, liver failure, and neurological deterioration. This condition is often fatal, with most affected individuals not surviving past childhood due to the severe and progressive nature of the disease.",
    clinical: [
      {
        description: "Clinical trials available",
        link: "https://clinicaltrials.gov/search?cond=Alpers%20Disease",
      },
    ],
    treatment:
      "Primarily supportive care with symptom management and improving quality of life. Treatments include antiepileptic drugs, physical and occupational therapy, nutritional support, and palliative care.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/alpers-disease/",
      "https://www.ncbi.nlm.nih.gov/books/NBK26471/",
      "https://www.ncbi.nlm.nih.gov/books/NBK540966/",
      "https://www.brainfacts.org/diseases-and-disorders/neurological-disorders-az/diseases-a-to-z-from-ninds/alpers-disease",
    ],
  },
  {
    id: "40",
    gene: "HBA1 and HBA2 (Hemoglobin Alpha 1 and Alpha 2)",
    inheritance: "Autosomal recessive inheritance.",
    disease_name: "Alpha Thalassemia",
    bio_name: "α-Thalassemia",
    symptomps: [
      "Silent Carrier: Typically asymptomatic.",
      "Alpha Thalassemia Trait Minor: Mild anemia, slight fatigue.",
      "Hemoglobin H Disease: Chronic hemolytic anemia, splenomegaly, jaundice, growth retardation.",
      "Alpha Thalassemia Major (Hydrops Fetalis): Severe anemia, Hydrops Fetalis, typically fatal before/after birth.",
    ],
    description:
      "Alpha Thalassemia is a group of inherited blood disorders caused by reduced or absent production of alpha-globin chains, a crucial component of hemoglobin. The disease's severity depends on the number of defective or missing alpha-globin genes. It ranges from being a silent carrier with no symptoms to Alpha Thalassemia Major, a severe form that usually results in Hydrops Fetalis, which is typically fatal at or before birth.",
    clinical: [
      {
        description: "Clinical trials available",
        link: "https://clinicaltrials.gov/search?cond=Alpha%20Thalassemia",
      },
    ],
    treatment:
      "Silent Carrier: Typically no intervention required other than close monitoring. Alpha Thalassemia Trait Minor: Typically no intervention required other than close monitoring. Hemoglobin H Disease: Folic acid supplementation, blood transfusions, iron chelation therapy, splenectomy, and possible bone marrow transplant. Alpha Thalassemia Major: Intrauterine transfusions, early delivery, and palliative care.",
    useful_links: [
      "https://rarediseases.org/rare-diseases/alpha-thalassemia/",
      "https://www.hopkinsmedicine.org/health/conditions-and-diseases/alpha-thalassemia",
      "https://www.ncbi.nlm.nih.gov/books/NBK1426/",
      "https://www.ncbi.nlm.nih.gov/books/NBK441826/",
    ],
  },
  {
    id: "999",
    gene: "SON gene",
    inheritance: "Autosomal dominant",
    disease_name: "ZTTK Syndrome",
    bio_name: "Zhu-Tokita-Takenouchi-Kim syndrome",
    symptomps: [
      "feeding and digestive issues and seizures",
      "recurrent infections",
      "intellectual disability",
      "behavioral differences",
      "vision and hearing issues",
      "Short stature",
      "developmental delay",
    ],
    description:
      "ZTTK syndrome is an autosomal dominant, rare, variable disorder of neurodevelopment that can impact multiple body systems. Most people with ZTTK syndrome have a new variant in the SON gene that was not inherited from either biological parent.",
    clinical: [
      {
        description: "Clinical trials: None found",
        link: "https://rarediseases.org/for-patients-and-families/information-resources/info-clinical-trials-and-research-studies/",
      },
    ],
    treatment:
      "Management is supportive and based on symptoms. A specialist care team may include genetics/genetic counseling, neurology, psychiatry, cardiology, nephrology, ophthalmology, audiology, immunology, orthopedics and gastroenterology. Affected individuals should have imaging to screen for kidney and heart abnormalities. Imaging of the brain may include MRI to identify structural brain differences and EEG if seizures are suspected. Growth, feeding and development should be monitored. Supportive therapies such as speech, occupational and physical therapies may be helpful, and school-aged children may benefit from accommodations such as an individualized education plan (IEP).Genetic counseling is recommended for affected individuals and their families.",
    useful_links: [
      "http://www.centerwatch.com/",
      "https://www.clinicaltrialsregister.eu/",
      "https://rarediseases.org/rare-diseases/zttk-syndrome",
    ],
  },
  {
    id: "998",
    gene: "In approximately 25% of patients ZES occurs in association with a genetic syndrome known as multiple endocrine neoplasia type 1 (MEN-1)",
    inheritance: "Sporadic",
    disease_name: "Zollinger-Ellison Syndrome",
    bio_name:
      "Gastrinoma pancreatic ulcerogenic tumor syndrome ZES Z-E syndrome",
    symptomps: [
      "inflammation of the esophagus (esophagitis)",
      "Gnawing or burning pain in the abdominal area",
      "appetite changes",
      "nausea",
      "vomiting",
      "weight loss",
      "other abnormalities",
    ],
    description:
      "Zollinger-Ellison syndrome (ZES) is characterized by the development of a tumor (gastrinoma) or tumors that secrete excessive levels of gastrin, a hormone that stimulates production of acid by the stomach. Many affected individuals develop multiple gastrinomas, which are thought to have the potential to be cancerous (malignant). In most patients, the tumors arise within the pancreas and/or the upper region of the small intestine (duodenum). Due to excessive acid production (gastric acid hypersecretion), individuals with ZES may develop peptic ulcers of the stomach, the duodenum, and/or other regions of the digestive tract. Peptic ulcers are sores or raw areas within the digestive tract where the lining has been eroded by stomach acid and digestive juices.",
    clinical: [
      {
        description: "Clinical trials: 1 found",
        link: "https://rarediseases.org/living-with-a-rare-disease/find-clinical-trials/",
      },
    ],
    treatment:
      "Initial treatment commonly includes the use of certain medications called proton pump inhibitors, such as omeprazole. Such medications may reduce stomach acid production, relieve symptoms and promote ulcer healing. When possible (e.g., if there is no evidence of metastasis of a single tumor), complete surgical removal of the gastrinoma may be considered the optimal treatment for ZES. Surgery is the only treatment shown to potentially cure gastrinoma.",
    useful_links: [
      "http://www.centerwatch.com/",
      "http://www.cancer.gov/",
      "https://www.clinicaltrialsregister.eu/",
      "https://rarediseases.org/rare-diseases/zollinger-ellison-syndrome/",
    ],
  },
];
