let intervalDetails = "";
intervalDetails = setInterval(() => {
    console.log("Interval running...");
}, 3000);

setTimeout(() => {
    clearInterval(intervalDetails);
    console.log("Interval stopped.");
}, 12000);    