import type { BasicInfo } from "../Model/BasicInfo";
import type { SkillGroup } from "../Model/SkillGroup";
import type { Experience } from "../Model/Experience";
import type { Project } from "../Model/Project";
import type { Education } from "../Model/Education";
const GetBasicInfo = async () => {
  return {
    fullName: "Fatema Jannat Chowdhury Sanny",
    title: "BSC in CSE ",
    session: "2023-2026",
    profileImageUrl: "../src/assets/profileimg.jpg",
    institute: "Metropolitan University, Sylhet",
    description: "Aspiring Software Developer focused on backend and full-stack development.",
    aboutMe: "I am an undergraduate Full Stack Developer with hands-on experience in building secure, database-driven web applications. I specialize in ASP.NET Core, REST API development, and frontend integration using modern web technologies. I focus on writing clean, maintainable code and designing structured backend systems. I am continuously improving my skills by building real-world projects and exploring scalable application architecture..",
    faceBook: "https://m.facebook.com/shining.starr.378",
    instra: "https://www.instagram.com/sanny_riverie?igsh=eXhlaTIyMjlkdzRl",
    github: "https://github.com/fjsannychy",
    linkedin: "https://www.linkedin.com/in/mst-fatema-jannat-chowdhury-sanny-6b22473a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    cvlink: "https://drive.google.com/file/d/1cb0CmlPR3Tp6JGszu0T5DZeTMK1gw_nZ/view?usp=drivesdk",
    email: "fatemasanny571@gmail.com"
  } as BasicInfo
}

const GetSkills = async () => {
  
  const skills: SkillGroup[] = [
    {
      icon: "bi bi-code-slash",
      title: "Technical Skills",
      skills: [
            {
              title: "ASP Dotnet Core Web API",
              description: "I have developed on more api projects with asp.net core web api.",
              exp: 1,
              imageUrl: "https://www.openfaas.com/images/2019-asp-net-core/netcore.png"
            },
            {
              title: "MSSQL Server",
              description: "I have developed on more projects with MSSQL Server database.",
              exp: 1,
              imageUrl: "https://5.imimg.com/data5/BC/WT/WX/GLADMIN-13634783/selection-227-500x500.png"
            }
      ]
    },
    {
      icon: "bi bi-award",
      title: "Soft Skills",
      skills: [
            {
              title: "Problem Solving",
              description: "I have solved 300+ problems in Beecrowd and Codeshef",
              exp: 0,
              level: "Expert",
              imageUrl: "https://cdn-media-1.freecodecamp.org/images/1*HTRqXgr7CVtRBsyTxurQew.jpeg"
            },
            {
              title: "Communication",
              description: "I have string verbal and writing skill in English.",
              exp: 0,
              level: "Fluent",
              imageUrl: "https://centrepointschools.com/blogs/wp-content/uploads/2024/08/communication-skills.png"
            }
      ]
    }
  ];

  return skills
}
const GetExperiences = async () => {
  const experiences: Experience[] = [
    {
      projectTitle: "Expense Tracker Web Application",
      shortDescription: "A full-stack financial tracking system for managing income and expenses.",
      technologies: ["ASP.NET Core", "HTML", "CSS", "JavaScript", "Bootstrap", "SQL Server"],
      githubLink: [
        "https://github.com/fjsannychy/expensetrackerapi.git",
        "https://github.com/fjsannychy/expensetrackerclient.git"
      ],
      keyFeatures: [
        "Developed backend APIs for financial record management",
        "Implemented categorized income and expense tracking",
        "Built complete CRUD functionality",
        "Integrated frontend with backend using API calls",
        "Designed responsive and user-friendly interface"
      ]
    },
    {
      projectTitle: "To-Do List Management System",
      shortDescription: "A full-stack task management application with persistent database storage and API integration.",
      technologies: ["ASP.NET Core Web API", "SQL Server", "JavaScript", "HTML", "CSS"],
      githubLink: [
        "https://github.com/fjsannychy/todolistapi.git",
        "https://github.com/fjsannychy/todolistclient.git"
      ],
      keyFeatures: [
        "Developed backend REST APIs for task management",
        "Designed database schema for storing tasks",
        "Implemented full CRUD operations",
        "Integrated frontend with backend using asynchronous API calls"
      ]
    },
    {
      projectTitle: "Blog Management System",
      shortDescription: "A full-stack blog platform for creating, editing, and managing blog posts with secure authentication.",
      technologies: ["ASP.NET Core", "SQL Server", "HTML", "CSS", "JavaScript"],
      githubLink: [
        "https://github.com/fjsannychy/blog_api.git",
        "https://github.com/fjsannychy/blog_client.git"
      ],
      keyFeatures: [
        "Developed RESTful APIs for blog post management",
        "Implemented authentication and authorization",
        "Built full CRUD functionality for blog posts",
        "Designed structured database for storing posts and users"
      ]
    }
  ];

  return experiences;
}

const GetProjects = async () => {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description:"A React-based portfolio with TypeScript and Bootstrap.",
      technologies: ["React", "Bootstrap", "TypeScript"],
      githubLink: "https://github.com/fjsannychy/react-portfolio"
    }
  ];

  return projects;
}

const GetEducation = async () => {
  const education: Education[] = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institute: "Metropolitan University, Sylhet",
      session: "2023 - 2026 ",
      result: "CGPA: 3.86 (Current)",
      achievements: [
        "Successfully completed multiple end-to-end web application projects",
        "Demonstrated strong self-learning ability through independent project development",
        "Continuously developing programming and logical thinking skills",
        "Actively learning modern tools and development practices"
      ]
    }
  ];
  return education;
}
export { GetBasicInfo, GetSkills, GetExperiences, GetProjects, GetEducation };