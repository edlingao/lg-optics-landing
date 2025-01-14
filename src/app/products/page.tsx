"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

export default function Products() {
    const glassesRoute = "/glasses/prescription-lenses";
    const sunglassesRoute = "/glasses/sunglasses";
    const blueRoute = "/glasses/blue-filter-lenses";


    const prescriptionGlasses = [`${glassesRoute}/glasses-1.png`,`${glassesRoute}/glasses-2.png`,`${glassesRoute}/glasses-3.png`,`${glassesRoute}/glasses-4.png`,`${glassesRoute}/glasses-5.png`,`${glassesRoute}/glasses-6.png`,`${glassesRoute}/glasses-7.png`,`${glassesRoute}/glasses-8.png`,`${glassesRoute}/glasses-9.png`,`${glassesRoute}/glasses-10.png`, `${glassesRoute}/glasses-11.png`];
    const sunglasses = [`${sunglassesRoute}/sunglasses-1.png`,`${sunglassesRoute}/sunglasses-2.png`,`${sunglassesRoute}/sunglasses-3.png`,`${sunglassesRoute}/sunglasses-4.png`,`${sunglassesRoute}/sunglasses-5.png`,`${sunglassesRoute}/sunglasses-6.png`,`${sunglassesRoute}/sunglasses-7.png`];
    const blueFilterLenses = [`${blueRoute}/blue-1.png`,`${blueRoute}/blue-2.png`,`${blueRoute}/blue-3.png`,`${blueRoute}/blue-4.png`,`${blueRoute}/blue-5.png`,`${blueRoute}/blue-6.png`,`${blueRoute}/blue-7.png`,`${blueRoute}/blue-8.png`,`${blueRoute}/blue-9.png`];

    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImages, setCurrentImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (images: string[], index: number) => {
        setCurrentImages(images);
        setCurrentIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentImages([]);
        setCurrentIndex(0);
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === currentImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? currentImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="w-full flex flex-col items-center sm:mt-[0px] text-primary md:h-[100vh] sm:h-[200vh]">
            <div className="flex flex-col justify-center items-center mt-8">
                <h3 className="font-bold text-4xl text-primary">Productos</h3>
            </div>

            <div className="flex md:flex-row sm:flex-col justify-center mt-8 w-full px-8 gap-8">
               
                <div className="md:w-[400px] sm:w-[350px]">
                    <h4 className="text-2xl font-bold mb-4 text-center">Lentes Graduados</h4>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {prescriptionGlasses.map((img, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={img}
                                    width={500}
                                    height={500}
                                    alt={`Lentes Graduados ${index}`}
                                    className="cursor-pointer"
                                    onClick={() => openModal(prescriptionGlasses, index)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="md:w-[400px] sm:w-[350px]">
                    <h4 className="text-2xl font-bold mb-4 text-center">Lentes de Sol</h4>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {sunglasses.map((img, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={img}
                                    width={500}
                                    height={500}
                                    alt={`Lentes de Sol ${index}`}
                                    className="cursor-pointer"
                                    onClick={() => openModal(sunglasses, index)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="md:w-[400px] sm:w-[350px]">
                    <h4 className="text-2xl font-bold mb-4 text-center">Lentes con Filtro Azul</h4>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {blueFilterLenses.map((img, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={img}
                                    width={500}
                                    height={500}
                                    alt={`Lentes con Filtro Azul ${index}`}
                                    className="cursor-pointer"
                                    onClick={() => openModal(blueFilterLenses, index)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <button
                        className="absolute top-4 right-4 text-white text-2xl"
                        onClick={closeModal}
                    >
                        <IoMdClose size={35} />
                    </button>
                    <div className="relative flex items-center justify-center">
                        <button
                            className="absolute left-[-50px] sm:left-[-30px] top-1/2 transform -translate-y-1/2 text-white text-3xl sm:text-2xl z-50"
                            onClick={prevImage}
                        >
                            <HiArrowSmLeft />
                        </button>
                        <Image
                            src={currentImages[currentIndex]}
                            width={500}
                            height={500}
                            alt={`Modal Image ${currentIndex}`}
                            className="object-contain md:max-w-full md:max-h-full sm:max-w-80"
                        />
                        <button
                            className="absolute right-[-50px] sm:right-[-30px] top-1/2 transform -translate-y-1/2 text-white text-3xl sm:text-2xl z-50"
                            onClick={nextImage}
                        >
                            <HiArrowSmRight />
                        </button>
                    </div>
                </div>
            
            )}

            <p className="font-bold  mt-12 text sm:w-[380px] md:w-[650px]">
                Encuentra más de nuestros productos en nuestra tienda física o en nuestras redes sociales.
            </p>
            <Link  href="/location" className="underline underline-offset-4 mt-4" >
                Conoce nuestra ubicación.
            </Link>
        </div>
    );
}
