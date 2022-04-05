import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';

function Movies() {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default Movies;
