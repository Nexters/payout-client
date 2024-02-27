import BasicMaterialsIcon from "@/components/icons/sector/basic-materials";
import CommunicationServicesIcon from "@/components/icons/sector/communiation-services";
import ConsumerCyclicalIcon from "@/components/icons/sector/consumer-cyclical";
import ConsumerDefensiveIcon from "@/components/icons/sector/consumer-defensive";
import EnergyIcon from "@/components/icons/sector/energy";
import ETCIcon from "@/components/icons/sector/etc";
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
  ETF: <ETCIcon />,
  ETC: <ETCIcon />,
} as const;
