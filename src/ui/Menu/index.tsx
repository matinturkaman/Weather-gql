import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import SwitchToggle from '../switchToggle'

const Options = [
  { title: 'Visibility', id: 1 },
  { title: 'Show Humadity', id: 2 },
  { title: 'Wind Speed', id: 3 },
]

export default function MenuComponent({ children, setValue }: menuProps) {
  const [theme, setTheme] = useState<null | string>(null)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    if (enabled) {
      setTheme('dark')
    } else {
      setTheme(null)
    }
  })

  return (
    <div className="text-right right-8 bottom-8">
      <Menu as="div" className="relative inline-block text-left">
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="text-white dark:bg-[#0000005d] bg-[#ffffff5d] absolute right-0 -mt-[230px] p-2 w-64 sm:w-80 md:w-80 lg:w-80 xl:w-80 origin-top-right shadow-lg rounded-md ring-1 ring-[#8E8E8E] ring-opacity-60 focus:outline-none backdrop-blur-lg">
            <div className="m-1 flex justify-between">
              <div className="flex flex-col">
                <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-base dark:text-white text-slate-900 font-medium">
                  appearance
                </p>
                <p className="text-xs mt-1 dark:text-slate-400 text-slate-700">
                  Change system mode to Light or Dark
                </p>
              </div>
              <div>
                <SwitchToggle
                  label="appearance"
                  enabled={enabled}
                  setEnabled={setEnabled}
                />
              </div>
            </div>
            {Options?.map((item: optionsProps) => {
              return (
                <div key={item.id} className="p-1">
                  <Menu.Item>
                    {({ active }: { active: boolean }) => {
                      return (
                        <button
                          onClick={(e: any) => setValue(e.target.innerText)}
                          className={`${
                            active
                              ? 'dark:bg-main-blue bg-light-blue text-white'
                              : 'text-slate-800'
                          } group flex w-full h-8 items-center rounded-md p-2 text-sm dark:text-white`}
                        >
                          {item.title}
                        </button>
                      )
                    }}
                  </Menu.Item>
                </div>
              )
            })}
          </Menu.Items>
        </Transition>
        {children}
      </Menu>
    </div>
  )
}
