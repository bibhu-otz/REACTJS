import './Footer.css'

const Footer=()=>{
    return(
        <>
           	<section id="social">
			<section id="banner">
				<div className="container-fluid" id="banner-container">
					<div className="row" id="banner-row">
						<div className="col-md-4" id="footer-col1">
							<h1>MY WEBSITE</h1>
							<p>
								At KRATOS we believe that customers should always get easy-to-use, best in the kind and fast services. Kratos has achieved
								standards which helps customer to achieve satisfaction and realize value for their hard earned money.</p>
						</div>
						<div className="col-md-4" id="footer-col2">
							<h3>Contact Us</h3>
							<p>Call Us: 1800 919 8872</p>
							<p>Email Us: kratos@gmail.com</p>
						</div>
						<div className="col-md-4" id="footer-col2">
							<h3>Subscribe to Newsletter</h3>
							<form >
								<div className="mb-3">
									<input type="email" placeholder="Enter Your Email" className="form-control"
									id="exampleInputEmail" aria-describedby="emailHelp"/>
									<div className="form-text" id="emailHelp">
										We'll never share your email to anyone else.
									</div>
								</div>
								<button type="submit" className="btn btn-primary">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</section>
        </>
    );
}

export default Footer;