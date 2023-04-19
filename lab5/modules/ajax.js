class Ajax {
    async post(url, callback) {
        fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => callback(data))
            .catch((error) => console.error(error));
    }
}

export const ajax = new Ajax();
