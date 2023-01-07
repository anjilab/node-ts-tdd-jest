export const percentageFormatter = (
  numerator: number,
  denominator: number,
  isRounded = true
) => {
  // TODO NEED TO WORK IN IT
  const percent = numerator / denominator;
  // return Math.round((percent + Number.EPSILON) * 100)
  return isRounded
    ? Math.round((percent + Number.EPSILON) * 100)
    : `${(percent * 100).toFixed(2)}`;
};
