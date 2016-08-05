
var VIDEO_DIR = "../media/";

$(document).ready(function()
{
  $('.videoBox').click(function(event)
  {
    event.preventDefault();

  	var videoFile = $(this).data("video");

  	$("#videoPlayer source").attr("src",VIDEO_DIR + videoFile + ".mp4");
  	$("#videoPlayer").load();
  	$("#videoPlayer").get(0).play();
  	$("html, body").scrollTop(0);
  });
});