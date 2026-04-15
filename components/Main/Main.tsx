"use client"

import { useState } from "react"

import { SearchInput, UserDescription } from "./"

import { IGithubUser } from "@/types/IGithubUser"

export const Main = () => {
  const [userData, setUserData] = useState<IGithubUser | null>(null)

  return (
    <main className="w-full">
      <div className="custom-container flex flex-col gap-6">
        <SearchInput setUserData={setUserData} />
        {userData && <UserDescription userData={userData} />}
      </div>
    </main>
  )
}
