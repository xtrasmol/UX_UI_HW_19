var currentProject = 'images/home_USDA.png';
var topProject = 'images/home_ClimbZen.png';
var bottomProject = 'images/home_Gulli.png';

var currentProjectHover = 'images/home_USDA_hover.png';
var topProjectHover = 'images/home_ClimbZen_hover.png';
var bottomProjectHover = 'images/home_Gulli_hover.png';

$('#project1Image').mouseenter(function() {
  $(this).css('background-image', 'url(' + topProjectHover + ')');
});
$('#project1Image').mouseleave(function() {
  $(this).css('background-image', 'url(' + topProject + ')');
});
$('#project2Image').mouseenter(function() {
  $(this).css('background-image', 'url(' + currentProjectHover + ')');
});
$('#project2Image').mouseleave(function() {
  $(this).css('background-image', 'url(' + currentProject + ')');
});
$('#project3Image').mouseenter(function() {
  $(this).css('background-image', 'url(' + bottomProjectHover + ')');
});
$('#project3Image').mouseleave(function() {
  $(this).css('background-image', 'url(' + bottomProject + ')');
});

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

  var cPHover = currentProjectHover;
  var tPHover = topProjectHover;
  var bPHover = bottomProjectHover;
  
  currentProjectHover = tPHover;
  topProjectHover = bPHover;
  bottomProjectHover = cPHover;
});