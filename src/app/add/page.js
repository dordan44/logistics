'use client'
import { Festive } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

export default function AddPage() {
  const [items, setItems] = useState([{title: '', quantity: ''}]);
  const [room, setRoom] = useState();
  const [message, setMessage] = useState("");
    const submitHandler = async (e) => {
        e.preventDefault();
        const request = await fetch('https://api.bandwatch.co.il/requests', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ room, items })
      })
      if(request.ok) {
        setMessage("בקשתך התקבלה בהצלחה")
      }
      };
      const handleAddItem = () => {
        console.log(JSON.stringify({ room, items }))
        setItems([...items, { title: '', quantity: '' }]);
      };
      const handleItemChange = (index, e) => {
        const newItems = [...items];
        newItems[index][e.target.name] = e.target.value;
        setItems(newItems);
      };
    
    return (
        <main>
        <Image className="main-image" src={"/shalishut.png"} width={80} height={80} alt="Shalishut tag"/>
        <h1>בקשה חדשה</h1>
        <form onSubmit={submitHandler}>
          <select onChange={(e) => setRoom(e.target.value)}>
            <option>בחירת חמ״ל</option>
            <option value="נפגעים">נפגעים</option>
            <option value="קמשר">קמשר</option>
            <option value="שון">שון</option>
            <option value="תובם">תובם</option>
            <option value="בה״ד 11">בה״ד 11</option>
            <option value="איתן א׳">איתן א׳</option>
            <option value="איתן ב׳">איתן ב׳</option>
            <option value="איתן ג׳">איתן ג׳</option>
            <option value="קשר למשפחות">קשר למשפחות</option>
          </select>
        {items.map((item, index) => {
          return (
          <div key={index} className="form-control">
            <span>פריט מספר {index + 1}</span>
            <div className="inputs-row">
            <input type="text" name="title" placeholder="שם פריט" value={item.title} onChange={(e) => handleItemChange(index, e)} required />
            <input type="number" name="quantity" placeholder="כמות" value={item.quantity} onChange={(e) => handleItemChange(index, e)} required />
            </div>
          </div>
          )
        })}
        <button className="add-item-button" type="button" onClick={handleAddItem}>+ הוספת פריט</button>
        <button type="submit">שליחה</button>
        {message && <span className="form-message">{message}</span>}
      </form>
        </main>
    )
}