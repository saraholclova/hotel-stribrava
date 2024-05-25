import { useEffect, useState } from 'react';
import dayjs from 'dayjs';


export const RoomDetail = ({ roomId }) => {
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await fetch(`http://localhost:4000/api/rooms/${roomId}`);
      const json = await response.json();
      setRoom(json.data);
    };
    fetchRoom();
  }, [roomId]);

  if (room === null) {
    return null;
  }

  return (
    <section className="light">
      <div className="container">
        <h2>
          Pokoj {room.name}, {room.price} Kč na osobu
        </h2>
        <div className="columns-2">
          <div className="column">
            <img src={`http://localhost:4000/assets/${room.image}`} />
            <p>{room.detail}</p>
          </div>
          <form>
            <div className="form-fields">
              <label htmlFor="field1" className="field-label">
                Od:
              </label>
              <input id="field1" className="field-input" type="date" />

              <label htmlFor="field2" className="field-label">
                Do:
              </label>
              <input id="field2" className="field-input" type="date" />

              <label htmlFor="field2" className="field-label">
                Počet osob:
              </label>
              <input id="field2" className="field-input" type="text" />

              <label htmlFor="select" className="field-label">
                Stravování:
              </label>
              <select id="select" className="field-input">
                <option>Žádné, jsem škrt</option>
                <option>Snídaně</option>
                <option>Polopenze</option>
                <option>Plná penze</option>
              </select>

              <label htmlFor="check1" className="field-label">
                Domácí mazlíček:
              </label>
              <input id="check1" className="field-input" type="checkbox" />
              <label htmlFor="check2" className="field-label">
                Přistýlka pro dítě:
              </label>
              <input id="check1" className="field-input" type="checkbox" />
              <label htmlFor="check3" className="field-label">
                Bezbariérový přístup:
              </label>
              <input id="check1" className="field-input" type="checkbox" />
              <label htmlFor="field2" className="field-label">
                E-mail:
              </label>
              <input id="field2" className="field-input" type="text" />
              <label htmlFor="field2" className="field-label">
                Telefon:
              </label>
              <input id="field2" className="field-input" type="text" />
            </div>
            <button className="wide">Odeslat objednávku</button>
          </form>
        </div>
      </div>
    </section>
  );
};
