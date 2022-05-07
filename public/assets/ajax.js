// Only AJAX here

$(document).ready(function(){
  $("#add").click(function(event){
    event.preventDefault();

    let task = $("#task").val();
    // ajax call 
    $.ajax({
      url: "/add",
      type: "POST",
      data: {task: task},
      success: function(_res){
        console.log('done');
        // hna u can add some actions and checks but lzm tkon kayna resposne m server tkon json ou xml ou hadja kima haka ya3ni parsable 
      },
      error: function(_err){
        alert("server error 500");
      }
    });
  });

});


/*
$("button").on('click', function add(){

  $.ajax({
    uri: "/",
    type: "POST", // api endpoint
    data: {}, // data u need to send
    success: function(_response){
      item = JSON.parse(_response);
        console.log(item.name) // juste an example trying to get item name
      },
    error: function(_error){
      alert("server error");
    }
  });
}
*/