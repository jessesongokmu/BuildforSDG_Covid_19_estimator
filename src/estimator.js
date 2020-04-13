const InfectionsByReportedTime = (data, CurrentlyInfected) => {
  let timePeriod = '';
  if (data.periodType.toLowerCase() === 'days') {
    timePeriod = Math.trunc((data.timeToElapse * 1));
  }
  if (data.periodType.toLowerCase() === 'weeks') {
    timePeriod = Math.trunc((data.timeToElapse * 7));
  }
  if (data.periodType.toLowerCase() === 'months') {
    timePeriod = Math.trunc((data.timeToElapse * 30));
  }
  return Math.trunc(CurrentlyInfected * (2 ** (Math.trunc((timePeriod / 3)))));
};


const covid19ImpactEstimator = (data) => {
  const input = data;
  // Challenge One Computation.
  const ImpactCurrentlyInfected = data.reportedCases * 10;
  const SevereImpactCurrentlyInfected = data.reportedCases * 50;

  return {
    data: input,
    impact: {
      // challenge One
      currentlyInfected: ImpactCurrentlyInfected,
      infectionsByReportedTime: InfectionsByReportedTime(input, ImpactCurrentlyInfected)
    },
    severeImpact: {
      // challenge One
      currentlyInfected: SevereImpactCurrentlyInfected,
      infectionsByReportedTime: InfectionsByReportedTime(input, SevereImpactCurrentlyInfected)
    }
  };
};

export default covid19ImpactEstimator;
