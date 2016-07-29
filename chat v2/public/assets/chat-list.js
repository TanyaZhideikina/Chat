$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form #item');
      var name = $('form #name')
      var message = {item: item.val(),
                     name: name.val()};

      $.ajax({
        type: 'POST',
        url: '/',
        data: message,
        success: function(data){
        console.log('yes');
         location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/' + item,
        success: function(data){
          location.reload();
        }
      });
  });

});
