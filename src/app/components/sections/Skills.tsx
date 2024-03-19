import { useRef, useEffect, useState } from 'react';

// Plugins
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Data
import skillsData from '../../data/skills.json';

// ------------------
type SkillsTypes = {
  data: [{
    name: string,
    percentage: number,
    image: {
      url: string
    }
  }]
}

function Skills({ data }: SkillsTypes) {

  const circleProgressBarRef = useRef<HTMLDivElement>(null);
  const [circleProgress, setCircleProgress] = useState<number[]>(
    new Array(skillsData.circleProgress.length).fill(0)
  );
  const normalProgressBarRef = useRef<HTMLDivElement>(null);
  const [normalProgress, setNormalProgress] = useState<number[]>(
    new Array(skillsData.horizontalProgress.length).fill(0)
  );

  useEffect(() => {
    if (circleProgressBarRef.current) {
      const progressBarYPosition = circleProgressBarRef.current!.getBoundingClientRect().top + window.scrollY;
      const handleScroll = () => {
        if (window.scrollY >= progressBarYPosition) {
          setCircleProgress(skillsData.circleProgress.map((progress) => progress.percentage));
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [circleProgress]);

  useEffect(() => {
    const progressBarYPosition = normalProgressBarRef.current!.getBoundingClientRect().top + window.scrollY;
    const handleScroll = () => {
      if (window.scrollY >= progressBarYPosition) {
        setNormalProgress(skillsData.horizontalProgress.map((progress) => progress.percentage));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [normalProgress]);


  return (
    <section id="skills" className="section">
      <div className="section-wrapper block">
        <div className="content-1300">
          <div className="row m-bottom-60">
            <h2 className="entry-title section-title">{skillsData.title}</h2>

            <div className="skill-circle-holder">
              {
                data && data.length > 0 && data.map((prog, i) => (
                  <div key={'circle-prog-' + i} className="skill-circle">
                    <div ref={circleProgressBarRef}>
                      <CircularProgressbar
                        value={prog.percentage}
                        text={`${prog.percentage}%`}
                        counterClockwise
                        strokeWidth={15}
                        styles={buildStyles({
                          textColor: '#F37B83',
                          textSize: 18,
                          pathColor: '#F37B83',
                          trailColor: '#554247',
                          strokeLinecap: 'butt',
                          pathTransitionDuration: 2,
                        })}
                      />
                    </div>
                    <p className="skill-circle-text">{prog.name}</p>
                  </div>
                )).slice(0, 9)
              }
            </div>
          </div>

          <div className="row w-full" ref={normalProgressBarRef}>
            <div className="px-6 w-full relative flex">
              <div className="skills-holder grid grid-cols-2 w-full">
                {
                  data.length > 0 && data.map((skill, i) => (
                    <div key={'skill-' + i} className="skill-holder">
                      <div className="skill-text">
                        <div className="skill">
                          <div
                            className="skill-fill"
                            style={{ width: `${skill.percentage}%` }}></div>
                        </div>
                        <span>{skill.name}</span>
                      </div>
                      <div className="skill-percent">{skill.percentage}%</div>
                    </div>
                  )).slice(0, 8)
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
