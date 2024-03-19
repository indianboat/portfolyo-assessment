// Images
import servImg1 from '../../assets/images/services/service1.png';
import servImg2 from '../../assets/images/services/service2.png';
import servImg3 from '../../assets/images/services/service3.png';
import servImg4 from '../../assets/images/services/service4.png';
import servImg5 from '../../assets/images/services/service4.png';

// Data
import serviceData from '../../data/service.json';

// -----------------------

type ServiceDataType = {
  data: [{
    name: string,
    desc: string,
    image: {
      url: string
    }
  }],
  aboutData: {
    subTitle: string,
    description: string
  }
}

function Service({ data, aboutData }: ServiceDataType) {

  const images: string[] = [servImg1.src, servImg2.src, servImg3.src, servImg4.src, servImg5.src];

  return (
    <section id="service" className="section">
      <div className="section-wrapper block">
        <div className="content-1300">
          <div className="row">
            <div className="one-half width-55">
              <div className="services-wrapper grid md:grid-cols-2 grid-cols-1 gap-6">
                {data.length > 0 && data.map((serv, i) => (
                  <div key={'serv-' + i} className='service-holder w-full'>
                    <img src={serv.image.url} className='w-10 h-10' alt={serv.image.url} />
                    <h4 className="service-title pt-0">{serv.name}</h4>
                    <div className="service-text">{serv.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="one-half width-40 last">
              <h2 className="entry-title section-title">{serviceData.title}</h2>
              <p className="section-info">{aboutData.subTitle}</p>
              <p className="mt-8">{aboutData.description}</p>

              <div className="button-group-wrapper">
                <a className="button">Download CV</a>
                <a href="#portfolio" className="button">
                  Check My Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
