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

const viewport = props => props.viewport || 'test'

const mapDispatchToProps = dispatch => ({
  focusChange: (v, f) => dispatch(spotlightChange({viewport: v , focus: f })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Render);
