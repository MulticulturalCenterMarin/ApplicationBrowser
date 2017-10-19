/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'

/* ------------------------- Internal Dependencies -------------------------- */
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
const FormWrapper = styled.form`
  background: #FFF;
  display: block;
  padding: 20px;
`
/** 
 * File input workarround:
 * More info: http://redux-form.com/5.2.5/#/examples/file?_k=57hmlw
 */
const customFileInput = (field) => {
  delete field.input.value; // <-- just delete the value property
  return <input type="file" id="file" {...field.input} />;
};


/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props, fields) => {
  console.log(props)
  const { handleSubmit, isSubmitting } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit}>
      <Box w={[1]} mt={[15,25]} bs={[0]} p={[10,15,25]}>
        <Flex>
          <Box w={[1,1,0.8]}>
            <Field name="storageUpload" component={customFileInput} type="file" />
          </Box>
          <Box w={[1,1,0.2]} >
            <Button type="submit" gradient='cherry' w={1} >Submit</Button>
          </Box>
        </Flex>
      </Box>
    </FormWrapper>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
