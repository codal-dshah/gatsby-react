import React from 'react';
import ReactDOM from 'react-dom/client'; // Gatsby v5+
import TestimonialSlider from './TestimonialSlider';

export const injectTestimonialSlider = () => {
  const container = document.getElementById('testimonial-slider-root');

  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<TestimonialSlider />);
  }
};
