Vue.config.devtools = true;

var app = new Vue ({
    el: '#root',
    data: {
     search: "",
     films: []   
    },
    methods: {
        searchFilm: function() {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1fca7b48e709a528e543e95bb52c20bd&language=it-IT&query=${this.search}`)
            .then((response) => {
              this.films = response.data.results;
            });
        }
    },
  });