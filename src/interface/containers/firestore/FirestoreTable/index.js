/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { List, DataTable } from 'foundry'
import { fromFirestore } from 'store/departments/selectors'
import { firestoreDocumentFilterGetRequest } from 'store/departments/actions'
/* ---------------------------- Module Package ------------------------------ */
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if(this.props.collection && this.props.delta)
    {
      this.props.firestoreDocumentFilterGetRequest({
        metadata:{
          branch: [this.props.collection],
          delta: this.props.delta,
          filter: this.props.filter
        }
      })
    }
  }
})
const mapStateToProps = (state, props) => {
  const d = fromFirestore.getQueryData(state, props.delta)
  if (!d) return null
  const t = d.map(item=>({id:item.id, ...item.data}))
  return {
    data: t
  }
}


const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentFilterGetRequest: (settings)=>dispatch(firestoreDocumentFilterGetRequest(settings)),
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(DataTable);
