/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'
import normalizePhone from 'logic/forms/normalize/phone'
/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ handleSubmit, isSubmitting, styled}) => (
<Block {...styled}>
  <Box>
      <Heading level={[3]} f={[3]} mt={[15]}>Name</Heading>
      <Field name="updateBody" placeholder="Update" component={ReduxField} type="textarea" />
      <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
    </Box>
</Block>
)