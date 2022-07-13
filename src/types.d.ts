type ipProps = {
  data?: {
    city: string
    country_name: string
  }
}

type weatherProps = {
  city?: string
  value?: string
  setCity: (city: string) => void
}

type inputProps = {
  label?: string
  type: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

type menuProps = {
  children?: JSX.Element
  setValue: (value: string) => void
}

type optionsProps = {
  id: number
  title: string
}

type switchProps = {
  label?: string
  enabled: boolean
  setEnabled: (enabled: boolean) => void
}
