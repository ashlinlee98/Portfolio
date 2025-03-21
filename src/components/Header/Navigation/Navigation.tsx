import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul className="flex flex-col sm:flex-row justify-start md:space-x-9 p-4 lg:text-4xl text-2xl">
                <li>
                    <NavLink to="/" className={({ isActive }) => 
                            isActive ? 'text-gray-900 text-shadow-cyanGlow hover:text-cyan-500' : 'text-slate-600 hover:text-cyan-500'}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={({ isActive }) => 
                            isActive ? 'text-gray-900 text-shadow-cyanGlow hover:text-cyan-500' : 'text-slate-600 hover:text-cyan-500'}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => 
                            isActive ? 'text-gray-900 text-shadow-cyanGlow hover:text-cyan-500' : 'text-slate-600 hover:text-cyan-500'}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/resume" className={({ isActive }) => 
                            isActive ? 'text-gray-900 text-shadow-cyanGlow hover:text-cyan-500' : 'text-slate-600 hover:text-cyan-500'}>Resume</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;