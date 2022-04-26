/* ------------------------------------
All scripts here it will be extended to all pages
--------------------------------------*/
// 1) If no patient, show the message
$(document).ready(function() {
    
    var verify = $("#chk_td").length;
    if (verify == 0) {
        $("#no-data").text("No patient found");
    }
});

// 2) Time running at realtime
setInterval(function() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    $("#clock").html(
        (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s
    );
}, 10);

// 3) Validate all inputs
function validateEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

function ValidateAll() {
    var name = $("#name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var age = $("#age").val();
    var gender = $("#gender").val();

    if (name == '') {
      swal('Opsss !', 'Name field cannot be empty.', 'error');
      return false;
    } else if (name.split(" ").length < 2) {
      swal('Opsss !', 'Put at least the last name.', 'info');
      return false;
    } else if (phone == '') {
      swal('Opsss !', 'Phone field cannot be empty.', 'error');
      return false;
    } else if (email == '') {
      swal('Opsss !', 'Email field cannot be empty.', 'error');
      return false;
    } else if (!(validateEmail(email))) {
      swal('Opsss !', 'Put a valid email address.', 'error');
      return false;
    } else if (age == '') {
      swal('Opsss !', 'Age field cannot be empty.', 'error');
      return false;
    // }else if (age > 100) {
    //   $('#age').val("");
    //   swal('Denied !', 'The maximum value is 100 years old', 'info');
    //   return false;
    } else if (gender == '') {
      swal('Opsss !', 'Gender field cannot be empty.', 'error');
      return false;
    } else {
        return true
    }
    
}

$("#btn-add").bind("click", ValidateAll)

// 4) Only letters is allowed
$(document).ready(function() {
    $("input[name='name']").keyup(function(){
        var letter = $(this).val();
        var allow = letter.replace(/[^a-zA-Z _]/g, '');
        $(this).val(allow);
    });
    // Prevent starting with space
    $("input").on("keypress", function(e){
        if (e.which == 32 && !this.value.length)
            e.preventDefault();
        
    });
});

// 5) Only the first and last name (prevent full name )
$(document).ready(function(){
  $("#name").keyup(function(){
    var name = $("#name").val()
    if (name.split(" ").length == 3){
      swal("Opsss !", "Only name and last name", "info")
      $('#name').val("");
      return false 
    }
  })
})

// 6) First letter capitalized
$('#name').keyup(function () {
  var txt = $(this).val()
  $(this).val(txt.replace(/^(.)|\s(.)/g, function($1){
    return $1.toUpperCase()
  }))
});

// 7) Phone mask
$(document).ready(function(){
  $("#phone").inputmask("(+261) 99 99 999 99", {"onincomplete": function(){
    swal("Opsss !", "Incomplete phone number.", "info")
    return false
  }})
})

// 8) Script to lowercase input email
$(document).ready(function(){
  $("#email").keyup(function(){
    this.value = this.value.toLowerCase()
  })
})

// 9) if age > 100, auto clear
$(document).ready(function(){
  $('#age').keyup(() => {
    var age = $('#age').val();
    if (age > 100){
      $('#age').val("");
      swal('Denied !', 'The maximum value is 100 years old', 'info');
      return false
    }
  })
})

// 10) Script to allow only numbers in age
  $('#age').keyup(function() {
    if (!/^[0-9]$/.test(this.value)) {
      this.value = this.value.split(/[^0-9]/).join('');
    }
  });

// 11) Prevent starting by 0 in age field
$("#age").on("input", function(){
  if (/^0/.test(this.value)){
    this.value = this.value.replace(/^0/, "")
  }
})