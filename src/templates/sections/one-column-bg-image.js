import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

export const OneColumnBgImageTemplate = ({ title, bg_image, column_one }) => (
  <section id="two" className="main style3" style={{ backgroundImage: bg_image }}>
    <div className="grid-wrapper">
      { title && (
        <div className="col-12">
          <header className="major align-center">
            <h2>{title}</h2>
          </header>
        </div>
      )}
      <div className="col-12">
        <ReactMarkdown source={column_one} />
      </div>
    </div>
  </section>
);

OneColumnBgImageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  column_one: PropTypes.string.isRequired,
};

export default OneColumnBgImageTemplate;
