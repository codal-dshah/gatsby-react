import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './testimonials.css'; // Import CSS file

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch('http://localhost/wordpress-headless-1/wp-json/wp/v2/testimonial') // change if needed
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error('Error loading testimonials', err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  if (!testimonials.length) return <p>Loading testimonials...</p>;

  return (
    <div className="testimonial-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <h3>{testimonial.title.rendered}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: testimonial.content.rendered }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
