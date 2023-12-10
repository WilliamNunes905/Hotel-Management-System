import { fetchFooterData } from '../../services/FooterData';

export function Footer() {
  console.log(fetchFooterData);

  return (
    <div>
      <h1>Footer</h1>
      <button onClick={ fetchFooterData }>Buscar dados</button>
    </div>
  );
}
