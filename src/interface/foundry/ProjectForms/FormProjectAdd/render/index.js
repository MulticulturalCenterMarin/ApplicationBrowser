/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box, Button
} from 'atomic'

import ReduxField from 'organisms/ReduxField'

import {
  FieldsContact,
  FieldsProjectName,
  FieldsProjectMetadata,
} from 'containers'
/* --------------------------- Styled Components ---------------------------- */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, match } = props
  return (
    <Box {...props}>
      <FieldsProjectName wrap='wrap' {...props.styleWrapper} fieldStyle={props.styleFields} />
      <FieldsContact wrap='wrap' mt={[10,15]} {...props.styleWrapper} fieldStyle={props.styleFields} />
      <FieldsProjectMetadata wrap='wrap' {...props.styleWrapper} fieldStyle={props.styleFields} />
      <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Add New Project</Button>
    </Box>
  )
}

FormElements.defaultProps = {
  is: "form",
  styleFields: {
    w: 1,
    my: [5]
  },
  styleWrapper: {
    p: 10,
    my:[10]
  }
}
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
