export const getListYear = () => {
  const yearToday = new Date().getFullYear();
  const yearsArray: { value: string; span: string }[] | undefined = [];

  for (let year = 1940; year <= yearToday; year++) {
    yearsArray.push({ value: year.toString(), span: year.toString() });
  }

  return yearsArray.reverse();
};

export const getListMonth = () => {
  const monthsArray: { value: string; span: string }[] | undefined = [];

  for (let month = 1; month <= 12; month++) {
    // Chuyển đổi tháng thành chuỗi có 2 chữ số (01, 02, ..., 12)
    const monthStr = month.toString().padStart(2, '0');
    monthsArray.push({ value: monthStr, span: monthStr });
  }

  return monthsArray;
};

function isLeapYear(year: number) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDaysInMonth(year: string, month: string) {
  // Tháng 2
  if (Number(month) === 2) {
    return isLeapYear(Number(year)) ? 29 : 28;
  }
  // Các tháng có 31 ngày
  if ([1, 3, 5, 7, 8, 10, 12].includes(Number(month))) {
    return 31;
  }
  // Các tháng có 30 ngày
  return 30;
}

export const getListDay = (year: string, month: string) => {
  if (!year || !month) {
    return [];
  }

  const daysArray = [];
  const daysInMonth = getDaysInMonth(year, month);

  for (let day = 1; day <= daysInMonth; day++) {
    daysArray.push({ value: day.toString(), span: day });
  }

  return daysArray;
};
