Vue.config.devtools = true;

var app = new Vue ({
    el: '#root',
    data: {
     search: "marvel",
     films: [] ,
     series: [] ,
     genresFilm: [],
     select : '',
    },
    methods: {
        searchFilm: function() {

          /* chiamata film */
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1fca7b48e709a528e543e95bb52c20bd&language=it-IT&query=${this.search}`)
            .then((response) => {
              this.films = response.data.results;
            });

            /* chiamata serie */
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=1fca7b48e709a528e543e95bb52c20bd&language=it-IT&query=${this.search}`)
            .then((response) => {
              this.series = response.data.results;
            });
        },

        /* voto da 1 a 1 0 decimale in un numero intero da 1 a 5 */
        starsVote: function (vote) {
          return Math.round(vote / 2)
        }
    },
    mounted() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1fca7b48e709a528e543e95bb52c20bd&language=it-IT&query=${this.search}`)
      .then((response) => {
        this.films = response.data.results;
      });

      /* chiamata serie */
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=1fca7b48e709a528e543e95bb52c20bd&language=it-IT&query=${this.search}`)
      .then((response) => {
        this.series = response.data.results;
      });

      /* chiamata generi */
      axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=1fca7b48e709a528e543e95bb52c20bd")
      .then((response) => {
        this.genresFilm = response.data.genres;
        console.log(response);
      });
    },
  });

