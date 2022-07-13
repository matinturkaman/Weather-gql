import { RiSettings2Fill } from 'react-icons/ri'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { Menu } from '@headlessui/react'
import { ChangeEvent, useState } from 'react'
import { getDate } from './utils/getDate'
import Input from './ui/Input'
import WeatherResultBox from './components/weatherResult'
import MenuComponent from './ui/Menu'

function App(): JSX.Element {
  const [city, setCity] = useState('')
  const [value, setValue] = useState<string | undefined>('')


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
    e.preventDefault()
  }

  return (
    <div className="w-full h-screen text-white p-6 dark:bg-bgDark bg-bgLight bg-no-repeat bg-cover">
      <div className="flex items-center">
        <HiOutlineMenuAlt4 className="text-2xl" />
        <h1 className="ml-2 text-lg font-medium">{getDate()}</h1>
      </div>

      <div className="flex flex-col items-center justify-around h-[80%]">
        <Input label="Search" type="text" onChange={e => handleChange(e)} />
        <WeatherResultBox city={city} setCity={setCity} value={value} />
      </div>

      <div className="absolute right-8 bottom-8 text-3xl cursor-pointer">
        <MenuComponent setValue={setValue}>
          <Menu.Button>
            <RiSettings2Fill />
          </Menu.Button>
        </MenuComponent>
      </div>
    </div>
  )
}

export default App
