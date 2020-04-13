const covid19ImpactEstimator = (data) => {
  const input = data;

  return {
    data: input,
    impact: {
      // challenge One
      currentlyInfected: input.reportedCases * 10
    },
    severeImpact: {
      // challenge One
      currentlyInfected: input.reportedCases * 50
    }
  };
};

export default covid19ImpactEstimator;
