export const getMonth = () => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new window.Date();
    const nameMonth = month[date.getMonth()];
    return nameMonth;
  };
  
  export const getFullDate = () => {
    const date = new window.Date().toLocaleString(),
      day = date.slice(0, 2),
      month = date.slice(3, 5),
      year = date.slice(8, 10),
      fullYear = date.slice(6, 10),
      time = date.slice(12, 17),
      nameMonth = getMonth(),
      dateSide = `${nameMonth} ${day}, ${fullYear}`,
      dateNow = `${month}/${day}/${year}, ${time}`;
  
    return { dateSide, dateNow };
  };