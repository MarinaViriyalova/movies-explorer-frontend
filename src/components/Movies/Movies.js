import './Movies.css';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoreMoviesButton from './MoreMoviesButton/MoreMoviesButton';
import  Footer  from '../Footer/Footer';

function Movies() {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList />
      <MoreMoviesButton />
      <Footer />
    </section>
  );
}

export default Movies;
