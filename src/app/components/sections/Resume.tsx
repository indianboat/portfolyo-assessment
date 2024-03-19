// Images
import signature from '../../assets/images/signature2.png';

// Data
import resumeData from '../../data/resume.json';
import { markdownToHTML } from '../../utils/converter';

// -------------
type ExperienceTypes = {
  data: [
    {
      company_name: string,
      summary: string,
      startDate: Date,
      endDate: Date,
      jobTitle: string,
      jobLocation: string
    }
  ],
}

function Resume({ data }: ExperienceTypes) {
  return (
    <section id="resume" className="section">
      <div className="section-wrapper block">
        <div className="content-1300">
          <div className="row">
            <div className="one-half width-55">
              <h2 className="entry-title section-title">
                {resumeData.experience.title}
              </h2>

              <ul className="timeline-holder">
                {
                  data && data.length > 0 && data.map((exp, i) => (
                    <li key={'exp-' + i} className="timeline-event">
                      <span className="timeline-circle"></span>
                      <div className="timeline-event-content">
                        <div className="flex justify-between items-center">
                          <p className='text-lg italic font-semibold'>{exp.company_name}</p>
                          <p className='text-sm'>{new Date(exp.startDate).getFullYear()} - {new Date(exp.endDate).getFullYear()}</p>
                        </div>
                        <p className='font-semibold mb-1.5'>Worked as {exp.jobTitle}</p>
                        <div
                          className=""
                          dangerouslySetInnerHTML={{
                            __html: markdownToHTML(exp.summary),
                          }}>
                        </div>
                      </div>
                      <div className="timeline-event-date">{new Date(exp.startDate).getFullYear()}</div>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="one-half width-40 last">
              <h2 className="entry-title section-title">
                {resumeData.coverLetter.title}
              </h2>
              <p className="section-info">
                {resumeData.coverLetter.description}
              </p>
              {resumeData.coverLetter.paragraphes.map((parg, i) => (
                <p key={'parg-' + i}>{parg}</p>
              ))}

              <img className="my-signature" src={signature.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
