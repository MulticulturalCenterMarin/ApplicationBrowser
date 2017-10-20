/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete,
  Checkbox
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box, ReduxField } from 'atomic'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'

const SelectDropdown = styled(Field)`
  height: fit-content;

  label {
    top: 20px !important;
  }
  input {
    margin-top: 0 !important;
  }
`

/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = props => (
  <Flex direction={['column']} justify="space-evenly" {...props} >
    <Box flex='2 1 auto' {...props.fieldStyle}>
      <Field name="metaRepoURL" placeholder="Repository URL" component={ReduxField} type="text" {...props.fields} />
    </Box>
    <Box flex='3 1 auto' {...props.fieldStyle}>
      <Field name="metaProjectURL" placeholder="Project URL" component={ReduxField} type="text" {...props.fields} />
    </Box>
    <Box flex='3 1 auto' {...props.fieldStyle}>
      <Field name="metaVideoURL" placeholder="Video URL (Youtube)" component={ReduxField} type="text" {...props.fields} />
    </Box>
  </Flex>
)

FieldCollectionComponent.defaultProps = {
  fields: {}
}

export default FieldCollectionComponent
