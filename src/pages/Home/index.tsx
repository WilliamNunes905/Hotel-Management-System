import { SearchPage } from '../../components/SearchPage';
import { ApartmentList } from '../../components/ApartmentList';

function Home() {
  return (
    <div>
      <SearchPage />
      <ApartmentList />
    </div>
  );
}

export default Home;
