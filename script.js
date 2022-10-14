(function () {
  "use strict";

  //clock
  document.addEventListener("DOMContentLoaded", function () {
    let c = document.getElementById("clock");

    //setTimeout(updateClock, 2000);
    setInterval(updateClock, 1000);

    function updateClock() {
      let date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      let am_pm = date.Time;

      if (h > 12) {
        h -= 12;
        am_pm = "PM";
      }
      if (h == 0) {
        hr = 12;
        am_pm = "AM";
      }

      if (h < 10) {
        h = "0" + h;
      }

      if (m < 10) {
        m = "0" + m;
      }

      if (s < 10) {
        s = "0" + s;
      }

      c.innerHTML = h + ":" + m + ":" + s + am_pm;
    }
  });
  // forms

  document.getElementById("form").addEventListener("submit", estimateDelivery);

  let e = document.getElementById("delivery");
  e.innerHTML = "0,00 &euro;";

  function estimateDelivery(event) {
    event.preventDefault();


    let linn = document.getElementById("linn");

    if (linn.value === "") {
      alert("Palun valige linn nimekirjast");
      linn.focus();
      return;
    } 
    
    
    else {
      e.innerHTML = "x,xx &euro;";
    }

    console.log("Tarne hind on arvutatud");
  }
})();

// map

let mapAPIKey =
  "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

let map;

function GetMap() {
  "use strict";

  let centerPoint = new Microsoft.Maps.Location(58.38104, 26.71992);

  map = new Microsoft.Maps.Map("#map", {
    credentials: mapAPIKey,
    center: centerPoint,
    zoom: 14,
    mapTypeId: Microsoft.Maps.MapTypeId.road,
    disablePanning: true
  });

  let pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
    title: "TÜ"
  });
  
  


  let pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
    title: "Viljandi veetorn"
    //subTitle: 'veetorn',
    //text: 'Viljandi'
  });
  
  
  map.entities.push(pushpin);
}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE