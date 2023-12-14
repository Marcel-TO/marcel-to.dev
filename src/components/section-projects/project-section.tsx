import './project-section.css'

export const ProjectSection = (): JSX.Element => {
    return(
        <>
            <div className="project-section">
                <div className="section-container">
                    <h1 className='project-title'>Some of my Projects</h1>

                    <div className="cards-container">
                        <div className="most-used-card">
                            <h2>DL2 Save Editor</h2>
                            <div className="link-container">
                                <a className="most-used-card-btn" href="https://github.com/Marcel-TO/DL2_Save_Editor" target="_blank">Learn more</a>
                            </div>
                        </div>
                        <div className="most-used-card">
                            <h2>Verse Interpreter</h2>
                            <div className="link-container">
                                <a className="most-used-card-btn" href="https://github.com/Marcel-TO/Verse-Interpreter-in-Python" target="_blank">Learn more</a>
                            </div>
                        </div>
                        <div className="most-used-card">
                            <h2>OWASP Insecure Design</h2>
                            <div className="link-container">
                                <a className="most-used-card-btn" href="https://github.com/Marcel-TO/OWASP_Insecure_Design" target="_blank">Learn more</a>
                            </div>
                        </div>
                        <div className="most-used-card">
                            <h2>Applied Testmethods</h2>
                            <div className="link-container">
                                <a className="most-used-card-btn" href="https://github.com/Marcel-TO/Applied_TestMethods_S2023" target="_blank">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}