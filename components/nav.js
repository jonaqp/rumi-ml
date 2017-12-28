import Link from "./Link";


const Nav = () => (
        <div className="container">
            <nav className="navbar navbar-expand-lg px-md-0">
                <a className="navbar-brand" href="/">
				<span className="logo-default">
					<img src="/static/themes/assets/img/logo-default.png"/>
				</span>
                    <span className="logo-inverse">
					<img src="/static/themes/assets/img/logo-inverse.png" alt=""/>
            </span>
                </a>

                <div className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="lnr lnr-text-align-right nav-hamburger"/>
                    <span className="lnr lnr-cross nav-close"/>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <Link activeClassName='nav-item active' href='/'>
                            <a className='nav-link'>Inicio</a>
                        </Link>
                        <Link activeClassName='nav-item active' href='/me'>
                            <a className='nav-link'>Me</a>
                        </Link>
                        <Link activeClassName='nav-item active' href='/download'>
                            <a className='nav-link'>Descargar</a>
                        </Link>
                    </ul>

                </div>
            </nav>
        </div>

)

export default Nav
