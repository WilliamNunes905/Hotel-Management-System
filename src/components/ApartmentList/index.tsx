import { useEffect, useState } from 'react';
import { dataApartmentList } from '../../services/dataApartmentList';
import './ApartmentList.scss';
import { Quarto } from '../../types/ApartmentListType';

export function ApartmentList() {
  const [apartmentList, setApartmentList] = useState<Quarto[] | null>(null);
  console.log(apartmentList);

  useEffect(() => {
    async function fetchData() {
      const response = await dataApartmentList();
      const threeApartment = response.slice(0, 3);
      setApartmentList(threeApartment);
    }
    fetchData();
  }, []);

  return (
    <div className="frame-28">
      <div className="frame-24">
        <div className="frame-26">
          <div className="frame-106">
            <h1>Quartos</h1>
            <p>Todos os nossos tipos de quartos incluem café da manhã</p>
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
