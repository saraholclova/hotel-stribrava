import { useEffect, useState } from 'react';

export const RoomList = () => {
  const [rooms, setRooms] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const json = await response.json();
      setRooms(json.data);
    };
    fetchRooms();
  }, []);

  console.log(rooms);

  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="cards-row">
          <div className="card">
            <img className="card__image" src="img/image1.svg" />
            <div className="card__title">Card 1</div>
            <div className="card__body">Sunt natus</div>
          </div>

          <div className="card">
            <img className="card__image" src="img/image1.svg" />
            <div className="card__title">Card 2</div>
            <div className="card__body">Laboriosam</div>
          </div>

          <div className="card">
            <img className="card__image" src="img/image1.svg" />
            <div className="card__title">Card 3</div>
            <div className="card__body">Eveniet officiis</div>
          </div>
        </div>
      </div>
    </section>
  );
};
