"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

type TestimonialsProps = {
  data: [
    {
      image: { url: string },
      name: string,
      review: string,
      position: string
    }
  ]
}

const Testimonials = ({ data }: TestimonialsProps) => {

  // console.log(data);


  return (
    <>
      <section id="testimonials" className="section">
        <div className="section-wrapper block">
          <h2 className="entry-title section-title">Testimonial</h2>
          <div className="bg-transparent">
            <div className="">

              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {
                  data && data.length > 0 && data.map((testimonial, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="relative">
                          <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-12 mx-auto">

                            {/* Grid */}
                            <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
                              <div className="testimonial-image col-span-2">
                                <img
                                  className="rounded-xl"
                                  src={testimonial.image.url}
                                  alt="Image Description"
                                />
                              </div>
                              {/* End Col */}
                              <div className="lg:col-span-4">
                                {/* Blockquote */}
                                <blockquote>
                                  <p className="text-lg font-medium text-[#A88590]">
                                    {
                                      testimonial.review
                                    }
                                  </p>
                                  <footer className="mt-6">
                                    <div className="flex items-center">
                                      <div className="lg:hidden flex-shrink-0">
                                        <img
                                          className="size-12 rounded-full"
                                          src={testimonial.image.url}
                                          alt="Image Description"
                                        />
                                      </div>
                                      <div className="ms-4 lg:ms-0">
                                        <p className="text-lg font-medium text-[#bda2ab]">
                                          {testimonial.name}
                                        </p>
                                        <p className="text-sm font-light text-[#b894a0] italic">
                                          {testimonial.position}
                                        </p>
                                      </div>
                                    </div>
                                  </footer>
                                </blockquote>
                                {/* End Blockquote */}
                              </div>
                              {/* End Col */}
                            </div>
                            {/* End Grid */}
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>


            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default Testimonials