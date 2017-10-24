/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui'

import ChipInput from 'material-ui-chip-input'

/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'


const RenderChip = ({input, hintText, floatingLabelText, dataSource}) => (
  <ChipInput
    {...input}
    value = { input.value || []}
    onRequestAdd={(addedChip) => {
      let values = input.value || [];
      values = values.slice();
      values.push(addedChip);
      input.onChange(values);
    }}
    onRequestDelete={(deletedChip) => {
      let values = input.value || [];
      values = values.filter(v => v !== deletedChip);
      input.onChange(values);
    }}
    onBlur={() => input.onBlur()}
    hintText={hintText}
    
    floatingLabelText={floatingLabelText}
    dataSource={dataSource}
    />
)
  
/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ data, handleSubmit, isSubmitting, styled}) => {
  if(!data) return null
  const d = data.map(v=>({value:idx(v.data, _=> _.uid), text: idx(v.data, _=> _.name.nameDisplay)} ))
return <Block {...styled}>
  <Box>
    <Field
      name="taxonomyGeneral"
      floatingLabelText="Taxonomy"
      component={RenderChip}
      dataSource={d}
      openOnFocus
    />
  </Box>
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
  </Box>
</Block>
}