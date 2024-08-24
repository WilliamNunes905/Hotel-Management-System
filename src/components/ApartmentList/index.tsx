/* eslint-disable react/jsx-max-depth */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBellConcierge,
  faHotTubPerson,
  faMugHot,
  faTv,
  faUser,
  faWheelchair,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { Rate } from 'antd';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { useContext, useEffect } from 'react';
import { dataApartmentList } from '../../services/dataApartmentList';
import { Rooms } from '../../types/ApartmentListType';
import { saveToLocalStorage } from '../../utils/saveToLocalStorage';
import { ApartmentContext } from '../../contexts/ApartmentContext';
import './ApartmentList.scss';
import { CountBagde } from '../../contexts/CountHeaderContext/CountBagde';
import { messageSucess } from '../../utils/messageSucess';

library.add(
  faBellConcierge,
  faHotTubPerson,
  faMugHot,
  faTv,
  faUser,
  faWifi,
  faWheelchair,
);

export function ApartmentList() {
  const {
    apartmentList,
    setApartmentList,
  } = useContext(ApartmentContext);

  const { setBadge } = useContext(CountBagde);

  useEffect(() => {
    async function fetchData() {
      const response = await dataApartmentList();
      setApartmentList(response);
    }
    fetchData();
  }, [setApartmentList]);

  function handleClick(apartment: Rooms) {
    const previousApartments = JSON.parse(localStorage.getItem('rooms') as string) || [];
    const updatedApartments = [...previousApartments, apartment];
    saveToLocalStorage('rooms', updatedApartments);
    messageSucess();
    setBadge(+1);
  }

  return (
    <div className="container-global">
      <div className="container-section" id="quartos-section">
        <div className="quartos-section">
          <div className="container-text">
            <h1 className="h1-quartos">Quartos</h1>
            <p className="textInform">
              todos os nossos tipos de quartos disponíveis para você.
            </p>
          </div>
          <div className="container-card">
            {apartmentList?.map((apartment: Rooms) => (
              <div key={ apartment.id } className="card-style">
                <img
                  src={ apartment.img }
                  alt={ apartment.nome }
                  className="image-style"
                />
                <div className="container-infos">
                  <div className="container-gap">
                    <p className="text-style">{apartment.nome}</p>
                    <div className="apartment-rate">
                      <Rate disabled defaultValue={ apartment.avaliacao.nota } />
                      <p>
                        { apartment.avaliacao.quantidade }
                        {' '}
                        Comentários
                      </p>
                      <div className="space-icon-user">
                        <h2>
                          <FontAwesomeIcon
                            icon={ faUser }
                            style={ { width: '19px', height: '22px' } }
                          />
                          {' '}
                          x
                          {apartment.hospedes}
                        </h2>
                      </div>
                    </div>
                    <div className="description">
                      <p
                        className={ `width-description-${apartment.id}` }
                      >
                        {apartment.descricao}
                      </p>
                    </div>
                    <div className="apartment-icons">
                      {
                        apartment.caracteristicas.map((items) => (
                          <div key={ items.id }>
                            <FontAwesomeIcon
                              icon={ items.icone as IconProp }
                              className="icon-style"
                              style={ { color: '#486ccf' } }
                            />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  <div className="container-reservation">
                    <div className="text-info-daily">
                      <p className="title-dayle">Diária a partir de</p>
                      <h3 className="price-title">
                        R$
                        {' '}
                        {apartment.preco.toFixed(2)}
                      </h3>
                    </div>
                    <button
                      className="button-style"
                      onClick={ () => handleClick(apartment) }
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
