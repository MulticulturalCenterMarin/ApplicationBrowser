/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Text, Flex, Box } from 'rebass'
import { Grid } from 'grid-styled'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import ReduxField from 'organisms/ReduxField'

/* --------------------------- Styled Components ---------------------------- */
const FieldCollection = styled.div`

`

/* ---------------------------- Module Package ------------------------------ */
const ContactFullFieldCollection = (props) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <FieldCollection>

      <Heading>Contact Information</Heading>
      <Flex direction={['column']} >
        <Box w={1} >
          <Field name="contactEmail" placeholder="Email" component={ReduxField} type="email" height={35} />
          <Paragraph fontSize={[0]} textAlign="right">Add Email</Paragraph>
        </Box>
        <Box w={1} >
          <Field name="contactPhone" placeholder="Phone" component={ReduxField} type="tel" height={35} />
          <Paragraph fontSize={[0]} textAlign="right">Add Phone</Paragraph>
        </Box>
        <Box w={1} >
          <Field name="contactSite" placeholder="Site" component={ReduxField} type="text" height={35} />
          <Paragraph fontSize={[0]} textAlign="right">Add Site</Paragraph>
        </Box>
      </Flex>
      <hr/>
    </FieldCollection>
  )
}

ContactFullFieldCollection.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default ContactFullFieldCollection
