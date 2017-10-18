/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Flex, Box } from 'atomic'
import {
  DatePicker,
  TimePicker
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'

/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = props => (
    <Flex direction={['column', 'row']} justify='space-evenly' wrap='wrap' {...props} >
      <Box w={[1]} mb={[10]} >
        <Field name="addressStreet" placeholder="Address" component={ReduxField} type="text" height={30} />
      </Box>

      <Box w={[1, 1, 0.33333]} >
        <Field name="addressCity" placeholder="City" component={ReduxField} type="text" height={30} mr={[10]} />
      </Box>
      <Box w={[1, 1, 0.33333]} >
        <Field name="addressState" placeholder="State" component={ReduxField} type="text" height={30} mr={[10]} />
      </Box>
      <Box w={[1, 1, 0.33333]} >
        <Field name="addressZip" placeholder="Zip" component={ReduxField} type="number" height={30} />
      </Box>

      <Box w={[1]} mt={[10]}>
        <Field name="addressCountry" placeholder="Country" component={ReduxField} type="text" height={30} />
      </Box>
    </Flex>
  )

export default FieldCollectionComponent
