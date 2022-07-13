export const getDate = () => {
  const date = new Date()
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const theMonth = date.getMonth()
  const theDate = date.getDate()
  const theDay = date.getDay()

  return `${days[theDay]}, ${months[theMonth]}, ${theDate}`
}
