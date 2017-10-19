/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

import ReduxField from 'organisms/ReduxField'

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
const fieldStyle = {
  w: 1,
  mb: [10]
}
const wrapperStyle = {
  mb: [10]
}
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, match } = props

  return (
    <Box {...props}>
      <FieldsProjectName wrap='wrap' {...wrapperStyle} fieldStyle={fieldStyle} />

      <Flex direction={['column', 'row']} >
        <Box w={[1,1,0.475]} mr={[0,0, '5%']} bs={[0]} p={[10,15,25]}>
          <Heading level={[3]} f={[3]}>Tagging + Metadata</Heading>
          <HorizontalRule bs={0} h={2} bi='blue' mx={0} w={[0.075]} />
          <FieldsProjectMetadata mt={[10,15]} {...wrapperStyle} fieldStyle={fieldStyle} />
        </Box>
        <Box w={[1,1,0.475]} bs={[0]} p={[10,15,25]}>
          <Heading level={[3]} f={[3]}>Settings</Heading>
          <HorizontalRule bs={0} h={2} bi='blue' mx={0} w={[0.075]} />
          <FieldsProjectSettings mt={[10,15]} {...wrapperStyle} fieldStyle={fieldStyle} />
        </Box>
      </Flex>

      <Box w={[1]} mt={[15,25]} bs={[0]} p={[10,15,25]}>
        <Heading level={[3]} f={[5]}>Overview</Heading>
        <HorizontalRule bs={2} h={2} bi='blue' mx={0} w={[0.075]} />
        <FieldCollectionProjectBiography mt={[10,15]} {...wrapperStyle} fieldStyle={fieldStyle} />
      </Box>
      <Box w={[1]} mt={[15,25]} bs={[0]} p={[10,15,25]}>
        <Heading level={[3]} f={[5]}>Details</Heading>
        <Heading level={[3]} f={[2]}>Address</Heading>
        <HorizontalRule bs={2} h={2} bi='blue' mx={0} w={[0.075]} />
        <AddressFieldCollection mt={[10,15]} {...wrapperStyle} fieldStyle={fieldStyle} />
        <Heading level={[3]} f={[2]}>Contact</Heading>
        <HorizontalRule bs={2} h={2} bi='blue' mx={0} w={[0.075]} />
        <ContactFieldCollection wrap='wrap' mt={[10,15]} {...wrapperStyle} fieldStyle={fieldStyle} />
      </Box>
      <Button type="submit" onClick={handleSubmit} gradient='cherry' mt={[10,15]} w={1} >Submit</Button>
    </Box>
  )
}

FormElements.defaultProps = {
  is: "form",
}
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
