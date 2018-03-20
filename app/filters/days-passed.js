export default () => created => {
  const createdDate = new Date(created);
  const now = new Date();
  const msPassed = new Date() - createdDate;
  const daysPassed = Math.floor(msPassed / (24 * 60 * 60 * 1000));
  return daysPassed;
};
