import React from 'react'
import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
  
    const slides= [
        {
            url :'https://images.indianexpress.com/2023/12/aattam-movie-review-new.jpg'
            
         },
        {
            url : 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/18BDEBDB3B792A8C41C6A2C392BA2E8EF5D576046CDE7B8C52F8F0707B351DEB/scale?width=1200&aspectRatio=1.78&format=webp'
        },
        {
            url:'https://www.nowrunning.com/content/movie/2023/joe-28934/bg_jio.jpg'
        },{
            url:'https://images.ctfassets.net/9mz5xx7mqy8x/7iO2bMnnl5Xx3GlrFd9wNa/d336ecf2e3d7b07742872e2a48afafcd/MI_Movie_Theater_Event_846x456.png'
        },{
            url:'https://i.ytimg.com/vi/COv52Qyctws/maxresdefault.jpg'
        }
    ]
  return (
    <div className='w-[100%]  h-[30rem] max-w-[1400px] '>
        <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banner