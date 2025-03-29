"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Palette } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type ColorTheme = "default" | "purple" | "teal" | "orange"

export function ColorThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [colorTheme, setColorTheme] = useState<ColorTheme>("default")
  const [mounted, setMounted] = useState(false)

  // Only run on client side
  useEffect(() => {
    setMounted(true)

    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const savedColorTheme = localStorage.getItem("colorTheme") as ColorTheme | null

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }

    if (savedColorTheme) {
      setColorTheme(savedColorTheme)
      applyColorTheme(savedColorTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
  }

  const applyColorTheme = (color: ColorTheme) => {
    // Remove existing theme classes
    document.documentElement.classList.remove("theme-default", "theme-purple", "theme-teal", "theme-orange")

    // Add new theme class
    document.documentElement.classList.add(`theme-${color}`)
    localStorage.setItem("colorTheme", color)
  }

  const changeColorTheme = (color: ColorTheme) => {
    setColorTheme(color)
    applyColorTheme(color)
  }

  // Don't render anything until mounted to prevent hydration errors
  if (!mounted) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-5 w-5 text-primary" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={toggleTheme}>
          {theme === "light" ? <Moon className="h-4 w-4 mr-2" /> : <Sun className="h-4 w-4 mr-2" />}
          {theme === "light" ? "Dark mode" : "Light mode"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeColorTheme("default")}>
          <div className="h-4 w-4 rounded-full bg-primary mr-2" />
          Default theme
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeColorTheme("purple")}>
          <div className="h-4 w-4 rounded-full bg-purple-500 mr-2" />
          Purple theme
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeColorTheme("teal")}>
          <div className="h-4 w-4 rounded-full bg-teal-500 mr-2" />
          Teal theme
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeColorTheme("orange")}>
          <div className="h-4 w-4 rounded-full bg-orange-500 mr-2" />
          Orange theme
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

