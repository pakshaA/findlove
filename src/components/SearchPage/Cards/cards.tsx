'use client'

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { mockCards } from "@/helpers/mock/cards"
import { X, Heart } from "lucide-react"
import { getAllUsers } from "@/helpers/api/getCards/getCards"

interface CardsProps {
  filters: {
    city: string
    ageFrom: number
    ageTo: number
    gender: string
  }
}

interface User {
  id: number
  username: string
  surname: string
  gender: string
  age: number
  city: string
  photo: string
}

export const Cards = ({ filters }: CardsProps) => {
  const [cards, setCards] = useState<User[]>([])
  const [direction, setDirection] = useState<"left" | "right" | null>(null)

  useEffect(() => {
    getAllUsers()
      .then((users: User[]) => {
        const processedUsers = users.map(user => ({
          ...user,
          photo: user.photo || "/defaultAvatar.webp",
        }))
        const merged = [...mockCards, ...processedUsers]
        console.log("Загрузка пользователей завершена", merged)
        setCards(merged)
      })
      .catch(() => {
        setCards(mockCards)
      })
      .finally(() => {
        console.log("Загрузка пользователей завершена", cards)
      })
  }, [])

  const filteredCards = useMemo(() => {
    return cards.filter(card => {
      const cityMatch = filters.city ? card.city.toLowerCase().includes(filters.city.toLowerCase()) : true
      const ageMatch = card.age >= filters.ageFrom && card.age <= filters.ageTo
      const genderMatch = filters.gender ? filters.gender.toLowerCase() === card.gender.toLowerCase() : true
      return cityMatch && ageMatch && genderMatch
    })
  }, [cards, filters])

  const [displayedCards, setDisplayedCards] = useState<User[]>([])

  useEffect(() => {
    setDisplayedCards(filteredCards)
  }, [filteredCards])

  useEffect(() => {
    if (displayedCards.length < 3) {
      setDisplayedCards(prev => [...prev, ...prev])
    }
  }, [displayedCards])

  const handleAction = (dir: "left" | "right") => {
    setDirection(dir)
    setTimeout(() => {
      setDisplayedCards(prev => [...prev.slice(1), prev[0]])
      setDirection(null)
    }, 500)
  }

  const mainCard = displayedCards[0]
  const leftCard = displayedCards[1]
  const rightCard = displayedCards[2]

  return (
    <div className="flex flex-col items-center justify-center mt-10 relative w-full h-[500px]">
      <div className="relative w-[300px] h-[400px]">
        {rightCard && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white rounded-[20px] border border-[#E92063] shadow-md rotate-[10deg] z-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 0.7, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={rightCard.photo} alt="" className="w-full h-[250px] rounded-t-[20px] object-cover" />
            <div className="p-4 text-center">
              <p className="font-bold">{rightCard.username} {rightCard.surname}</p>
              <p className="text-sm text-gray-500">{rightCard.city} • {rightCard.gender}</p>
            </div>
          </motion.div>
        )}

        {leftCard && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white rounded-[20px] border border-[#E92063] shadow-md rotate-[-10deg] z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.7, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={leftCard.photo} alt="" className="w-full h-[250px] rounded-t-[20px] object-cover" />
            <div className="p-4 text-center">
              <p className="font-bold">{leftCard.username} {leftCard.surname}</p>
              <p className="text-sm text-gray-500">{leftCard.city} • {leftCard.gender}</p>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {mainCard && (
            <motion.div
              key={mainCard.id}
              className="absolute top-0 left-0 w-full h-full bg-white rounded-[20px] border border-[#E92063] shadow-[0_0_15px_#E92063] z-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ x: direction === "left" ? -500 : 500, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={mainCard.photo} alt="" className="w-full h-[250px] rounded-t-[20px] object-cover" />
              <div className="p-4 text-center">
                <p className="font-bold text-[20px]">{mainCard.username} {mainCard.surname}</p>
                <p className="text-sm text-gray-500">{mainCard.city} • {mainCard.gender}</p>
                <p className="text-sm text-gray-500">{mainCard.age} лет</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-8 mt-6">
        <button
          onClick={() => handleAction("left")}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center bg-white border border-[#E92063] rounded-full hover:bg-[#FFE3EE] transition"
        >
          <X color="#E92063" size={30} />
        </button>
        <button
          onClick={() => handleAction("right")}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center bg-[#E92063] text-white border border-[#E92063] rounded-full hover:opacity-90 transition"
        >
          <Heart size={30} />
        </button>
      </div>
    </div>
  )
}
