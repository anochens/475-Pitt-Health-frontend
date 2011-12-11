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
	
	setBack(window.currentPK);
	setTitle('Bookmarks');	
	
	if(window.bookmarks.length == 0){
		hideMenu();
		var data="No bookmarks yet.";
		$('#main-data').html(data);
		setBack(1);
		return;
	}
	
	$('#bookmarks-button').hide();
	$('#add-bookmark-button').hide();
	
	showMenu(true); //the true makes it hide the search bar
	makeMenu(window.bookmarks, 0, true);
}

function showToggleButton() {
	if(typeof window.bookmarks == 'undefined') {
		loadBookmarks();
	}
	if(window.bookmarks.indexOf(window.currentPK) != -1) {
		$('#remove-bookmark-button').show();
		$('#add-bookmark-button').hide();
	}
	else{
		$('#add-bookmark-button').show();
		$('#remove-bookmark-button').hide();
	}
}

