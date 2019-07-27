var emotions  = ["happy", "sad", "angry"]

var results  = [];

var loadButtons = function(array){

	var buttons = "";

	array.forEach(function(element){

		buttons = buttons + '<button class="btn btn-info m-2 m-sm-1 item" type="submit">' + element +  '</button>';
	});

	$('#list-buttons').html(buttons);
	clickButton();
};

var addItem = function(){

	$('#add-item').on('click', function(e){

		e.preventDefault();

		var item = $('#item').val();
		
		emotions.push(item);
		loadButtons(emotions);
	});
};

var search  = function(item){

	//javascript, jQuery
	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + item + "&api_key=YbKUSy6efsg6WrXZxePkaEU5mEqsfaI8&limit=10");

	xhr.done(function(data) { 

		results = [];

		data.data.forEach(function(object){

			console.log(object.id)

			result = {

				rating : object.rating,
				url : "https://i.giphy.com/media/" + object.id + "/giphy_s.gif"
			}

			results.push(result)

		});

		displayResults();
	});

};


var clickButton = function(){

	$('button.item').on('click', function(){

		var item = $(this).text();

		search(item);

	});
};

var displayResults = function(){

	var dashboard  = ""

	results.forEach(function(result){

		dashboard  += '<div class="col-3 my-2 p-3 result-img text-center"><img src="' + result.url + '"><br><span class="rating">rating: ' + result.rating + '</span></div>'

	});

	$('#list-results').html(dashboard);


};


$('document').ready(function(){

	loadButtons(emotions);
	addItem();
});


