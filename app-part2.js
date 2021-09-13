const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      url1: "http://inixindo.id",
      url2: "http://inixindosurabaya.id",
      books: [
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          img: "./assets/image_1.jpg",
          isFav: true,
        },
        {
          title: "The Way of Kings",
          author: "Brandon Sanderson",
          img: "./assets/image_2.jpg",
          isFav: false,
        },
        {
          title: "Name of The Wind",
          author: "Patrick Rothfuss",
          img: "./assets/image_3.jpg",
          isFav: true,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
        book.isFav = !book.isFav
    }
  },
});

app.mount("#app");
