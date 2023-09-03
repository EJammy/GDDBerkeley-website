window.onload = function() {
	var syllabusLink = document.getElementById('syllabusLink');
	var scheduleLink = document.getElementById('scheduleLink');
	var labsLink = document.getElementById('labsLink');

	var syllabusPage = document.getElementById('syllabusPage');
	var schedulePage = document.getElementById('schedulePage');
	var labsPage = document.getElementById('labsPage');

	function resetDecal() {
		syllabusPage.setAttribute('class', 'hidden');
		schedulePage.setAttribute('class', 'hidden');
		labsPage.setAttribute('class', 'hidden');
		syllabusLink.setAttribute('class', 'notselected');
		scheduleLink.setAttribute('class', 'notselected');
		labsLink.setAttribute('class', 'notselected');
	}

	syllabusLink.onclick = function() {
		resetDecal();
		syllabusPage.setAttribute('class', 'visible');
		syllabusLink.setAttribute('class', 'selected');
	};

	scheduleLink.onclick = function() {
		resetDecal();
		schedulePage.setAttribute('class', 'visible');
		scheduleLink.setAttribute('class', 'selected');
	};

	labsLink.onclick = function() {
		resetDecal();
		labsPage.setAttribute('class', 'visible');
		labsLink.setAttribute('class', 'selected');
	};

	const urlParams = new URLSearchParams(window.location.search);
	const tabParam = urlParams.get('tab');

	switch (tabParam) {
		case "syllabus":
			syllabusLink.click();
			break;
		case "schedule":
			scheduleLink.click();
			break;
		case "labs":
			labsLink.click();
			break;
		default:
			syllabusLink.click();
	}
}