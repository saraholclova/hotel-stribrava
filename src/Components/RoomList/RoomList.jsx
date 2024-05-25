import { useEffect, useState } from 'react';
import { Room } from '../Room/Room';
import { RoomDetail } from '../RoomDetail/RoomDetail';

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

  if (rooms === null) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <section className="dark">
        <div className="container">
          <h2>Naše pokoje</h2>
          <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
          <div className="cards-row">
            {rooms.map((room) => (
              <Room
                key={room.id}
                id={room.id}
                name={room.name}
                price={room.price}
                image={`http://localhost:4000/assets/${room.image}`}
                onSelect={setSelectedRoom}
              />
            ))}
          </div>
        </div>
      </section>
      {selectedRoom != null && <RoomDetail roomId={selectedRoom} />}
    </>
  );
};
