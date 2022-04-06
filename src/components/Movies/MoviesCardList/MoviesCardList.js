import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

// import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
  return (
    <section className='movies-card'>
        {/* <Preloader /> */}
      <div className='movies-card__no-search-results movies-card__no-search-results_hidden'>
        <p className='movies-card__no-search-results-text'>Ничего не нашлось. Попробуйте заново.</p>
      </div>

      <div className='movies-card__list-container movies-card__list-container_hidden'>
        <ul className='movies-card__list'>
          <MoviesCard />
        </ul>
      </div>
    </section>
  );
}

export default MoviesCardList;
