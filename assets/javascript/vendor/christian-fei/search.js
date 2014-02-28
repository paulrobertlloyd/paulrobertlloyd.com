window.JekyllSearch = (function(window,document){
	var searchInput = document.querySelector(".search__input"),
		jsonFile = "/search.json",
		jsonData = null,
		template = "<span class='search__result'>{type}: <a href='{url}'>{title}</a></span>",
		searchResults = document.querySelector(".search__results"),
		searchResultsHeader = "<h4 class='search__heading'>Search results</h4>",
		limit = 10,
		fuzzy = false,
		noResults = "<p>Nothing matched your query</p>";

	/*
		register the keydown event and load the json file
	*/
	function load(){
		if( searchInput && searchResults ){
			getJSON();
			searchInput.addEventListener("keydown", search);
		}else{
			console.log("Couldn't find the searchInput or searchResults element");
		}
	}

	/*
		Fetches the JSON file and populate the jsonData var
	*/
	function getJSON(){
		var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
		xhr.open("GET", jsonFile, true);
		xhr.onreadystatechange = function(){
			if (xhr.status==200 && xhr.readyState==4){
				try{
					jsonData = JSON.parse( xhr.responseText );
					console.log( "data loaded successfully" );
				}catch(err){
					console.log( err );
					jsonData = null;
				}
			}
		}
		xhr.send();
	}

	/*
		Perform a search on the keydown event
		e is passed from the event listener to determine which key the user pressed
	*/
	function search( e ){
		if(e.which === 13 && matches && matches.length){
			window.location = matches[0].url;
		}else{
			if(jsonData){
				writeMatches( getMatches( e.target.value ) );
			}else{
				console.log( "jsonData is not ready" );
			}
		}
	}
	/*
		Get matches that satisfy the query
	*/
	function getMatches( query ){
		matches = [];
		for (var i = 0; i < jsonData.length; i++) {
			var obj = jsonData[i];
			for (key in obj) {
				if( fuzzy ){
					var regexp = new RegExp( query.split('').join('.*?'), 'gi');
					if( obj[key].match(regexp) ){
						matches.push(obj);
						break;
					}
				}else if (obj.hasOwnProperty(key) && obj[key].toLowerCase().indexOf(query.toLowerCase()) >= 0){
					matches.push(obj);
					break;
				}
			}
		}
		return matches;
	}

	/*
		Write out the matches
	*/
	function writeMatches( matches ){
		searchResults.innerHTML = searchResultsHeader;
		if( matches && matches.length ){
			for (var i = 0; i < matches.length &&  i < limit; i++) {
				var match = matches[i];
				var output = template.replace(/\{(.*?)\}/g, function(m, capturedGroup) {
					return match[ capturedGroup ];
				});
				searchResults.innerHTML += output;
			}
		}else{
			searchResults.innerHTML = searchResultsHeader + noResults;
		}
	}

	return {
		init: function(options){
			if( options ){
				searchInput = options.searchInput || searchInput;
				jsonFile = options.jsonFile || jsonFile;
				template = options.template || template;
				searchResults = options.searchResults || searchResults;
				searchResultsHeader = options.searchResultsHeader || searchResultsHeader;
				limit = options.limit || limit;
				fuzzy = options.fuzzy || fuzzy;
				noResults = options.noResults || noResults;
			}
			load();
		}
	}
})(window,document);