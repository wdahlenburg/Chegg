// A timeout function is used because the elements are not loaded in automatically in Chrome
setTimeout(function(){
//Three commands are used to remove the box.
//The first removes the frame
//The second removes the screenblocker element
//The third changes the title of the page
document.getElementById("view-limit-dialog").remove();
document.getElementsByClassName("C-common-dialog")[0].remove();
document.title = "Cheggsploit";
}, 500);
