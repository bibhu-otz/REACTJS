import './Products.css'

const Products =()=>{
    return(
        <>
        <section id="product">
			<h1 className="text-center">OUR PRODUCTS</h1>
			<div className="container-fluid" id="product-container">
				<div className="row" id="banner-row">
					<div className="col-md-6" id="about-col">
						<img src="1.jpg" className="img-responsive rounded mx-auto d-block"/>
					</div>
					<div className="col-md-6" id="product-col2">
						<ul style={{fontSize: '19px'}}>
							<li>CLINIC MANAGMENT SYSTEM</li>
							<li>SCHOOL/COLLEGE MANAGEMENT
								SOFTWARE (CAMPUS PRO)</li>
							<li>SERVICE MANAGEMENT SOFTWARE</li>
							<li>E-COMMERCE WEBSITE</li>
				
						</ul>
					</div>
				</div>
			</div>
		</section>
        </>
    );
}

export default Products;