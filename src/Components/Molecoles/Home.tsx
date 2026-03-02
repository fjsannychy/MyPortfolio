import type { BasicInfo } from "../../Model/BasicInfo"

interface Params {
    basicInfo: BasicInfo | null
};

export const Home = ( { basicInfo } : Params) => {


    return (
        <div className="container" id="Home"  >
            <div className="row mt-2" >
                <div className="col-md-2" >
                </div>
                <div className="col-md-6" >
                    <p className="text-white" >Hi, I am </p>
                    <h1 className="text-bold" >
                        {basicInfo?.fullName}
                    </h1>
                    <p className="text-bold mt-0 fs-12" >
                        {basicInfo?.title} ({basicInfo?.session})
                    </p>
                    <p className="text-bold mt-0 fs-11" >
                        {basicInfo?.institute}
                    </p>
                    <h4 className="text-bold mt-0 fs-11 text-white" >
                        {basicInfo?.description}
                    </h4>
                </div>
                <div className="col-md-2" >
                    <img src={basicInfo?.profileImageUrl} className="profile-image" />
                </div>
                <div className="col-md-2" >
                </div>
            </div>
        </div>
    );

}