const InfectionsByReqTime = (data, CurrentlyInfected, time) => Math.trunc(
  CurrentlyInfected * (2 ** (Math.trunc(time / 3)))
);

const SeverCaseByReqTime = (data, CurrentlyInfected, time) => Math.trunc((
  CurrentlyInfected * (2 ** (Math.trunc(time / 3)))) * 0.15);

const covid19ImpactEstimator = (data) => {
  const input = data;
  // Challenge One Computation.
  const ImpactCurrInfected = data.reportedCases * 10;
  const SevereCurrInfected = data.reportedCases * 50;

  let time = '';
  if (input.periodType.toLowerCase() === 'days') {
    time = Math.trunc((input.timeToElapse * 1));
  }
  if (input.periodType.toLowerCase() === 'weeks') {
    time = Math.trunc((input.timeToElapse * 7));
  }
  if (input.periodType.toLowerCase() === 'months') {
    time = Math.trunc((input.timeToElapse * 30));
  }

  return {
    data: input,
    impact: {
      // challenge One
      currentlyInfected: ImpactCurrInfected,
      infectionsByRequestedTime: InfectionsByReqTime(input, ImpactCurrInfected, time),
      // challenge Two
      severeCasesByRequestedTime: SeverCaseByReqTime(input, ImpactCurrInfected, time)
    },
    severeImpact: {
      // challenge One
      currentlyInfected: SevereCurrInfected,
      infectionsByRequestedTime: InfectionsByReqTime(input, SevereCurrInfected, time),
      // challenge Two
      severeCasesByRequestedTime: SeverCaseByReqTime(input, SevereCurrInfected, time)
    }
  };
};

export default covid19ImpactEstimator;
