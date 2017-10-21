/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */

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

  },
  /*--- Did Mount | END ---*/

  /*--- Did Update | BEGIN ---*/
  componentDidUpdate(prevProps)
  {

  }
  /*--- Did Update | End ---*/

})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => {

  return {
    
  }
}
const mapDispatchToProps = (dispatch, props) => ({

})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultState,
  defaultProps,
)(Render);
