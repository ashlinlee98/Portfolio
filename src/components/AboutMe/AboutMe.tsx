const About = () => {
    return (
        <section id="about">
            <div className="mt-48 py-8">
                <h1 className="md:text-left text-center md:text-8xl lg:px-10 text-cyan-500">Great Code</h1>
                <h1 className="text-center md:text-7xl text-slate-500">and</h1>
                <h1 className="md:text-right text-center md:text-8xl lg:px-10 text-gray-900 text-shadow-cyanGlow">Bad Jokes</h1>
            </div>

            <h2 className="lg:text-7xl text-3xl p-16 mb-4 text-gray-900 text-shadow-cyanGlow">About Me</h2>

            <div className="lg:flex justify-between items-center lg:px-12 lg:pb-10">

                <img src="./../../../images/hydePark.jpg" alt="sunset photo in Hyde Park, London" className="w-96 rounded-lg drop-shadow-cyanGlow lg:ml-4" />

                <div className="text-center text-slate-500 text-lg lg:text-2xl lg:ml-20 lg:mr-10 lg:mb-20">
                    <p>
                        I'm a recent bootcamp graduate and full stack developer. I love logic and problem solving, so I hope to specialize in backend development. I'm also a great writer and communicator.
                    </p>
                    <br />
                    <p>
                        Fun facts: I have a degree in Philosophy from Brigham Young University, and speak Spanish fluently. I love to read and travel - I took this picture in Hyde Park, London!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;