var emotions  = ["happy", "sad", "angry"]

var loadButtons = function(array){

	var buttons = "";

	array.forEach(function(element){

		buttons = buttons + '<button class="btn btn-info m-2 m-sm-1" type="submit">' + element +  '</button>';
	});

	$('#list-buttons').html(buttons);
};

var addItem = function(){

	$('#add-item').on('click', function(){

		var item = $('#item').val();
		
		emotions.push(item);
		loadButtons(emotions);
	});
};


$('document').ready(function(){

	loadButtons(emotions);
	addItem();

});


