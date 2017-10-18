/**
 * @func EntityFieldCollection
 * 
 * @desc The Entity Field Collection manages state for person or organization accounts.
 * 
 */

/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
// Form
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { RadioButton } from 'material-ui/RadioButton'
import { Autocomplete, SelectField, RadioButtonGroup } from 'redux-form-material-ui'
// Styling
import styled from 'styled-components'
import { Grid } from 'grid-styled'

/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'

// Atomic
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'

/* --------------------------- Styled Components ---------------------------- */
const FieldCollection = styled.div`

`
const TextareaWrapper = styled(Field)`
  min-height: 180px;
`

/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = (props) => {
  const { handleSubmit, isSubmitting, current } = props
  return (
    <FieldCollectionWrapper direction={['column']} justify='space-evenly'>
      <TextareaWrapper name="projectDescription" placeholder="Project Description..." component={ReduxField} type="textarea" />
      <FieldCollectionWrapper direction={['column', 'row']} justify='space-evenly'>
        <Field name="projectType" component={SelectField} hintText="Type" fullWidth>
          <MenuItem value="new" primaryText="New"/>
          <MenuItem value="existing" primaryText="Existing"/>
          <MenuItem value="redesign" primaryText="Redesign"/>
        </Field>
        <Field name="projectType" component={SelectField} hintText="Complexity" fullWidth>
          <MenuItem value="easy" primaryText="Easy"/>
          <MenuItem value="minimal" primaryText="Minimal"/>
          <MenuItem value="Advanced" primaryText="Adavanced"/>
        </Field>
      </FieldCollectionWrapper>
    </FieldCollectionWrapper>
  )
}

FieldCollectionComponent.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FieldCollectionComponent