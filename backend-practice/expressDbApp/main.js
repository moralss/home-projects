


function runFunction(){    
    axios.get("http://localhost:3000/")
        .then(response => {
            console.log("data", response);
        });

}


const schoolName = document.getElementById("school").value;

console.log(schoolName);


