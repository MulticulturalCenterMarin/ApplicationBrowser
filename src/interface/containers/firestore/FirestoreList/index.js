/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
import { fromFirestore } from 'store/departments/selectors'

/* ---------------------------- Module Package ------------------------------ */
function mapStateToProps(state, props) {
  const { delta } = props
  const data = fromFirestore.getQueryData(state, delta)
  return {
    data
  };
}

export default connect(mapStateToProps)(Render);
