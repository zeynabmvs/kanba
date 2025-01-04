export const displayDate = () => {
  let date = new Date();
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};
