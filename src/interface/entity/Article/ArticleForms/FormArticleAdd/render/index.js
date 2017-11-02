/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'
import {
  FieldsEntityName,
  FieldsContact,
  FieldsBiography,
  FieldsMetadata,
} from 'foundry'

import StyleFormDefault from 'static/style/StyleFormDefault'
/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => {
if(!props.initialValues.userId) return null
return <FormBase {...props} bg='white' p={10} >
  <Field 
    name="userId"
    placeholder="Name"
    component={ReduxField}
    type="text"
  />
  <FieldsEntityName {...StyleFormDefault}/>
  <Heading level={[3]} f={[3]}>Article Metadata</Heading>
  <FieldsMetadata {...StyleFormDefault}/>
  <Heading level={[3]} f={[3]}>Contact Information</Heading>
  <FieldsContact {...StyleFormDefault}/>
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Add New Article</Button>
</FormBase>
}