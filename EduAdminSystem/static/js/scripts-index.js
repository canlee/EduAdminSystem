// JavaScript Document
function detectBrowser()
{
	var browser=navigator.appName;
	var b_version=navigator.appVersion;
	var version=parseFloat(b_version);
	if (top.location.href!=location.href)
		top.location.href=index.html;
	if (!(browser=="Netscape" && version>=5|| browser=="Microsoft Internet Explorer" && version>=9))
	{
		alert("It's time to upgrade your browser!");
		location="http://www.googlestable.com";
	}
}

$(document).ready(function() {
	$("ul#nav li a").addClass("js");
	$("ul#nav li a").hover(
      function () {
        $(this).stop(true,true).animate({backgroundPosition:"(0 0)"}, 200);
        $(this).animate({backgroundPosition:"(0 -5px)"}, 150);
      }, 
      function () {
        $(this).animate({backgroundPosition:"(0 -149px)"}, 200);

      }
    );

});
