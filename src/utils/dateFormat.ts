import { cdate } from 'cdate'

const dateFormat = function (date: string) {
  return cdate(date).locale('ja').format('YYYY/MM/DD')
}

export default dateFormat
