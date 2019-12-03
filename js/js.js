$(function(){
	//底部导航
	$('footer a').click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	//搜索
	$('.Isearch').click(function(){
		var scrollTop = $(document).scrollTop();
		$("#searchcontent").css({
			'top':  scrollTop,
		}).show();
		$("body").css({
			'overflow':  'hidden',
		});
		$('#searchcontent').load("search.html")
	})
	function setDivCenter() {
		var scrollTop = $(document).scrollTop();
		$("#searchcontent").css({
			'top':  scrollTop,
		}).show();
	}
})
//提示框
function tipsopen(){
	$(".Tips_bg").show();
	tipsDivCenter()
}
function tipsclose(){
	$(".Tips_bg").hide();
	$(".Tips").hide();
}
function tipsDivCenter() {
	var top = ($(window).height() - $(".Tips").height()) / 2;
	var scrollTop = $(document).scrollTop();
	$(".Tips").css({
		'top':  top+scrollTop,
	}).show();
}