const key = "7067b0362ea6451fa2e152200222004";
let city = "houston";
let name = document.getElementById("name");
let text = document.getElementById("text");
let card = document.querySelector(".card");
let icon = document.getElementById("icon");
let temp = document.getElementById("temp_f");
let btn = document.getElementById("btn");
let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;

getData = () => {
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      name.innerText = data.location.name;
      wind_mph.innerText = data.current.wind_mph;
      wind_dir.innerText = data.current.wind_dir;
      humidity.innerText = data.current.humidity;
      uv.innerText = data.current.uv;
      name.innerText = data.location.name;
      text.innerText = data.current.condition.text;
      temp.innerText = data.current.temp_f + " F";
      icon.src = data.current.condition.icon;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
  setBg();
};

btn.addEventListener("click", function (event) {
  event.preventDefault();
  city = document.getElementById("city-name").value;
  console.log(city);
  let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      name.innerText = data.location.name;
      wind_mph.innerText = data.current.wind_mph;
      wind_dir.innerText = data.current.wind_dir;
      humidity.innerText = data.current.humidity;
      uv.innerText = data.current.uv;
      name.innerText = data.location.name;
      text.innerText = data.current.condition.text;
      temp.innerText = data.current.temp_f + " F";
      icon.src = data.current.condition.icon;
      setBg();
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});

const setBg = () => {
  if (text.innerText == "Sunny") {
    card.style.boxShadow = "0 0 100px 10px orange";
  } else if (
    text.innerText == "Overcast" ||
    text.innerText == "Partly cloudy"
  ) {
    card.style.boxShadow = "0 0 100px 10px gray";
  } else if (text.innerText.includes("rain")) {
    card.style.boxShadow = "0 0 100px 10px lightblue";
  } else {
    card.style.boxShadow = "0 0 100px 10px #fff";
  }
};

const setData = () => {
  name.innerText = data.location.name;
  wind_mph.innerText = data.current.wind_mph;
  wind_dir.innerText = data.current.wind_dir;
  humidity.innerText = data.current.humidity;
  uv.innerText = data.current.uv;
  name.innerText = data.location.name;
  text.innerText = data.current.condition.text;
  icon.src = data.current.condition.icon;
};

getData();
