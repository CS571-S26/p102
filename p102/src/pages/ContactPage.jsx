import { useState } from 'react'
import PageContent from '../components/PageContent'
import '../styles/ContactPage.css'

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`FYC Website Message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:wiscesc@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <PageContent title="Contact Us" description="Have a question or want to get involved? Reach out to us — we'd love to hear from you.">
      <div className="contact-layout">

        <section className="contact-info-panel">
          <h2>Get in Touch</h2>
          <ul className="contact-info-list">
            <li>
              <span className="contact-info-label">Lead Organiser</span>
              <span className="contact-info-value">Daryl Prem</span>
            </li>
            <li>
              <span className="contact-info-label">Personal Email</span>
              <a href="mailto:dprem@wisc.edu" className="contact-link">dprem@wisc.edu</a>
            </li>
            <li>
              <span className="contact-info-label">WESC Email</span>
              <a href="mailto:wiscesc@gmail.com" className="contact-link">wiscesc@gmail.com</a>
            </li>
          </ul>

          <div className="contact-meetings-box">
            <h3>WESC Weekly Meetings</h3>
            <p>
              Come find us every <strong>Tuesday</strong> from{' '}
              <strong>7:30&nbsp;PM – 8:30&nbsp;PM</strong> in{' '}
              <strong>ERB 106</strong>. All are welcome!
            </p>
          </div>
        </section>

        <section className="contact-form-panel">
          <h2>Send a Message</h2>
          {submitted ? (
            <p className="contact-success">
              Thanks! Your email client should have opened with your message pre-filled.
              {' '}If you want to send event images, attach them manually after your email app opens.
              If it didn&rsquo;t, email us directly at{' '}
              <a href="mailto:wiscesc@gmail.com" className="contact-link">wiscesc@gmail.com</a>.
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <label className="contact-field">
                <span>Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Smith"
                />
              </label>
              <label className="contact-field">
                <span>Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@wisc.edu"
                />
              </label>
              <label className="contact-field">
                <span>Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                />
              </label>
              <p className="contact-file-note">
                If you want to send event images, attach them manually once your email app opens.
              </p>
              <button type="submit" className="contact-submit">Send Message</button>
            </form>
          )}
        </section>

      </div>
    </PageContent>
  )
}

export default ContactPage
