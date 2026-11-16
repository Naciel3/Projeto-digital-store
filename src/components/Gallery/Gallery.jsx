import { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import './Gallery.css';

function Gallery({ className = '', width, height, radius, showThumbs = false, images }) {
  const [index, setIndex] = useState(0);
  const last = images.length - 1;

  return (
    <div className={`gallery ${className}`} style={{ width, maxWidth: '100%' }}>
      <div className="gallery-viewport" style={{ height, borderRadius: radius }}>
        <div
          className="gallery-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image, i) => (
            <img key={image.src} src={image.src} alt={`Imagem ${i + 1}`} />
          ))}
        </div>

        <button
          className="gallery-arrow left"
          aria-label="Imagem anterior"
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
        >
          <img src={arrowLeft} alt="" />
        </button>

        <button
          className="gallery-arrow right"
          aria-label="Próxima imagem"
          disabled={index === last}
          onClick={() => setIndex(index + 1)}
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((image, i) => (
            <button
              key={image.src}
              className={i === index ? 'active' : ''}
              onClick={() => setIndex(i)}
              aria-label={`Ver imagem ${i + 1}`}
            >
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;