import { Footer } from './Footer';

export const Home = () => {
  return (
    <body>
        <main>
        <hr className="featurette-divider"/>
      <section id="about">
      <div className="row featurette ms-5 me-5">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">About Blood Donation </h2>
          <p className="lead">Blood donation is a voluntary process where individuals donate their blood to save lives. The donated blood can be used to treat patients with various medical conditions such as cancer, blood disorders, and trauma.</p>
        </div>
      
        <div className="col-md-5">
          <img src="https://cdn.pixabay.com/photo/2020/11/08/15/47/heart-5724137_1280.png" alt="Blood donation" width="400" height="400"/>
        </div>
      </div>
    </section>
    <hr className="featurette-divider"/>
  
  <section id="why">
    <div className="row featurette ms-5 me-5">
      <div className="col-md-5">
        <img src="https://cdn.pixabay.com/photo/2020/02/19/06/23/earth-4861456_1280.jpg" alt="Blood donation" width="400" height="400"/>
      </div>
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">Why Donate Blood </h2>
        <ul className="lead">
          <li>Save lives: Your donation can help save up to three lives.</li>
          <li>Emergency preparedness: Blood donations are essential in emergency situations such as natural disasters and accidents.</li>
          <li>Health benefits: Donating blood can improve your overall health by reducing the risk of certain diseases.</li>
        </ul>
      </div> 
    </div>
  </section>

  <hr className="featurette-divider"/>
  
      
      <section id="types">
        <div className="row featurette ms-5 me-5">
          
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Types of Donations</h2>
            <ul className="lead">
              <li>Whole blood donation: This is the most common type of donation where the donor gives a pint of blood.</li>
              <li>Platelet donation: This involves donating only platelets which are used to treat patients with blood disorders.</li>
              <li>Plasma donation: This involves donating only plasma which is used to treat patients with immune disorders.</li>
            </ul>
          </div> 
          <div className="col-md-5">
            <img src="https://cdn.pixabay.com/photo/2020/03/20/15/46/blood-4951009_1280.jpg" alt="Blood donation" width="400" height="400"/>
          </div>
        </div>
      </section>

      <hr className="featurette-divider"/>
  
      
      <section id="eligibility">
        <div className="row featurette ms-5 me-5">
          <div className="col-md-5">
            <img src="https://cdn.pixabay.com/photo/2014/04/05/11/20/blood-315278_1280.jpg" alt="Blood donation" width="400" height="400"/>
          </div>
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Eligibility to Donate Blood</h2>
            <ul className="lead">
              <li>You must be at least 17 years old (16 with parental consent in some states).</li>
              <li>You must weigh at least 110 pounds.</li>
              <li>You must be in good health and feeling well on the day of donation.</li>
            </ul>
          </div> 
          
        </div>
      </section>
      <hr className="featurette-divider"/>
  
      
  <section id="process">
    <div className="row featurette ms-5 me-5">
      
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">Blood Donation Process</h2>
        <p className="lead">The donation process typically takes less than an hour and involves the following steps:</p>
        <ol className="lead">
          <li>Registration</li>
          <li>Medical history and mini-physical</li>
          <li>Blood donation</li>
          <li>Refreshments and recovery</li>
        </ol>
      </div> 

      <div className="col-md-5">
        <img src="https://cdn.pixabay.com/photo/2020/04/17/08/11/blood-5053770_1280.jpg" alt="Blood donation" width="400" height="400"/>
      </div>
      
    </div>
  </section>
  <hr className="featurette-divider"/>

<section id="benefits">
  <div className="row featurette ms-5 me-5">

    <div className="col-md-5">
      <img src="https://cdn.pixabay.com/photo/2021/03/02/11/46/heart-6062177_1280.png" alt="Blood donation" width="400" height="400"/>
    </div>
    
    
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">Benefits of Blood Donation</h2>
      <p className="lead">The donation process typically takes less than an hour and involves the following steps:</p>
      <ol className="lead">
        <li>Reduces the risk of certain diseases</li>
        <li>Provides a free health check-up</li>
        <li>Allows you to give back to your community</li>
      </ol>
    </div> 

   
  </div>
</section>


        </main>
    </body>


  )
}
