/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Grid } from 'grid-styled'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import ReduxField from 'organisms/ReduxField'

/* --------------------------- Styled Components ---------------------------- */
const FieldCollection = styled.div`

`

/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = (props) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <FieldCollection>
      <Heading>Full Name</Heading>
      <Grid w={[0.41]} pr={10} >
        <Field name="identityNameFirst" placeholder="First Name" component={ReduxField} type="text" px={[10]} height={35} bg='red' />
      </Grid>
      <Grid w={[0.18]} pr={10} >
        <Field name="identityNameMiddle" placeholder="Middle" component={ReduxField} type="text" px={[10]} height={35} />
      </Grid>
      <Grid w={[0.41]} pr={10} >
        <Field name="identityNameLast" placeholder="Last Name" component={ReduxField} type="text" px={[10]} height={35} />
      </Grid>
      <hr/>
    </FieldCollection>
  )
}

FieldCollectionComponent.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FieldCollectionComponent
