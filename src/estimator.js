const InfectionsByRequestedTime = (data, CurrentlyInfected) => {
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

  return Math.trunc(CurrentlyInfected * (2 ** (Math.trunc(time / 3))));
};
// const severeCaseByRequestedTime = () => {
//   return Math.trunc(InfectionsByRequestedTime * 0.15);
//   // return InfectionsByRequestedTime * 0.15;
// };

const covid19ImpactEstimator = (data) => {
  const input = data;
  // Challenge One Computation.
  const ImpactCurrentlyInfected = data.reportedCases * 10;
  const SevereCurrentlyInfected = data.reportedCases * 50;


  return {
    data: input,
    impact: {
      // challenge One
      currentlyInfected: ImpactCurrentlyInfected,
      infectionsByRequestedTime: InfectionsByRequestedTime(input, ImpactCurrentlyInfected)
      // challenge Two
      // severeCasesByRequestedTime: severeCaseByRequestedTime
    },
    severeImpact: {
      // challenge One
      currentlyInfected: SevereCurrentlyInfected,
      infectionsByRequestedTime: InfectionsByRequestedTime(input, SevereCurrentlyInfected)
      // challenge Two
      // severeCasesByRequestedTime: severeCaseByRequestedTime(input, SevereCurrentlyInfected)
    }
  };
};

export default covid19ImpactEstimator;
