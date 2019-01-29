const apiPostRoute = "http://localhost:3000/playerInfo";

function sumbitPlayInfo(event) {
    
    event.preventDefault();

    alert("thanks for submited the request");
    const name = document.getElementById("inputName").value;
    const surname = document.getElementById("inputSurname").value;
    const email = document.getElementById("email").value;
    const selectAge = document.getElementById("select").value;
    const jersuryNumber = document.getElementById("jersey-number").value;
    const strikerchecked = document.getElementById("striker").checked;
    const middlefield = document.getElementById("middlefield").checked;
    const defender = document.getElementById("defender").checked;

    var radioButtons = [
        { id: 1, name: "striker", status: strikerchecked },
        { id: 2, name: "middlefield", status: middlefield },
        { id: 3, name: "defender", status: defender }
    ];

    const findChecked = radioButtons.filter((radioObject) => {
        if (radioObject.status === true) {
            return radioObject;
        }
    })


    const playerInfo = {
        "name": name,
        "surname": surname,
        "email": email,
        "playerPosition": findChecked[0].name,
        "jerseyNumber": Number(jersuryNumber),
        "selectAge": Number(selectAge)
    }

    axios.post(apiPostRoute, playerInfo)
    console.log("playerInfo", playerInfo);
}

























