/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import { Flex, Box, Button, ReduxField } from 'atomic'
import {
  FieldsContact,
  FieldsProjectName,
  FieldsProjectMetadata,
} from 'containers'
/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => (
<FormBase {...props} bg='white' p={10} >
  <FieldsProjectName/>
  <FieldsContact/>
  <FieldsProjectMetadata />
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Add New Project</Button>
</FormBase>
)

