import valentinesImage from '../assets/Valentines.png'
import boardGamesImage from '../assets/Board Games.png'
import winterTreesImage from '../assets/Winter Trees.png'
const pastEvents = [
  {
    id: 'p1',
    name: 'Valentines Make-a-thon',
    date: '02-13-2026',
    location: 'Makerspace',
    image: valentinesImage,
    // gallery: array of { src, alt } objects — add photos here when available
    gallery: [],
  },
  {
    id: 'p2',
    name: 'Board Games & Bites',
    date: '03-20-2026',
    location: 'Wendt Commons',
    image: boardGamesImage,
    gallery: [],
  },
  {
    id: 'p3',
    name: 'Winter Trees',
    date: '12-05-2025',
    location: 'Wendt Commons',
    image: winterTreesImage,
    gallery: [],
  },
]

export default pastEvents
