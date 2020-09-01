const API = 'https://raw.githubusercontent.com/EgorTabakov/static/master/JSON/catalog.json';

const promise = new Promise((resolve, reject) => {
    
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xhr.open('GET', API, true);
    xhr.onload  = function () {
        if (xhr.status === 200) {
            resolve(xhr.responseText);
        } else {
            reject(Error('Произошла ошибка. Код ошибки:' + xhr.statusText));
        }
    }
    xhr.send();
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
      })
    //   
  

