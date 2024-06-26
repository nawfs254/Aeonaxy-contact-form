import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const navMenu =
        <>
            <div className="flex flex-col lg:flex-row gap-6 text-base">
                <NavLink to='/'><a>Home</a></NavLink>
                <NavLink to='/about'><a>About</a></NavLink>
                <NavLink to='/pricing'><a>Pricing</a></NavLink>
                <NavLink to='/contact'><a>Contact</a></NavLink>
            </div>
        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-2xl md:text-3xl">Aeonaxy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end md:flex gap-4 hidden">
                <Link to="/login"> 
                    <button className="btn btn-primary rounded-full w-28">Log In</button>
                </Link>
                <Link to="/signup"> 
                    <button className="btn btn-secondary rounded-full w-28">Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;