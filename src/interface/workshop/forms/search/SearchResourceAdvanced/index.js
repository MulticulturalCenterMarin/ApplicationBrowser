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

  /*--- Metadata/Configuration ---*/
  const payload={}
  const metadata = {
    delta: 'projectFilter',
    collection: 'projects',
  }
  dispatch(firestoreDocumentFilterGetRequest({payload, metadata }))

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
      switch(this.props.status) {
        case('initialize'):

          break;
        case('requestReturned'):
          this.setState({
            data: {...this.props.queryData} // Listen for Apollo Query Response in Redux Apollo Sagas
          })
          break;
        case('failure'):
          this.setState({
            status: false
          })
          break;
      }
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      // this.props.firestormEntityReadRequest({payload:{}, metadata:{database: 'core', collection: 'users', delta:'kamestTest'}})
      this.props.reset()
    }
    if(prevProps.queryStatus !== this.props.queryStatus ) {
      switch(this.props.queryStatus) {
        case('initialize'):
          // this.props.apolloQueryRequest(this.props.query) // Initialize Apollo Query in Redux Apollo Sagas
          break;
        case('requestReturned'):
          this.setState({
            data: {...this.props.queryData} // Listen for Apollo Query Response in Redux Apollo Sagas
          })
          break;
        case('failure'):
          this.setState({
            data: null,
            status: 'Failure: Unable to retreive the requested data',
          })
          break;
      }
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
  firestormEntityReadRequest: (settings)=>dispatch(firestormEntityReadRequest(settings))
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

