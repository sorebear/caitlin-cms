import React from 'react';
import PropTypes from 'prop-types';

const getColumnWidthClass = (numOfColumns) => {
  switch (numOfColumns) {
    case 1:
      return 'col-12';
    case 2:
      return 'col-6';
    case 3:
    case 5:
    case 6:
      return 'col-4';
    default:
      return 'col-3';
  }
};

export const Testimonials = ({ title, testimonials }) => {
  const colClass = getColumnWidthClass(testimonials.length);
  return (
    <section id="three" className="main style1 special">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major align-center">
            <h2>{title}</h2>
          </header>
        </div>
        {testimonials.map((testimonial) => (
          <div key={testimonial.image} className={colClass}>
            <span className="image fit max-width-350">
              <img src={testimonial.image} alt={testimonial.name} />
              <h3 style={{ marginBottom: 0 }}>{testimonial.name}</h3>
              <p style={{ opacity: .65 }}>
                <em>
                  {testimonial.about}
                </em>
              </p>
              <p>{testimonial.quotation}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
};

Testimonials.propTypes = {
  title: PropTypes.string.isRequired,
  testimonials: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    about: PropTypes.string,
    quotation: PropTypes.string,
  })).isRequired,
};

export default Testimonials;
