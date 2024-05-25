import { Header } from '../../components/Header/Header';
import './style.css';
import { Footer } from '../../components/Footer/Footer';
import { RoomList } from '../../components/RoomList/RoomList';
import { RoomDetail } from '../../components/RoomDetail/RoomDetail';

export const HomePage = () => {
  return (
    <>
      <Header />
      <RoomList />
      <RoomDetail />
      <Footer />
    </>
  );
};
