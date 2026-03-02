import type { Skill } from "../../Model/Skill"
import type { SkillGroup } from "../../Model/SkillGroup"

interface Params {
    skills: SkillGroup[]
};

export const Skills = ({ skills }: Params) => {


    return (
        <div className="container" id="Skills" >
            <div className="row mt-2" >
                <div className="col-md-2" ></div>
                <div className="col-md-10" >
                    <h2 className="text-bold mt-2"><i className="bi bi-star-fill"></i> Skills</h2>
                    {skills.map((item: SkillGroup) => (
                        <div className='container'>
                            <h4 className="text-bold mt-4"><i className={item.icon}></i> {item.title}</h4>
                            {item.skills.map((skill: Skill, i: number) => (
                                <div className='row'>
                                    <div className='p-2 mt-2 col-md-10 section'>
                                        <div className="row mt-2 mb-2" key={i} >
                                            <div className="col-md-1" >
                                                <img src={skill.imageUrl} width={70} height={70} />
                                            </div>
                                            <div className="col-md-11" >
                                                <h4 className="text-bold" >
                                                    {skill.title}
                                                </h4>
                                                <p className="text-bold mt-0 fs-12" >
                                                    {skill.exp ? skill.exp == 1 ? "EXP: 1 YR" : "EXP: " + skill.exp + " YRS" : ""}
                                                </p>
                                                <p className="text-bold mt-0 fs-11" >
                                                    {skill?.level ? "Expertise: " + skill?.level : ""}
                                                </p>
                                            </div>
                                            <div className="col-md-12" >
                                                <p className="text-bold mt-0 fs-11" >
                                                    {skill?.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>);
}