var currentProject = 'images/home_USDA.png';
var topProject = 'images/home_ClimbZen.png';
var bottomProject = 'images/home_Gulli.png';

var currentProjectHover = 'images/home_USDA_hover.png';
var topProjectHover = 'images/home_ClimbZen_hover.png';
var bottomProjectHover = 'images/home_Gulli_hover.png';

$('#prev').click(function() { 
  $('#project1Image').css('background-image', 'url(' + currentProject + ')');
  $('#project2Image').css('background-image', 'url(' + bottomProject + ')');
  $('#project3Image').css('background-image', 'url(' + topProject + ')');
  
  var cPHolder = currentProject;
  var tPHolder = topProject;
  var bPHolder = bottomProject;
  
  currentProject = bPHolder;
  topProject = cPHolder;
  bottomProject = tPHolder;

  $('#project1Image').hover(function() {
    $(this).css('background-image', 'url(' + currentProjectHover + ')');
  });
  $('#project2Image').hover(function() {
    $(this).css('background-image', 'url(' + bottomProjectHover + ')');
  });
  $('#project3Image').hover(function() {
    $(this).css('background-image', 'url(' + topProjectHover + ')');
  });
  
  var cPHover = currentProjectHover;
  var tPHover = topProjectHover;
  var bPHover = bottomProjectHover;
  
  currentProjectHover = bPHover;
  topProjectHover = cPHover;
  bottomProjectHover = tPHover;
});

$('#next').click(function() {
  $('#project1Image').css('background-image', 'url(' + bottomProject + ')');
  $('#project2Image').css('background-image', 'url(' + topProject + ')');
  $('#project3Image').css('background-image', 'url(' + currentProject + ')');
  
  var cPHolder = currentProject;
  var tPHolder = topProject;
  var bPHolder = bottomProject;
  
  currentProject = tPHolder;
  topProject = bPHolder;
  bottomProject = cPHolder;
});