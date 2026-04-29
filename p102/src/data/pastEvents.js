import valentinesImage from '../assets/Valentines.png'
import boardGamesImage from '../assets/Board Games.png'
import winterTreesImage from '../assets/Winter Trees.png'
import gamesGalleryImage from '../assets/games.png'
import treeGalleryImage from '../assets/tree.png'
import valGalleryImage from '../assets/val.png'
import val1GalleryImage from '../assets/val 1.png'

const pastEvents = [
  {
    id: 'p1',
    name: 'Valentines Make-a-thon',
    date: '02-13-2026',
    location: 'Makerspace',
    image: valentinesImage,
    gallery: [
      { src: valGalleryImage, alt: 'Students crafting valentines together during Valentines Make-a-thon' },
      { src: val1GalleryImage, alt: 'Valentines Make-a-thon activity setup and student creations' },
    ],
  },
  {
    id: 'p2',
    name: 'Board Games & Bites',
    date: '03-20-2026',
    location: 'Wendt Commons',
    image: boardGamesImage,
    gallery: [
      { src: gamesGalleryImage, alt: 'Students playing board games together at Board Games and Bites' },
    ],
  },
  {
    id: 'p3',
    name: 'Winter Trees',
    date: '12-05-2025',
    location: 'Wendt Commons',
    image: winterTreesImage,
    gallery: [
      { src: treeGalleryImage, alt: 'Decorated winter trees created by students at the event' },
    ],
  },
]

export default pastEvents
