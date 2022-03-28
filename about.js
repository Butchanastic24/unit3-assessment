console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form successfully submitted')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let photo = document.querySelector('#catPhoto')

function compliment(e){
	alert('Hey, you are pretty cool')
}

photo.addEventListener('mouseover', compliment)