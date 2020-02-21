async function catchEm(name) {
    stats.innerHTML = "<p></p>"
    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    data = await pokemon.json()      
    stats.innerHTML += "<p>" + data["species"]["url"] + "</p>";
}
theButton.addEventListener("click", (e)=> {
    catchEm(document.getElementById("theInput").value);
});