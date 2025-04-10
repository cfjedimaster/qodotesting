let pirate_api_key = process.env.PIRATE_KEY;
let lat = 30.216;
let lng = -92.033;


async function getPirateWeather(lat, lng, key) {
    let resp = await fetch(`https://api.pirateweather.net/forecast/${key}/${lat},${lng}?units=us&exclude=currently,minutely,hourly,alerts`);
	return await resp.json();
}

let results = await getPirateWeather(lat, lng, pirate_api_key);
console.log(results);