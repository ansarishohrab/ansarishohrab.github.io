import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({
  profile: {},
});

const DataContextProvider = ({ children }) => {
  const [profile, setProfile] = useState();
  useEffect(() => {
    setProfile({
      name: "Sohrab Alam Ansari",
      title: "Technical Lead",
      presentations: [
        "Results-driven Full Stack Developer with 8 years of experience designing, developing, and deploying scalable web applications.",
        "Proficient in front-end technologies (Angular, React, HTML, CSS, SCSS, TypeScript and JavaScript) and back-end technologies (Node.js, Express).",
        "Experienced in working with databases (MongoDB, MySQL) and implementing RESTful APIs.",
        "Skilled in DevOps practices using CI/CD tools. Adept at problem-solving and collaborating with cross-functional teams to deliver high-quality software solutions.",
      ],
      avatar:
        "images/My Profile.jpeg",
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
          title: "Software Engineer at Rapidops Solutions Pvt. Ltd.",
          description:
            "Designed and developed feature-rich Angular applications, ensuring cross-browser compatibility and adherence to best practices. Collaborated with product managers and QA teams to deliver high-quality software solutions on tight deadlines. Conducted code reviews to maintain code quality and mentor junior developers. Implemented performance optimization techniques, resulting in a 20% improvement in application load times. Developed reusable components and libraries to streamline development across multiple projects. Worked closely with backend teams to integrate APIs and enhance application functionality. Conducted unit and integration testing to ensure software reliability and reduce production bugs.",
          timeline: "September 2020 - Present",
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
            "Designed and developed web applications for diverse industries, delivering clean, reusable code. Ensured seamless deployment pipelines using Git and CI/CD practices. Participated in reqular sprint planning and retrospectives as part of the Agile development process.",
          timeline: "July 2017 - September 2020",
          sortOrder: 1,
        },
      ],
      languages: [
        {
          title: "Hindi",
          value: "100%",
        },
        {
          title: "Gujarati",
          value: "100%",
        },
        {
          title: "English",
          value: "80%",
        },
      ],
      projects: [
        {
          image:
            "images/portfolios/adarsh member.png",
          title:
            "Hybrid Mobile Banking Application for a Leading Credit Cooperative Society.",
          url: "https://adarsh-credit-co-operative-society.en.aptoide.com/app",
        },
        {
          image:
            "images/portfolios/salesmate.webp",
          title: "Salesmate CRM for Rapidops Inc.",
          url: "https://www.salesmate.io/",
        },
        {
          image:
            "images/portfolios/adarsh advisor.png",
          title:
            "Advisor-Facing Mobile Applications for a Credit Cooperative Society",
          url: "https://adarsh-advisor.en.aptoide.com/app",
        },
      ],
      services: [
        {
          image:
            "images/services/icons_laptop-code.svg",
          title: "Frontend Engineering",
          description:
            "Frontend Engineering Expert in crafting dynamic and responsive web interfaces using Angular, React, RxJS, HTML, CSS, JavaScript, and TypeScript. Adept at creating intuitive user experiences and ensuring cross-browser compatibility.",
        },
        {
          image:
            "images/services/icons_nodejs.svg",
          title: "Backend Engineering",
          description:
            "Specializes in developing scalable server-side solutions with Node.js, Express.js, and NestJS. Proficient in using JavaScript, TypeScript, and Socket.io to build robust backend services and real-time applications.",
        },
        {
          image:
            "images/services/icons_quality.svg",
          title: "Testing And Quality Assurance",
          description:
            "Proficient in employing testing frameworks such as Jasmine, and Karma to ensure code quality and reliability through comprehensive unit and integration testing.",
        },
        {
          image:
            "images/services/icons_database.svg",
          title: "Database Solutions",
          description:
            "Skilled in managing and optimizing databases including MongoDB, MySQL. Expertise in designing efficient data models and ensuring reliable data storage and retrieval.",
        },
      ],
      socials: [
        {
          icon: "bx bxl-instagram",
          link: "https://www.instagram.com/sohrab_alam_ansari/",
        },
        {
          icon: "bx bxl-github",
          link: "https://github.com/sohrab",
        },
        {
          icon: "bx bxl-linkedin",
          link: "https://www.linkedin.com/in/sohrab-alam-ansari/",
        },
      ],
      softSkills: [
        {
          image:
            "images/skills/icons_gear.svg",
          title: "Problem Solving",
          description:
            "I am creative and efficient in identifying and solving technical problems.",
        },
        {
          image:
            "images/skills/icons_bolt.svg",
          title: "Fast Learner",
          description:
            "I have the ability to quickly acquire new knowledge and adapt to changing technological environments.",
        },
        {
          image:
            "images/skills/icons_comment.svg",
          title: "Effective Communication",
          description:
            "I have the skill to convey ideas clearly and concisely, both technically and non-technically.",
        },
        {
          image:
            "images/skills/icons_user.svg",
          title: "Teamwork",
          description:
            "I collaborate effectively in multidisciplinary projects and communicate clearly with team members.",
        },
      ],
      techSkills: [
        {
          title: "DevOps",
          value: "50%",
        },
        {
          title: "Backend",
          value: "70%",
        },
        {
          title: "Frontend",
          value: "90%",
        },
      ],
      technologies: [
        {
          image:
            "images/technologies/icons_color_jasmine.svg",
          title: "Jasmine",
        },
        {
          image:
            "images/technologies/icons_color_javascript.svg",
          title: "JavaScript",
        },
        {
          image:
            "images/technologies/icons_color_karma.svg",
          title: "Karma",
        },
        {
          image:
            "images/technologies/icons_color_git.svg",
          title: "Git",
        },
        {
          image:
            "images/technologies/icons_color_mongodb.svg",
          title: "MongoDB",
        },
        {
          image:
            "images/technologies/icons_color_github.svg",
          title: "GitHub",
        },
        {
          image:
            "images/technologies/icons_color_mysql.svg",
          title: "MySQL",
        },
        {
          image:
            "images/technologies/icons_color_expressjs.svg",
          title: "Express.Js",
        },
        {
          image:
            "images/technologies/icons_color_nodejs.svg",
          title: "Node.Js",
        },
        {
          image:
            "images/technologies/icons_color_css.svg",
          title: "CSS",
        },
        {
          image:
            "images/technologies/icons_color_typescript.svg",
          title: "TypeScript",
        },
        {
          image:
            "images/technologies/icons_color_bitbucket.svg",
          title: "Bitbucket",
        },
        {
          image:
            "images/technologies/icons_color_jira.svg",
          title: "Jira",
        },
        {
          image:
            "images/technologies/icons_color_socketio.svg",
          title: "Socket.Io",
        },
        {
          image:
            "images/technologies/icons_color_angular.svg",
          title: "Angular",
        },
        {
          image:
            "images/technologies/icons_color_css.svg",
          title: "SCSS",
        },
        {
          image:
            "images/technologies/react_js_icon.svg",
          title: "ReactJS",
        },
        {
          image:
            "images/technologies/icons_color_html.svg",
          title: "HTML",
        },
        {
          image:
            "images/technologies/icons_color_gitlab.svg",
          title: "GitLab",
        },
        {
          image:
            "images/technologies/icons_color_rxjs.svg",
          title: "RxJS",
        },
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
