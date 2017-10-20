/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
import ReduxField from 'organisms/ReduxField'
import NameFieldCollection from 'containers/fields/NameFieldCollection'
import AddressFieldCollection from 'containers/fields/AddressFieldCollection'
import ContactFieldCollection from 'containers/fields/ContactFieldCollection'
import EntityFieldCollection from 'containers/fields/EntityFieldCollection'
import ProjectFieldCollection from 'containers/fields/ProjectFieldCollection'
import TimeRangeFieldCollection from 'containers/fields/TimeRangeFieldCollection'
import DateRangeFieldCollection from 'containers/fields/DateRangeFieldCollection'

/* --------------------------- Styled Components ---------------------------- */
Block.defaultProps = {is: 'form'}
/** 
 * File input workarround:
 * More info: http://redux-form.com/5.2.5/#/examples/file?_k=57hmlw
 */
const CustomFileInput = (field) => {
  delete field.input.value;
  return <input type="file" id="file" {...field.input} />;
};


/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props, fields) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <Block>
      <Flex align="center" justify="space-evenly" direction={['row']}>
        <Box>
          <Heading level={[3]} f={[1]}>Banner Upload</Heading>
        </Box>
        <Box ta={['right']} >
          <Field name="storageUpload" component={CustomFileInput} type="file" />
        </Box>
        <Box>
          <Button type="submit" onClick={handleSubmit} gradient='blue'w={1} >Submit</Button>
        </Box>
      </Flex>
    </Block>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
