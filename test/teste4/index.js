const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status <= 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })
}


