
const output = document.getElementById("list");
const name = document.getElementById('playerName');
const playerGoals = document.getElementById('goals');
var urlGetPlayers = 'http://localhost:3003/api';
var urlPost = 'http://localhost:3003/add';
const searchlist = document.getElementById('searchlist');
const urlSearchPlayer = 'http://localhost:3003/add'; 
const search = document.getElementById('search');


function onFormSubmit(event) {
    event.preventDefault()
    axios.post(urlPost,
        { name: name.value, goals: playerGoals.value }
    )
}



axios.get(urlGetPlayers)
    .then(response => {
        console.log("data", response.data);
        response.data.forEach((element) => {
            output.innerHTML += `<li> ${element.name} , ${element.goals}</li>`

        });
    });



function sumbitSearch() {

    const searchInput = search;
    axios.get("http://localhost:3003/search/"+searchInput.value)


        .then(response => {
            console.log("data", response.data);
            if(response.data.length === 0){
                alert('not found Found');
                searchInput.value = "";
            }else {
                response.data.forEach((element) => {
                    searchlist.innerHTML += `<li> player name ${element.name} , goals ${element.goals}</li>`
    
                })

            }
        });
}

