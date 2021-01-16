
var tasks =  [];


// JSON.parse(localStorage.getItem("scheduleList")) ||

//---------------BTN HANDLER---------------//
  // ----9AM---------//
 
 $('#btn-9').on('click', function(){
  var taskVal = $('#text-9')
  .val()
  .trim();
  console.log(taskVal);
  setId(taskVal)  

 })
 // ----10am----------//

 $('#btn-10').on('click', function(){
  var taskVal = $('#text-10')
  .val()
  .trim();
  console.log(taskVal);
  setId(taskVal)
 })
 // ----11am----------//

 $('#btn-11').on('click', function(){  
  var taskVal = $('#text-11')
  .val()
  .trim();
   setId(taskVal)
     
 })



var setId = function(taskVal) {
  tasks.push(taskVal);

    for ( var i = 0; i< tasks.length; i++){
      $('.save-btn').attr('btn-data',i)
      $('.text-box').attr('text-data',i)
      } 
}

// var resetId = function(taskVal) {
//   var delTaskIndex = parseInt($('.text-box').attr('text-data'))

//   if(delTaskIndex === NaN) {
//     setId(taskVal)
//     console.log(delTaskIndex);
//   } else {
//     tasks.splice(delTaskIndex,1)
//     setId(taskVal)
//     console.log(tasks);
//   }
 
// }


      



