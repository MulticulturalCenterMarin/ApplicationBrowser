/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import { Box, Flex } from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'

// Normalize Input
import normalizePhone from 'logic/forms/normalize/phone'

/* ---------------------------- Module Package ------------------------------ */
export default props => (
  <Flex direction={['column', 'row']} {...props} >
    <Box flex='1 1 auto' {...props.fieldStyle} >
      <Field name="contactEmail" placeholder="Email: address@location.com" component={ReduxField} type="email" height={35} />
    </Box>
    <Box flex='1 1 auto' {...props.fieldStyle}>
      <Field name="contactPhone" placeholder="Phone: (555) 420-1070" component={ReduxField} type="tel" height={35} normalize={normalizePhone} />
    </Box>
  </Flex>
)

