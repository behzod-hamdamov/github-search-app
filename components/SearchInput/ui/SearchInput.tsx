"use client"

import Image from "next/image";

import searchIcon from "../../../public/icons/search-icon.svg";

import { getGithubUsers } from "../api/getGithubUser";

import { useState } from "react";

import { IGithubUser } from "@/types/IGithubUser";

interface IProps {setUserData: React.Dispatch<React.SetStateAction<IGithubUser | null>>}

export const SearchInput = ({setUserData}: IProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchError, setSearchEror] = useState<boolean>(false)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value.trimStart());
    setSearchEror(false)
  };

  const handleClick = async () => {
    const {data, error} = await getGithubUsers(inputValue)

    if (error) {
      setSearchEror(true)
    } else {
      setUserData(data)
    }
  }

  return (
    <div className="flex items-center relative">
      <Image
        src={searchIcon}
        width={24.06}
        height={24}
        alt="search-icon"
        className="absolute left-8"
      />
      <input
        type="text"
        placeholder="Search GitHub username…"
        value={inputValue}
        className="custom-input w-full bg-(--card-color) rounded-[15px] outline-0 text-(--color-fourth) placeholder:text-(--color-secondary) caret-[#0079FF] shadow-primary"
        onChange={handleInput}
      />
      {searchError && <span className="custom-error absolute right-35 p-2.5 bg-(--card-color)">No results</span>}
      <button onClick={handleClick} className="custom-button rounded-[10px] cursor-pointer duration-300 hover:bg-[#60ABFF] active:scale-[0.97] absolute right-2.5 text-white bg-[#0079FF] outline-0 border-0">
        search
      </button>
    </div>
  );
};
