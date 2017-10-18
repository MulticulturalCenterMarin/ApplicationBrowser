/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import FieldComponent from 'molecules/Field'
import ReduxField from 'organisms/ReduxField'
/* --------------------------- Styled Components ---------------------------- */
const FieldCollection = styled.div`

`

/* ---------------------------- Module Package ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <FieldCollection>
      <Heading>People Relationships</Heading>
      <Field name="relationshipsPeople" label="People" component={ReduxField} type="text" />
    </FieldCollection>
  )
}

FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
