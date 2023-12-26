import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';

const Carousel = ({images}: {images: string[]}) => {
  const [photoIndex, setPhotoIndex] = useState(1);
  const [animationKey, setAnimationKey] = useState(0);
  const [time, setTime] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (photoIndex < images.length - 1) {
        setPhotoIndex(photoIndex + 1);
      } else {
        setPhotoIndex(0);
      }
      setAnimationKey(animationKey + 1);
      setTime(5);
    }, time * 1000);
    return () => clearTimeout(timer);
  }, [photoIndex, images]);

  const nextPhoto = () => {
    if (photoIndex < images.length - 1) {
      setPhotoIndex(photoIndex + 1);
    } else {
      setPhotoIndex(0);
    }
    setAnimationKey(animationKey + 1);
    setTime(10);
  };

  const prevPhoto = () => {
    if (photoIndex > 0) {
      setPhotoIndex(photoIndex - 1);
    } else {
      setPhotoIndex(images.length - 1);
    }
    setAnimationKey(animationKey + 1);
    setTime(10);
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', gap: 10, margin: 0}}>
      <button className='previous-button buttons' onClick={prevPhoto}>{`<`}</button>
      <div
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}
      >
        <div style={{width: 400, height: 400, objectFit: 'cover'}}>
          {images.map((img: string, index: number) => {
            return (
              <img
                key={index}
                src={img}
                alt={`image-${index}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: photoIndex !== index ? 'none' : 'block',
                }}
              />
            );
          })}
        </div>
        <div
          style={{
            height: 50,
            width: 300,
            backgroundColor: 'gray',
            borderRadius: 10,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {images.map((_a, index) => {
            return (
              <div
                key={index}
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: index !== photoIndex ? 'black' : 'white',
                  borderRadius: 50,
                }}
                onClick={() => setPhotoIndex(index)}
              ></div>
            );
          })}
        </div>
      </div>
      <button className='next-button buttons' onClick={nextPhoto}>
        <p className='span'>{`>`}</p>
        <motion.div
          className='progressBar'
          key={animationKey}
          animate={{
            width: `100%`,
            transitionEnd: {
              width: '0%',
            },
          }}
          transition={{
            duration: time,
          }}
        />
      </button>
    </div>
  );
};

export default Carousel;
