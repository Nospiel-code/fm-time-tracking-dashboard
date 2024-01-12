const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

window.addEventListener("load", function () {
    getJsonData("daily");
})

daily.addEventListener("click", function () {
    getJsonData("daily");
})

weekly.addEventListener("click", function () {
    getJsonData("weekly");
})

monthly.addEventListener("click", function () {
    getJsonData("monthly");
})

function getJsonData(timeframe) {
    fetch("./data.json")
        .then((res) => {
            return res.json();
        }).then(data => {
            data.forEach((value, index) => {
                const currentHours = value.timeframes[timeframe].current;
                const previousHours = value.timeframes[timeframe].previous;
                const current = document.getElementById(`current-${index}`);
                const previous = document.getElementById(`previous-${index}`);

                if (timeframe === "daily") {
                    if (currentHours === 1) {
                        current.innerHTML = `${currentHours}hr`
                    } else {
                        current.innerHTML = `${currentHours}hrs`;
                    }

                    if (previousHours === 1) {
                        previous.innerHTML = `Yesterday ${previousHours}hr`
                    } else {
                        previous.innerHTML = `Yesterday ${previousHours}hrs`;
                    }
                } else if (timeframe === "weekly") {
                    if (currentHours === 1) {
                        current.innerHTML = `${currentHours}hr`
                    } else {
                        current.innerHTML = `${currentHours}hrs`;
                    }

                    if (previousHours === 1) {
                        previous.innerHTML = `Last Week ${previousHours}hr`
                    } else {
                        previous.innerHTML = `Last Week ${previousHours}hrs`;
                    }
                } else {
                    if (currentHours === 1) {
                        current.innerHTML = `${currentHours}hr`
                    } else {
                        current.innerHTML = `${currentHours}hrs`;
                    }

                    if (previousHours === 1) {
                        previous.innerHTML = `Last Month ${previousHours}hr`
                    } else {
                        previous.innerHTML = `Last Month ${previousHours}hrs`;
                    }
                }

            })
        })

}