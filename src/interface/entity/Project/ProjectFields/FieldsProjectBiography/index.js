/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'


/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionPersonBiography = props => (
  <FieldCollectionWrapper direction={['column']}  wrap='wrap' {...props} w={1} >
    <Box w={1} mt={[15]}>
      <Field name="biographyMission" placeholder="Mission: What is the primary mission in the Entity story?" component={ReduxField} type="textarea" mt={[10]}  {...props.fields} />
    </Box>
    <Box w={1} mt={[15]}>
      <Field name="biographyObjective" placeholder="Objective: What are the tangible objectives correlated with the Entity story?" component={ReduxField} type="textarea" mt={[10]} {...props.fields} />
    </Box>
    <Box w={1} mt={[15]}>
      <Field name="biographySummary" placeholder="Summary: Easy to understand summary (elevator pitch) for the Entity story." component={ReduxField} mt={[10]} type="textarea" {...props.fields} />
    </Box>
  </FieldCollectionWrapper>
)

FieldCollectionPersonBiography.defaultProps = {
  fields: {}
}

export default FieldCollectionPersonBiography
