import { DatePicker, Space, Select } from 'antd';
import './SearchPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export function SearchPage() {
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
              placeholder="Selecione uma data"
            />
          </Space>
        </div>

        <div className="date-exit">
          <Space direction="vertical">
            Saída
            <DatePicker
              className="datePicker"
              placeholder="Selecione uma data"
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
              defaultValue="1"
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
              defaultValue="1"
              options={ [
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
        <button className="button-style">
          <FontAwesomeIcon icon={ faMagnifyingGlass } />
          Pesquisar
        </button>
      </div>
      <div />

    </div>
  );
}
