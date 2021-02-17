export const filterObject = (object, property, value) => {
    let result = {};
    for (let key in object) {
        const data = object[key];
        if (data[property] === value) {
            result[key] = data;
        }
    }
    return result;
};
