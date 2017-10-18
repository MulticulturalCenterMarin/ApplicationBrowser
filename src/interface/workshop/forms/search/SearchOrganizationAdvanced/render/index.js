/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Block } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import normalizePhone from 'logic/forms/normalize/phone'
import { ReduxField } from 'atomic'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'

import {
  NameFieldCollection,
  FieldsOrganizationName,
  ContactFieldCollection,
  AddressFieldCollection,
  FieldsOrganizationMetadata,
} from 'containers'

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = Block

FormWrapper.defaultProps = {
  is: 'form'
}

/* ---------------------------- Form Component ------------------------------ */
const FormElements = ({ handleSubmit, isSubmitting, layout } ) => {
  if(isSubmitting) return <div>Search</div>
  return (
    <FormWrapper  {...layout}>
      <Box className='formProps' >
        <Field name="hidden"component={ReduxField} type="hidden" />
      </Box>
      
      <Box className='form' >
        <Box>
          <Heading level={[3]} f={[3]} mt={[15]}>Name</Heading>
          <Field name="searchOrganizationName" placeholder="Name" component={ReduxField} type="text" />
          <Field name="searchOrganizationNameLegal" placeholder="Legal Name" component={ReduxField} type="text" mt={[10]} />
        </Box>
        <Box>
          <FieldsOrganizationMetadata/>
        </Box>      
        <Box>
          <Heading level={[3]} f={[3]} mt={[15]}>Addresss</Heading>
          <Field name="searchAddressCity" placeholder="City" component={ReduxField} type="text" />
          <Field name="searchAddressCounty" placeholder="County" component={ReduxField} type="text" mt={[10]} normalize={normalizePhone} />
          <Field name="searchAddressZip" placeholder="Zip" component={ReduxField} type="text" mt={[10]} normalize={normalizePhone} />
        </Box>
        <Box mt={10} >
          <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
        </Box>
      </Box>

    </FormWrapper>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

FormElements.defaultProps = {
  is: 'form',
}

export default FormElements
