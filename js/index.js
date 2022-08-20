$(document).ready(function(){callListener();});function callListener(){loadParticles();callVoteClickListener();callSocialMediaClickListener();}
function backgroundMovementListener(){var movementStrength=15;var height=movementStrength/$(window).height();var width=movementStrength/$(window).width();$("body").mousemove(function(e){var pageX=e.pageX-($(window).width()/2);var pageY=e.pageY-($(window).height()/2);var newvalueX=width*pageX*-1-25;var newvalueY=height*pageY*-1-50;$('body').css("background-position",newvalueX+"px     "+newvalueY+"px");});}
function loadParticles(){particlesJS.load('particles-js','assets/particles.json',function(){});}
function callVoteClickListener(){var element=$("#vote");element.on("click",function(e){swal({title:'',type:'info',html:'<a href="https://vote1.twerion.net">Vote Link 1</a><br>'+
'<a href="https://vote2.twerion.net">Vote Link 2</a><br>'+
'<a href="https://vote3.twerion.net">Vote Link 3</a><br>'+
'<a href="https://vote4.twerion.net">Vote Link 4</a><br>',showCloseButton:true,showCancelButton:false,focusConfirm:false,confirmButtonText:'OK',})});}
function callSocialMediaClickListener(){var element=$("#social_media");element.on("click",function(e){swal({title:'SOCIAL MEDIA',type:'info',html:'<i class="fab fa-twitter"></i> '+
'<a href="https://twitter.com/twerionnetwork">Twitter</a><br>'+
'<i class="fab fa-facebook"></i> '+
'<a href="https://www.facebook.com/twerionnetwork">Facebook</a><br>'+
'<i class="fab fa-instagram"></i> '+
'<a href="https://www.instagram.com/twerion_network/">Instagram</a><br>',showCloseButton:true,showCancelButton:false,focusConfirm:false,confirmButtonText:'OK',})});}