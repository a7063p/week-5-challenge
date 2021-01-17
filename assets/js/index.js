
// ---Scheduler Date

var currentTime = moment().format('MMMM Do YYYY');
$("#currentDay").append(currentTime);


//---------------BTN HANDLER(s)---------------//


  // ----9AM---------//
 
 $('#btn-9').on('click', function(){
  
  var textId =$('#h9').attr('id')
  var taskVal = $('#h9') 
  .val()
  .trim();  
  saveTasks(taskVal, textId) 
});
 // ----10am----------//

 $('#btn-10').on('click', function(){
  
  var textId =$('#h10').attr('id') 
  var taskVal = $('#h10')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 // ----11am----------//

 $('#btn-11').on('click', function(){
  
  var textId =$('#h11').attr('id') 
  var taskVal = $('#h11')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 // ----12pm----------//

 $('#btn-12').on('click', function(){
  
  var textId =$('#h12').attr('id') 
  var taskVal = $('#h12')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 // ----1pm----------//

 $('#btn-13').on('click', function(){
  
  var textId =$('#h13').attr('id') 
  var taskVal = $('#h13')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 // ----2pm----------//

 $('#btn-14').on('click', function(){
  
  var textId =$('#h14').attr('id') 
  var taskVal = $('#h14')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
// ----3pm----------//

 $('#btn-15').on('click', function(){
  
  var textId =$('#h15').attr('id') 
  var taskVal = $('#h15')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 // ----4pm----------//

 $('#btn-16').on('click', function(){
  
  var textId =$('#h16').attr('id') 
  var taskVal = $('#h16')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 // ----5pm----------//

 $('#btn-17').on('click', function(){
  
  var textId =$('#h17').attr('id') 
  var taskVal = $('#h17')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 

//  ----------set storage-----------------//
 var saveTasks = function(taskVal, textId) {
    localStorage.setItem(textId, taskVal);
 };


//  ---time handlers---//

 var currentTime = moment().hour(); 
 var currentMinutes = moment().minutes() * 60000;
 
 
 var checkTime = function () { 

  $('.text-box').each(function () {
    var scheduledTime= parseInt($(this).attr('id').split('h')[1])
    
    if (scheduledTime < currentTime) {
      $(this).removeClass("upcoming-time");
      $(this).removeClass("current-time");
      $(this).addClass("past-time")
    }
    else if (scheduledTime === currentTime) {
      $(this).removeClass("upcoming-time");
      $(this).removeClass("past-time");
      $(this).addClass("current-time")
    }
    else {
      $(this).removeClass("current-time");
      $(this).removeClass("past-time");
      $(this).addClass("upcoming-time")
    }
  })   
 }
 
 setInterval(function(){
   location.reload()
 },3600000- currentMinutes);
 



 var loadTasks = function(taskVal, TextId) {
  $('#h9').val(localStorage.getItem('h9'))
  $('#h10').val(localStorage.getItem('h10'))
  $('#h11').val(localStorage.getItem('h11'))
  $('#h12').val(localStorage.getItem('h12'))
  $('#h13').val(localStorage.getItem('h13'))
  $('#h14').val(localStorage.getItem('h14'))
  $('#h15').val(localStorage.getItem('h15'))
  $('#h16').val(localStorage.getItem('h16'))
  $('#h17').val(localStorage.getItem('h17'))
 };

 loadTasks();
 checkTime();


