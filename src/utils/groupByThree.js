export const groupByThree = (array) => {
  const groups = array.reduce((acc, currentValue, index) => {
    const chunkIndex = Math.floor(index / 3);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(currentValue);
    return acc;
  }, []);

  return groups;
};
