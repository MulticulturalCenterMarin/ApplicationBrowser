/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import library from 'library'
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { fromSpotlight } from 'store/departments/selectors'

function mapStateToProps(state, props) {
  const viewport = fromSpotlight.getViewport(state, props.viewport)
  if (!viewport) return null
  const Component = library[viewport.subject][viewport.item] || null
  return {Component};
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Render);
