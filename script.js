const image = document.querySelector('.container img');

window.onload = (e) => {
	const windowWidth = window.innerWidth;
	if (windowWidth >= 768) {
		image.src = './images/image-product-desktop.jpg';
		image.classList.add('desktop');
	}
};
