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
