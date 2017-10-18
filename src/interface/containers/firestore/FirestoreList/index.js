/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
import { fromFirestore } from 'store/departments/selectors'
/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { } from 'store/departments/actions'

function mapStateToProps(state, props) {
  const { delta } = props
  const data = fromFirestore.getQueryData(state, delta)
  const {  } = state
  return {
    data
  };
}

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Render);
