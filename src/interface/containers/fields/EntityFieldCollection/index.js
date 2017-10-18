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
import { RadioButton } from 'material-ui/RadioButton'
import { Autocomplete, Select, RadioButtonGroup } from 'redux-form-material-ui'
// Styling
import styled from 'styled-components'
import { Grid } from 'grid-styled'

/* ------------------------- Internal Dependencies -------------------------- */
// Atomic
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'

// Redux
import ReduxField from 'organisms/ReduxField'

/* --------------------------- Styled Components ---------------------------- */
const FieldCollection = styled.div`

`

/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = (props) => {
  const { handleSubmit, isSubmitting, current } = props
  return (
    <FieldCollection method="POST" onSubmit={handleSubmit}>
      <Grid w={[0.41]} pr={10} >
        <Field name="entityType" placeholder="Entity Type" component={RadioButtonGroup} type="text" px={[10]} height={35}>
          <RadioButton value="person" label="Person"/>
          <RadioButton value="organization" label="Organization"/>
          <RadioButton value="dao" label="Distributed Autonomous Organization"/>
        </Field>

        {
          current.entityType !== 'organization' ? null : (
            <Field name="entityOrganizationType" placeholder="Entity Type" component={RadioButtonGroup} type="text" px={[10]} height={35}>
              <RadioButton value="business" label="Business"/>
              <RadioButton value="non-profit" label="Non-Profit"/>
            </Field>
        )}

        {
          current.entityType !== 'dao' ? null : (
            <Field name="entityOrganizationType" placeholder="Entity Type" component={RadioButtonGroup} type="text" px={[10]} height={35}>
              <RadioButton value="ico" label="Initial Coin Offering"/>
              <RadioButton value="application" label="Application"/>
            </Field>
        )}
        
      </Grid>
    </FieldCollection>
  )
}

FieldCollectionComponent.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FieldCollectionComponent