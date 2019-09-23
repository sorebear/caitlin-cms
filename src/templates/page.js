import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


import Content, { HTMLContent } from '../components/Content'
import TwoColumnTemplate from './sections/two-column';
import OneColumnTemplate from './sections/one-column';
import AccordionTemplate from './sections/accordion';
import Testimonials from './sections/testimonials';
import OneColumnBgImage from './sections/one-column-bg-image';

export const PageTemplate = ({ sections }) => (
  sections.map((section, index) => {
    switch (section.type) {
      case 'two_column_md':
        return (
          <TwoColumnTemplate key={`page-section-${index}`} {...section} />
        );
      case 'one_column_md':
        return (
          <OneColumnTemplate key={`page-section-${index}`} {...section} />
        );
      case 'accordion':
        return (
          <AccordionTemplate key={`page-section-${index}`} {...section} />
        );
      case 'testimonial_section':
        return (
          <Testimonials key={`page-section-${index}`} {...section} />
        );
      case 'one_column_bg_image':
        return (
          <OneColumnBgImage key={`page-section-${index}`} {...section} />
        );

      default:
        return <span key={`page-section-${index}`} />;
    }
  })
);

const Page = ({ data }) => {
  console.log('data', data);
  const { sections } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <PageTemplate sections={sections ? sections : []} />
    </Layout>
  );
}  

export default Page;

// Each Section Type Has To Appear Somewhere, or it will throw an error.
export const pageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        sections {
          type
          title
          sub_title
          bg_image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          column_one
          # column_two
          accordion_items {
            label
            content
          }
          testimonials {
            # image {
            #   childImageSharp {
            #     fluid(maxWidth: 2048, quality: 100) {
            #       ...GatsbyImageSharpFluid
            #     }
            #   }
            # }
            image
            name
            about
            quotation
          }
        }
      }
    }
  }
`
