function multiplyArray(arr, value) {
    if (!Array.isArray(arr)) {
        return 'Not an array';
    }

    if (typeof value !== 'number') {
        return 'Not a number';
    }

    return arr.map((item) => item * value);
}

function multiplyNumber(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Not a number';
    }


    return a * b;
}

function parseJson(json) {
    try {
        return JSON.parse(json);
    } catch (e) {
        throw new Error('Invalid JSON');
    }
}

module.exports = {
    multiplyArray,
    multiplyNumber,
    parseJson
}