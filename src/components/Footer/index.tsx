import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosFooterData } from '../../services/FooterData';
import { FooterDataTypes } from '../../types/FooterData';
import logoSvg from '../../assets/logoSilbeckWhite.svg';
import './Footer.scss';

export function Footer() {
  const [footerData, setFooterData] = useState<FooterDataTypes | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await axiosFooterData();
      setFooterData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="footer-container">
      <div className="footer-container-content">
        <div className="container-address">
          <div>
            <h1 className="berkshire-swash">Hotel System</h1>
          </div>
          <div className="address-information">
            <p>
              { `${footerData?.hotel.endereco.rua},
            ${footerData?.hotel.endereco.numero}` }
            </p>
            <p>
              {
              `${footerData?.hotel.endereco.cidade} - 
              ${footerData?.hotel.endereco.estado}`
              }
            </p>
            <p>{ footerData?.hotel.contato.telefone }</p>
            <p>{ footerData?.hotel.contato.email }</p>
          </div>
        </div>
        <div className="container-information">
          <div className="container-about">
            <p className="strong">Sobre nós</p>
            <p>Nossa História</p>
            <p>Contato</p>
            <p>Termos e Condições</p>
          </div>
          <div className="container-about">
            <p className="strong">Outros Serviços</p>
            <p>Passeios</p>
            <p>Spa</p>
            <p>Reserva Espaço</p>
          </div>
        </div>
      </div>
      <div className="container-social-media">
        <p>Nos encontre nas redes sociais</p>
        <div className="social-media-links">
          <Link to="/Home" className="socialMedia">
            <FontAwesomeIcon icon={ faInstagram } />
          </Link>
          <Link to="/Home" className="socialMedia">
            <FontAwesomeIcon icon={ faFacebook } />
          </Link>
          <Link to="/Home" className="socialMedia">
            <FontAwesomeIcon icon={ faTwitter } />
          </Link>
        </div>
        <div className="box-newsletter">
          <p>
            Assine nossa newsletter, toda semana um conteúdo novo
            <br />
            sobre o universo da hotelaria no seu email!
          </p>
        </div>
        <div className="container-elements">
          <input
            type="email"
            placeholder="e-mail"
            className="input-footer"
          />
          <button
            type="button"
            className="button-footer"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
