
import { connect } from 'react-redux';
import { loaderindicator, loaderindicatorfalse } from '../actions';

const mapDispatchToProps = dispatch => ({
    loaderAction: () => {
        dispatch(loaderindicator());
    },
    loaderfalseAction: () => {
        dispatch(loaderindicatorfalse());
    },

})

const mapStateToProps = data => ({
    loadValue: data.loadValue
})

export default connect(mapStateToProps, mapDispatchToProps);
