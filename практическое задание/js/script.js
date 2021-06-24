

let forma = document.querySelector('form');
let textResult = document.querySelector('.textResult');


forma.addEventListener("submit",function(e) {
	e.preventDefault();
	
	let value = document.querySelector('input').value;
	if (value > 10 && value < 1) {
		textResult.innerHTML = "Число вне диапазона";
	else if(isNaN(value)) {
		textResult.innerHTML = "Значение не число";	

	} else {
		let urlResponse = `https://picsum.photos/v2/list/?limit=${value}`
		fetch(urlResponse)
		.then(response => {
			return response.json();
		})
		.then((data) => {

			data.forEach(function(item) {
				let img = document.createElement('img');
				img.style = 'top: 10px; left: 10px; width: 20%; padding: 10px';
				textResult.append(img);
				img.setAttribute('src',item.download_url);
			});
		});	
	};
});


