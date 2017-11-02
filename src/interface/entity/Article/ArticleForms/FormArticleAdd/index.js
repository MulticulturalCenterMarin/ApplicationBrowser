/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import {
  compose,
  lifecycle,
  withProps,
  withState,
  renderComponent
} from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import filterKeys from 'filter-keys'

/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'

import {  fromAuthentication } from 'store/departments/selectors'
/*--- Redux Store ---*/
import {entityAddRequest} from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  console.log(data)
  console.log(props)
  /*--- Extraction ---*/
  const submission = {}
  submission.name = _.pickBy(data, (value, key)=> key.startsWith("name"));
  submission.contact =  _.pickBy(data, (value, key)=> key.startsWith("contact"));
  submission.metadata =  _.pickBy(data, (value, key)=> key.startsWith("meta"));
  submission.createdBy = data.userId
  
  /*--- Metadata/Configuration ---*/
  dispatch(entityAddRequest({
    payload: submission, 
    metadata: {
    branch: [
      'articles'
    ],
      delta: 'ArticleAdd',
      trigger: 'ArticleSearch',
    }
  }))
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})


/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({
  nameArticle: required,
  nameArticleAlias: required,
})
const config = {
  form: 'FormArticleAdd',
  fields: [
    'nameArticle',
    'nameArticleAlias',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

const mapStateToProps = (state, props) => { 
  return {
    initialValues: {
      userId: fromAuthentication.getUserId(state)
    }
  }
}

const FormRedux = props => <FormRender { ...props} />
const formRedux = reduxForm(config)

export default compose(
  connect(mapStateToProps),
  formRedux,
  queryLifecycle,
)(FormRedux);
