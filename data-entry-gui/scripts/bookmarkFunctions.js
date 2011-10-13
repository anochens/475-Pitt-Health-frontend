function loadBookmarks() {
	var bookmarkData = readCookie('bookmarkData');
	
	if(!bookmarkData) {
		window.bookmarks = [];
	}
	else {
		window.bookmarks = JSON.parse(bookmarkData);
	}
}

function addBookmark(endpagePK) {
	window.bookmarks.push(endpagePK);
}

function removeBookmark(endpagePK) {
	window.bookmarks.splice(window.bookmarks.indexOf(endpagePK), 1);
}

function saveBookmarks() {
	createCookie('bookmarkData', JSON.stringify(window.bookmarks), 365);
}

function toggleBookmark(endpagePK) {
	loadBookmarks();

	if(typeof endpagePK === 'undefined') {
		endpagePK = window.currentPK;
	}

	if(window.bookmarks.indexOf(endpagePK) != -1) {
		removeBookmark(endpagePK);
	}
	else {
		addBookmark(endpagePK);
	}

	saveBookmarks();
	showToggleButton();
}

function showBookmarks() {
	if(!window.bookmarks) {
		loadBookmarks();
	}

	$('#bookmarks-button').hide();
	$('#add-bookmark-button').hide();

	showMenu();
	makeMenu(window.bookmarks, 0, true);

	setBack(window.currentPK);
	setTitle('Your bookmarks');
}

function showToggleButton() {
	if(typeof window.bookmarks == 'undefined') {
		loadBookmarks();
	}
	$('#add-bookmark-button').show();
	$('#add-bookmark-button').find(':only-child:last').html('+ Bookmark');

	if(window.bookmarks.indexOf(window.currentPK) != -1) {
		$('#add-bookmark-button').find(':only-child:last').html('- Bookmark');
	}
}
