import type { BasicInfo } from "../../Model/BasicInfo"

interface Params {
    basicInfo: BasicInfo | null
};

export const Contact = ({ basicInfo }: Params) => {

    return (
        <div className="container mt-5 mb-5" id="Contact">
            <div className="row mt-2">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <h2 className="text-bold mt-2">
                        <i className="bi bi-envelope-heart-fill text-info"></i> Contact Me
                    </h2>
                    <div className="container">
                        <div className="row mt-4">
                            <div className="p-4 mt-3 section col-md-10 shadow-sm">
                                <div className="row">
                                    {/* Introduction Text */}
                                    <div className="col-md-12 mb-4">
                                        <h4 className="text-white text-bold">Let's work together!</h4>
                                        <p className="fs-12 primary-text">
                                          I am currently available for internships or junior developer roles. 
                                If you have a project in mind or just want to chat about tech, 
                                            Reach out via the channels below.
                                        </p>
                                    </div>

                                    {/* Gmail Section */}
                                    <div className="col-md-6 mb-3">
                                        {/* Small Headline above Gmail */}
                                        <p className="text-info text-bold mb-2 ps-1" style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                            <i className="bi bi-chat-left-text me-1"></i> Mail Me
                                        </p>
                                        <a 
                                            href={`mailto:${basicInfo?.email}?subject=Contact from Portfolio`} 
                                            className="btn btn-info w-100 py-3 text-bold shadow-lg d-flex align-items-center justify-content-center"
                                            style={{ borderRadius: '15px' }}
                                        >
                                            <i className="bi bi-envelope-fill me-2"></i>
                                            {basicInfo?.email || "Gmail"}
                                        </a>
                                    </div>

                                    {/* LinkedIn Section */}
                                    <div className="col-md-6 mb-3">
                                        {/* Small Headline above LinkedIn */}
                                        <p className="text-info text-bold mb-2 ps-1" style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                                            <i className="bi bi-person-badge me-1"></i> Professional Profile
                                        </p>
                                        <a 
                                            href={basicInfo?.linkedin} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="btn btn-info w-100 py-3 text-bold shadow-lg d-flex align-items-center justify-content-center"
                                            style={{ borderRadius: '15px' }}
                                        >
                                            <i className="bi bi-linkedin me-2"></i>
                                            LinkedIn Profile
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}