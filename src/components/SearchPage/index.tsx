import { useContext } from 'react';
import { DatePicker, Space, Select } from 'antd';
import './SearchPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Guest } from '../../types/GuestType';
import { saveToLocalStorage } from '../../utils/saveToLocalStorage';
import { SearchContext } from '../../contexts/SearchContext';

export function SearchPage() {
  const { hotelGuests, setHotelGuests } = useContext(SearchContext);

  const dateFormatList = ['DD/MM/YYYY'];

  const handleHotelGuests = (key: keyof Guest, value: string) => {
    setHotelGuests({ ...hotelGuests, [key]: value });
  };

  return (
    <div className="container-search">

      <div className="container-data">
        <div className="container-estadia">
          <h1>Data Estadia</h1>
        </div>

        <div className="date-entry">
          <Space direction="vertical">
            Entrada
            <DatePicker
              className="datePicker"
              placeholder="Selecione a data"
              format={ dateFormatList }
              onChange={ (_date, dateString) => handleHotelGuests('entry', dateString) }
            />
          </Space>
        </div>

        <div className="date-exit">
          <Space direction="vertical">
            Saída
            <DatePicker
              className="datePicker"
              placeholder="Selecione a data"
              format={ dateFormatList }
              onChange={ (_date, dateString) => handleHotelGuests('exit', dateString) }
            />
          </Space>
        </div>

      </div>

      <div className="container-data">
        <div className="container-hospede">
          <h1>Hóspedes</h1>
        </div>
        <div className="date-entry">
          Adultos
          <Space>
            <Select
              className="select-style"
              value={ hotelGuests.adults }
              onChange={ (value) => handleHotelGuests('adults', value) }
              options={ [
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' },
              ] }
            />
          </Space>
        </div>
        <div className="date-entry">
          Crianças
          <Space>
            <Select
              className="select-style"
              value={ hotelGuests.child }
              onChange={ (value) => handleHotelGuests('child', value) }
              options={ [
                { value: '0', label: '0' },
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' },
              ] }
            />
          </Space>
        </div>
      </div>
      <div className="container-button">
        <button
          className="button-style"
          onClick={ () => saveToLocalStorage('reserve', hotelGuests) }
        >
          <FontAwesomeIcon icon={ faMagnifyingGlass } />
          Pesquisar
        </button>
      </div>
      <div />

    </div>
  );
}
