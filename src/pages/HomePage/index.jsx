import { Header } from '../../components/Header/Header';
import './style.css';
import { Footer } from '../../Components/Footer/Footer';
import { RoomList } from '../../components/RoomList/RoomList';

export const HomePage = () => {
  return (
    <>
      <Header />
      <RoomList />
      <Footer />
    </>
  );
};
