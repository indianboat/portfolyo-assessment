// Data
import homeData from '../../data/home.json';

// ---------------
type HomeSectionProps = {
  data: {
    name: string,
    description: string,
    avatar: { url: string }
  },
  socialData: [{
    platform: string,
    url: string
  }]
}

function Home({ data, socialData }: HomeSectionProps) {

  return (
    <section id="home" className="section full-width-section">
      <div className="section-wrapper block">
        <div className="home-left-part">
          <p className="site-des">{homeData.welcomeText}</p>
          <h1 className="entry-title">{data?.name}</h1>
          <p className="site-info">{data?.description}</p>

          <div className="social-links grid md:grid-cols-2 grid-cols-2 gap-6 mt-6 md:p-7 pt-7">
            {socialData.map((link, i) => (
              <a className='uppercase' key={'social-link-' + i} href={link.url}>
                {link.platform}
              </a>
            ))}
          </div>
        </div>
        <div className="home-right-part">
          {
            data && <img className='w-full h-auto aspect-auto' src={data?.avatar?.url} width={1400} height={1400} alt='user-image' />
          }
        </div>
      </div>
    </section>
  );
}

export default Home;
