import './calendar.css';
import { useState } from 'react';
import moment from 'moment-jalaali';
import { useCartStore } from '../store';

moment.loadPersian({ usePersianDigits: true, dialect: "persian-modern" });

const Calendar = ({peopleCount}) => {

    const [currentDate, setCurrentDate] = useState(moment());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [reservationMessage, setReservationMessage] = useState("");
    const [quantity, setQuantity] = useState(1); // مقدار پیش‌فرض 1 میز
    const today = moment().startOf('day');

    const {addToCart, clearCart, hideCartMessage, cartItems} = useCartStore();

    const daysOfWeek = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
    const hours = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, "0")}:00`);

    const goToNextMonth = () => {
        setCurrentDate(currentDate.clone().add(1, "jMonth"));
    };
    const goToPrevMonth = () => {
        setCurrentDate(currentDate.clone().subtract(1, "jMonth"));
    };
    const handleDayClick = (day) => {
        const isSameDay = selectedDate && selectedDate.isSame(day, "day");
        setSelectedDate(isSameDay ? null : day.clone());
        setSelectedTime(null);
        setReservationMessage(isSameDay ? "" : reservationMessage);
        if(!isSameDay){
          hideCartMessage();
        }
    };
    const handleTimeClick = (time) => {
        setSelectedTime((prevTime) => {
            const newTime = prevTime === time ? null : time;
            const price = ['21:00', '22:00', '23:00'].includes(newTime) ? 200000 : 150000;
            setReservationMessage(newTime ? `هزینه رزرو ${newTime} مبلغ ${price.toLocaleString()} تومان می‌باشد.` : "");
            return newTime;
          });
    };
    const handleReserveClick = () => {
      if (selectedDate && selectedTime && quantity > 0 && peopleCount > 0) {
        const price = ["21:00", "22:00", "23:00"].includes(selectedTime) ? 200000 : 150000;
        const newItem = {
          name: 'رزرو سالن و میز تولد',
          date: selectedDate.format("jYYYY/jMM/jDD"),
          time: selectedTime,
          price: price,
          quantity: quantity,
          people: peopleCount,
        };
        console.log("Adding item to cart:", newItem);
        addToCart(newItem);
      }
    };
    const renderDays = () => {
        const startOfMonth = currentDate.clone().startOf("jMonth");
        const endOfMonth = currentDate.clone().endOf("jMonth");
        const firstDayOfWeek = (startOfMonth.day() + 1) % 7;
        const days = [];

        // اضافه کردن فضای خالی برای هم‌تراز کردن شروع ماه
        for (let i = 0; i < firstDayOfWeek; i++) {
        days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        let day = startOfMonth.clone();
    
        while (day.isBefore(endOfMonth) || day.isSame(endOfMonth, "day")) {
            const clonedDay = day.clone();
            days.push(
                <div
                    key={clonedDay.format("YYYY-MM-DD")}
                    className={`calendar-day
                        ${clonedDay.isSame(today, "day") && !selectedDate ? "today" : ""}
                        ${selectedDate && clonedDay.isSame(selectedDate, "day") ? "selected" : ""}`}
                    onClick={() => handleDayClick(clonedDay)}
                >
                {clonedDay.format("jD")}
                </div>
            );
            day.add(1, "day"); // مقدار را در اینجا تغییر دهیم، نه در حلقه‌ی بالا
        }
        
        return days;
    };

    return (
        <div className="calendar-wrapper">
          <div className="calendar-container">
            <div className="calendar-header">
              <button onClick={goToPrevMonth}>&lt;</button>
              <span>{currentDate.format("jMMMM jYYYY")}</span>
              <button onClick={goToNextMonth}>&gt;</button>
            </div>
            <div className="calendar-weekdays">
              {daysOfWeek.map((day, index) => (
                <div key={index} className="calendar-weekday">{day}</div>
              ))}
            </div>
            <div className="calendar-grid">{renderDays()}</div>
          </div>
          {selectedDate && (
            <div className="time-selector">
              <h3>ساعت‌های قابل رزرو {selectedDate.format('dddd')} ({selectedDate.format("jYYYY/jMM/jDD")})</h3>
              <div className="time-grid">
                {hours.map((hour) => (
                  <div
                    key={hour}
                    className={`time-slot ${selectedTime === hour ? "selected-time" : ""}`}
                    onClick={() => handleTimeClick(hour)}
                  >
                    {hour}
                  </div>
                ))}
              </div>
            </div>
          )}
          {reservationMessage && (
          <div className="reservation-message">{reservationMessage}</div>
        )}
        {selectedDate && selectedTime && (
          <>
            {/* <div className="quantity-selector">
              <label>تعداد میز : </label>
              <input 
                  type="number" 
                  min="1" 
                  value={quantity} 
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)} 
              />
          </div> */}
          <button className='reserve-button' onClick={handleReserveClick}>رزرو کنید</button>
          </>
        )}
        
        </div>
      );
}
 
export default Calendar;