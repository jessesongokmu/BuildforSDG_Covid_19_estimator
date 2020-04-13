const covid19ImpactEstimator = (data) => {
  const input = data;
  // Challenge Computation
  const ImpactCurrentlyInfected = input.reportedCases * 10;
  const SevereImpactCurrentlyInfected = input.reportedCases * 50;

  const ImpactInfectionsByReportedTime = ImpactCurrentlyInfected * (
    2 * (Math.floor(input.timeToElapse / 3))
  );
  const SevereInfectionsByReportedTime = SevereImpactCurrentlyInfected * (
    2 * (Math.floor(input.timeToElapse / 3))
  );
  return {
    data: input,
    impact: {
      // challenge One
      currentlyInfected: ImpactCurrentlyInfected,
      infectionsByReportedTime: ImpactInfectionsByReportedTime
    },
    severeImpact: {
      // challenge One
      currentlyInfected: SevereImpactCurrentlyInfected,
      infectionsByReportedTime: SevereInfectionsByReportedTime
    }
  };
};

export default covid19ImpactEstimator;
