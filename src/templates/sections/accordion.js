import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Collapse from 'rc-collapse';
import 'rc-collapse/assets/index.css';

const AccordionTemplate = ({ title, accordion_items }) => (
  <section className="main style1">
    <div className="grid-wrapper">
      {title && (
        <div className="col-12 align-center">
          <header className="major">
            <h2>{title}</h2>
          </header>
        </div>
      )}
      <div className="col-12">
        <Collapse accordion={true} className="faq-accordion">
          {accordion_items.map((item) => (
            <Collapse.Panel key={item.label} header={item.label}>
              <ReactMarkdown source={item.content} />
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
    </div>
  </section>
);

AccordionTemplate.propTypes = {
  title: PropTypes.string,
}

export default AccordionTemplate;