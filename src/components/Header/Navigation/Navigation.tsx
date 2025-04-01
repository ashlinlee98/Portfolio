const Navigation = () => {
    return (
        <nav>
            <ul className="flex flex-col sm:flex-row justify-start md:space-x-9 p-4 lg:text-4xl text-2xl">
                <li>
                    <a href="#about" >About</a>
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