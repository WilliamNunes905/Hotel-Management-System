import { SearchPage } from '../../components/SearchPage';
import { ApartmentList } from '../../components/ApartmentList';
import { Feedbacks } from '../../components/Feedbacks';

function Home() {
  return (
    <div>
      <SearchPage />
      <ApartmentList />
      <Feedbacks />
    </div>
  );
}

export default Home;
