import Project from "./Project/Project";

const Portfolio = () => {

    const projects = [
        {
            title: "Memory Game",
            image: "/images/memory-game.png",
            liveLink: "https://alectaber.github.io/memory-game/",
            githubLink: "https://github.com/AlecTaber/memory-game"
        },
        {
            title: "Rancid Rhythms",
            image: "/images/rancid-rhythms.png",
            liveLink: "https://rancid-rhythms-tnyn.onrender.com",
            githubLink: "https://github.com/AlecTaber/rancid-rhythms?tab=readme-ov-file"
        },
        {
            title: "LoopLab",
            image: "/images/looplab.png",
            liveLink: "https://looplab.onrender.com/",
            githubLink: "https://github.com/AlecTaber/LoopLab?tab=readme-ov-file"
        },
        // {
        //     title: "TBD",
        //     image: "https://via.placeholder.com/150",
        //     liveLink: "https://www.google.com",
        //     githubLink: "https://www.github.com"
        // },
        // {
        //     title: "TBD",
        //     image: "https://via.placeholder.com/150",
        //     liveLink: "https://www.google.com",
        //     githubLink: "https://www.github.com"
        // },
        // {
        //     title: "TBD",
        //     image: "https://via.placeholder.com/150",
        //     liveLink: "https://www.google.com",
        //     githubLink: "https://www.github.com"
        // }
    ]
    return (
        <section className="portfolio bg-blue-300">
            <h2 className="ml-20 text-slate-700 lg:text-5xl text-3xl font-bold px-8 md:px-16 py-10">My Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4 justify-items-center">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
        </section>
    );
}

export default Portfolio;