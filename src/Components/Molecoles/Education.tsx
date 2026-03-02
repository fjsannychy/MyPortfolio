import type { Education } from "../../Model/Education";


interface Params {
  educations: Education[]
};

export const Educations = ({ educations }: Params) => {


  return (
    <div className="container mt-5" id="Education">
      <div className="row mt-2">
        <div className="col-md-2"></div>
        <div className="col-md-10">
          <h2 className="text-bold mt-2"><i className="bi bi-mortarboard-fill"></i> Education</h2>

          {educations.map((edu, i) => (
            <div className="container" key={i}>
              <div className="row mt-4" >
                <div className="p-4 section col-md-10" style={{ borderLeft: '3px solid #60a5fa' }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="text-white text-bold mb-1">{edu.degree}</h4>
                    <span className="badge bg-dark border border-info text-info fs-11">{edu.session}</span>
                  </div>

                  <h6 className="text-info mb-2">{edu.institute}</h6>

                  {edu.result && (
                    <p className="fs-12 text-white italic mb-3">{edu.result}</p>
                  )}

                  <div className="mt-3">
                    <ul className="list-unstyled ms-2">
                      {edu.achievements.map((ach, index) => (
                        <li key={index} className="fs-11 mb-2">
                          <i className="bi bi-award me-2 text-info"></i> {ach}
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
