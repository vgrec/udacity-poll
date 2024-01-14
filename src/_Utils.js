export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  const ampm = date.getHours() >= 12 ? "PM" : "AM";
  const formattedDate = `${hours}:${minutes} ${ampm} ${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  return formattedDate;
};
