import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 drop-shadow-cyanGlow flex justify-center space-x-4 lg:space-x-6 p-6">
            <a href="https://github.com/ashlinlee98" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} className='text-gray-900 hover:text-cyan-500 drop-shadow-cyanGlow transition-colors duration-300' />
            </a>
            <a href="https://www.linkedin.com/in/ashlinlee/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} className='text-gray-900 hover:text-cyan-500 drop-shadow-cyanGlow transition-colors duration-300' />
            </a>
            <a href="https://www.facebook.com/ashlin.lee.35" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className='text-gray-900 hover:text-cyan-500 drop-shadow-cyanGlow transition-colors duration-300' />
            </a>
        </footer>
    );
}

export default Footer;