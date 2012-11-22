// JavaScript Document
$(document).ready(function(){ 
    $("#alert").hide();
	$("#login").click(function(){
        if (validate())
            login(); //点击ID为submit"的按钮后触发函数 login(); 
        else (this).stop();
	}); 

  var csrftoken = getCookie('csrftoken');
//  alert("CSRF Token: " + csrftoken);

  $.ajaxSetup({
    beforeSend: function(xhr, settings) {
      if (!csrfSafeMethod(settings.type) && sameOrigin(settings.url)) {
        xhr.setRequestHeader("X-CSRFToken", csrftoken);
      }
    }
  });
}); 

function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i ++) {
      var cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) == (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function csrfSafeMethod(method) {
  // These HTTP methods do not require CSRF protection
  return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}

function sameOrigin(url) {
  // test that given url is a same-origin url
  // url could be relative or scheme relative or absolute
  var host = document.location.host;
  var protocol = document.location.protocol;
  var sr_origin = '//' + host;
  // Allow absolute or scheme relative URLs to same origin
       return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
               (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
              // or any other URL that isn't scheme relative or absolute i.e relative.
              !(/^(\/\/|http:|https:).*/.test(url));
}

function validate()
{
    var username = $("#username").val();
    var passwd = $("#passwd").val();
    if (username == "")
    {
        $("#alert").show();
        $("#alert").append("请输入用户名！");
        $("#username")[0].focus();
        return false;
    }
    else return true;
}

function login()
{
	$.ajax({
		url: '/user/login/', //访问路径
		data: 'username=' + $("#username").val() + "&password=" + $("#passwd").val(), //需要验证的参数
		type: 'post', //传值的方式
		error: function ()
		{//访问失败时调用的函数
			alert("链接服务器错误！");
		},
		success: function (msg)
		{//访问成功时调用的函数,这里的msg是login.php返回的值
			$(".container").load(msg);
		}
	});
}
