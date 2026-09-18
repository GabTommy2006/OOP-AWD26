function calculateSum(a, b) {
    return new Promise((resolve, reject) => {
        if(typeof a !== 'number' || typeof b !== 'number') {
            reject('Hai số phải là kiểu number');
        } else {
            const sum = a + b;
            resolve(sum);
        }
    });
}

function handleResult(error, result, a, b) {
    if(error) {
        console.error('Đã có lỗi xảy ra: ', error);
    } else {
        document.getElementById('kq').innerHTML = `Tổng của ${a} và ${b} là: ${result}`;
    }
}

function sumNumbers() {
    const a = parseInt(document.getElementById('num1').value);
    const b = parseInt(document.getElementById('num2').value);
    calculateSum(a, b)
        .then(sum => handleResult(null, sum, a, b))
        .catch(error => handleResult(error, null, a, b));
}