#!/usr/bin/node

window.onload = function () {
  const a_h4 = document.querySelector('.amenities').querySelector('h4');
  const c_all = document.querySelectorAll('input[type=checkbox]');
  const final_list = [];
  for (const elem of c_all) {
    elem.addEventListener('change', function () {
      if (this.checked) {
        let a_name = elem.getAttribute('data-name');

        if (final_list.length !== 0) {
          a_name = ' ' + a_name;
        }
        final_list.push(a_name);
      } else {
        const index = final_list.indexOf(elem.getAttribute('data-name'));
        final_list.splice(index, 1);
      }
      a_h4.innerHTML = final_list;
    });
  }

  const element = document.getElementById('api_status');
  console.log(element);
  fetch('http://localhost:5001/api/v1/status/')
    .then(data => {
      console.log(data.status);
      if (data.status === 200) {
        element.classList.add('available');
      } else {
        element.classList.remove('available');
      }
    });
};
