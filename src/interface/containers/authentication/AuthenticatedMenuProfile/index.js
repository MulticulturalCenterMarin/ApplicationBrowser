/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
/* ------------------------- Internal Dependencies -------------------------- */
import { ListMenu } from 'foundry'
import { 
   fromAuthentication,
   fromFirestore
} from 'store/departments/selectors'
/* ---------------------------- Module Package ------------------------------ */
const mapStateToProps = (state, props) => ({
    eid: fromFirestore.getUserProfileId(state, 'AuthenticatedProfile')
  }
)

export default connect(mapStateToProps)(ListMenu);
