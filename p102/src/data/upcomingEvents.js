import potPaintingAndOrigamiImage from '../assets/Pot Painting and Origami.png'
import bandanaDyeingImage from '../assets/Bandana.png'
import plantGalleryImage from '../assets/plant.png'
import plant1GalleryImage from '../assets/plant 1.png'
import plant2GalleryImage from '../assets/plant 2.png'

const upcomingEvents = [
  {
    id: 'u1',
    name: 'Pot Painting and Origami',
    date: '04-13-2026',
    time: '3.30 - 5:30 PM',
    location: 'Wendt 318',
    image: potPaintingAndOrigamiImage,
    gallery: [
      { src: plantGalleryImage, alt: 'Students painting pots at Pot Painting and Origami' },
      { src: plant1GalleryImage, alt: 'Finished potted plants from the event' },
      { src: plant2GalleryImage, alt: 'Students crafting and decorating planters together' },
    ],
    volunteerLink: '',
  },
  {
    id: 'u2',
    name: 'Bandana Dyeing',
    date: '05-01-2026',
    time: '2.30 - 4:30 PM',
    location: 'Allen Centennial Garden',
    image: bandanaDyeingImage,
    volunteerLink: '',
  },
]

export default upcomingEvents
