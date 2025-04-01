const Navigation = () => {
    return (
        <nav>
            <ul className="flex flex-col sm:flex-row justify-start md:space-x-9 p-4 lg:text-4xl text-2xl">
                <li>
                    <a href="#about" className=" text-gray-900
                        isActive ? 'text-gray-900 text-shadow-cyanGlow hover:text-cyan-500' : 'text-slate-600 hover:text-cyan-500'}">
                            About</a>
                </li>
                <li>
                    <a href="#portfolio" >Projects</a>
                </li>
                <li>
                    <a href="#contact" >Contact</a>
                </li>
                <li>
                    <a href="#resume" >Resume</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;