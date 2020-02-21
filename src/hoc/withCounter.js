// import { connect } from 'react-redux';
// import { actionCounter } from '../actions/actionCounter';


import { connect } from 'react-redux';
import { addCounter, subCounter } from '../actions';

const mapDispatchToProps = dispatch => ({
    counterIncrementAction: (data1) => {
        dispatch(addCounter(data1));
    },
    counterDecrementAction: (data1) => {
        dispatch(subCounter(data1));
    }
})

const mapStateToProps = data => ({
    data1: data.counter
})

export default connect(mapStateToProps, mapDispatchToProps);
