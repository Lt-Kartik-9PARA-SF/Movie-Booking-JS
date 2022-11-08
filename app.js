import {fetchMovieAvailability,fetchMovieList} from "./api.js"

 function working (event){
    console.log(event);
}

let movieHolder = document.querySelector("#movie-holder");
let data = fetchMovieList();
data.then((response)=>{return response}).then((data)=>{
    let str = "";
    for(let i = 0; i < data.length;i++ ){
        str = str+`<a class="movie- link" href="#moviename" >
        <div class="movie" data- d="moviename" onclick="working(this)">
        <div class="movie-img-wrapper">
        <img src="${data[i].imgUrl}" alt = "logo" width="200px">
        </div>
        <h4 >${data[i].name}</h4>
        </div>
        </a>`;
    }
    movieHolder.innerHTML = str;
});

