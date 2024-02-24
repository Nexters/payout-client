import { StockDetailResponseDividendMonthsItem } from "@/api/generated/endpoint.schemas";

export const Months: Record<StockDetailResponseDividendMonthsItem, string> = {
  JANUARY: "Jan",
  FEBRUARY: "Feb",
  MARCH: "Mar",
  APRIL: "Apr",
  MAY: "May",
  JUNE: "Jun",
  JULY: "Jul",
  AUGUST: "Aug",
  SEPTEMBER: "Sep",
  OCTOBER: "Oct",
  NOVEMBER: "Nov",
  DECEMBER: "Dec",
} as const;
