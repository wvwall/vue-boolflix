Vue.config.devtools = true;

var app = new Vue ({
    el: '#root',
    data: {
     search: "",
     films: [] ,
     series: [] ,
     genresFilm: [],
     select : '',
    },
    methods: {
        searchFilm: function() {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1fca7b48e709a528e543e95bb52c20bd&language=it-IT&query=${this.search}`)
            .then((response) => {
              this.films = response.data.results;
            });
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=1fca7b48e709a528e543e95bb52c20bd&language=it-IT&query=${this.search}`)
            .then((response) => {
              this.series = response.data.results;
            });
        },
        starsVote: function (vote) {
          return Math.round(vote / 2)
        }
    },
    mounted() {
      axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=1fca7b48e709a528e543e95bb52c20bd")
      .then((response) => {
        this.genresFilm = response.data.genres;
        console.log(response);
      });
    },
  });