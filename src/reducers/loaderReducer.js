import { LOADER, LOADERFALSE } from '../actions/types';


export default (state = false, action) => {
    switch (action.type) {
        case LOADER:
            return true;
        case LOADERFALSE:
            return false;
        default:
            return state;
    }
}