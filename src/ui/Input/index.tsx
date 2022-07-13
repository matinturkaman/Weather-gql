import { ChangeEvent } from 'react'
import { GoSearch } from 'react-icons/go'

export default function Input({ label, onChange, type }: inputProps) {
  return (
    <div
      className="dark:bg-[#0000003d] text-white w-[95%] sm:w-[35%] md:w-[95%] lg:w-[45%] xl:w-[35%] bg-[#ffffff3d] rounded-xl border flex items-center border-[#ffffff76] z-50 backdrop-blur-lg"
      style={{ boxShadow: '6px 6px 16px 1px #0000006e' }}
    >
      <GoSearch className="ml-4 text-[#ffffff76]" />
      <input
        onChange={onChange}
        type={type}
        placeholder={label}
        className="w-full bg-transparent px-4 py-2 outline-none placeholder:text-[#ffffff76]"
      />
    </div>
  )
}
