var Plugin_URL = "http://redesign.jiunjiun.me/plugin.json";
var current_url = window.location.protocol + "//" + window.location.host;
console.log(current_url);
$(function() {
  $.get( Plugin_URL, {url: current_url}, function( stylesheets ) {
    stylesheets = stylesheets.style;
    $.each(stylesheets, function(i, val) {
      append_style(val.link);
    });

  }, "json" );

  function append_style(url) {
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = url;
    (document.head||document.documentElement).appendChild(style);
  }
})