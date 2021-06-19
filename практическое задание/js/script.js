

let forma = document.querySelector('form');
let input = document.querySelector('input');
let button = document.querySelector('.js-btn');
let textResult = document.querySelector('.textResult');


forma.addEventListener("submit",function(e) {
	e.preventDefault();
	
	let value = document.querySelector('input').value;
	if (value > 10) {
		textResult.innerHTML = "Число вне диапазона";
		return

	} else {
		let urlResponse = `https://picsum.photos/v2/list/?limit=${value}`
		return fetch(urlResponse)
		.then(response => {
			return response.json();
		})
		.then((data) => {

			data.forEach(function(item, i, arr) {
				let img = document.createElement('img');
				img.style = 'top: 10px; left: 10px; width: 20%; padding: 10px';
				textResult.append(img);
				img.setAttribute('src',item.download_url);
			});
		});	
	};
});



			// console.log(item.download_url);
				// console.log(value);

// let url = new URL('https://picsum.photos/v2/list/?limit=10');
// url.searchParams.set('limit', [value]);
// console.log(url.toString());
