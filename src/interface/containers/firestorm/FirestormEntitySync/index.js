/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
import { 
  firestormEntitySyncRequest
} from 'store/departments/actions'
/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */

function mapStateToProps(state) {
  const {  } = state
  return {
    
  };
}


const mapDispatchToProps = (dispatch, props) => {
  if (!props.entity) new Error('FirestormEntitySync requires an "entity" prop.')
  if (!props.collection) new Error('FirestormEntitySync requires an "entity" prop.')
  const settingsDispatch = {
    payload: {
      
    },
    metadata: {
      entity: props.entity, // Firebase
      branch: props.branch || [] , // Firebase
      database: 'core', // RxDB
      collection: props.collection, // RxDB
    }
  }
  return {
    firestormEntitySyncRequest: () => dispatch(firestormEntitySyncRequest({...settingsDispatch})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Render);
