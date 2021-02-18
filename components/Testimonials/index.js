import Image from "next/image";

import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./styles.module.scss";

export default function Testimonials({ testimonials }) {
  SwiperCore.use([Pagination]);

  if (!testimonials?.length) {
    return null;
  }

  // bulletActiveClass: styles["active-testimonial"],

  return (
    <Swiper slidesPerView={1} pagination={{ clickable: true, bulletActiveClass: styles["active-testimonial"] }} loop>
      {testimonials.map(({ id, testimonial, author }) => (
        <SwiperSlide key={id}>
          <div className="flex flex-col flex-1 p-8 items-stretch cursor-move">
            <div className="self-center md:self-start">
              <Image src="/quote_open.svg" alt="Open quote" width={75} height={75} />
            </div>
            <div className="flex flex-col flex-1 items-stretch">
              <div className="flex-1 text-center font-medium">{testimonial}</div>
              <div className="flex flex-1 justify-center mt-4 text-right">
                <span className="italic text-sm">{author}</span>
              </div>
            </div>
            <div className="self-center mt-2 md:mt-0 md:self-end">
              <Image src="/quote_close.svg" alt="Close quote" width={75} height={75} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
