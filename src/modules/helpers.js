import moment from 'moment'

export const getPeriod = (startPeriod, endPeriod)=> {
  const startDate = moment(startPeriod).format('MM/YYYY')
  const endDate = moment(endPeriod).isValid() ? moment(startPeriod).format('MM/YYYY') : endPeriod
  return `${startDate} - ${endDate}`
}