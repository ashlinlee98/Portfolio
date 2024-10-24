const Resume = () => {
    return (
        <div className="bg-blue-300">
        <h2 className="ml-16 text-slate-700 md:text-5xl text-3xl font-bold md:px-16 py-10">Resume and Skills</h2>
        <a href="/Documents/example.pdf" download className="text-blue-500 md:text-2xl text-lg underline ml-20">
            Download my resume
        </a>
        <h3 className="md:text-3xl text-xl ml-14 p-6 font-bold">Front-end Proficiencies</h3>
        <ul className="md:text-2xl md:ml-32 ml-24">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
        </ul>

        <h3 className="md:text-3xl text-xl ml-14 p-6 font-bold">Back-end Proficiencies</h3>
        <ul className="md:text-2xl md:ml-32 ml-24 pb-6">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
        </ul>
    </div>
    );
}

export default Resume;