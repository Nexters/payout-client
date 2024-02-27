import React from "react";

const getYearRange = (date: Date): string => {
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

export const Header = React.memo(() => {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-2 p-5">
      <h2 className="text-h2 text-grey-900">Overall Dividend Rankings</h2>
      <p className=" text-body3 text-grey-600">{getYearRange(new Date())}</p>
    </div>
  );
});
