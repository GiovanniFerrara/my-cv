import dayjs from "dayjs";

export const getPeriod = (startPeriod, endPeriod) => {
  const startDate = dayjs(startPeriod).format("MM/YYYY");
  const endDate = dayjs(endPeriod).isValid()
    ? dayjs(endPeriod).format("MM/YYYY")
    : endPeriod;
  return `${startDate} - ${endDate}`;
};
