import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul className="flex flex-col sm:flex-row justify-start lg:space-x-9 p-4 lg:text-4xl text-2xl">
                <li>
                    <NavLink to="/" className={({ isActive }) => 
                            isActive ? 'underline decoration-yellow-500 text-slate-700' : 'text-slate-700'}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => 
                            isActive ? 'underline decoration-yellow-500 text-slate-700' : 'text-slate-700'}>Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => 
                            isActive ? 'underline decoration-yellow-500 text-slate-700' : 'text-slate-700'}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/resume" className={({ isActive }) => 
                            isActive ? 'underline decoration-yellow-500 text-slate-700' : 'text-slate-700'}>Resume</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;