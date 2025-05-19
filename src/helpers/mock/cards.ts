export type Card = {
    id: number
    photo: string
    firstName: string
    lastName: string
    city: string
    gender: string
    age: number
}
export const mockCards: Card[] = [
  {
    id: 1,
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    firstName: "Анна",
    lastName: "Иванова",
    city: "Москва",
    gender: "женский",
    age: 18
  },
  {
    id: 2,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    firstName: "Алексей",
    lastName: "Петров",
    city: "Санкт-Петербург",
    gender: "мужской",
    age: 18
  },
  {
    id: 3,
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    firstName: "Екатерина",
    lastName: "Сидорова",
    city: "Новосибирск",
    gender: "женский",
    age: 38
  },
  {
    id: 4,
    photo: "https://randomuser.me/api/portraits/men/77.jpg",
    firstName: "Дмитрий",
    lastName: "Кузнецов",
    city: "Екатеринбург",
    gender: "мужской",
    age: 18
  },
  {
    id: 5,
    photo: "https://randomuser.me/api/portraits/women/29.jpg",
    firstName: "Мария",
    lastName: "Фёдорова",
    city: "Казань",
    gender: "женский",
    age: 20
  }
]