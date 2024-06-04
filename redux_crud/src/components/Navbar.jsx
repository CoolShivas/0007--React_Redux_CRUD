import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (
        <>

            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>

                    <NavLink to="/create" className="navbar-brand"> Create </NavLink>
                    <NavLink to="/display" className="navbar-brand"> Display </NavLink>

                    <form className="d-flex" role="search">

                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                        <button className="btn btn-outline-success" type="submit">Search</button>

                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar;