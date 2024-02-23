import React from "react";
import { SectorList } from "./_components/sector-list";
import { SectorRatio } from "./_components/sector-row";

const dummySectorList: SectorRatio[] = [
  {
    sectorName: "Technology",
    sectorRatio: 0.6402923367406732,
    stocks: [
      {
        stockId: "41b8b18f-6f4f-460c-a978-ff300c1a08f1",
        ticker: "AAPL",
        companyName: "Apple Inc.",
        sectorName: "Technology",
        exchange: "NASDAQ",
        industry: "Consumer Electronics",
        price: 182.32,
        volume: 39054026,
        logoUrl:
          "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l476432a3e85a0aa21c23f5abd2975a89b6820d63.png",
      },
    ],
  },
  {
    sectorName: "Financial Services",
    sectorRatio: 0.20970766325932678,
    stocks: [
      {
        stockId: "bf983d90-3096-4468-a350-b8689b2cbec2",
        ticker: "BAC",
        companyName: "Bank of America Corporation",
        sectorName: "Financial Services",
        exchange: "NYSE",
        industry: "Banks—Diversified",
        price: 33.7,
        volume: 37695294,
        logoUrl:
          "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lb80e2d3601b59154da80bd0a07f9d9705ced29dc.png",
      },
    ],
  },
  {
    sectorName: "Communication Services",
    sectorRatio: 0.10970766325932678,
    stocks: [
      {
        stockId: "bf983d90-3096-4468-a350-b8689b2cbec2",
        ticker: "BAC",
        companyName: "Bank of America Corporation",
        sectorName: "Financial Services",
        exchange: "NYSE",
        industry: "Banks—Diversified",
        price: 33.7,
        volume: 37695294,
        logoUrl:
          "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lb80e2d3601b59154da80bd0a07f9d9705ced29dc.png",
      },
    ],
  },
  {
    sectorName: "Sector 4",
    sectorRatio: 0.4970766325932678,
    stocks: [
      {
        stockId: "bf983d90-3096-4468-a350-b8689b2cbec2",
        ticker: "BAC",
        companyName: "Bank of America Corporation",
        sectorName: "Sector 4",
        exchange: "NYSE",
        industry: "Banks—Diversified",
        price: 33.7,
        volume: 37695294,
        logoUrl:
          "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lb80e2d3601b59154da80bd0a07f9d9705ced29dc.png",
      },
    ],
  },
  {
    sectorName: "Sector 5",
    sectorRatio: 0.2970766325932678,
    stocks: [
      {
        stockId: "bf983d90-3096-4468-a350-b8689b2cbec2",
        ticker: "BAC",
        companyName: "Bank of America Corporation",
        sectorName: "Sector 5",
        exchange: "NYSE",
        industry: "Banks—Diversified",
        price: 33.7,
        volume: 37695294,
        logoUrl:
          "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lb80e2d3601b59154da80bd0a07f9d9705ced29dc.png",
      },
    ],
  },
];

const SectorListPage = React.memo(() => {
  return (
    <div className="flex size-full flex-col items-center justify-start gap-5">
      <SectorList sectorList={dummySectorList} />
    </div>
  );
});

export default SectorListPage;
