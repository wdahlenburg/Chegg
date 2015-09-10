//Imports
var self = require('sdk/self');
var pageMod = require("sdk/page-mod");
 
//This script is used to exploit the multiple users message
pageMod.PageMod({
  //Only remove content on Chegg
  include: "*.chegg.com",
  //The script deletes two elements. The "view-limit-dialog" and the "screenblocker" element need to be deleted.
  //The screenblocker was deletable by jQuery with $('.screenblocker').remove();, but I couldn't figure out how to work with jQuery and javascript for this addon.
  //The third command changes the title to "Cheggsploit"
  contentScript:'document.getElementById("view-limit-dialog").remove();' +
  				'document.getElementsByClassName("C-common-dialog")[0].remove();' +
  				'document.title = "Cheggsploit";'
});