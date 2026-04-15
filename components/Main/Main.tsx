"use client"

import { useState } from "react"

import { SearchInput } from "./"

import { IGithubUser, IUserNotFound } from "@/types/IGithubUser"

export const Main = () => {
  const [userData, setUserData] = useState<IGithubUser | IUserNotFound | null>(null)

  return (
    <main className="w-full flex flex-col gap-6">
      <div className="custom-container">
        <SearchInput setUserData={setUserData} />
      </div>
    </main>
  )
}
