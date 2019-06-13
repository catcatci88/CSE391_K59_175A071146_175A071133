$(document).ready(function(){
	var fruit = ['Apple.jpg','orange .jpg'];
	for (let i =0;i< fruit.length; i++){
		$('#album-view').append('<img src="'+fruit[i]+'"/>');

	}
// Xử lý sự kiện
$('img').each(function(index){
	$(this).click(function(){
		$('#modal-view').append('<img src="'+$(this).attr('src')+'" />')
		$('#modal-view').removeClass('andi');
})
$('#modal-view').click(function(){
	$(this).addClass('andi').html('');
});
});
//Doc troc JQuery UI
////Doc va thuc hanh truoc bootstap
