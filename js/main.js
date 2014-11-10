$(document).ready(function(){
	//$("#content").append('asdsdfsdf');


	$.getJSON( "js/data.json", function(data) {
		var $data = data;
		console.log(data);

		$("#content").append('<div class="item">'+data+'</div>');
	});

	window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log(ev);
    }
};
})