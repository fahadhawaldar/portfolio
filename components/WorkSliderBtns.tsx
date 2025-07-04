"use client";

import { useSwiper } from "swiper/react";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type Props = {
  containerStyles?: string;
  btnStyles?: string;
  iconStyles?: string;
};

export default function WorkSliderBtns({
  containerStyles,
  btnStyles,
  iconStyles,
}: Props) {
  const swiper = useSwiper();
  function nextSlide() {
    swiper.slideNext();
  }
  function prevSlide() {
    swiper.slidePrev();
  }
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <PiCaretLeftBold className={iconStyles} onClick={prevSlide} />
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold className={iconStyles} onClick={nextSlide} />
      </button>
    </div>
  );
}
