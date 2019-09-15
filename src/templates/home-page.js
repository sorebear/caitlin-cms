import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import ReactMarkdown from 'react-markdown';
import Collapse from 'rc-collapse';
import 'rc-collapse/assets/index.css';

import Content, { HTMLContent } from '../components/Content'

export const TwoColumnMdTemplate = ({ title, column_one, column_two }) => {
  console.log(title, column_one, column_two);
  return (
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
  )
}

export const OneColumnMdTemplate = ({ title, column_one }) => (
  <section id="two" className="main style3">
    <div className="grid-wrapper">
      <div className="col-12">
        <header className="major align-center">
          <h2>{title}</h2>
        </header>
      </div>
      <div className="col-12">
        <ReactMarkdown source={column_one} />
      </div>
    </div>
  </section>
);

export const AccordionTemplate = ({ title, accordion_items }) => (
  <section className="main style1">
    <div className="grid-wrapper">
      <div className="col-12 align-center">
        <header className="major">
          <h2>{title}</h2>
        </header>
      </div>
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

export const PageTemplate = ({ sections }) => (
  sections.map((section) => {
    switch (section.type) {
      case 'two_column_md':
        return (
          <TwoColumnMdTemplate key={section.title} {...section} />
        );
      case 'one_column_md':
        return (
          <OneColumnMdTemplate key={section.title} {...section} />
        );
      case 'accordion':
        return (
          <AccordionTemplate key={section.title} {...section} />
        );
      default:
        return <span key={section.title} />;
    }
  })
);

const HomePage = ({ data }) => {
  console.log('data', data);
  const { sections } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <PageTemplate sections={sections} />
    </Layout>
  );
}  

export default HomePage;

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        sections {
          type
          title
          column_one
          column_two
          accordion_items {
            label
            content
          }
        }
      }
    }
  }
`
