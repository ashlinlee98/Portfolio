import { FaGithub } from "react-icons/fa";

interface ProjectProps {
    title: string;
    image: string;
    liveLink: string;
    githubLink: string;
}

const Project = ({ title, image, liveLink, githubLink }: ProjectProps) => {
    return (
        <div className="relative group">
            <img src={image} alt={title} className="w-auto rounded-lg" />
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg group-hover:opacity-60 transition duration-300"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white space-y-2 z-10 opacity-100 group-hover:opacity-100 transition duration-300">
                <a
                    href={liveLink}
                    className="text-4xl text-white font-bold text-center hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {title}
                </a>

                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white">
                    <FaGithub size={30} />
                </a>
            </div>
        </div>
    )
}

export default Project;