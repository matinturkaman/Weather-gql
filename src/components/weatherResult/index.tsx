import cloudIcon from '../../assets/svg/cloud.svg'
import waterDrop from '../../assets/svg/waterDrop.svg'
import { GET_WEATHER } from '../../graphql'
import { useQuery } from '@apollo/client'
import spinner from '../../assets/svg/spinner.svg'
import useGetIP from '../../hooks/useGetIP'
import { useEffect } from 'react'

export default function WeatherResultBox({
  city,
  setCity,
  value,
}: weatherProps) {
  const { ip } = useGetIP()
  const { data, loading, error } = useQuery(GET_WEATHER, {
    variables: { name: city },
  })

  useEffect(() => {
    if (ip?.data) {
      setCity(ip?.data?.country_name)
    }
  }, [ip])

  useEffect(() => {
    if (city === '') {
      if (ip?.data) {
        setCity(ip?.data?.country_name)
      }
    }
  }, [city])

  if (loading) {
    return <img src={spinner} className="w-9 h-9 animate-spin" alt="" />
  }

  if (error) {
    return <p>Error - {error.message}</p>
  }

  return (
    <div className="relative">
      <img src={cloudIcon} className="absolute right-28 bottom-32" alt="" />
      <div
        className="flex flex-col justify-between w-80 h-auto dark:bg-[#0000003d] bg-[#ffffff3d] backdrop-blur-md p-8 rounded-[50px] border-[0.2px] border-[#fff5]"
        style={{ boxShadow: '6px 6px 16px 1px #0000006e' }}
      >
        <img src={waterDrop} className="absolute left-0 right-0 top-5" alt="" />
        <p className="font-medium text-3xl mt-4">
          {data?.getCityByName?.weather.temperature.actual ? (
            <>
              {Math.ceil(
                data?.getCityByName?.weather.temperature.actual - 273.15,
              )}
              °
            </>
          ) : (
            '...'
          )}
        </p>
        <div className="flex justify-between items-end mt-12">
          <div>
            <div>
              <p className="text-xl">
                {data?.getCityByName?.weather?.summary.title}
              </p>
              <p className="text-sm text-slate-300">
                {data?.getCityByName?.weather?.summary.description}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-300">
                {value === 'Visibility' ? (
                  <>
                    Visibility is :{' '}
                    {data?.getCityByName?.weather?.wind.visibility === '50'
                      ? 'Dense fog'
                      : data?.getCityByName?.weather?.wind.speed === '200'
                      ? 'Thick fog'
                      : data?.getCityByName?.weather?.wind.speed === '500'
                      ? 'Moderate fog'
                      : data?.getCityByName?.weather?.wind.speed === 770 || 1000
                      ? 'Light fog'
                      : data?.getCityByName?.weather?.wind.speed === 1000 ||
                        2000
                      ? 'Very light fog'
                      : data?.getCityByName?.weather?.wind.speed === 2001 ||
                        2800
                      ? 'Very mist'
                      : data?.getCityByName?.weather?.wind.speed === 4000 ||
                        10000
                      ? 'Very light mist'
                      : data?.getCityByName?.weather?.wind.speed === 18000 ||
                        20000
                      ? 'Clear air'
                      : 'Very clear air'}
                  </>
                ) : null}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-300">
                {value === 'Show Humadity' ? (
                  <>
                    {data?.getCityByName?.weather?.clouds.humidity ? (
                      <>
                        Humidity is :{' '}
                        {data?.getCityByName?.weather?.clouds.humidity}%
                      </>
                    ) : null}
                  </>
                ) : null}
              </p>
            </div>
            <div>
              <p className="text-sm text-slate-300">
                {value === 'Wind Speed' ? (
                  <>
                    {' '}
                    {data?.getCityByName?.weather?.wind.speed ? (
                      <>
                        Wind Speed : {data?.getCityByName?.weather?.wind.speed}
                      </>
                    ) : null}
                  </>
                ) : null}
              </p>
            </div>
          </div>
          <div>
            {data?.getCityByName?.name && data?.getCityByName?.country ? (
              <p>
                {data?.getCityByName?.name}, {data?.getCityByName?.country}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
