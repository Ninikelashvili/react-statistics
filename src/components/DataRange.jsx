import { DatePicker } from "antd";

function DataRange({ handleChangeSelectTo, handleChangeSelectFrom }) {
  return (
    <>
      <div className="calendar">
        <DatePicker
          className="dataPicker"
          onChange={handleChangeSelectFrom}
          placeholder="From"
          picker="month"
        />
        <DatePicker
          className="dataPicker"
          onChange={handleChangeSelectTo}
          placeholder="To"
          picker="month"
        />
      </div>
    </>
  );
}

export default DataRange;
