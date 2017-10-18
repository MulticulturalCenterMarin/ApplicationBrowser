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
  FieldsProjectName,
  ContactFieldCollection,
  AddressFieldCollection,
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
          <Heading level={[3]} f={[2]} mt={[15]}>Name</Heading>
          <Field name="searchProjectName" placeholder="ProjectName" component={ReduxField} type="text" />
          <Field name="searchProjectNameLegal" placeholder="Alias(Codename)" component={ReduxField} type="text" mt={[10]} />
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
