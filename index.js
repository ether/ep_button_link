var settings = require('ep_etherpad-lite/node/utils/Settings');

exports.clientVars = function(hook, context, callback){
  var ep_button_link = {};
  try {
    if (settings.ep_button_link){
       if(!settings.ep_button_link.link){
         console.warn("No link set for ep_button_link, add ep_button_link.link to settings.json");
         ep_button_link.link = "https://github.com/JohnMcLear/ep_button_link";
       }else{
         ep_button_link.link = settings.ep_button_link.link;
       }
       if(!settings.ep_button_link.text){
         ep_button_link.text = "NO TEXT SET";
         console.warn("No text set for ep_button_link, add ep_button_link.text to settings.json");
       }else{
         ep_button_link.text = settings.ep_button_link.text;
       }
       if(!settings.ep_button_link.before){
         ep_button_link.before = "[data-key='showTimeSlider']";
         console.info("No before set for ep_button_link, this may be intentional, add ep_button_link.before to settings.json");
       }else{
         ep_button_link.before = settings.ep_button_link.before;
       }
       if(!settings.ep_button_link.classes){
         ep_button_link.classes = "grouped-left";
         console.info("No classes set for ep_button_link, this may be intentional, add ep_button_link.classes to settings.json");
       }else{
         ep_button_link.classes = settings.ep_button_link.classes;
       }
       if(!settings.ep_button_link.after){
         console.info("No after set for ep_button_link, this may be intentional, add ep_button_link.classes to settings.json");
       }else{
         ep_button_link.after = settings.ep_button_link.after;
       }

    }else{
      console.warn('Set ep_button_link settings in settings.json, example is: "ep_button_link":{ "link" : "https://github.com/JohnMcLear/ep_button", "text": "TEST"}');
      ep_button_link = {};
      ep_button_link.link = "https://github.com/JohnMcLear/ep_button_link";
      ep_button_link.text = "NO TEXT SET";
      ep_button_link.before = ".buttonicon-history";
      ep_button_link.classes = "grouped-right";
      console.warn("No link set for ep_button_link, add ep_button_link.link to settings.json");
      console.warn("No text set for ep_button_link, add ep_button_link.text to settings.json");
    }
  } catch (e){
  }
  return callback({ep_button_link: ep_button_link});
};
