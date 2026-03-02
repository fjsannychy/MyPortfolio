export const AppBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark primary-color">
            <div className="container">
    
                <a className="navbar-brand" href="#">FJCS</a>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Menu */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Experiences">Experiences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact">Contact</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}