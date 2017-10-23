/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import { Flex, Box, Button, Heading, ReduxField }from 'atomic'

import {
  FieldsContact,
  FieldsProjectName,
  FieldsProjectMetadata,
  FieldCollectionProjectBiography
} from 'foundry'
/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => (
<FormBase {...props}>
  <FieldsProjectName/>
  <Heading level={[3]} f={[3]}>Metadata</Heading>
  <FieldsProjectMetadata/>
  <Heading level={[3]} f={[3]}>Overview</Heading>
  <FieldCollectionProjectBiography />
  <Heading level={[3]} f={[3]}>Contact</Heading>
  <FieldsContact/>
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Submit</Button>
</FormBase>
)
