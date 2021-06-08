import TheMovieDbSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';
import { createLikeButtonTemplate, creatorMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    // eslint-disable-next-line quotes
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML += creatorMovieDetailTemplate(movie);

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;