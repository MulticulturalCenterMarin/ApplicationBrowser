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
      <Field
        type="textarea"
        name="contentBody"
        component={ReduxField}
        mt={[10]}
        {...props.fields} />
    </Box>
  </FieldCollectionWrapper>
)

FieldCollectionPersonBiography.defaultProps = {
  fields: {}
}

export default FieldCollectionPersonBiography
