import type { Experience } from "../../Model/Experience"

interface Params {
  experiences: Experience[]
};

export const Experiences = ({ experiences }: Params) => {


  return (
    <div className="container mt-5" id="Experiences">
      <div className="row mt-2">
        <div className="col-md-2"></div>
        <div className="col-md-10">
          <h2 className="text-bold mt-2"><i className="bi bi-laptop"></i> Technical Experience</h2>
          <p className="mt-3 mb-5 fs-12">
            Selected full-stack web applications showcasing API architecture, authentication, and responsive UI design.
          </p>

          {experiences.map((exp, i) => (
            <div className="container" key={i}>
              <div className="row mb-5" >
                <div className="p-4 section col-md-10" style={{ borderLeft: '3px solid #CAD7F3' }}>
                  <div className="d-flex justify-content-between align-items-start">
                    <h3 className="text-white text-bold h4">{exp.projectTitle}</h3>
                    <div className="d-flex gap-3">
                      {exp.githubLink.map((link, linkIndex) => (
                        <a key={linkIndex} href={link} target="_blank" rel="noreferrer" className="text-info text-decoration-none">
                          <i className="bi bi-github fs-4"></i>
                          <small className="d-block text-center text-white" style={{ fontSize: '9px' }}>
                            {link.toLowerCase().includes('api') ? 'API' : 'Client'}
                          </small>
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="mt-2 italic fs-11 opacity-75">
                    {exp.shortDescription}
                  </p>

                  <div className="mb-3 mt-3">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="badge rounded-pill border border-info text-info me-2 mb-2 p-2" style={{ fontSize: '10px' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3">
                    <h6 className="text-white text-bold mb-2">Key Features & Contributions:</h6>
                    <ul className="list-unstyled ms-2">
                      {exp.keyFeatures.map((feature, featIndex) => (
                        <li key={featIndex} className="fs-11 mb-1">
                          <i className="bi bi-patch-check-fill me-2 text-info"></i> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>);
}
