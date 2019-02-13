window.onload = function() {
    function rand(min, max) {
        return Math.floor(min + Math.random() * (max - min + 1));
    };
    function request(url) {
        xhr.open('GET', url);
        xhr.send();
    }
    setTimeout(() => {
        let limitNumber = rand(0, 10);
        console.log('limitNumber = ' + limitNumber);
    }, 1000);
    setTimeout(() => {
        let pageNumber = rand(0, 10);
        console.log('pageNumber = ' + pageNumber);
    }, 2000);
    let xhr = new XMLHttpRequest();
    //promise
    function getPromise() {
        let promise = new Promise(function(resolve, reject) {
                setTimeout(() => {
                    xhr.onreadystatechange = function() {
                        if(this.readyState === 4 && this.status === 200) {
                            resolve(JSON.parse(this.responseText));
                        }
                    }
                request('http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}');
                }, 2500);
        });
        return promise;
    };
    getPromise()
        .then(result => console.log('promise ',result))
        .catch(error => console.log('error'));
    //callback
    function getCallback(callback) {
        const cb = callback || function() {};
        setTimeout(() => {
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                cb(JSON.parse(this.responseText));
            };
        };
        request('http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}');
        }, 2250);
    };

    getCallback(function(callback) {
        console.log('callback', callback);
    });

    //async

    async function getAsync() {
        let promise = new Promise(function(resolve, reject) {
            setTimeout(() => {
                xhr.onreadystatechange = function() {
                    if(this.readyState === 4 && this.status === 200) {
                        resolve(JSON.parse(this.responseText));
                    }
                }
            request('http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}');
            }, 2750);
        });
        return promise;
    };
    getAsync()
        .then(result => console.log('async ', result))
        .catch(error => console.error(error));
};
