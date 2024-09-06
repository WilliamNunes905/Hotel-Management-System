import image from '../../assets/Prancheta-14-1-941x1024.png';
import './OurHistory.scss';

export function History() {
  return (
    <div className="page-container">
      <div className="text-section">
        <div className="Element-heading-title">
          <h1>
            Muito prazer,
            <br />
            nós somos
            <br />
            a Manager System!
          </h1>
        </div>
        <div className="text-history">
          <p>
            Há 28 anos, estamos comprometidos em levar o sucesso aos nossos clientes.
            <strong>
              {' '}
              Tudo o que fazemos é focado em ajudá-los
              a alcançar resultados cada vez melhores.
            </strong>
            {' '}
            E é o nosso próprio sucesso que é a consequência direta desse compromisso.
          </p>
          <p>
            <strong>
              Nosso objetivo diário é sermos melhores
              a cada dia, em todos os momentos.
            </strong>
            Buscamos constantemente a excelência em tudo o que fazemos,
            pois acreditamos que o máximo esforço é o caminho para o sucesso.
          </p>
          <p>
            A nossa filosofia de trabalho é
            {' '}
            <strong>pautada pelo capricho e pela busca constante pela excelência.</strong>
            Estamos empenhados em superar as expectativas
            dos nossos clientes e garantir a sua plena satisfação.
          </p>
          <p>
            Na Manager System, buscamos sempre oferecer
            {' '}
            <strong>soluções de qualidade em todos os sentidos.</strong>
            Acreditamos que a excelência é o
            resultado de um trabalho bem-feito e comprometido.
          </p>
          <p>
            Se você busca resultados superiores e
            uma parceria de sucesso, conte com a Manager System.
            Estamos prontos para ajudá-lo a atingir o máximo potencial do seu negócio.
          </p>
        </div>
      </div>

      <div className="image-section">
        <img src={ image } alt="Gestão eficiente" />
      </div>
    </div>
  );
}
