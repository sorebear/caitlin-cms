import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export const OneColumnTemplate = ({ title, bg_image, sub_title, column_one }) => (
  <section
    id="two"
    className={`main ${bg_image ? 'style2' : 'style3'}`}
    style={{ backgroundImage: bg_image ? `url(${bg_image.childImageSharp.fluid.src})` : '' }}
  >
    <div className="grid-wrapper">
      { title && (
        <div className="col-12">
          <header className="major align-center">
            <h2>{title}</h2>
            { sub_title && (
              <p>{sub_title}</p>
            )}
          </header>
        </div>
      )}
      <div className="col-12">
        <ReactMarkdown source={column_one} />
      </div>
    </div>
  </section>
);

OneColumnTemplate.propTypes = {
  title: PropTypes.string,
  sub_title: PropTypes.string,
  column_one: PropTypes.string.isRequired,
};

export default OneColumnTemplate;
