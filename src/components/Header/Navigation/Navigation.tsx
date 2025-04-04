import { useState, useEffect } from 'react';

const Navigation = () => {
    const [currentSection, setCurrentSection] = useState<string>('about');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let newSection = 'about'; // Default section

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    newSection = section.getAttribute("id") || 'about';
                }
            });

            setCurrentSection(newSection); // Update state once, after looping
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <nav>
            <ul className="flex flex-col sm:flex-row justify-start md:space-x-9 p-4 lg:text-4xl text-2xl">
                <li>
                    <a href="#about"
                        className={`nav-link hover:text-cyan-500 ${currentSection === 'about' ? 'text-gray-900 text-shadow-cyanGlow' : 'text-slate-600'}`}
                    >About
                    </a>
                </li>
                <li>
                    <a href="#portfolio"
                        className={`nav-link hover:text-cyan-500 ${currentSection === 'portfolio' ? 'text-gray-900 text-shadow-cyanGlow' : 'text-slate-600'}`}
                    >Projects
                    </a>
                </li>
                <li>
                    <a href="#resume"
                        className={`nav-link hover:text-cyan-500 ${currentSection === 'resume' ? 'text-gray-900 text-shadow-cyanGlow' : 'text-slate-600'}`}
                    >Resume
                    </a>
                </li>
                <li>
                    <a href="#contact"
                        className={`nav-link hover:text-cyan-500 ${currentSection === 'contact' ? 'text-gray-900 text-shadow-cyanGlow' : 'text-slate-600'}`}
                    >Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;