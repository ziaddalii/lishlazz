"use client";
// Swiper js
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { ReactNode } from "react";

import { GlobalInterface } from "@/interfaces/global.interface";

interface SlidesPerviewProps {
    slides: ReactNode[];
    slidesPerView: {
        lg?: number;
        md?: number;
        sm?: number;
        main: number;
    };
    spaceBetween: {
        lg?: number;
        md?: number;
        sm?: number;
        main: number;
    };
    pagination?: boolean;
    navigation?: boolean;
    autoplay?: {
        delay: number;
        disableOnInteraction: boolean;
    };
    loop?: boolean;
}
export const SlidesPerviewCarousel = ({
    slides,
    slidesPerView,
    spaceBetween,
    pagination,
    navigation,
    autoplay,
    loop,
}: SlidesPerviewProps) => {
    return (
        <>
            <Swiper
                slidesPerView={slidesPerView.main}
                spaceBetween={spaceBetween.main}
                breakpoints={{
                    0: {
                        slidesPerView: slidesPerView.main,
                        spaceBetween: spaceBetween.main,
                    },
                    565: {
                        slidesPerView: slidesPerView.sm ? slidesPerView.sm : slidesPerView.main,
                        spaceBetween: spaceBetween.sm ? spaceBetween.sm : spaceBetween.main,
                    },
                    768: {
                        slidesPerView: slidesPerView.md ? slidesPerView.md : slidesPerView.main,
                        spaceBetween: spaceBetween.md ? spaceBetween.md : spaceBetween.main,
                    },
                    1024: {
                        slidesPerView: slidesPerView.lg ? slidesPerView.lg : slidesPerView.main,
                        spaceBetween: spaceBetween.lg ? spaceBetween.lg : spaceBetween.main,
                    },
                }}
                navigation={navigation ? navigation : true}
                pagination={pagination === true ? { clickable: true } : false}
                autoplay={
                    autoplay
                        ? {
                              delay: autoplay.delay,
                              disableOnInteraction: autoplay.disableOnInteraction,
                          }
                        : false
                }
                loop={loop ? loop : false}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper SlidesPerviewCarousel"
            >
                {slides.map((slide, i) => {
                    return <SwiperSlide key={i}>{slide}</SwiperSlide>;
                })}
            </Swiper>
        </>
    );
};

interface AutoSlidesProps {
    slides: ReactNode[];
}
export const AutoSlidesPerviewCarousel = ({ slides }: AutoSlidesProps) => {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper AutoSlidesPerviewCarousel"
            >
                {slides.map((slide, i) => {
                    return <SwiperSlide key={i}>{slide}</SwiperSlide>;
                })}
            </Swiper>
        </>
    );
};
