const InfectionsByRequestedTime = (data, CurrentlyInfected, timePeriod) => {
  Math.trunc(CurrentlyInfected * (2 ** (Math.trunc(timePeriod / 3))));
};
const severeCaseByRequestedTime = (data, CurrentlyInfected, time) => {
  const severeCases = Math.trunc(CurrentlyInfected * (2 ** (Math.trunc(time / 3))));
  return Math.trunc(severeCases * 0.15);
};

const covid19ImpactEstimator = (data) => {
  const input = data;
  // Challenge One Computation.
  const ImpactCurrentlyInfected = data.reportedCases * 10;
  const SevereCurrentlyInfected = data.reportedCases * 50;

  let time = '';
  if (data.periodType.toLowerCase() === 'days') {
    time = Math.trunc((data.timeToElapse * 1));
  }
  if (data.periodType.toLowerCase() === 'weeks') {
    time = Math.trunc((data.timeToElapse * 7));
  }
  if (data.periodType.toLowerCase() === 'months') {
    time = Math.trunc((data.timeToElapse * 30));
  }

  return {
    data: input,
    impact: {
      // challenge One
      currentlyInfected: ImpactCurrentlyInfected,
      infectionsByRequestedTime: InfectionsByRequestedTime(input, ImpactCurrentlyInfected, time),
      // challenge Two
      severeCasesByRequestedTime: severeCaseByRequestedTime(input, ImpactCurrentlyInfected, time)
    },
    severeImpact: {
      // challenge One
      currentlyInfected: SevereCurrentlyInfected,
      infectionsByRequestedTime: InfectionsByRequestedTime(input, SevereCurrentlyInfected, time),
      // challenge Two
      severeCasesByRequestedTime: severeCaseByRequestedTime(input, SevereCurrentlyInfected, time)
    }
  };
};

export default covid19ImpactEstimator;
