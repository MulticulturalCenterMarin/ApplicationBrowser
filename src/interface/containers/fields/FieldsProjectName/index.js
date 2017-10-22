/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'


/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = props => (
  <FieldCollectionWrapper direction={['column', 'row']} justify="space-evenly" {...props} >
    <Box flex='2 1 auto' {...props.fieldStyle}>
      <Field 
        name="nameProject"
        placeholder="Project Name"
        component={ReduxField}
        type="text"
        color='blue'
        mh={50}
        f={[4]}
        fw='700'
        {...props.fields} 
      />
    </Box>
    <Box flex='3 1 auto' {...props.fieldStyle}>
      <Field
        name="nameProjectAlias"
        placeholder="Alias (Codename)"
        component={ReduxField}
        type="text"
        color='gray'
        mh={30}
        f={[1]}
        {...props.fields} 
      />
    </Box>
  </FieldCollectionWrapper>
)

FieldCollectionComponent.defaultProps = {
  fields: {}
}

export default FieldCollectionComponent
