import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate } from '../../templates/page'

const HomePagePreview = ({ entry, widgetFor }) => {
  const entrySections = entry.getIn(['data', 'sections'])
  const sections = entrySections ? entrySections.toJS() : []
  console.log('Sections', sections);

  return (
    <PageTemplate
      // title={entry.getIn(['data', 'title'])}
      // content={widgetFor('body')}
      sections={sections}
    />
  );
}

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HomePagePreview;
