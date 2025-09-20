"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { getUser, setUser, type StoredUser } from "@/lib/storage"

export type AuthContextValue = {
  user: StoredUser | null
  signIn: (email: string, _password: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUserState] = useState<StoredUser | null>(null)

  useEffect(() => {
    setUserState(getUser())
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      async signIn(email: string) {
        const mockUser: StoredUser = {
          id: email.toLowerCase(),
          name: email.split("@")[0],
          email,
          avatar: "/MSCers/QTL.webp",
        }
        setUser(mockUser)
        setUserState(mockUser)
      },
      signOut() {
        setUser(null)
        setUserState(null)
      },
    }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
