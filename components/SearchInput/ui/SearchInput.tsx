import Image from "next/image"

import searchIcon from "../../../public/icons/search-icon.svg"

export const SearchInput = () => {
  return (
    <div className="flex items-center relative">
      <Image src={searchIcon} width={24.06} height={24} alt="search-icon" className="absolute left-8"/>
      <input type="text" placeholder="Search GitHub username…" className="custom-input w-full bg-(--card-color) rounded-[15px] outline-0 text-(--color-fourth) placeholder:text-(--color-secondary) caret-[#0079FF] shadow-primary" />
      <button className="custom-button rounded-[10px] cursor-pointer duration-300 hover:bg-[#60ABFF] active:scale-[0.97] absolute right-2.5 text-white bg-[#0079FF] outline-0 border-0">
        search
      </button>
    </div>
  )
}
