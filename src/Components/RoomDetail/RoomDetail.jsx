import { useEffect, useState } from 'react';

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
        <h2>{room.name}</h2>
        <div className="columns-2">
          <div className="column">
            <img src={`http://localhost:4000/assets/${room.image}`} />
            <p>{room.detail}</p>
          </div>
          <form>
            <div className="form-fields">
              <label htmlFor="field1" className="field-label">
                Field 1:
              </label>
              <input id="field1" className="field-input" type="text" />

              <label htmlFor="field2" className="field-label">
                Field 2:
              </label>
              <input id="field2" className="field-input" type="text" />

              <label htmlFor="select" className="field-label">
                Select:
              </label>
              <select id="select" className="field-input">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
              </select>

              <label htmlFor="check1" className="field-label">
                Checkbox 1:
              </label>
              <input id="check1" className="field-input" type="checkbox" />
            </div>
            <button className="wide">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};
