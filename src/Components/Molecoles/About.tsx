import type { BasicInfo } from "../../Model/BasicInfo"

interface Params {
    basicInfo: BasicInfo | null
};

export const About = ( { basicInfo } : Params) => {


    return (<div className="container" id="About" >
                <div className="row mt-2" >
                  <div className="col-md-2" >
                  </div>
                  <div className="col-md-6" >
                    <h1 className="text-bold text-center" >
                      About Me
                    </h1>
                    <p className="text-bold mt-0 fs-12" >
                      {basicInfo?.aboutMe}
                    </p>
                    <a className="btn btn-primary mt-2 mb-4" target='_blank' href={basicInfo?.cvlink} >Download Resume</a><br />
                  </div>
                  <div className="col-md-4" >
                  </div>
                </div>
                <div className="row mt-2" >
                  <div className="col-md-2" >
                  </div>
                  <div className="col-md-6 text-center" >
                    <a className="mt-2 mb-4" target='_blank' href={basicInfo?.github} ><i className='bi bi-github social-icon' ></i></a>
                    <a className="ml-2 mb-4" target='_blank' href={basicInfo?.linkedin} ><i className='bi bi-linkedin social-icon' ></i></a>
                    <a className="ml-2 mb-4" target='_blank' href={basicInfo?.instra} ><i className='bi bi-instagram social-icon' ></i></a>
                    <a className="ml-2 mb-4" target='_blank' href={basicInfo?.faceBook} ><i className='bi bi-facebook social-icon' ></i></a>
                  </div>
                  <div className="col-md-4" >
                  </div>
                </div>
              </div>
    );

}