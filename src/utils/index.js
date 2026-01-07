export const displayDate = (dateLike) => {
  const date =
    dateLike instanceof Date || Object.prototype.toString.call(dateLike) === '[object Date]'
      ? new Date(dateLike)
      : new Date(dateLike);
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};
