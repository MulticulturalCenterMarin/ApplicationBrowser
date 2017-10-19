/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, renderComponent, withHandlers, mapProps, withProps, withState } from 'recompose'
import Dimensions from 'react-dimensions'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
import {
  ProjectMarkerPopover,
} from 'foundry'

/*--- Redux ---*/
import {
  firestoreDocumentAddRequest,
  firestoreDocumentSetRequest,
  firestoreDocumentGetRequest,
  firestoreDocumentAllGetRequest,
  firestoreDocumentFilterGetRequest,
} from 'store/departments/actions'
import { fromFirestore } from 'store/departments/selectors'
/*--- Map ---*/
import {defaultMapStyle, dataLayer} from 'static/maps/style/StyleSimple';
/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const viewportState = withState(
  'viewport', 'setViewport', {
    latitude: 37.95,
    longitude: -122.4376,
    zoom: 9,
    bearing: 0,
    pitch: 0,
  }
)
const defaultProps = withProps(props=>{
  const entity = props.entity ? props.entity.charAt(0).toUpperCase() + props.entity.slice(1) : ""
  return{
  delta: props.delta,
  collection: props.collection,
  foundry:props.foundry || `${entity}MarkerPopover`,
  mapStyle: defaultMapStyle,
  hoveredFeature: null,
}})

const eventHandlers = withHandlers({
  onViewportChange: ({setViewport})=> props => setViewport(props),
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle(
{
  /*--- Component Mount | BEGIN ---*/
  componentDidMount()
  {
    if(this.props.queryData){
      this.setState({
        data: this.props.queryData
      })
    }
    const payload = {}
    const metadata = {
      delta: this.props.delta,
      collection: this.props.delta,
    }
    
  },
  /*--- Component Mount | END ---*/

  /*--- Did Update | BEGIN ---*/
  componentDidUpdate(prevProps)
  {
    if(prevProps.queryData !== this.props.queryData ) {
      this.setState({
        data: this.props.queryData
      })
    }
  },
  /*--- Did Update | End ---*/

  /*--- Will Mount | BEGIN ---*/
  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }
  /*--- Will Mount | End ---*/

})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => {
    const delta = props.delta
    const queryData = fromFirestore.getQueryData(state, delta)
    return {
      queryData: queryData
    }
}
const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentFilterGetRequest: request=> dispatch(firestoreDocumentFilterGetRequest(request))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultProps,
  viewportState,
  eventHandlers,
)(Render);
