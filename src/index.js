// You should implement your task here.

module.exports = function towelSort(matrix) {
    const x = [];

    if (!matrix || matrix.length === 0) {
        return x;
    }

    for (let i = 0; i < matrix.length; i++) {
        const row = i % 2 === 0 ? matrix[i] : matrix[i].slice().reverse();
        x.push(...row);
    }

    return x;
};
