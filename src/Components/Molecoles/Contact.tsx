import type { BasicInfo } from "../../Model/BasicInfo"

interface Params {
    basicInfo: BasicInfo | null
};

export const Contact = ({ basicInfo }: Params) => {

    return (<div className="container mt-5 mb-5" id="Contact">
        <div className="row mt-2">
            <div className="col-md-2"></div>
            <div className="col-md-10">
                <h2 className="text-bold mt-2"><i className="bi bi-envelope-heart-fill"></i> Contact Me</h2>
                <div className="container" >
                    <div className="row mt-4" >
                        <div className="p-4 mt-3 section col-md-10">
                            <div className="row align-items-center">
                                <div className="col-md-7">
                                    <h4 className="text-white">Let's work together!</h4>
                                    <p className="fs-12 primary-text">
                                        I am currently available for internships or junior developer roles.
                                        If you have a project in mind or just want to chat about tech, feel free to reach out.
                                    </p>
                                </div>
                                <div className="col-md-5 text-center">

                                    <a
                                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${basicInfo?.email}&su=Contact+from+Portfolio`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-info w-50 py-3 text-bold shadow-lg"
                                        style={{ borderRadius: '15px' }}
                                    >
                                        <i className="bi bi-send-fill me-2"></i>
                                        Email Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);


}