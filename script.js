document.addEventListener('click', function(event) {
	const flower = document.createElement('span');
	flower.innerHTML = '🌻';
	flower.className = 'flower';
	flower.style.left = (event.clientX - 30) + 'px';
	flower.style.bottom = '0';
	document.body.appendChild(flower);
});