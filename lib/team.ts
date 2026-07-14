export type TeamMember = {
  name: string;
  school: string;
  role: string;
  bio?: string;
  photo?: string;
};

export const CORE_TEAM: TeamMember[] = [
  {
    name: "Somphors Tann",
    school: "Harvard Graduate School of Education, Kenyon College, Aiglon College",
    role: "Founder & Program Director",
    photo: "team/core/somphors-tann.jpg",
  },
  {
    name: "Rasy Hai",
    school: "Asian University for Women: BSc Public Health & Environmental Sciences",
    role: "Program Manager",
    photo: "team/core/rasy-hai.jpg",
  },
  {
    name: "Vanndet Va",
    school: "Lafayette College: Civil Engineering",
    role: "Advisor Coordinator",
    photo: "team/core/vanndet-va.jpg",
  },
  {
    name: "Phearom Duong",
    school: "Wesleyan University",
    role: "Full Stack Developer",
    photo: "team/core/phearom-duong.jpg",
  },
  {
    name: "Macara Teu",
    school: "Rhodes College",
    role: "Full Stack Developer",
    photo: "team/core/macara-teu.png",
  },
  {
    name: "Sophat Tann",
    school: "University of Puthisastra, Phnom Penh",
    role: "Full Stack Developer",
    photo: "team/core/sophat-tann.jpg",
  }
];

