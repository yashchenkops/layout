(function () {
	(function submitForm(){
    $('#form').validate();

    $('#btnSend').on('click', function(e) {
      e.preventDefault();
      let email = $('#email').val();
          password = $('#password').val();
          form = $('#form');

      if (form.valid()) {
        console.log('Your email: ' + email);
        console.log('Your password: ' + password);
        form.trigger('reset');
      } else{
        console.log('All fields are required!');
      }
    })
  })();
})();
//\\//\\//\\//\\ End jQuery //\\//\\//\\//\\

(function weather() {
  let apiKey = "de2fa1c788f906f2443534e4664b5c6d";
  let city = "Kyiv";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${apiKey}`;

  axios.get(url).then(res => {
    console.log(res.data);
  })

  axios.get(url).then(res => {
    document.querySelector('#city').innerHTML = res.data.name
    document.querySelector('#temp').innerHTML = res.data.main.temp
    document.querySelector('#humidity').innerHTML = res.data.main.humidity
    document.querySelector('#wind').innerHTML = res.data.wind.speed
  })
})();