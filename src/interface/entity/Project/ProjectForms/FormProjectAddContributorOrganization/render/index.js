/* ------------------------- External Dependencies -------------------------- */
import idx from './idx'
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete,
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import { FormBase } from 'foundry'
import { Block } from 'particles'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'

/* ---------------------------- Form Component ------------------------------ */
export default ({ data, handleSubmit, isSubmitting, styled}) => {
  if(!data) return null
  const AutoCompleteList = data.map(v=>({value:idx(v.data, _=> _.uid), text: idx(v.data, _=> _.name.nameDisplay)} ))
  return(<FormBase {...styled}>
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
  </FormBase>)
}