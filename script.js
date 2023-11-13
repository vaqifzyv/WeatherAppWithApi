const countryName = document.querySelector(".country h2");
const topTemp = document.querySelector(".tempbycountry .temp");
const sunsetTime = document.querySelector(".sunsettime");
const airQua = document.querySelector(".airqua");
const feelLike = document.querySelector(".feellike");
const eneWind = document.querySelector(".enewind");
const humidityPer = document.querySelector(".humidityper");
const cloudCover = document.querySelector(".cloudcover");
const visibilityNum = document.querySelector(".visibilityNum");
const pressurePer = document.querySelector(".pressurePer");
const searchCountrybar = document.querySelector(".searchCountry");
const searchCountryButton = document.querySelector(".search-country-button");



async function fetchData() {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchCountrybar.value}?unitGroup=metric&key=R86R7M9PSE99C94M3BGPWBDE5&contentType=json`);

  const data = await response.json();
  showData(data);
}

fetchData();

const showData = function (data) {
  countryName.textContent = data.timezone;
  topTemp.textContent = data.days[0].temp;
  sunsetTime.textContent = data.days[0].sunset;
  airQua.textContent = data.days[0].conditions;
  feelLike.textContent = data.days[0].feelslike;
  eneWind.textContent = data.days[0].winddir;
  humidityPer.textContent = data.days[0].humidity;
  cloudCover.textContent = data.days[0].cloudcover;
  visibilityNum.textContent = data.days[0].visibility;
  pressurePer.textContent = data.days[0].pressure;
};

searchCountryButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetchData()=countryName.value;
});

window.addEventListener("keydown", (e) => {
 if (e.key === "Enter"){
  fetchData()=countryName.value;

 }

})