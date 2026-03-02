import type { Project } from "../../Model/Project";

interface Params {
    projects: Project[]
};

export const Projects = ({ projects }: Params) => {


    return (
        <div className="container mt-5" id="Projects">
            <div className="row mt-2">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <h2 className="text-bold mt-2"><i className="bi bi-grid-fill"></i> Other Projects</h2>
                    <p className="mt-3 mb-4 fs-12">Additional tools and utility applications built during my learning journey.</p>

                    <div className="row">
                        {projects.map((proj, i) => (
                            <div className="col-md-4 mb-4" key={i}>
                                <div className="p-3 section h-100 shadow-sm d-flex flex-column" style={{ borderTop: '2px solid #CAD7F3' }}>
                                    <h5 className="text-white text-bold">{proj.title}</h5>
                                    <p className="fs-11 primary-text mt-2" style={{ minHeight: '40px' }}>
                                        {proj.description}
                                    </p>

                                    <div className="mb-3">
                                        {proj.technologies.map((tech, techIndex) => (
                                            <span key={techIndex} className="badge bg-dark border border-info text-info me-1 mb-1" style={{ fontSize: '9px' }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        <a href={proj.githubLink} target="_blank" rel="noreferrer" className="text-info text-decoration-none">
                                            <i className="bi bi-github fs-5 me-2"></i>
                                            <span className="fs-11">View Code</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
