import { Link } from 'react-router-dom'
import darylPhoto from '../assets/me.jpeg'
import valentinesImage from '../assets/Valentines.png'
import boardGamesImage from '../assets/Board Games.png'
import winterTreesImage from '../assets/Winter Trees.png'
import potPaintingImage from '../assets/Pot Painting and Origami.png'
import PageContent from '../components/PageContent'
import '../styles/AboutPage.css'

const eventHighlights = [
  {
    src: valentinesImage,
    alt: 'Students crafting valentines together at the Makerspace during the Valentines Make-a-thon event',
    eventId: 'p1',
  },
  {
    src: boardGamesImage,
    alt: 'A group of students gathered around a table playing board games at Wendt Commons during Board Games and Bites',
    eventId: 'p2',
  },
  {
    src: winterTreesImage,
    alt: 'Students decorating winter trees together at Wendt Commons during the Winter Trees event',
    eventId: 'p3',
  },
  {
    src: potPaintingImage,
    alt: 'Students painting pots and folding origami at Wendt 318 during the Pot Painting and Origami event',
    eventId: 'u1',
  },
]

function AboutPage() {
  return (
    <PageContent title="About Us">

      <section className="about-mission">
        <div className="about-body-text">
          <p>
            First Year Connections (FYC) is a student-run program under WESC — the Wisconsin Engineering
            Student Council — dedicated to helping incoming engineering students build real friendships
            before the stress of classes sets in. We believe that knowing even just a few familiar faces
            on campus can make a huge difference in how confident and supported a first-year student feels.
          </p>
          <p>
            Through hands-on events like craft nights, game evenings, and outdoor activities, FYC creates
            low-pressure spaces where students can relax, meet people outside their major, and discover
            what campus life has to offer. All events are free to attend and open to all first-year
            engineering students.
          </p>
        </div>
      </section>

      <section className="about-leadership">
        <h2>Our Leadership</h2>
        <div className="about-leader-card">
          <img src={darylPhoto} alt="Daryl Prem, VP of Recruitment and Engagement" className="about-leader-img" />
          <div className="about-leader-info">
            <h3>Daryl Prem</h3>
            <p className="about-leader-role">VP of Recruitment &amp; Engagement — WESC</p>
            <p>
              FYC is led by Daryl Prem, the WESC Vice President of Recruitment and Engagement.
              Daryl is passionate about making the engineering college feel like a community — not
              just a building full of lectures. She organises each FYC event from concept through
              to execution, coordinating volunteers, venues, and supplies to ensure every student
              who walks through the door leaves with a smile.
            </p>
            <p>
              Outside of her WESC role, Daryl is an active member of the engineering student body
              and is always looking for new ways to connect students with each other and with the
              wider UW–Madison campus.
            </p>
          </div>
        </div>
      </section>

      <section className="about-highlights">
        <h2>Event Highlights</h2>
        <p className="about-body-text about-body-text--center">
          A glimpse at some of the events we&rsquo;ve run this year.
        </p>
        <div className="about-highlights-grid">
          {eventHighlights.map((photo) => (
            <Link
              key={photo.eventId}
              to={`/past?event=${photo.eventId}`}
              className="about-highlight-link"
              aria-label={`View ${photo.alt} in Past Events`}
            >
              <figure className="about-highlight-figure">
                <img src={photo.src} alt={photo.alt} className="about-highlight-img" />
              </figure>
            </Link>
          ))}
        </div>
      </section>

    </PageContent>
  )
}

export default AboutPage
