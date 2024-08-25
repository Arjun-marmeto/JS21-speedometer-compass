
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

      navigator.geolocation.watchPosition(function(data) {
          // success callback
          console.log(data);
          speed.textContent = data.coords.speed;
          arrow.style.transform = `rotate(${data.coords.heading}deg)`;
      }, function(err) {
          console.log(err);
        alert('Oh NO...you gotta allow that to happen!!');
      });
