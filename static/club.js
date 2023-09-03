window.onload = function() {
	var aboutLink = document.getElementById('aboutLink');
	var partiesLink = document.getElementById('partiesLink');
	var eventsLink = document.getElementById('eventsLink');

	var aboutPage = document.getElementById('aboutPage');
	var partiesPage = document.getElementById('partiesPage');
	var eventsPage = document.getElementById('eventsPage');

	function resetDecal() {
		aboutPage.setAttribute('class', 'hidden');
		partiesPage.setAttribute('class', 'hidden');
		eventsPage.setAttribute('class', 'hidden');
		aboutLink.setAttribute('class', 'notselected');
		partiesLink.setAttribute('class', 'notselected');
		eventsLink.setAttribute('class', 'notselected');
	}

	aboutLink.onclick = function() {
		resetDecal();
		aboutPage.setAttribute('class', 'visible');
		aboutLink.setAttribute('class', 'selected');
	};

	partiesLink.onclick = function() {
		resetDecal();
		partiesPage.setAttribute('class', 'visible');
		partiesLink.setAttribute('class', 'selected');
	};

	eventsLink.onclick = function() {
		resetDecal();
		eventsPage.setAttribute('class', 'visible');
		eventsLink.setAttribute('class', 'selected');
	};

	const urlParams = new URLSearchParams(window.location.search);
	const tabParam = urlParams.get('tab');

	switch (tabParam) {
		case "about":
			aboutLink.click();
			break;
		case "parties":
			partiesLink.click();
			break;
		case "events":
			eventsLink.click();
			break;
		default:
			aboutLink.click();
	}
}