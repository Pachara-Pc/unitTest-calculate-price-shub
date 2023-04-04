export const calculateServiceCharge = (
  base: number,
  ServiceCharge: number
): number => {
  return base + (base * ServiceCharge) / 100;
};

export const calculateCostShabu = (person: number, cost: number): number => {
  if (person % 4 === 0) {
    return cost * ((person / 4) * 3);
  } else {
    return cost * person;
  }
};
