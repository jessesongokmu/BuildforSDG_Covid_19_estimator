const InfectionsByRequestedTime = (data, CurrentlyInfected) => {
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
  return Math.trunc(CurrentlyInfected * (2 ** (Math.trunc(timePeriod / 3))));
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
      infectionsByRequestedTime: InfectionsByRequestedTime(input, ImpactCurrentlyInfected),
      // challenge Two
      severeCasesByRequestedTime: InfectionsByRequestedTime(input, ImpactCurrentlyInfected) * 0.15
    },
    severeImpact: {
      // challenge One
      currentlyInfected: SevereImpactCurrentlyInfected,
      infectionsByRequestedTime: InfectionsByRequestedTime(input, SevereImpactCurrentlyInfected),
      // challenge Two
      severeCasesByRequestedTime: InfectionsByRequestedTime(input, SevereImpactCurrentlyInfected) * 0.15
    }
  };
};

export default covid19ImpactEstimator;
