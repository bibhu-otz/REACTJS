import './Services.css'

const Services = ()=>{
  return(<>
        <section id="service">
			<h1 className="text-center">SERVICES</h1>
			<div className="container-fluid" id="service-container">
				<div className="row" id="banner-row">
					<div className="col-md-4" id="service-col1">
						<img src="1.jpg" className="img-fluid rounded mx-auto d-block" alt="services"/>
						<h3>Website Design</h3>
						<p>User Experience Design.Website Content Strategy.Cross Browserand Platform Testing.
						</p>
					</div>
					<div className="col-md-4" id="service-col2">
						<img src="1.jpg" alt="img-fluid rounded mx-auto d-block"/>
						<h3>Bulk SMS</h3>
						<p>1.Toll Free Number <br/>
							2.IVR <br/>
							3.Virtual Number</p>
					</div>
					<div className="col-md-4" id="service-col3">
						<img src="1.jpg" alt="img-fluid rounded mx-auto d-block"/>
						<h3>Payment Gateways</h3>
						<p> Some of the most renowned are: eSewa, Khalti, I- or Epay, IME Pay, Nabil or Himalayan bank and Qpay.
						</p>
					</div>
				</div>
			</div>
		</section>
  </>);
}

export default Services;