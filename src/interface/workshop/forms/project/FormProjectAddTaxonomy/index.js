/* ------------------------- External Dependencies -------------------------- */
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
import { createValidator, required } from 'logic/forms/validation'
/* ------------------------ Initialize Dependencies ------------------------- */
import { fromFirestore } from 'store/departments/selectors'
import { 
  entityProjectEditRequest,
  firestoreDocumentFilterGetRequest
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
    this.props.firestoreDocumentFilterGetRequest({
      payload: {},
      metadata:{
        branch: [
          'people'
        ],
        delta: 'ProjectTaxonomySearch',
      }
    })
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props ) {

    }
  }
})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => {
  const { delta } = props
  const data = fromFirestore.getQueryData(state, "ProjectPeopleSearch")
  return {
    data
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentFilterGetRequest: (settings)=>dispatch(firestoreDocumentFilterGetRequest(settings)),
})
/* -------------------------- Form Configuration ---------------------------- */
/*--- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  const submission = {contributors:data}
  /*--- Metadata/Configuration ---*/
  dispatch(entityProjectEditRequest({
    payload: submission, 
    metadata: {
    branch: [
      'projects',
      props.match.params.id,
    ],
    delta: `${props.match.params.id}|UpdateContributors`,
    trigger: `${props.match.params.id}`,
    }
  }))
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
