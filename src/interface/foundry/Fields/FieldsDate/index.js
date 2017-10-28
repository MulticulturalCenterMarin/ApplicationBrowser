/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box,Button, Heading, Paragraph, ReduxField } from 'atomic'
import {
  Checkbox,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle,
  DatePicker,
  TimePicker
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import { NameFieldCollection, ContactFieldCollection, AddressFieldCollection, FieldRelationshipsPerson, FieldCollectionPersonBiography } from 'containers/fields'
import normalizePhone from 'logic/forms/normalize/phone'

/* ---------------------------- Module Package ------------------------------ */
export default props => (
  <Flex direction={['column', 'row']} wrap='wrap' {...props.styledWrapper} >
    <Box {...props.styledFieldOuter} >
      <Field name="dateStart" component={DatePicker} format={null} hintText="Date Start" fillWidth />
    </Box>
    <Box {...props.styledFieldOuter}>
      <Field name="dateEnd" component={DatePicker} format={null} hintText="Date End"/>
    </Box>
  </Flex>
)

