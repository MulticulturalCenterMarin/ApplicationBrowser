/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import {
  compose,
  lifecycle,
  withProps,
  withState,
  renderComponent
} from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/*--- Form Validation ---*/
import {
  createValidator,
  required
} from 'logic/forms/validation'

/* ------------------------ Initialize Dependencies ------------------------- */
import {
  firestoreDocumentFilterGetRequest,
} from 'store/departments/actions'

/* ---------------------------- Module Package ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) =>
{
  /*--- Metadata/Configuration ---*/
  const payload={}
  const metadata = {
    delta: 'PeopleSearch',
    collection: 'people',
  }
  dispatch(firestoreDocumentFilterGetRequest({payload, metadata}))
})

const validate = createValidator({

})

/*---*--- Recompose ---*---*/
const defaultState = withState({

})
const defaultProps = withProps({
  onSubmit,
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle(
{
  /*--- Component Mount ---*/
  componentDidMount()
  {
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps)
  {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})

/*---*--- Redux ---*---*/
const mapStateToProps = (state, props)=> {
  return {

  };
}

const mapDispatchToProps = (dispatch, props) => ({

})

/* -------------------------- Form Configuration ---------------------------- */

const config = {
  form: 'OrganizationSearchAdvanced',
  fields: [],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

export default compose(
  reduxForm(config),
  connect(mapStateToProps, mapDispatchToProps),
  defaultState,
  defaultProps,
  queryLifecycle,
)(Render);

