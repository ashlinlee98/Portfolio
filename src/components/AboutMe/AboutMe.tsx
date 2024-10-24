const About = () => {
    return (
        <section id="about" className="bg-blue-300">
            <h2 className="ml-20 text-slate-700 lg:text-5xl text-3xl font-bold px-10 md:px-16 py-10">About Me</h2>
            
            <div className="lg:flex justify-between items-center lg:px-12 lg:pb-10">
                
                <img src="./../../../images/Headshot.jpg" alt="professional headshot" className="w-96 rounded-lg lg:border-solid lg:border-8 lg:border-yellow-500 lg:ml-4" />
                
                <p className="bg-indigo-300 text-center text-black text-lg lg:text-2xl px-9 py-5 lg:border-solid lg:border-8 lg:border-yellow-500 rounded-lg lg:ml-20 lg:mr-10 lg:mb-20">
                    I'm a full stack developer with a passion for creating beautiful and functional web applications. I have experience with HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. I'm always looking for new opportunities to learn and grow as a developer.
                </p>
            
            </div>
        </section>
    );
}

export default About;