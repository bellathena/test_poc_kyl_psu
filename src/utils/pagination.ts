export const calculateTotalPage = (totalRecord: number, limit: number): number => {
  if (totalRecord === 0) {
    return 0;
  }
  if (limit === 0) {
    return 1;
  }

  return Math.ceil(totalRecord / limit);
};