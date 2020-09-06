import React, { useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {
  // Con useParams escuchamos los parametros q estan en la url
  const { heroeId } = useParams();

  const heroe = useMemo(() => getHeroById(heroeId), [heroeId]);
  // const heroe = getHeroById(heroeId);

  // si es el objeto no se enuentra el heroe q se mando por url  me redirija a es ruta
  if (!heroe) {
    return <Redirect to='/' />;
  }

  const handleReturn = () => {
    // history lo cogemos omo parametro como si fuera un prop pero no lo es, y tiene las caracteristicas de historial,entre ellos ir hacia atras
    history.goBack();
  };

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = heroe;

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          className='img-thumbnail  animate__animated animate__fadeInLeft'
          alt={superhero}
        />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>

        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className='list-group-item'>
            <b>First appearence: </b>
            {first_appearance}
          </li>
        </ul>

        <h5>Characters</h5>
        <p>{characters}</p>

        <button className='btn btn-outline-info' onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
