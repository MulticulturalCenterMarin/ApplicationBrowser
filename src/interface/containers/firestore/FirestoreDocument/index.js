/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
import gql from 'graphql-tag';

import { graphql } from 'react-apollo';
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */
/*--- Actions ---*/
import {
  firestoreDocumentGetRequest,
} from 'store/departments/actions'

/*--- Selectors ---*/
import {
  fromFirestore
} from 'store/departments/selectors'
/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultProps = withProps({

})
const defaultState = withState({

})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle(
{

  /*--- Component Mount ---*/
  componentDidMount()
  {
    const { id } = this.props.match.params
    const
    payload={},
    metadata = {
      branch: [
        this.props.collection,
        id,
      ],
      collection: this.props.collection,
      document: id,
      delta: id,
    }
    this.props.firestoreDocumentGetRequest({payload, metadata })

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps)
  {
    if(prevProps !== this.props )
    {

    }
  }
})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props)=> {
  const delta = props.match.params.id
  const data = fromFirestore.getQueryData(state, delta)
  return {
    id: delta,
    data
  };
}

const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentGetRequest: (request)=>dispatch(firestoreDocumentGetRequest(request))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultState,
  defaultProps,
)(Render);
