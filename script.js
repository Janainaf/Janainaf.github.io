const apikey = "22620d2d";
const url = "http://www.omdbapi.com/?apikey=" + apikey;
const url1 = url + "&i=";

$(document).ready(function () {
  $(document).on("click", ".myBtn", function (e) {
    const imdbID = $(this).attr("id");
    $.ajax({
      method: "GET",
      url: url + "&i=" + imdbID,
      success: function (data) {
        $("#plot").html(data.Plot);
        $("#poster").attr("src", data.Poster);
        $("#myModal").modal("show");
      },
    });
  });

  $("#movieForm").submit(function (event) {
    event.preventDefault();
    const apikey = "22620d2d";
    let movie = $("#movie").val();
    const url = "http://www.omdbapi.com/?apikey=" + apikey;
    let result = [];

    $.ajax({
      method: "GET",
      url: url + "&s=" + movie,

      success: function (data) {
        console.log(data);
        result = data.Search;
        for (let i = 0; i < result.length; i++) {
          let movieDetails = `
          <div class="movie-card">
            <img class="movie-card__image" src="${result[i].Poster}" alt="${result[i].Title}">
            <div class="movie-card__body">
                <h5 class="movie-card__title">${result[i].Title}</h5>
                <h6 class="movie-card__date"> Release year: ${result[i].Year}</h6>
                <span>  <button class="btn btn-primary myBtn btn-movie__details" id="${result[i].imdbID}"> Read More </button>   </span> 
            </div>
        </div>`;
          $(".movies-list").append(`<h2>${movieDetails}</h2>`);
        }
      },
    });
  });
});
