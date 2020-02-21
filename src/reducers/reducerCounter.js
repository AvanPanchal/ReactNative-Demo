export const reducerCounter = (data = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return data + 1;
        case 'DECREMENT':
            return data - 1;
        default:
            return data;
    }
}
export const otherCounter = (data1 = 0, action) => {
    let d = Number(action.payload);
    let total = 0;
    switch (action.type) {
        case 'ADD':
            console.log('data1 : ' + data1 + ' d : ' + d);
            data1 += d;
            console.log('total : ' + data1);
            return data1;
        case 'SUB':
            console.log('data1 : ' + data1 + ' d : ' + d);

            data1 -= d;
            if (data1 >= 0) {
                console.log('total : ' + data1);
                return data1;
            }
            else {
                console.log('Error while minu value');
                alert('enter valid data');
                data1 += d;
                return data1;
            }
        case 'ERROR':
            alert("input is not valid.")
            console.log("error");
            return data1;
        case 'VALID':
            alert('value is not empty.');
        default:
            return data1;
    }
}





