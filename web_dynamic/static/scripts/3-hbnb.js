#!/usr/bin/node


window.onload = function () {
    const a_h4 = document.querySelector(".amenities").querySelector('h4');
    const c_all = document.querySelectorAll('input[type=checkbox]')
    const final_list = [];
    for (const elem of c_all) {
        elem.addEventListener('change', function() {
            if (this.checked) {
                let a_name = elem.getAttribute("data-name");
                
                if (final_list.length !== 0) {
                    a_name = ' ' + a_name
                }
                final_list.push(a_name);
            } else {
                const index = final_list.indexOf(elem.getAttribute("data-name"));
                final_list.splice(index, 1);
            }
            a_h4.innerHTML = final_list;
        })
    }
}

const request = require('request');

request("http://localhost:5001/api/v1/status/", function (res) {
    element = document.querySelector('#api_status')
    if (res.status === 'OK')
        element.classList.add("available");
    else
        element.classList.remove("available");

})

// Task 4

body_dic = {}
fetch("http://0.0.0.0:5001/api/v1/places_search/", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body_dic)
})
.then((response) => response.json())
.then((data)) => {
    a
    a
    a
    a
}
