const feeling = document.getElementById("feelings");
const zipCode = document.getElementById("zip");
const apiKey = "584befef1f6116016438014a9b30ff2a";

let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

document.getElementById("generate").addEventListener("click", async () => {
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode.value}&appid=${apiKey}&units=imperial`;
    const res = await fetch(baseURL).then(data => data.json());

    await fetch("/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            temp: res.main.temp,
            date: newDate,
            feeling: feeling.value
        })
    });

    const allData = await fetch("/all").then(data => data.json());
    document.getElementById("temp").innerHTML = `Temp: ${allData.temp} &deg;C`;
    document.getElementById("date").innerHTML = `Date: ${allData.date}`;
    document.getElementById("content").innerHTML = `Feeling: ${allData.feeling}`;
});