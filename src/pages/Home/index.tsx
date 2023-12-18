import { SearchPage } from '../../components/SearchPage';
import { ApartmentList } from '../../components/ApartmentList';
import { Assessment } from '../../components/Assessment';

function Home() {
  return (
    <div>
      <SearchPage />
      <ApartmentList />
      <Assessment />
    </div>
  );
}

export default Home;
