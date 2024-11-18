import './NavBar.css'

const NavBar = ()=>{
    return(<>
    <section id="navbar">
		<nav className="navbar navbar-expand-lg navbar-light fixed-top">
			<div className="container-fluid">
			<a className="navbar-brand" href="#">KRATOS</a>
			<button
				className="navbar-toggler"type="button"data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
		
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav m-auto">
					<li className="nav-item"><a className="nav-link active"aria-current="page"href="#">Home</a>
					</li>
					<li className="nav-item"><a className="nav-link"href="#service">Services</a>
					</li>
					<li className="nav-item"><a className="nav-link"href="#about">About Us</a>
					</li>
					<li className="nav-item"><a className="nav-link"href="#product">Products</a>
					</li>
					<li className="nav-item"><a className="nav-link"href="#social">Contact Us</a>
					</li>
				</ul>
			</div>
			</div>
		</nav>
    </section>
    </>);
	
}

export default NavBar ;
