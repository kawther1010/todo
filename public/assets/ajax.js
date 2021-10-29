// Only AJAX here

$("button").on('click', function add(){
  $.post("/",
  {task},
  function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });}
);