import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul className="flex flex-col sm:flex-row justify-start md:space-x-9 p-4 lg:text-4xl text-2xl">
                <li>
                    <NavLink to="/" className={({ isActive }) => 
                            isActive ? 'underline decoration-yellow-500 text-slate-700' : 'text-slate-700 hover:text-indigo-400'}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={({ isActive }) => 
                            isActive ? 'underline decoration-yellow-500 text-slate-700' : 'text-slate-700 hover:text-indigo-400'}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => 
                            isActive ? 'underline decoration-yellow-500 text-slate-700' : 'text-slate-700 hover:text-indigo-400'}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/resume" className={({ isActive }) => 
                            isActive ? 'underline decoration-yellow-500 text-slate-700' : 'text-slate-700 hover:text-indigo-400'}>Resume</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;