/**
 * parse dateString to month + day(suffix);
 * @param dateString ex) 2024-02-23T07:21:48.256Z
 * @returns ex) "Feb 15th"
 */

export function formatDateStringToMonthDay(dateString: string): string {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });

  // 일의 끝자리에 따라서 "st", "nd", "rd", "th"를 붙여줌
  const day = date.getDate();
  const suffix = day >= 11 && day <= 13 ? "th" : ["st", "nd", "rd"][(day % 10) - 1] || "th";

  return formattedDate + suffix;
}


/**
 * This function calculates the start year and end year based on the given date and returns a date range.
 * @param date Date object of the starting date
 * @returns YYYY.MM ~ YYYY.MM
 */
export const getYearRange = (date: Date): string => {
  const startDate = new Date(date);
  const endDate = new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getDate());

  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth() + 1;
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth() + 1;

  const formattedStartMonth = startMonth < 10 ? `0${startMonth}` : startMonth.toString();
  const formattedEndMonth = endMonth < 10 ? `0${endMonth}` : endMonth.toString();

  const dateRange = `${startYear}.${formattedStartMonth} ~ ${endYear}.${formattedEndMonth}`;
  return dateRange;
};
