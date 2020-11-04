function trainer(event) {
    let imageUrl = event.srcElement.getAttribute("src");
    document.getElementById("div2").innerHTML = `<img src="${imageUrl}>"`;
    event.dataTransfer.setData("text", event.target.id);

    console.log("je déplace", imageUrl);
    console.log(document.getElementById("div2"));
    console.log("set : ", event.dataTransfer.getData("text"), event.target.id);
}

function permettreDepot(event) {
    event.preventDefault();
}

function deposer(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.innerHTML = document.getElementById(data);

    console.log("div2", event.dataTransfer.getData("div2")) // PK t'es empty
    console.log(data) // PK t'es empty
    event.target.innerHTML = "lol"
}