export const MENTOR_TEAM: TeamMember[] = [
  {
    name: "Somphors Tann",
    school: "Harvard Graduate School of Education, Kenyon College, Aiglon College",
    role: "Founder & Program Director",
    photo: "team/mentors/somphors-tann",
    bio: "Somphors is a Cambodian education professional and first-generation university graduate from Siem Reap, who earned scholarships to Aiglon College in Switzerland, Kenyon College in the US, and Harvard's Graduate School of Education. Drawing on her own journey, she founded Higher Education Dreamers, Kone Khmer Project, and Project IVY to advise high-achieving Cambodian students through college admissions, scholarships, and financial aid. She built this program to be the guidance she never had.",
  },
  {
    name: "Kaitlyn Mady",
    school: "Harvard University : Government & Educational Studies",
    role: "University Admissions Advisor",
    photo: "team/mentors/kaitlyn-mady",
    bio: "Kaitlyn studies at Harvard while working as a Recruitment Ambassador at Harvard's own Admissions and Financial Aid office, making her one of the most uniquely positioned advisors in the program. As founder of Harvard's Khmer Students' Association and a volunteer in legal aid and youth music programs, she is an ideal guide for first-generation students navigating this process for the first time.",
  },
  {
    name: "Virithkarvan (Vaughn) Van Chum",
    school: "Harvard University : Biomedical Engineering (Secondary: Economics)",
    role: "University Admissions Advisor",
    photo: "team/mentors/vaughn-van-chum",
    bio: "Vaughn's experience at Harvard spans water quality research, housing advocacy for homeless families, entrepreneurship, and market research consulting for the Boston Symphony Orchestra. He brings a rare ability to connect across fields and at Project IVY, he helps students discover that their most valuable asset is often the exact intersection of interests they've been told doesn't make sense.",
  },
  {
    name: "Peipei Soeung",
    school: "Dartmouth College : Computer Science with Digital Arts (SHE-CAN Scholar)",
    role: "University Admissions Advisor",
    photo: "team/mentors/peipei-soeung",
    bio: "Peipei works across software engineering, AI, and interactive media, including Python animation pipelines, Unity UI systems, and Khmer natural language processing research. At Project IVY, she helps students craft clear, compelling narratives from their academic and extracurricular experiences, especially for students applying to STEM and interdisciplinary programs.",
  },
  {
    name: "Sonisa Leng",
    school: "Dartmouth College (incoming) : previously Aiglon College (full IB scholarship)",
    role: "University Admissions Advisor",
    photo: "team/mentors/sonisa-leng",
    bio: "Sonisa earned a full scholarship to the IB program at Aiglon College in Switzerland, where she founded the school's first K-pop dance club, served as MUN Secretary-General, and mentored peers across multiple subjects. A self-directed learner and natural teacher who also completed a teaching internship in Cambodia, she now heads to Dartmouth College and brings both her boarding school and university application journeys to Project IVY.",
  },
  {
    name: "Ayden Hayes",
    school: "Dartmouth College : Computer Science & Earth Science",
    role: "University Admissions Advisor",
    photo: "team/mentors/ayden-hayes",
    bio: "Ayden bridges technology and real-world impact through machine learning and environmental data science at Dartmouth College. A Teaching Assistant across five CS courses and SAT tutor to 25+ students, he has a gift for making complex ideas accessible and for helping students see the intellectual depth already present in their own curiosity.",
  },
  {
    name: "Sophuth Phon",
    school: "Georgia State University : MSc Geosciences (NSF-funded)",
    role: "University Admissions Advisor",
    photo: "team/mentors/sophuth-phon",
    bio: "Sophuth's NSF-funded research spans urban tree removal, flood risk modelling in Cambodia, and environmental policy advocacy. At Project IVY, he brings years of teaching experience and a grounded, research-backed approach to helping students understand their own academic profile and how to articulate it to the world's best universities.",
  },
  {
    name: "Rathanakmealea (Mealea) Mang",
    school: "Northwestern University : Data Science & Economics",
    role: "University Admissions Advisor",
    photo: "team/mentors/mealea-mang",
    bio: "From managing a $50,000 graduation exhibition at Liger Leadership Academy to conducting cross-university research at Northwestern, Mealea brings analytical depth and real leadership experience to her work with students. She helps Project IVY scholars build compelling, competitive profiles by understanding exactly how admissions readers weigh data, story, and initiative together.",
  },
  {
    name: "Vanndet Va",
    school: "Lafayette College : Civil Engineering",
    role: "University & Boarding School Admissions Advisor",
    photo: "team/mentors/vanndet-va",
    bio: "Vanndet is a Civil Engineering graduate from Lafayette College who has redesigned fish ladders in Wyoming, built homes with Habitat for Humanity in Cambodia, and now serves as Assistant Project Manager on the Chea Chanto College project. At Project IVY, he brings the same hands-on, community-first mindset to helping students build their academic future — and is one of our advisors with direct boarding school experience through the ASSIST program.",
  },
  {
    name: "Rasy Hai",
    school: "Asian University for Women : BSc Public Health & Environmental Sciences",
    role: "University Admissions Advisor",
    photo: "team/mentors/rasy-hai",
    bio: "Rasy holds a degree from the Asian University for Women and currently works as an Education program Coordinator at Chea Chanto College. With national-level experience in policy research, curriculum development, and teacher training, she has mentored hundreds of students across Cambodia. At Project IVY, she helps students craft authentic, compelling narratives for university applications.",
  },
  {
    name: "Jennifer Chheang Kheng",
    school: "Lehigh University (incoming) : previously Aiglon College",
    role: "University Admissions Advisor",
    photo: "team/mentors/jennifer",
    bio: "Jennifer attended Aiglon College before heading to Lehigh University to pursue a 4+1 program in Chemical Engineering. At Aiglon, she founded a jewelry-making club, completed the Duke of Edinburgh Gold Award, and was part of the CubeSat and Philanthropy teams. Later, she volunteered at a provincial hospital in Ratanakiri. She also attended summer programs including Yale Young Global Scholars and a psychology program at the University of Hong Kong.",
  },
  {
    name: "Sokniza Noeun",
    school: "Babson College (incoming, SHE-CAN Scholar) : Business Administration",
    role: "University Admissions Advisor",
    photo: "team/mentors/sokniza-noeun",
    bio: "Niza will attend Babson College this fall with a focus on Business Analytics and Entrepreneurship. She brings experience in admissions advising, educational coordination, and outreach. At Project IVY, she offers both professional expertise and personal insight into what it takes to build a strong, honest application.",
  },
  {
    name: "Pichanbormey (Violette) Pisith",
    school: "Denison University (incoming, SHE-CAN Scholar) : Politics & Public Affairs / PPE",
    role: "University Admissions Advisor",
    photo: "team/mentors/violette-pisith",
    bio: "Violette graduated as Valedictorian, became a SHE-CAN scholar, and was elected cohort leader before organising InterLawked, a youth initiative promoting legal literacy and human rights through Khmer folktales. At Project IVY, she advises students through authentic storytelling, leadership, and writing, with a particular focus on helping young people find confidence in their own voice.",
  },
  {
    name: "Sreynich Vann",
    school: "Bucknell University (incoming, SHE-CAN Scholar) : Environmental Studies",
    role: "University Admissions Advisor",
    photo: "team/mentors/sreynich-vann",
    bio: "Sreynich is a SHE-CAN Scholar and Stanford Climate Leaders Fellow whose high school career included an internship at APSARA, contributing to the excavation of historical artefacts and exploring the intersection of history and geology. At Project IVY, she helps students connect their interests, experiences, and values into a cohesive, compelling application narrative.",
  },
];

export const PHOTO_POSITION: Record<string, string> = {
  "Somphors Tann": "center 80%",
  "Ayden Hayes": "center 30%",
  "Peipei Soeung": "center 20%",
  "Kaitlyn Mady": "center 30%",
  "Rathanakmealea (Mealea) Mang": "center 50%",
  "Vanndet Va": "center 55%",
  "Rasy Hai": "center 40%",
  "Sokniza Noeun": "center 45%",
  "Sreynich Vann": "center 35%",
};

export const PHOTO_SCALE: Record<string, number> = {};
