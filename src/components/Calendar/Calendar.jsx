import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarStyles from './Calendar.styled';

const Calendar = React.forwardRef(
  ({ selectedDate, setDate, toggleCalendar }, ref) => {
    const minDate = new Date();

    return (
      <ReactDatePicker
        ref={ref}
        selected={selectedDate}
        onChange={date => setDate(date)}
        minDate={minDate}
        calendarStartDay={1}
        dateFormat="EEE, d"
        onCalendarOpen={() => toggleCalendar(true)}
        onCalendarClose={() => toggleCalendar(false)}
        calendarContainer={CalendarStyles}
      />
    );
  }
);

export default Calendar;
