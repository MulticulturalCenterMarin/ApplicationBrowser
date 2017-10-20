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

/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ data, handleSubmit, isSubmitting, styled}) => {
  if(!data) return null
  const AutoCompleteList = data.map(v=>({value:idx(v.data, _=> _.uid), text: idx(v.data, _=> _.name.nameDisplay)} ))
  return(<Block {...styled}>
    <Box>
      <Field
        name="contributorOrganization"
        floatingLabelText="Add Organization Contributors"
        dataSource={AutoCompleteList}
        component={AutoComplete}
        filter={MUIAutoComplete.fuzzyFilter}
        openOnFocus
      />
    </Box>
    <Box mt={10} >
      <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
    </Box>
  </Block>)
}