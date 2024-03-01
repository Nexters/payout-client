import BasicMaterialsIcon from "@/components/icons/sector/basic-materials";
import CommunicationServicesIcon from "@/components/icons/sector/communiation-services";
import ConsumerCyclicalIcon from "@/components/icons/sector/consumer-cyclical";
import ConsumerDefensiveIcon from "@/components/icons/sector/consumer-defensive";
import EnergyIcon from "@/components/icons/sector/energy";
import ETCIcon from "@/components/icons/sector/etc";
import ETFIcon from "@/components/icons/sector/etf";
import FinancialServicesIcon from "@/components/icons/sector/financial-services";
import HealthcareIcon from "@/components/icons/sector/healthcare";
import IndustrialsIcon from "@/components/icons/sector/industries";
import RealEstateIcon from "@/components/icons/sector/real-estate";
import TechnologyIcon from "@/components/icons/sector/technology";
import UtilitiesIcon from "@/components/icons/sector/utilities";

export const DONUT_CHART_COLORS = ["navy-700", "purple-500", "blue-600", "green-500"];

export const ICONS = {
  "Basic Materials": <BasicMaterialsIcon />,
  "Communication Services": <CommunicationServicesIcon />,
  "Consumer Cyclical": <ConsumerCyclicalIcon />,
  "Consumer Defensive": <ConsumerDefensiveIcon />,
  Energy: <EnergyIcon />,
  "Financial Services": <FinancialServicesIcon />,
  Healthcare: <HealthcareIcon />,
  Industrials: <IndustrialsIcon />,
  "Real Estate": <RealEstateIcon />,
  Technology: <TechnologyIcon />,
  Utilities: <UtilitiesIcon />,
  ETF: <ETFIcon />,
  ETC: <ETCIcon />,
} as const;

export const LARGE_ICONS = {
  "Basic Materials": <BasicMaterialsIcon width={32} height={32} />,
  "Communication Services": <CommunicationServicesIcon width={32} height={32} />,
  "Consumer Cyclical": <ConsumerCyclicalIcon width={32} height={32} />,
  "Consumer Defensive": <ConsumerDefensiveIcon width={32} height={32} />,
  Energy: <EnergyIcon width={32} height={32} />,
  "Financial Services": <FinancialServicesIcon width={32} height={32} />,
  Healthcare: <HealthcareIcon width={32} height={32} />,
  Industrials: <IndustrialsIcon width={32} height={32} />,
  "Real Estate": <RealEstateIcon width={32} height={32} />,
  Technology: <TechnologyIcon width={32} height={32} />,
  Utilities: <UtilitiesIcon width={32} height={32} />,
  ETF: <ETFIcon width={32} height={32} />,
  ETC: <ETCIcon width={32} height={32} />,
} as const;
