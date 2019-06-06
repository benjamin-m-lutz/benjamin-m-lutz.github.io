var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/lazy-bastard.jpg'){
		myImage.setAttribute ('src','images/lazy-bastard-2.jpg');
	} else {
		myImage.setAttribute ('src','images/lazy-bastard.jpg');
	}
}

