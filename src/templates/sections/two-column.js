import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

const TwoColumnTemplate = ({ title, column_one, column_two }) => (
  <section id="two" className="main style3">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major align-center">
          <h2>{title}</h2>
        </header>
      </div>
      <div className="col-6">
        <ReactMarkdown source={column_one} />
      </div>
      <div className="col-6">
        <ReactMarkdown source={column_two} />
      </div>
    </div>
  </section>
);

TwoColumnTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  column_one: PropTypes.string.isRequired,
  column_two: PropTypes.string.isRequired,
}

export default TwoColumnTemplate;