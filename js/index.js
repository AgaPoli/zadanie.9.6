var list = document.getElementById('list'),
	add = document.getElementById('addElem'),
	liElements = document.getElementsByTagName('li');

//console.log(withTagElement.length);

add.addEventListener('click', function() {
	var element = document.createElement('li');
	element.innerHTML = 'item ' + liElements.length;
	list.appendChild(element);
});