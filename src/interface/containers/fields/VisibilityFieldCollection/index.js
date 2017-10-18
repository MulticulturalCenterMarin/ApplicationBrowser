/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import {
  Toggle
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import ReduxField from 'organisms/ReduxField'

/* --------------------------- Styled Components ---------------------------- */
const FieldCollection = styled.div`

`

/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = (props) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <FieldCollection method="POST" onSubmit={handleSubmit}>
      <Heading>Visibility</Heading>
      <Paragraph>By default information will be shared according to default visibility settings. Cverride visibility settings using the Toggle controls. </Paragraph>
      <Flex direction={['column', 'row']} align="strech" justify="stretch" >
        <Box w={[0.5]} >
          <Field
            name="visibilityCommunityHidden"
            component={Toggle}
            label="Hide from Community"
            labelPosition="right"
          />
        </Box>
        <Box w={[0.5]} >
          <Field
            name="visibilityOrganizationHidden"
            component={Toggle}
            label="Hide from Organization"
            labelPosition="right"
          />
        </Box>
      </Flex>
      <hr/>
    </FieldCollection>
  )
}

FieldCollectionComponent.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FieldCollectionComponent
