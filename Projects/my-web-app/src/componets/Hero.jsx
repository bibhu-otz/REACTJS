import './Hero.css';
import pic from '../assets/1.jpg'
export const Hero=()=>{
    
       <section id="banner">
			<div className="container-fluid" id="banner-container">
				<div className="row" id="banner-row">
					<div className="col-md-7" id="banner-col">
						<h3>BEST PROFESSIONAL WEBSITE DESIGN
							SOFTWARE DEVELOPMENT COMPANY
						</h3>
						<p>The fastest way to grow your business with leader in technology. <br/>
						Be authentic. In a ovesaturated market it is vutal to do things that make you and
						your services stand out.</p>

						<div className="d-grid gap-2 d-md-flex justify-content-center">
							<a href="#" className="btn btn-primary" role="button">Contact Us</a>
						</div>
					</div>
					<div className="col-md-5" id="banner-col2">
						<img src={pic} alt="banner" className="img-responsive rounded mx-auto d-block"/>
					</div>
				</div>
			</div>
		</section>
  
}

export default Hero;