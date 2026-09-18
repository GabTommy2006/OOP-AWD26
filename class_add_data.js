function addDataToAPI(url, data, callback) {
    fetch(url,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        }
    )
.then(response => {
    if(!response.ok) {
        throw new Error('Lỗi khi thêm dữ liệu vào API');
    }
    return response.json();
})
.then(result => {
    callback(null, result);
})
.catch(error => {
    callback(error, null);
})
}

function handleAddDataResponse(error, result) {
    if(error) {
        console.error('Lỗi', error.message);
    } else {
        console.log('Dữ liệu đã được thêm vào API thành công: ', result);
    }
}

const apiUrl = 'https://6aacae9da2413bf0ec10ec9e.mockapi.io/product';

const newData = {
    name: 'Gabriel Tommy',
    price: 710,
}

addDataToAPI(apiUrl, newData, handleAddDataResponse);
