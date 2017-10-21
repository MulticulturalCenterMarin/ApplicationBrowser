/**
 * @func FireStoreListCompose
 * @desc The FireStoreListCompose Container composes a list of Document searches into a single sharable state filter.
 * 
 * @func mapStateToProps()
 * @var {String} props.delta - Unique Redux Store Identifier
 * @var {Array} props.references - Reference the "References" Documentation.
 */

/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */
import { 
  firestoreDocumentComposeGetRequest
} from 'store/departments/actions'
import { 
  fromFirestore
 } from 'store/departments/selectors'
/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultState = withState({

})
const defaultProps = withProps({

})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle(
{
  /*--- Did Mount | BEGIN ---*/
  componentDidMount()
  {
    console.log(this.props)
    switch(this.props.status) {
      case(null):
        this.props.firestoreDocumentComposeGetRequest({
          metadata: {
            branch: [
              this.props.collection
            ],
            delta: this.props.delta,
            references: this.props.references
          }
        })
        break;
      case(true):
        this.setState({
          data: {
            ...this.props.data
          }
        })
        break;
      case(false):
        this.setState({
          error: true,
          status: 'Failure: Unable to retreive requested data',
        })
        break;
    }
  },
  /*--- Did Mount | END ---*/

  /*--- Did Update | BEGIN ---*/
  componentDidUpdate(prevProps)
  {
    if(prevProps.queryStatus !== this.props.queryStatus ) {
    console.log(this.props)
    switch(this.props.status) {
      case(null):
        this.props.firestoreDocumentComposeGetRequest({
          metadata: {
            branch: [
              this.props.collection
            ],
            delta: this.props.delta,
            references: this.props.references
          }
        })
        break;
      case(true):
        this.setState({
          data: {
            ...this.props.data
          }
        })
        break;
      case(false):
        this.setState({
          error: true,
          status: 'Failure: Unable to retreive requested data',
        })
        break;
    }
  }
  }
  /*--- Did Update | End ---*/

})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) => {
  const {
    delta,
    references
  } = props

  const status = fromFirestore.getQueryComposeStatus(state, delta)
  const data = !status ? null : fromFirestore.getQueryComposeData(state, references)
  console.log(data)
  return (
    {
    status,
    data
    }
  )
}

const mapDispatchToProps = (dispatch, props) => ({
  firestoreDocumentComposeGetRequest: (settings)=>dispatch(firestoreDocumentComposeGetRequest(settings))
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultState,
  defaultProps,
)(Render);
