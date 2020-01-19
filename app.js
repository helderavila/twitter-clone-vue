const vm = new Vue({
  el: "#app",
  data: {
    tweets: [],
    teste: 'Olá'
  },
  methods: {
    fetchTweets() {
      fetch('./api/tweets.json')
        .then(r => r.json())
        .then(r => {
          this.tweets = r;
        })
    }
  },
  created() {
    this.fetchTweets()
  }
})