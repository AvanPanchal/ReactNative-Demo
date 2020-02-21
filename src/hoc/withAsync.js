// import { connect } from 'react-redux';
// import { actionCounter } from '../actions/actionCounter';


// import { connect } from 'react-redux';
// import { todolist } from '../actions';

// const mapDispatchToProps = dispatch => ({
//     todoAction: () => {
//         dispatch(todolist());
//     }
// })

// const mapStateToProps = state => ({
//     todoData: state.todoData
// })

// export default connect(mapStateToProps, mapDispatchToProps);




import { connect } from 'react-redux';
import { asyncAction } from '../actions';

const mapDispatchToProps = dispatch => ({
    getTodos: () => {
        dispatch(asyncAction());
    }
})

const mapStateToProps = state => ({
    todoData: state.todoData
})

export default connect(mapStateToProps, mapDispatchToProps);

