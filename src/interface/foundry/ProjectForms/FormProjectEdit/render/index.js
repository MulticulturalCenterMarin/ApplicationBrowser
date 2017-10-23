/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import { Flex, Box, Button, Container, Heading, HorizontalRule, ReduxField }from 'atomic'
import {
  NameFieldCollection,
  FieldsProjectName,
  ContactFieldCollection,
  AddressFieldCollection,
  FieldsProjectMetadata,
  FieldsProjectSettings,
  FieldCollectionProjectBiography,
} from 'containers'

/* --------------------------- Styled Components ---------------------------- */
export default ({handleSubmit, isSubmitting, match, ...props}) => (
<FormBase {...props}>


  <FieldsProjectName foundry={'FormCard'} 
  styledFieldOuter={{
      w:0.5,
      direction: ['column', 'column', 'row'],
      p: 10,
      wrap:'wrap',}}
      styledField={{
        w:1
      }}
    />

  <FieldsProjectMetadata 
    foundry={'FormCard'} 
    styledFieldOuter={{
        float: 'left',
        direction: ['column', 'column', 'row'],
        p: 10,
        w:0.5,
        wrap:'wrap',}}
        styledField={{
          w:1
        }}
  />
  <FieldsProjectSettings 
    foundry={'FormCard'} 
    styledFieldOuter={{
        float: 'left',
        w:0.5,
        direction: ['column', 'column', 'row'],
        p: 10,
        wrap:'wrap',}}
        styledField={{
          w:1
        }}
  />
  
  <Flex direction={['column', 'row']} >
    <Box w={[1,1,0.475]} mr={[0,0, '5%']} bs={[0]} p={[10,15,25]}>
      <Heading level={[3]} f={[3]}>Tagging + Metadata</Heading>
      <HorizontalRule bs={0} h={2} bi='blue' mx={0} w={[0.075]} />
      <FieldsProjectMetadata {...props} />
    </Box>
    <Box w={[1,1,0.475]} bs={[0]} p={[10,15,25]}>
      <Heading level={[3]} f={[3]}>Settings</Heading>
      <HorizontalRule bs={0} h={2} bi='blue' mx={0} w={[0.075]} />
      <FieldsProjectSettings />
    </Box>
  </Flex>

  <FieldCollectionProjectBiography foundry={'FormCard'}  />
  <AddressFieldCollection foundry={'FormCard'}  />
  <ContactFieldCollection foundry={'FormCard'}  />
  <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Submit</Button>
</FormBase>
)
