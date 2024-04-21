import { createPortfolio } from "@/api/generated/endpoint";
import { PortfolioRequest } from "@/api/generated/endpoint.schemas";
import { useMutation } from "@tanstack/react-query";

export const usePortfolioMutation = () => {
  return useMutation({
    mutationFn: (portfolio: PortfolioRequest) => createPortfolio(portfolio),
  });
};
