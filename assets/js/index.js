
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(currentTime);




//---------------BTN HANDLER(s)---------------//


  // ----9AM---------//
 
 $('#btn-9').on('click', function(){
  
  var textId =$('#am9').attr('id')
  var taskVal = $('#am9') 
  .val()
  .trim();  
  saveTasks(taskVal, textId) 
});
 // ----10am----------//

 $('#btn-10').on('click', function(){
  
  var textId =$('#am10').attr('id') 
  var taskVal = $('#am10')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 // ----11am----------//

 $('#btn-11').on('click', function(){
  
  var textId =$('#am11').attr('id') 
  var taskVal = $('#am11')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 // ----12pm----------//

 $('#btn-12').on('click', function(){
  
  var textId =$('#pm12').attr('id') 
  var taskVal = $('#pm12')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 // ----1pm----------//

 $('#btn-13').on('click', function(){
  
  var textId =$('#pm1').attr('id') 
  var taskVal = $('#pm1')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 // ----2pm----------//

 $('#btn-14').on('click', function(){
  
  var textId =$('#pm2').attr('id') 
  var taskVal = $('#pm2')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
// ----3pm----------//

 $('#btn-15').on('click', function(){
  
  var textId =$('#pm3').attr('id') 
  var taskVal = $('#pm3')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 // ----4pm----------//

 $('#btn-16').on('click', function(){
  
  var textId =$('#pm4').attr('id') 
  var taskVal = $('#pm4')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 // ----5pm----------//

 $('#btn-17').on('click', function(){
  
  var textId =$('#pm5').attr('id') 
  var taskVal = $('#pm5')  
  .val()
  .trim();  
  saveTasks(taskVal, textId)   
 });
 

//  ----------set storage-----------------//



 var saveTasks = function(taskVal, textId) {
  console.log(textId);

  localStorage.setItem(textId, taskVal);
 };



 var loadTasks = function(taskVal, TextId) {
  $('#am9').val(localStorage.getItem('am9'))
  $('#am10').val(localStorage.getItem('am10'))
  $('#am11').val(localStorage.getItem('am11'))
  $('#pm12').val(localStorage.getItem('pm12'))
  $('#pm1').val(localStorage.getItem('pm1'))
  $('#pm2').val(localStorage.getItem('pm2'))
  $('#pm3').val(localStorage.getItem('pm3'))
  $('#pm4').val(localStorage.getItem('pm4'))
  $('#pm5').val(localStorage.getItem('apm5'))
 }


 loadTasks()



