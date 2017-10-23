/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'
import {
  FieldsContact,
  FieldsProjectName,
  FieldsProjectMetadata,
} from 'foundry'
/* --------------------------- Styled Components ---------------------------- */
const defaultFormStyle = {
    styledFieldOuter: {
      align:'center',
      p:10,
    },
    styledField:{
      br: 5,
    },
    styledInput:{
      bs: 1,
      br: 5,
    },
    styledWrapper:{
      w:1,
    }
}
export default ({handleSubmit, isSubmitting, match, ...props}) => (
<FormBase {...props} bg='white' p={10} >
  <FieldsProjectName {...defaultFormStyle}/>
  <Heading level={[3]} f={[3]}>Project Metadata</Heading>
  <FieldsProjectMetadata {...defaultFormStyle}/>
  <Heading level={[3]} f={[3]}>Contact Information</Heading>
  <FieldsContact {...defaultFormStyle}/>
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Add New Project</Button>
</FormBase>
)

