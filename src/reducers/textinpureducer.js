export const textinputCounter = (dataone = '', action) => {
    let d = action.payload;
    let total = 0;
    switch (action.type) {
        case 'ASSIGNPLUS':
            console.log('data1 : ' + dataone + ' d : ' + d);
            dataone = d;
            console.log('total : ' + dataone);
            return dataone;
        case 'ASSIGNMINUS':
            console.log('data1 : ' + dataone + ' d : ' + d);
            dataone = d;
            console.log('total : ' + dataone);
            return dataone;
        default:
            return dataone;
    }
}