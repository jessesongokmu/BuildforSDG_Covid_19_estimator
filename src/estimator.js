const InfectionsByReqTime = (data, CurrentlyInfected) => {
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
  const ImpactCurrInfected = data.reportedCases * 10;
  const SevereCurrInfected = data.reportedCases * 50;

  return {
    data: input,
    impact: {
      // challenge One
      currentlyInfected: ImpactCurrInfected,
      infectionsByRequestedTime: InfectionsByReqTime(input, ImpactCurrInfected),
      // challenge Two
      severeCasesByRequestedTime: InfectionsByReqTime(input, ImpactCurrInfected) * 0.15
    },
    severeImpact: {
      // challenge One
      currentlyInfected: SevereCurrInfected,
      infectionsByRequestedTime: InfectionsByReqTime(input, SevereCurrInfected),
      // challenge Two
      severeCasesByRequestedTime: InfectionsByReqTime(input, SevereCurrInfected) * 0.15
    }
  };
};

export default covid19ImpactEstimator;
