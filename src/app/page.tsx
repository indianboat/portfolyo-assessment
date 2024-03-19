"use client";

import { useEffect, useState } from 'react';

// Sections
import HomeSection from './components/sections/Home';
import Service from './components/sections/Service';
// Components
import Loader from './components/Loader';
import Portfolio from './components/sections/portfolio';
import Resume from './components/sections/Resume';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import { getUser } from './store/getUser';
import Testimonials from './components/sections/Testimonials';

export default function Home() {

  const [loading, setLoading] = useState<boolean>(true);
  const [fadeOffLoader, setFadeOffLoader] = useState<boolean>(false);

  useEffect(() => {
    const loaderTimer = setTimeout(handleLoad, 750);
    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);

  const handleLoad = () => {
    setFadeOffLoader(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const { data, isLoading, fetchUserDetails } = getUser();

  useEffect(() => {
    fetchUserDetails('65b3a22c01d900e96c4219ae');
  }, []);

  const aboutData: any = data?.user?.about;
  const serviceData: any = data?.user?.services;
  const socialData: any = data?.user?.social_handles;
  const projectsData: any = data?.user?.projects;
  const skillsData: any = data?.user?.skills;
  const experienceData: any = data?.user?.timeline;
  const testimonialsData: any = data?.user?.testimonials;

  return (
    <>
      {loading || isLoading ? <Loader fadeOffLoader={fadeOffLoader} /> : <></>}

      <div>
        <div className="content-right">
          <div className="content-right-wrapper">
            <HomeSection data={aboutData || {}} socialData={socialData || []} />
            <Service data={serviceData || {}} aboutData={aboutData || {}} />
            <Portfolio data={projectsData || []} />
            <Resume data={experienceData || []} />
            <Skills data={skillsData || []} />
            <Testimonials data={testimonialsData || []} />
            <Contact data={aboutData || {}} />
          </div>
        </div>
      </div>
    </>
  );
}
