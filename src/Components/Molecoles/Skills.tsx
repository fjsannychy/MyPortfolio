import type { Skill } from "../../Model/Skill"
import type { SkillGroup } from "../../Model/SkillGroup"

interface Params {
    skills: SkillGroup[]
};

export const Skills = ({ skills }: Params) => {


    return (
       <div className="container mt-5" id="Skills">
            <div className="row mt-2">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <h2 className="text-bold mb-4">
                        <i className="bi bi-star-fill text-info"></i> Technical Skills
                    </h2>

                    {skills.map((group: SkillGroup, index: number) => (
                        <div key={index} className="mb-5">
                            {/* Skill Group Title (e.g., Soft Skills, Technical Skills) */}
                            <h4 className="text-bold mt-4 mb-3">
                                <i className={group.icon + " me-2"}></i> {group.title}
                            </h4>

                            {/* Grid container: Using col-lg-3 makes cards smaller like the Version Control section */}
                            <div className="row g-3">
                                {group.skills.map((skill: Skill, i: number) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6" key={i}>
                                        {/* Using your 'section' class to match theme perfectly */}
                                        <div className="section p-3 h-100 d-flex flex-column justify-content-between skill-item">
                                            <div className="text-center mb-2">
                                                <img 
                                                    src={skill.imageUrl} 
                                                    alt={skill.title} 
                                                    style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                                                    className="mb-2" 
                                                />
                                                <div>
                                                    <h6 className="text-bold text-white mb-0" style={{ fontSize: '13px' }}>
                                                        {skill.title}
                                                    </h6>
                                                    <p className="text-info mb-0" style={{ fontSize: '9px' }}>
                                                        {skill.exp ? `EXP: ${skill.exp} YRS` : skill.level}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="primary-text mt-1 mb-0 text-center" style={{ fontSize: '10px', lineHeight: '1.2' }}>
                                                {skill.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}