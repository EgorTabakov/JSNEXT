const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json';

function makeGETRequest(url, callback) {
    let xhr;
//debugger;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    }

    xhr.open('GET', url, true);
    xhr.send();
}
makeGETRequest(API, (data) => {
    console.log(data);
});