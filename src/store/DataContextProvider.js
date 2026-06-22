import { createContext, useEffect, useState } from "react";

const getExperienceDuration = (startDate) => {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years < 0) {
    return "0 years";
  }

  const yearLabel = years === 1 ? "year" : "years";
  const monthLabel = months === 1 ? "month" : "months";

  return months === 0
    ? `${years} ${yearLabel}`
    : `${years} ${yearLabel} ${months} ${monthLabel}`;
};

const frontendTechnologies = [
  "Angular",
  "CSS",
  "HTML",
  "JavaScript",
  "React",
  "RxJS",
  "SCSS",
  "TypeScript",
];
const backendTechnologies = ["Node.js", "Express"];
const databases = ["MongoDB", "MySQL", "PostgreSQL"];
const testingTechnologies = ["Jasmine", "Karma", "SonarQube", "Prisma", "Checkmarx", "Black Duck", "Trivy", "Semgrep"];

export const DataContext = createContext({
  profile: {},
});

const DataContextProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  useEffect(() => {
    const experienceDuration = getExperienceDuration(new Date(2017, 0, 1));
    const frontendList = frontendTechnologies.join(", ");
    const backendList = backendTechnologies.join(", ");
    const databaseList = databases.join(", ");
    const testingList = testingTechnologies.join(", ");
    setProfile({
      name: "Sohrab Alam Ansari",
      title: "Technical Lead",
      presentations: [
        `Results-driven Full Stack Developer with ${experienceDuration} of experience designing, developing, and deploying scalable web applications.`,
        `Proficient in front-end technologies (${frontendList}) and back-end technologies (${backendList}).`,
        `Experienced in working with databases (${databaseList}) and implementing RESTful APIs.`,
        "Skilled in DevOps practices using CI/CD tools. Adept at problem-solving and collaborating with cross-functional teams to deliver high-quality software solutions.",
      ],
      avatar: "images/My Profile.jpeg",
      contacts: [
        {
          icon: "bx bx-current-location",
          title: "Location",
          value: "Ahmedabad, Gujarat, India",
          type: "address",
        },
        {
          icon: "bx bx-calendar",
          title: "Birthday",
          value: "December 12, 1995",
          type: "date",
        },
        {
          icon: "bx bx-phone",
          title: "Phone",
          value: "+91 917 374 0370",
          type: "link",
          link: "tel:+919173740370",
        },
        {
          icon: "bx bx-envelope",
          title: "Email",
          value: "ansari.shohrab80@gmail.com",
          type: "link",
          link: "mailto:ansari.shohrab80@gmail.com",
        },
      ],
      educations: [
        {
          title: "Bachelor of Computer Engineering at Silver Oak University.",
          description:
            "Earned a Bachelor's degree with a CGPA of 8.2, focusing on computer science principles and software development.",
          timeline: "July 2013 - June 2017",
        },
        {
          title:
            "Higher Secondary Certificate at Gujarat Secondary and Higher Education Board (GSEB).",
          description:
            "Achieved 82% in Higher Secondary Certificate exams, demonstrating strong academic performance in pre-university education.",
          timeline: "July 2011 - May 2013",
        },
      ],
      experiences: [
        {
          title: "Technical Lead at Citiustech Healthcare Technology Pvt. Ltd.",
          description:
            "Led development of a CO2 risk-monitoring product that detects elevated CO2 levels in wells and issues real-time alerts. Built Angular dashboards and alerting workflows, integrated sensor APIs, implemented data validation and threshold-based notifications, and optimized performance for real-time telemetry. Mentored engineers, conducted code reviews, and ensured high test coverage to maintain reliability in critical monitoring scenarios.",
          timeline: "April 2025 - Present",
          sortOrder: 3,
        },
        {
          title: "Software Engineer at Rapidops Solutions Pvt. Ltd.",
          description:
            "Designed and developed feature-rich Angular applications, ensuring cross-browser compatibility and adherence to best practices. Collaborated with product managers and QA teams to deliver high-quality software solutions on tight deadlines. Conducted code reviews to maintain code quality and mentor junior developers. Implemented performance optimization techniques, resulting in a 20% improvement in application load times. Developed reusable components and libraries to streamline development across multiple projects. Worked closely with backend teams to integrate APIs and enhance application functionality. Conducted unit and integration testing to ensure software reliability and reduce production bugs.",
          timeline: "September 2020 - March 2025",
          sortOrder: 2,
        },
        {
          title: "Intern at Streebo Solutions Pvt. Ltd.",
          description:
            "Learned various technologies like Form Experience Builder (IBM), Javascript, Ionic, apk and ipa building and deployment.",
          timeline: "January 2017 - July 2017",
          sortOrder: 0,
        },
        {
          title: "Jr. Software Engineer at Streebo Solutions Pvt. Ltd.",
          description:
            `Designed and developed web applications for diverse industries, delivering clean, reusable code. Ensured seamless deployment pipelines using Git and CI/CD practices. Participated in reqular sprint planning and retrospectives as part of the Agile development process.`,
          timeline: "July 2017 - September 2020",
          sortOrder: 1,
        },
      ],
      languages: [
        {
          title: "English",
          subtext: "Fluent",
          value: "100%",
        },
        {
          title: "Hindi",
          subtext: "Native",
          value: "100%",
        },
        {
          title: "Gujarati",
          subtext: "Fluent",
          value: "100%",
        },    
        {
          title: "Urdu",
          subtext: "Intermediate",
          value: "50%",
        },
        {
          title: "Punjabi",
          subtext: "Basic",
          value: "30%",
        }    
      ],
      projects: [
        {
          image: "images/portfolios/adarsh member.png",
          title:
            "Hybrid Mobile Banking Application for a Leading Credit Cooperative Society.",
          url: "https://adarsh-credit-co-operative-society.en.aptoide.com/app",
        },
        {
          image: "images/portfolios/salesmate.webp",
          title: "Salesmate CRM for Rapidops Inc.",
          url: "https://www.salesmate.io/",
        },
        {
          image: "images/portfolios/adarsh advisor.png",
          title:
            "Advisor-Facing Mobile Applications for a Credit Cooperative Society",
          url: "https://adarsh-advisor.en.aptoide.com/app",
        },
      ],
      services: [
        {
          image: "images/services/icons_laptop-code.svg",
          title: "Frontend Engineering",
          description: `Frontend Engineering Expert in crafting dynamic and responsive web interfaces using ${frontendList}. Adept at creating intuitive user experiences and ensuring cross-browser compatibility.`,
        },
        {
          image: "images/services/icons_nodejs.svg",
          title: "Backend Engineering",
          description: `Specializes in developing scalable server-side solutions with ${backendList}. Proficient in using JavaScript, TypeScript, and Socket.io to build robust backend services and real-time applications.`,
        },
        {
          image: "images/services/icons_quality.svg",
          title: "Testing And Quality Assurance",
          description:
            `Proficient in employing testing frameworks such as ${testingList} to ensure code quality and reliability through comprehensive unit and integration testing.`,
        },
        {
          image: "images/services/icons_database.svg",
          title: "Database Solutions",
          description:
            `Skilled in managing and optimizing databases including ${databaseList}. Expertise in designing efficient data models and ensuring reliable data storage and retrieval.`,
        },
      ],
      socials: [
        {
          icon: "bx bxl-instagram",
          link: "https://www.instagram.com/sohrab_alam_ansari/",
        },
        {
          icon: "bx bxl-github",
          link: "https://github.com/ansarishohrab",
        },
        {
          icon: "bx bxl-linkedin",
          link: "https://www.linkedin.com/in/sohrab-alam-ansari/",
        },
      ],
      softSkills: [
        {
          image: "images/skills/icons_gear.svg",
          title: "Problem Solving",
          description:
            "I am creative and efficient in identifying and solving technical problems.",
        },
        {
          image: "images/skills/icons_bolt.svg",
          title: "Fast Learner",
          description:
            "I have the ability to quickly acquire new knowledge and adapt to changing technological environments.",
        },
        {
          image: "images/skills/icons_comment.svg",
          title: "Effective Communication",
          description:
            "I have the skill to convey ideas clearly and concisely, both technically and non-technically.",
        },
        {
          image: "images/skills/icons_user.svg",
          title: "Teamwork",
          description:
            "I collaborate effectively in multidisciplinary projects and communicate clearly with team members.",
        },
      ],
      techSkills: [
        {
          title: "Frontend",
          value: "100%",
          subtext: "Expert",
        },
        {
          title: "Backend",
          value: "80%",
          subtext: "Intermediate",
        },
        {
          title: "DevOps",
          value: "50%",
          subtext: "Basic",
        }
      ],
      technologies: [
        {
          image: "images/technologies/icons_color_jasmine.svg",
          title: "Jasmine",
        },
        {
          image: "images/technologies/icons_color_javascript.svg",
          title: "JavaScript",
        },
        {
          image: "images/technologies/icons_color_karma.svg",
          title: "Karma",
        },
        {
          image: "images/technologies/icons_color_git.svg",
          title: "Git",
        },
        {
          image: "images/technologies/icons_color_mongodb.svg",
          title: "MongoDB",
        },
        {
          image: "images/technologies/icons_color_github.svg",
          title: "GitHub",
        },
        {
          image: "images/technologies/icons_color_mysql.svg",
          title: "MySQL",
        },
        {
          image: "images/technologies/icons_color_expressjs.svg",
          title: "Express.Js",
        },
        {
          image: "images/technologies/icons_color_nodejs.svg",
          title: "Node.Js",
        },
        {
          image: "images/technologies/icons_color_css.svg",
          title: "CSS",
        },
        {
          image: "images/technologies/icons_color_typescript.svg",
          title: "TypeScript",
        },
        {
          image: "images/technologies/icons_color_bitbucket.svg",
          title: "Bitbucket",
        },
        {
          image: "images/technologies/icons_color_jira.svg",
          title: "Jira",
        },
        {
          image: "images/technologies/icons_color_socketio.svg",
          title: "Socket.Io",
        },
        {
          image: "images/technologies/icons_color_angular.svg",
          title: "Angular",
        },
        {
          image: "images/technologies/icons_color_css.svg",
          title: "SCSS",
        },
        {
          image: "images/technologies/react_js_icon.svg",
          title: "ReactJS",
        },
        {
          image: "images/technologies/icons_color_html.svg",
          title: "HTML",
        },
        {
          image: "images/technologies/icons_color_gitlab.svg",
          title: "GitLab",
        },
        {
          image: "images/technologies/icons_color_rxjs.svg",
          title: "RxJS",
        },
        {
          image: "images/technologies/icons_color_sonarqube.svg",
          title: "SonarQube",
        },
        {
          image: "images/technologies/icons_color_prisma.svg",
          title: "Prisma", 
        },
        {
          image: "images/technologies/icons_color_checkmarx.svg",
          title: "Checkmarx", 
        },
        {
          image: "images/technologies/icons_color_blackduck.svg",
          title: "Black Duck", 
        },
        {
          image: "images/technologies/icons_color_trivy.svg",
          title: "Trivy", 
        },
        {
          image: "images/technologies/icons_color_semgrep.svg",
          title: "Semgrep", 
        }
      ],
    });
  }, []);
  const dataContextValue = {
    profile,
  };
  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};
export default DataContextProvider;
