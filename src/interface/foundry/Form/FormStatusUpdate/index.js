/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import { connect } from 'react-redux'
import { 
  compose,
  lifecycle,
  withProps,
  withState,
  renderComponent
} from 'recompose'
import { 
  reduxForm,
  reset
} from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */
import { createValidator, required } from 'logic/forms/validation'
/*--- Redux Store ---*/
import { 
  entityAddRequest,
 } from 'store/departments/actions'
 

/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultState = withState({
  list: null
})
const defaultProps = withProps({

})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props ) {

    }
  }
})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => {
   
}

const mapDispatchToProps = (dispatch, props) => ({

})
/* -------------------------- Form Configuration ---------------------------- */
/*--- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

  const submission = {}
  submission.update = _.pickBy(data, (value, key)=> key.startsWith("update"));

  const metadata = {
    branch: [
      props.collection,
      props.match.params.eid,
      'updates',
    ],
    delta: `${props.match.params.eid}|StatusUpdateAdd`,
    trigger: `${props.match.params.eid}|StatusUpdates`,
  }

  /*--- Send | Dispatch ---*/
  dispatch(entityAddRequest({payload:submission, metadata }))

})

/*--- Validation ---*/
const validate = createValidator({

})

const config = {
  form: 'FormComposed',
  fields: [],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/* ---------------------------- Form Handlers ------------------------------- */

export default compose(
  reduxForm(config),
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultState,
  defaultProps,
)(Render);
