const ids = {
  action: 28,
  adventure: 12,
  animatin: 16,
  comedy: 35,
  crime: 80,
  documentary: 99,
  drama: 18,
  fantasy: 14,
  history: 36,
  horror: 27,
  music: 10402,
  mystery: 9648,
  romance: 10749,
  scifi: 878,
  war: 10752,
};

export default {
  fetchTrending: {
    name: 'Trending',
    url: `https://api.themoviedb.org/3/trending/all/week?api_key=25e76ce48910ab5d09634318e25a43ec`,
  },
  fetchTopRated: {
    name: 'Top Rated',
    url: `https://api.themoviedb.org/3/movie/top_rated?api_key=25e76ce48910ab5d09634318e25a43ec&language=en-US`,
  },

  fetchAction: {
    actionid: 28,
    name: 'Action',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.action}`,
  },
  fetchAdventure: {
    adventureid: 12,
    name: 'Adventure',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.adventure}`,
  },

  fetchComedy: {
    comedyid: 35,
    name: 'Comedy',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.comedy}`,
  },
  fetchCrime: {
    crimeid: 80,
    name: 'Crime',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.crime}`,
  },
  fetchDocumentary: {
    documentaryid: 99,
    name: 'Documentary',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.documentary}`,
  },
  fetchDrama: {
    dramaid: 18,
    name: 'Drama',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.drama}`,
  },
  fetchFantasy: {
    fantasyid: 14,
    name: 'Fantasy',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.fantasy}`,
  },
  fetchHistory: {
    historyid: 36,
    name: 'History',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.history}`,
  },
  fetchHorror: {
    horrorid: 27,
    name: 'Horror',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.horror}`,
  },
  fetchMusic: {
    musicid: 10402,
    name: 'Music',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.music}`,
  },
  fetchMystery: {
    mysteryid: 9648,
    name: 'Mystery',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.mystery}`,
  },
  fetchRomance: {
    romanceid: 10749,
    name: 'Romance',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.romance}`,
  },
  fetchScienceFiction: {
    scifiid: 878,
    name: 'Science-Fiction',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.scifi}`,
  },
  fetchWar: {
    warid: 10752,
    name: 'War',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=25e76ce48910ab5d09634318e25a43ec&with_genres=${ids.war}`,
  },
};
