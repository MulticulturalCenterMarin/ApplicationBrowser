/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Flex, Box } from 'rebass'
import { width } from 'styled-system'
import {
  DatePicker,
  TimePicker
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'

/* --------------------------- Styled Components ---------------------------- */
const FieldWrapper = styled(Field)`
  ${width}
  & > * {
    width: 100% !important;
  }
`

/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = (props) => (
  <FieldCollectionWrapper direction={['column', 'row']} justify='space-evenly'>
    <FieldWrapper name="timeStart" component={DatePicker} format={null} hintText="Time Start" w={1} />
    <FieldWrapper name="timeEnd" component={DatePicker} format={null} hintText="Time End" w={1} />
  </FieldCollectionWrapper>
)

export default FieldCollectionComponent
