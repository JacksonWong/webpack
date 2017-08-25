/*
					***REM unit plugin for vue.js***
generates 100px font-size to HTML root element on iphone6 based screen.
*/

'use strict';

function setRootFontSize(){
	let vw = document.documentElement.clientWidth,
		elHtml = document.getElementsByTagName('HTML')[0];

	elHtml.style.fontSize = (vw / 3.75) + 'px';
}

const Vw = {
	install (Vue, options){
		setRootFontSize();
		window.addEventListener('resize', setRootFontSize, false);
	}
}

export default Vw;
