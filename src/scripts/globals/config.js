const CONFIG = {
  KEY: '4581fb4bc9f1c071af4e8573831b6f31',
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  DEFAULT_LANGUAGE: 'en-US',
  CACHE_NAME: new Date().toISOString(),
  DB_NAME: 'movie-catalogue-database',
  DB_VERSION: 1,
  OBJECT_STORE_NAME: 'movies',
  WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev',
};

export default CONFIG;