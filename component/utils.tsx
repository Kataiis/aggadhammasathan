export const monthByNumber_EN = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  export const monthByNumber_TH = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม',
  ];
  

  export const getDaysInMonth = (year: number, month: number): number => {
    year = +year;
    month = +month;
    return new Date(year, month, 0).getDate();
  };
  
  export const zeroPad = (value: number, places: number) =>
    String(value).padStart(places, "0");