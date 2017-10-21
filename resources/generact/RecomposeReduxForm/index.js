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
import { 
  createValidator,
  required 
} from 'logic/forms/validation'
/* ------------------------ Initialize Dependencies ------------------------- */
import { } from 'store/departments/actions'

/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultState = withState({})
const defaultProps = withProps({})

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
   
   return ({

   })
}

const mapDispatchToProps = (dispatch, props) => ({

})
/* -------------------------- Form Configuration ---------------------------- */
/*--- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

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
