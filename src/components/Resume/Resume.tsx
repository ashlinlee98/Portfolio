const Resume = () => {
    return (
        <section id="resume">
            <div>
        <h2 className="ml-16 text-slate-700 md:text-5xl text-3xl font-bold md:px-16 py-10">Resume and Skills</h2>
        <a href="/Documents/ashlin_lee_resume.docx.pdf" download className="text-cyan-500 md:text-2xl text-lg underline ml-20">
            Download my resume
        </a>
        <h3 className="md:text-3xl text-xl ml-14 p-6 font-bold">Front-end Proficiencies</h3>
        <ul className="md:text-2xl md:ml-32 ml-24">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>RESTful APIs</li>
        </ul>

        <h3 className="md:text-3xl text-xl ml-14 p-6 font-bold">Back-end Proficiencies</h3>
        <ul className="md:text-2xl md:ml-32 ml-24 pb-6">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>PostreSQL</li>
            <li>MongoDB</li>
            <li>API integration</li>
            <li>Authentication</li>
        </ul>
    </div>
        </section>
    );
}

export default Resume;