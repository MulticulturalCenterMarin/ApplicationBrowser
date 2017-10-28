/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import _ from 'lodash'
import filterKeys from 'filter-keys'

/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import {entityAddRequest} from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FormRedux = props => <FormRender { ...props} />

/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  /*--- Extraction ---*/
  const submission = {}
  submission.name = _.pickBy(data, (value, key)=> key.startsWith("name"));
  submission.date =  _.pickBy(data, (value, key)=> key.startsWith("date"));
  /*--- Metadata/Configuration ---*/
  dispatch(entityAddRequest({
    payload: submission, 
    metadata: {
    branch: [
      'events'
    ],
      delta: 'EventAdd',
      trigger: 'EventSearch',
    }
  }))
})

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({
  nameEvent: required,
  nameEventAlias: required,
})
const config = {
  form: 'FormEventAdd',
  fields: [
    'nameEvent',
    'nameEventAlias',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

export default connect()(reduxForm(config)(FormRedux))
