

document.addEventListener('DOMContentLoaded', function () {
    // selecciona los elementos aquí
  
    var boton = document.getElementById('envio');
    boton.onclick = function () {
      sendMail();
    }
  
  
  });
  
  function sendMail() {
    var tempParams = {
      from_name: document.getElementById('email').value,
      to_name: "Mining Lists",
      message: document.getElementById('message').value,
      tel: document.getElementById('phoneNumber').value
    };
   
    emailjs.send('service_nzcv2lf', 'template_co1yp9o', tempParams)
      .then(function (res) {
        alert("¡Mensaje enviado!");
        document.getElementById('email').value="";
        document.getElementById('message').value="";
        document.getElementById('phoneNumber').value="";
        document.getElementById('name').value="";
      })
  
  }

  window. onscroll = function() {
    var y = window. scrollY;
    if(y<=45){
      document.getElementById('mensup').style.display='none';
    }else{
      document.getElementById('mensup').style.display='';
    }
  }
