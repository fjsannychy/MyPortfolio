import { useEffect, useState } from 'react'
import './App.css'
import type { BasicInfo } from './Model/BasicInfo';
import { GetBasicInfo, GetSkills, GetExperiences, GetProjects, GetEducation } from './Services/PortfolioService';
import type { SkillGroup } from './Model/SkillGroup';
import type { Experience } from './Model/Experience';
import type { Project } from './Model/Project';
import type { Education } from './Model/Education';
import { AppBar } from './Components/Layouts/AppBar';
import { Home } from './Components/Molecoles/Home';
import { About } from './Components/Molecoles/About';
import { Skills } from './Components/Molecoles/Skills';
import { Experiences } from './Components/Molecoles/Experiences';
import { Projects } from './Components/Molecoles/Projects';
import { Educations } from './Components/Molecoles/Education';
import { Contact } from './Components/Molecoles/Contact';

function App() {

  const [basicInfo, setBasicInfo] = useState<BasicInfo | null>(null);
  const [skills, setSkills] = useState<SkillGroup[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  useEffect(() => {

    GetBasicInfo().then(resp => {
      setBasicInfo(resp);
    });

    GetSkills().then(resp => {
      setSkills(resp);
    });

    GetExperiences().then(resp => {
      setExperiences(resp);
    });

    GetProjects().then(resp => {
      setProjects(resp);
    });

    GetEducation().then(resp => {
      setEducations(resp);
    })

  }, []);


  return (
    <>
      <AppBar />
      <div className="container p-2 primary-text" >
        <Home basicInfo={basicInfo} />
        <About basicInfo={basicInfo} />
        <Skills skills={skills} />
        <Experiences experiences={experiences} />
        <Projects projects={projects} />
        <Educations educations={educations} />
        <Contact basicInfo={basicInfo} />
      </div>
    </>
  );
}

export default App
