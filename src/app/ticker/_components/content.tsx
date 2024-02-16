"use client"

import TickerList from "./ticker-list";

const Content = () => {
  const handleClickTicker = (name: string) => {
    console.log("name:", name);
  }
  return (
    <TickerList onClick={handleClickTicker}/>
  );
};

export default Content