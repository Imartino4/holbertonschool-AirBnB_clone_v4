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
  // console.log(element);
  fetch('http://localhost:5001/api/v1/status/')
    .then(data => {
      console.log(data.status);
      if (data.status === 200) {
        element.classList.add('available');
      } else {
        element.classList.remove('available');
      }
    });
  // Task 4
  const places = document.querySelector('section.places');
  const body_dic = {};
  fetch('http://localhost:5001/api/v1/places_search/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body_dic)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // iria lo de places
      for (const place of data) {
        places.innerHTML += `
        <article>
	        <div class='title_box'>
	            <h2>${place.name}</h2>
	            <div class='price_by_night'>$${place.price_by_night}</div>
	        </div>
	        <div class='information'>
	            <div class='max_guest'>${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
                <div class='number_rooms'>${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
                <div class='number_bathrooms'>${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
	        </div>
            <div class='description'>
	            ${place.description}
            </div>
	    </article> `;
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
