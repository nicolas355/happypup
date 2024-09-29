import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import anime from 'animejs';
import 'swiper/swiper-bundle.css';
import Btn from './Btn';

const Slider: React.FC = () => {
  const animationRef = useRef<any>(null);

  useEffect(() => {
    const titles = document.querySelectorAll('.slide-title');
    if (titles.length > 0) {
      titles.forEach((title) => {
        const letters = title.textContent?.split('');
        if (letters) {
          title.innerHTML = letters
            .map((letter) => `<span class="letter">${letter}</span>`)
            .join('');

          const spans = title.querySelectorAll('.letter');

          // Animación: letras desaparecen gradualmente
          animationRef.current = anime({
            targets: spans,
            opacity: [
              { value: 0, duration: 1500, easing: 'easeOutCubic' }, // Desaparece
              { value: 1, duration: 1500, easing: 'easeInCubic' }   // Aparece
            ],
            translateY: [
              { value: -10, duration: 300, easing: 'easeOutCubic' }, // Opcional: Mueve hacia arriba al desaparecer
              { value: 0, duration: 300, easing: 'easeInCubic' }      // Regresa a la posición original
            ],
            delay: anime.stagger(100), // Delay entre cada letra
            loop: true, // Repetir la animación
          });
        }
      });
    }
  }, []);

  const restartAnimation = () => {
    if (animationRef.current) {
      animationRef.current.restart();
    }
  };

  return (
    <div className="w-full mx-auto mt-6 grid md:grid-cols-10 gap-4 h-[600px]">
      <div className="col-span-7 h-full">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <div className="flex flex-col  justify-center h-full bg-cover bg-no-repeat  bg-center slider">
              <h3 className="slide-title max-w-[340px] leading-tight text-6xl font-extrabold text-black">Pet Food & Accessories</h3>
              <h4 className='font-light text-[23px]'>Of Fashion Clothes</h4>
              <Btn />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center h-full bg-cover bg-center slider2">
              <h3 className="slide-title max-w-[270px] leading-tight text-6xl font-extrabold text-black">Quality Ingredients</h3>
              <h4 className='font-light text-[23px]'>For Your Dear Pet</h4>
              <Btn />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center h-full bg-cover bg-center slider3">
              <h3 className="slide-title max-w-[270px] leading-tight text-6xl font-extrabold text-black">Free Delivery</h3>
              <h4 className='font-light text-[23px]'>On All Orders Over $50</h4>
              <Btn />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="col-span-3 md:flex flex-col gap-4 hidden  h-full">
        <div className="flex items-end justify-center slider4 bg-blue-500 text-white h-1/2">
          <div className='hover:text-white text-white w-[90%] p-2'>
            <a href="#" onClick={restartAnimation}>
              <h3 className="text-xl text-black uppercase text-center text-[18px] font-extrabold hover:text-white">New Arrivals</h3>
              <h4 className='text-[#22a7f0] text-[20px] text-center font-extrabold'>AT 20% OFF!</h4>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center bg-blue-300 text-white h-1/2">
          <h3 className="text-xl font-bold">Last Chance</h3>
        </div>
      </div>
    </div>
  );
};

export default Slider;