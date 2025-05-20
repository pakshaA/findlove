export type Card = {
    id: number
    photo: string
    username: string
    surname: string
    city: string
    gender: string
    age: number
}
export const mockCards: Card[] = [
  {
    id: 1,
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    username: "Анна",
    surname: "Иванова",
    city: "Москва",
    gender: "женский",
    age: 18
  },
  {
    id: 2,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    username: "Алексей",
    surname: "Петров",
    city: "Санкт-Петербург",
    gender: "мужской",
    age: 18
  },
  {
    id: 3,
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    username: "Екатерина",
    surname: "Сидорова",
    city: "Новосибирск",
    gender: "женский",
    age: 38
  },
  {
    id: 4,
    photo: "https://randomuser.me/api/portraits/men/77.jpg",
    username: "Дмитрий",
    surname: "Кузнецов",
    city: "Екатеринбург",
    gender: "мужской",
    age: 18
  },
  {
    id: 5,
    photo: "https://randomuser.me/api/portraits/women/29.jpg",
    username: "Мария",
    surname: "Фёдорова",
    city: "Казань",
    gender: "женский",
    age: 20
  }
]