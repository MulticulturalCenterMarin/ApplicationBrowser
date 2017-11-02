/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
/* ------------------------- Internal Dependencies -------------------------- */
import { List } from 'foundry'
import { fromAuthentication } from 'store/departments/selectors'
/* ---------------------------- Module Package ------------------------------ */
const mapStateToProps = (state, props) => ({
    data: fromAuthentication.getUserId(state)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentFilterGetRequest: (settings)=>dispatch(firestoreDocumentFilterGetRequest(settings)),
})


export default connect(mapStateToProps, mapDispatchToProps)(List);
