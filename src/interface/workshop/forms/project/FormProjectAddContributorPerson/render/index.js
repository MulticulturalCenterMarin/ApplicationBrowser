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
const RenderChip = ({input, hintText, floatingLabelText, dataSource, dataSourceConfig}) => (
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
      console.log(deletedChip)
      let values = input.value || [];
      console.log(values)
      values = values.filter(v => v.id !== deletedChip);
      input.onChange(values);
    }}
    onBlur={() => input.onBlur()}
    hintText={hintText}
    floatingLabelText={floatingLabelText}
    dataSource={dataSource}
    dataSourceConfig={dataSourceConfig}
    />
)
/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ data, handleSubmit, isSubmitting, styled}) => {
  if(!data) return null
  const AutoCompleteList = data.map(v=>({id:idx(v.data, _=> _.uid), nameDisplay: idx(v.data, _=> _.name.nameDisplay)} ))
  return(<Block {...styled}>
    <Box>
      <Field
        name="contributorPeople"
        floatingLabelText="Add People Contributors"
        dataSource={AutoCompleteList}
        component={RenderChip}
        dataSourceConfig={{ text: 'nameDisplay', value: 'id' }}
        filter={MUIAutoComplete.fuzzyFilter}
        openOnFocus
      />
    </Box>
    <Box mt={10} >
      <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
    </Box>
  </Block>)
}