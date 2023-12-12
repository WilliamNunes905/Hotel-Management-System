import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../../assets/logoSilbeckWhite.svg';
import { fetchFooterData } from '../../services/FooterData';
import { FooterData } from '../../types/FooterData';
import './Footer.scss';

export function Footer() {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchFooterData();
      setFooterData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="footer-container">

      <div className="frame-128">
        <div className="frame-131">
          <div>
            <img src={ logoSvg } alt="logo" className="frame-121" />
          </div>
          <div className="frame-126">
            <p>{ `${footerData?.endereco.rua}, ${footerData?.endereco.numero}` }</p>
            <p>
              {
              `${footerData?.endereco.bairro}, 
              ${footerData?.endereco.cidade} - Santa Catarina`
              }
            </p>
            <p>{ footerData?.telefone }</p>
            <p>suporte@silbeck.com.br</p>
          </div>
        </div>
        <div className="frame-127">
          <div className="frame-125">
            <p className="strong">Sobre nós</p>
            <p>Nossa História</p>
            <p>Contato</p>
            <p>Termos e Condições</p>
          </div>
          <div className="frame-125">
            <p className="strong">Outros Serviços</p>
            <p>Passeios</p>
            <p>Spa</p>
            <p>Reserva Espaço</p>
          </div>
        </div>
      </div>

      <div className="container-about">
        <p>Nos encontre nas redes sociais</p>

        <div className="frame-132">
          <Link to={ footerData?.instagram || '/Home' } className="socialMedia">
            <FontAwesomeIcon icon={ faInstagram } />
          </Link>
          <Link to={ footerData?.facebook || '/Home' } className="socialMedia">
            <FontAwesomeIcon icon={ faFacebook } />
          </Link>
          <Link to={ footerData?.twitter || '/default-url' } className="socialMedia">
            <FontAwesomeIcon icon={ faTwitter } />
          </Link>
        </div>

        <div className="container-130">
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
