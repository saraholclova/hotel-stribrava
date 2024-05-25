import { Header } from '../../components/Header/Header';
import './style.css';
import { Footer } from '../../components/Footer/Footer';
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
