const InfectionsByReqTime = (data, CurrentlyInfected, time) => Math.trunc(
  CurrentlyInfected * (2 ** (Math.trunc(time / 3)))
);

const SevereCaseByReqTime = (data, CurrentlyInfected, time) => {
  const Infections = InfectionsByReqTime(data, CurrentlyInfected, time);
  return Math.trunc(Infections * 0.15);
};


const HospitalBedsRequest = (data, CurrentlyInfected, time) => {
  const severeCases = SevereCaseByReqTime(data, CurrentlyInfected, time);
  const totalBedCapacity = data.totalHospitalBeds; // Get the Total Beds Available
  const AvailableCapacity = totalBedCapacity * 0.35; // Get 35% of total beds Available
  // return unoccupied beds capacity for COVID-19 patients (plus or Minus)
  return (AvailableCapacity - severeCases);
};


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
      severeCasesByRequestedTime: SevereCaseByReqTime(input, ImpactCurrInfected, time),
      hospitalBedsByRequestedTime: HospitalBedsRequest(input, ImpactCurrInfected, time)
    },
    severeImpact: {
      // challenge One
      currentlyInfected: SevereCurrInfected,
      infectionsByRequestedTime: InfectionsByReqTime(input, SevereCurrInfected, time),
      // challenge Two
      severeCasesByRequestedTime: SevereCaseByReqTime(input, SevereCurrInfected, time),
      hospitalBedsByRequestedTime: HospitalBedsRequest(input, SevereCurrInfected, time)

    }
  };
};

export default covid19ImpactEstimator;
