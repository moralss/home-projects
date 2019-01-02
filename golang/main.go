package main

import (
"encoding/json"
"log"
"net/http"
"github.com/gorilla/mux"

)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/", HomeHandler).Methods("GET");

	r.HandleFunc("/api/{id:[0-9]+}", ReturnParams).Methods("GET");
	log.Fatal(http.ListenAndServe(":3000" , r));
}

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type" , "application/json")
	json.NewEncoder(w).Encode("hello world");	
}


func ReturnParams(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type" ,"application/json")
	params := mux.Vars(r)
	json.NewEncoder(w).Encode(params);	
}



