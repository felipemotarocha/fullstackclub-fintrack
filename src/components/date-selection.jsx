import { endOfMonth, startOfMonth } from 'date-fns'
import { useState } from 'react'

import { DatePickerWithRange } from './ui/date-range-picker'

const DateSelection = () => {
  const [date, setDate] = useState({
    from: startOfMonth(new Date()).toISOString(),
    to: endOfMonth(new Date()).toISOString(),
  })
  return (
    <div className="flex items-center">
      <DatePickerWithRange date={date} onDateChange={setDate} />
    </div>
  )
}

export default DateSelection
