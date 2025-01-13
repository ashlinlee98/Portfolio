const About = () => {
    return (
        <section id="about" className="bg-blue-300">
            <h2 className="ml-20 text-slate-700 lg:text-5xl text-3xl font-bold px-10 md:px-16 py-10">About Me</h2>
            
            <div className="lg:flex justify-between items-center lg:px-12 lg:pb-10">
                
                <img src="./../../../images/headshot.jpg" alt="professional headshot" className="w-96 rounded-lg lg:border-solid lg:border-8 lg:border-yellow-500 lg:ml-4" />
                
                <div className="bg-indigo-300 text-center text-black text-lg lg:text-2xl px-9 py-5 lg:border-solid lg:border-8 lg:border-yellow-500 rounded-lg lg:ml-20 lg:mr-10 lg:mb-20">
                    <p>
                        I'm a recent bootcamp graduate and full stack developer. I love coding because it allows me to work in logic and problem solving while creating something beautiful and deeply useful to other people. I have experience with HTML, CSS, JavaScript, TypeScript, React, Node.js, Express, Python, PostgreSQL and MongoDB. I'm always looking for new opportunities to learn and grow as a developer.
                    </p>
                    <br />
                    <p>
                        Some fun things about me are that I'm from Utah, have a degree in Philosophy from Brigham Young University, and speak Spanish fluently. When I'm not coding I enjoy reading, overanalyzing movies, and spending time with friends and family.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;