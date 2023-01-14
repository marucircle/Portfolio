import { cdate } from 'cdate'

const dateFormat = function (date: string | null) {
  if (date === null) return 'XXXX/XX/XX'
  return cdate(date).locale('ja').format('YYYY/MM/DD')
}

export default dateFormat
