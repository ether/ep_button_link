exports.postAceInit = function(hook_name, args, cb) {

  var link = clientVars.ep_button_link.link;
  var text = clientVars.ep_button_link.text;
  var before = clientVars.ep_button_link.before;
  var after = clientVars.ep_button_link.after;
  var classes = clientVars.ep_button_link.classes;
  var button = "<li><a class='"+classes+"' target='_blank' href='"+link+"'><span id='ep_button_link_span' class='buttonicon'>" + text + "</span></a></li>";
  if(after){
    $(after).parent().after(button);
  }else{
    $(before).parent().before(button);
  }
  $('#ep_button_link_span').css({"background-image":"none", "width": "auto", "color":"#666", "font-size":"16px", "margin-top":"-3px"});
 
}
