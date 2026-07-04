function beforesubmit() {
    let outputDate = document.querySelector(".outputDate");
    let inputDate = document.querySelector(".inputDate");
    console.log("inputDate.Value", inputDate.value); 

    let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
    outputDate.value = formattedDate;
}