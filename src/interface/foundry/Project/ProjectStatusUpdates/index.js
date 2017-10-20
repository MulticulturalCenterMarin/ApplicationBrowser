/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, mapProps, withProps, withState, renderComponent } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */
import { firestoreDocumentFilterGetRequest } from 'store/departments/actions'

/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultState = withState({

})
const defaultProps = withProps({

})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle(
{
  /*--- Did Mount | BEGIN ---*/
  componentDidMount()
  {
    this.props.firestoreDocumentFilterGetRequest({
      payload: {},
      metadata:
      {
        branch: [
          'projects',
          this.props.id,
          'updates'
        ],
        delta: `${this.props.id}|StatusUpdates`,
      }
    })
  },
  /*--- Did Mount | END ---*/

  /*--- Did Update | BEGIN ---*/
  componentDidUpdate(prevProps)
  {

  }
  /*--- Did Update | End ---*/

})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => ({
  
})
const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentFilterGetRequest: (settings)=>dispatch(firestoreDocumentFilterGetRequest(settings)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultState,
  defaultProps,
)(Render);
