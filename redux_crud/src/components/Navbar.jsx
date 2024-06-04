const Navbar = () => {
    return (
        <>

            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand">Navbar</a>

                    <a class="navbar-brand">Home</a>
                    <a class="navbar-brand">About</a>

                    <form class="d-flex" role="search">

                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                        <button class="btn btn-outline-success" type="submit">Search</button>

                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar;