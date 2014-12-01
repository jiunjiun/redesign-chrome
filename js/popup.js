chrome.runtime.sendMessage({type: "getStylesheets"}, function(response) {
  styles = response.styles;
  init_list(styles)
});

function init_list(styles) {
  $("#list").html("");
  $.each(styles, function(key, val){

    a = $('<a/>', {href: "http://redesign.jiunjiun.me/"+ val.owner + "/" + val.name, html: val.owner + " / " + val.name});
    p = $('<p/>', {});

    a.appendTo(p);
    p.appendTo("#list");
  });
}

$(function() {
  $('body').on('click', 'a', function() {
    chrome.tabs.create({url: $(this).attr('href')});
    return false;
  });
})
