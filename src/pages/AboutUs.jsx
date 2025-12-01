import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  const visionItems = [
    {
      id: 1,
      title: 'Our Team',
      description: 'With the support of a skilled and astute group of professionals, who carry immense industrial expertise in their domain, we are into offering a quality-assured range of products to our customers. Our professionals are fully aware of the existing customers\' demands and needs of market too. Our team comprises procurement agents, production engineers, researchers, managers and supervisors, quality analysers and more. Working in complete coordination, these professionals have helped us accomplish set organizational goals within the committed time frame.'
    },
    {
      id: 2,
      title: 'Quality Assurance',
      description: 'High-degree of quality control initiated by us enables us to ensure quality-assured range of Coffee Vending Machines and Capsule Coffee Makers in the market. We are always enhancing our quality monitoring system and processes to ensure that finest quality products are offered by us. We have developed an in-house quality monitoring unit that is run by the team of skilled quality analysts. Product range procured is put across various quality checks that are based on stringent quality analyzing parameters.'
    },
    {
      id: 3,
      title: 'Our Commitments',
      description: 'To attain our set organizational goals and objectives, we are committed to offering our products as per the exact requirements of our clients. Apart from offering desired products, we also ensure clients deliver products within the prescribed time period. We strengthen our knowledge in such that the products to its best level.'
    }
  ];

  const blendingProcesses = [
    {
      id: 1,
      title: 'Fresh & Honest Flavour Symphony, Crafting Our Signature Blend',
      description: 'Take a behind-the-scenes look at how Coffee & Love sources the finest beans from around the world to create a unique and unforgettable blend. Emphasize the commitment to freshness, quality, and transparency in the blending process'
    },
    {
      id: 2,
      title: 'The Honesty in Every Cup, Traceability of Our Coffee Blends',
      description: 'Share the journey of each coffee bean, highlighting the regions and stories behind them. Showcase the transparency in the sourcing process, reinforcing Fresh & Honest\'s commitment to ethical practices and providing customers with an honest coffee experience.'
    },
    {
      id: 3,
      title: 'Brewing with Purpose, The Fresh & Honest Blend Challenge',
      description: 'Engage your audience by encouraging them to experiment with blending at home. Create a social media campaign where followers share their unique blends, emphasizing the joy of discovering personalized coffee experiences.'
    }
  ];

  const roastingProcesses = [
    {
      id: 1,
      title: 'From Green to Roast, Fresh & Honest\'s Roasting Magic',
      description: 'Offer a virtual tour of the Coffee & Love roastery, showcasing the state-of-the-art equipment and the hands-on approach to roasting. Explain the meticulous process that ensures each batch is roasted to perfection, delivering a fresh and flavorsome cup of coffee every time.'
    },
    {
      id: 2,
      title: 'Fresh Aromas, Honest Tastes, Sensory Journey of a Fresh & Honest Roast',
      description: 'Create a sensory experience by describing the aromas and flavour notes of Coffee & Love roasts. Encourage customers to explore the nuances and appreciate the honesty in labeling that helps them choose a roast that aligns with their taste preferences.'
    },
    {
      id: 3,
      title: 'Honesty in Every Roast, The Fresh & Honest Roasting Philosophy',
      description: 'Explore the roasting philosophy at Coffee & Love, focusing on the commitment to honest labeling, fair trade practices, and environmentally conscious roasting methods. Share stories of partnerships with coffee farmers that align with the brand\'s values.'
    }
  ];

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-content">
          <h1>ABOUT US</h1>
          <p>Where Freshness Meets Honesty in Every Sip</p>
        </div>
        <div className="about-hero-image">
          <img src="/images/coffee_pouring.jpg" alt="Coffee Pouring" />
        </div>
      </section>

      {/* Since 1996 Section */}
      <section className="since-section">
        <div className="since-image">
          <img src="/images/coffee_Beans about.jpg" alt="Coffee Beans" />
        </div>
        <div className="since-content">
          <h2>Since 1999</h2>
          <div className="since-description">
            <img src="/images/coffee_scoop.jpg" alt="Coffee Scoop" />
            <p>
              Coffee & Love is a taste of the pure south of India. Dealing with different kinds of coffee 
              machines, coffee beans and coffee powders, Coffee & Love knows coffee through and through. 
              So, when you need coffee for our home or business, Coffee & Love will always have something 
              ready and handy to work miracles for you. Afterall, coffee is the fuel that the human race 
              changes up on.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="vision-section">
        <h2>Our Vision</h2>
        <div className="vision-grid">
          {visionItems.map((item) => (
            <div key={item.id} className="vision-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Category - Blending */}
      <section className="process-section">
        <h2>Process Category</h2>
        
        <div className="process-category">
          <h3 className="category-title">Blending</h3>
          <div className="process-grid">
            {blendingProcesses.map((process) => (
              <div key={process.id} className="process-card">
                <h4>{process.title}</h4>
                <p>{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Roasting */}
        <div className="process-category">
          <h3 className="category-title">Roasting</h3>
          <div className="process-grid">
            {roastingProcesses.map((process) => (
              <div key={process.id} className="process-card">
                <h4>{process.title}</h4>
                <p>{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 25+ Years of Tradition Section */}
      <section className="tradition-section">
        <div className="tradition-images">
          <div className="small-images">
            <img src="/images/coffee_process.jpg" alt="Roasting Process" />
            <img src="/images/green_coffee.jpg" alt="Green Coffee Beans" />
          </div>
          <div className="large-image">
            <img src="/images/coffee_pouring.jpg" alt="Pouring Coffee Beans" />
          </div>
        </div>
        <div className="tradition-content">
          <div className="tradition-text-box">
            <img src="/images/lattee_art.jpg" alt="Latte Art" />
            <h2>25+ Years of Tradition</h2>
          </div>
          <div className="tradition-description">
            <p>
              Coffee & Love is the pioneer in the Indian Coffee Vending Industry for over 25 years.
            </p>
            <p>
              C&L introduced imported coffee vending machines in Indian market in the year 1998 and has been 
              instrumental in customers adopting the concept of freshly brewed coffee. For over 25 years now, 
              we have been serving the finest of coffees in hotels, offices, public locations and other 
              emerging sectors.
            </p>
            <p>
              C&L is a 100% subsidiary of Falgi Lounges, Falgi between 2007 and 2012 & Droit Joiners are 3 
              consortia, it is a joint venture between Culinary Brands India Limited and the Lavazza Group.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}