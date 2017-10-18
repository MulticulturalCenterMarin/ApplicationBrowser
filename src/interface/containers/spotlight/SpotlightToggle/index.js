/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { spotlightChange } from 'store/departments/actions'

function mapStateToProps(state) {
  const { data } = state
  return {};
}

const mapDispatchToProps = dispatch => ({
  spotlightChange: (v, l) => dispatch(spotlightChange({viewport: v , library: l })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Render);
