import { connect } from 'react-redux'
import TopComponent from '../components/Top.jsx';
import { INCREMENT_COUNTER,  DECREMENT_COUNTER} from '../actions/Top.js';

function mapStateToProps(state) {
  return {
    count: state.top.count
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(INCREMENT_COUNTER),
    onDecrement: () => dispatch(DECREMENT_COUNTER)
  };
}

const Top = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopComponent);

export default Top;
