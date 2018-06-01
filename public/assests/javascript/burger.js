$(".create-form").on("submit", function(event){
   event.preventDefault();
    var name = $("#ca").val().trim();
    console.log(name);
    
});

$(".devour").on("click", function(event){
    event.preventDefault();
    var id = $(this).attr("data-id");
    console.log(id);

    $.ajax({
    url: "/api/burgers/"+id,
    method: 'PUT'
    }).then(function(response) {
    console.log(response);
    location.reload();
    });
});