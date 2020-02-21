export const incremntCounter = () => {
    return {
        type: 'INCREMENT',
    }
}

export const decremntCounter = () => {
    return {
        type: 'DECREMENT',
    }
}

validationdata = (data, str) => {
    // console.log(data);
    if (isNaN(data)) {
        str = 'ERROR';
    }
    // if (data === '') {
    //     str = 'VALID';
    // }
    return {
        type: str,
        payload: data,
    }
}

export const addCounter = (data) => {
    return validationdata(data, 'ADD')
}




export const subCounter = (data) => {
    return validationdata(data, 'SUB')
}