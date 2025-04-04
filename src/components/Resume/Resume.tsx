const Resume = () => {
    return (
        <section id="resume">
            <div>
        <h2 className="lg:text-7xl text-3xl p-16 mb-4 mt-16 text-gray-900 text-shadow-cyanGlow">Resume and Skills</h2>
        <a href="/Documents/ashlin_lee_resume.docx.pdf" download className="block mx-auto text-center text-cyan-500 md:text-2xl text-lg underline">
            Download my resume
        </a>
        <div className="flex justify-center">
            <div className="px-12">
            <h3 className="mt-6 md:text-3xl text-xl text-center text-slate-500 p-6 font-bold">Front-end Proficiencies</h3>
        <ul className="md:text-2xl text-center text-slate-500">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>RESTful APIs</li>
        </ul>
            </div>
        
            <div className="px-12">
                <h3 className="mt-6 md:text-3xl text-xl text-center text-slate-500 p-6 font-bold">Back-end Proficiencies</h3>
        <ul className="mb-6 md:text-2xl text-center text-slate-500 pb-6">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostreSQL</li>
            <li>MongoDB</li>
            <li>API integration</li>
            <li>Authentication</li>
        </ul>
        </div>
        </div>
    </div>
        </section>
    );
}

export default Resume;