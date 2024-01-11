/* eslint-disable react/jsx-max-depth */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBellConcierge,
  faHotTubPerson,
  faMugHot,
  faTv,
  faUser, faWifi } from '@fortawesome/free-solid-svg-icons';
import { Rate, message } from 'antd';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { useContext, useEffect } from 'react';
import { dataApartmentList } from '../../services/dataApartmentList';
import { Quarto } from '../../types/ApartmentListType';
import { saveToLocalStorage } from '../../utils/saveToLocalStorage';
import { ApartmentContext } from '../../contexts/ApartmentContext';
import './ApartmentList.scss';

library.add(faBellConcierge, faHotTubPerson, faMugHot, faTv, faUser, faWifi);

export function ApartmentList() {
  const {
    apartmentList,
    setApartmentList,
    setBedrooms,
  } = useContext(ApartmentContext);

  useEffect(() => {
    async function fetchData() {
      const response = await dataApartmentList();
      const threeApartment = response.slice(0, 3);
      setApartmentList(threeApartment);
    }
    fetchData();
  }, [setApartmentList]);

  function handleClick(apartment: any) {
    setBedrooms((prevBedrooms) => {
      const updatedBedrooms = [...prevBedrooms, apartment];
      saveToLocalStorage('rooms', updatedBedrooms);
      return updatedBedrooms;
    });
    message.success({
      content: 'Adicionado com Sucesso',
      duration: 2,
    });
  }

  return (
    <div className="frame-28">
      <div className="frame-24" id="quartos-section">
        <div className="frame-26">
          <div className="frame-106">
            <h1 className="h1-quartos">Quartos</h1>
            <p className="textInform">
              Todos os nossos tipos de quartos incluem café da manhã
            </p>
          </div>
          <div className="frame-22">
            {apartmentList?.map((apartment: Quarto) => (
              <div key={ apartment.id } className="frame-21">
                <div className="group-91">
                  <img
                    src={ apartment.img }
                    alt={ apartment.nome }
                    className="image-style"
                  />
                </div>
                <div className="frame-102">
                  <div className="frame-99">
                    <p className="text-style">{apartment.nome}</p>
                    <div className="frame-96">
                      <Rate disabled defaultValue={ apartment.avaliacao.nota } />
                      <p>
                        { apartment.avaliacao.quantidade }
                        {' '}
                        Comentários
                      </p>
                      <div className="frame-89">
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
                    <div className="frame-95">
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
                  <div className="frame-101">
                    <div className="frame-100">
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
