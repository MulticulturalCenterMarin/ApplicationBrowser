/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
import gql from 'graphql-tag';
import { reduxForm, reset } from 'redux-form'
import { graphql } from 'react-apollo';
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
import query from 'apollo/query/List.gql'

/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/* ------------------------ Initialize Dependencies ------------------------- */
import { apolloQueryRequest, rxdbCollectionInsertRequest, rxdbCollectionFindRequest, firestormEntityReadRequest } from 'store/departments/actions'
import {
  databaseWriteRequest,
  firestormEntityCreateRequest,
  firestoreDocumentAddRequest,
  firestoreDocumentSetRequest,
  firestoreDocumentGetRequest,
  firestoreDocumentAllGetRequest,
  firestoreDocumentFilterGetRequest,
  firestoreDocumentDeleteRequest,
  firestoreDocumentFieldsDeleteRequest,
} from 'store/departments/actions'
import { fromApollo, getAccessToken } from 'store/departments/selectors'
/* ---------------------------- Module Package ------------------------------ */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  console.log('------------------------------------');
  console.log(data);
  console.log('------------------------------------');

  const where = []
  if(data.searchProjectName) where.push(['name.nameProject', '==', data.searchProjectName ])
  if(data.searchProjectAlias) where.push(['name.nameProjectAlias', '==', data.searchProjectAlias ])

  /*--- Metadata/Configuration ---*/
  const metadata = {
    delta: 'ProjectSearch',
    collection: 'projects',
    filters: {
      where: where
    }
  }
  dispatch(firestoreDocumentFilterGetRequest({
    payload: {},
    metadata 
  }))

})

const validate = createValidator({

})

/*---*--- Recompose ---*---*/
const defaultState = withState({

})
const defaultProps = withProps({
  onSubmit,
  status: 'initialize',
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
      const payload={}
      const metadata = {
        delta: 'ProjectSearch',
        collection: 'projects',
      }
      this.props.firestoreDocumentFilterGetRequest({payload, metadata })
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      // this.props.firestormEntityReadRequest({payload:{}, metadata:{database: 'core', collection: 'users', delta:'kamestTest'}})
      this.props.reset()
    }
  }
})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props)=> {
  return {

  };
}


const mapDispatchToProps = (dispatch, props) => ({
  rxdbCollectionFindRequest: (settings)=>dispatch(rxdbCollectionFindRequest(settings)),
  firestormEntityReadRequest: (settings)=>dispatch(firestormEntityReadRequest(settings)),
  firestoreDocumentFilterGetRequest: (settings)=>dispatch(firestoreDocumentFilterGetRequest(settings)),
})

/* -------------------------- Form Configuration ---------------------------- */

const config = {
  form: 'OrganizationSearchAdvanced',
  fields: [
    'searchOrganizationName',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/* ---------------------------- Form Handlers ------------------------------- */

export default compose(
  reduxForm(config),
  connect(mapStateToProps, mapDispatchToProps),
  defaultState,
  defaultProps,
  queryLifecycle,
)(Render);

