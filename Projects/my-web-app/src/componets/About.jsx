import './About.css';
import image from '../assets/1.jpg';
const About =()=>{
    return(<>
        <section id="about">
			<h1 className="text-center">ABOUT US</h1>
			<div className="container-fluid" id="about-container">
				<div className="row" id="banner-row">
					<div className="col-md-5" id="about-col">
						<ul style={{fontSize: '19px'}}>
							<li>
								Kratos is all about Delivering High
								Quality web design and development
								services, Cost effective and
								reliable solutions.
							</li>
							<li>SCHOOL/COLLEGE MANAGEMENT SOFTWARE
								(CAMPUS PRO)</li>
							<li>
								Let us take care of your Business needs.
								Customer Productivity is our Priority.
							</li>				
						</ul>
					</div>
					<div className="col-md-7" id="banner-col2">
						<img src="{image}" alt="" className="img-responsive rounded mx-auto d-block"/>
					</div>
				</div>
			</div>
		</section>
    </>);
}

export default About;