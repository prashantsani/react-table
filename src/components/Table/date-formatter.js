const array_of_months = [
  'Jan', 
  'Feb', 
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
]

export default function dateFormatter (date) {
  var dt = new Date(date);
  return `${array_of_months[dt.getMonth()]} ${dt.getDate()}, ${dt.getFullYear()}`
}