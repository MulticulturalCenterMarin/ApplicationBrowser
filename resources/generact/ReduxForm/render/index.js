/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box, Block } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import {Button, ReduxField } from 'atomic'

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = Block

FormWrapper.defaultProps = {
  is: 'form'
}

/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, layout } = props
  return (
    <FormWrapper  {...layout} {...props}>
      <Box className='formProps' >
        <Field name="hidden"component={ReduxField} type="hidden" />
      </Box>
      
      <Box className='form' >
        <Field name="start" label="Start" component={ReduxField} type="text" />
      
        <Box>
          <Button type="submit" onClick={handleSubmit} >Submit</Button>
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
