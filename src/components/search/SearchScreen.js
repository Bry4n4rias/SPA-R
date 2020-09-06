import React, { useMemo } from 'react';
import queryString from 'query-string';
import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/hetHeroesByName';

export const SearchScreen = ({ history }) => {
  // query strign lo usamos para goer el parametro de l url cuando le damos buscar, este es diferente a use params
  // se usa con el useLocation
  const location = useLocation();
  // desestructuramos la q y si no viene nada en el input por defecto ponemos string vacion
  const { q = '' } = queryString.parse(location.search);
  console.log(q);

  const [formValues, handleInputChange, reset] = useForm({
    // se lo ponemos en q para q si se recarga la web no borre el value del input
    searchText: q,
  });

  const { searchText } = formValues;

  // Usamos usememo para q no dispare el evento cada q presionamos una tecla, y sea cada q haya un cambio en el quety osea presionemos el input
  const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  // asi se usa para q cada vez q presionemos alguna tecla
  // const heroesFilter = getHeroesByName(searchText);

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };

  return (
    <div>
      <h>Search sceen</h>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Search form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type='text'
              placeholder='Find your hero'
              className='form-control'
              name='searchText'
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type='submit'
              className='btn m-1 btn-block btn-outline-primary'
            >
              Buscar
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />
          {q === '' && <div className='alert alert-info'>Busca un heroe</div>}
          {q != '' && heroesFilter.length === 0 && (
            <div className='alert alert-info'>No hay un heroe con {q}</div>
          )}

          {heroesFilter.map((heroe) => (
            <HeroCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </div>
  );
};
