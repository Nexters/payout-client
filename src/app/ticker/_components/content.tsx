"use client"

import TickerList from "./ticker-list";

const Content = () => {
  const handleClickTicker = (index: number) => {
    console.log("index:", index);
  }
  return (
    <TickerList onClick={handleClickTicker}/>
  );
};

export default Content