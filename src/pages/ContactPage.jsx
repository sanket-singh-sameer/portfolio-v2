import { ContactNav, TransitionLayer } from "../components/LayoutComponents";

export function ContactPage() {
  return (
    <>
      <TransitionLayer />
      <div class="page contact-page">
        <ContactNav />
        <section class="contact trail-container">
          <div class="floating-elements"></div>
          <div class="contact-left">
            <div class="contact-card-header-main">
              <h1>Let&apos;s Connect</h1>
              <p>
                Got a project idea? Need a stunning website or a robust app? Or just want to geek out over code and design? I&apos;m all in. Drop me a line, and let&apos;s create something extraordinary together.
              </p>
            </div>
            <div class="contact-info">
              <div class="contact-info-item">
                <p class="label">Project Inquiries</p>
                <p><a href="mailto:mail@xsam.in" target="_blank">mail@xsam.in</a></p>
              </div>
              <div class="contact-info-item">
                <p class="label">Quick Chat</p>
                <p><a href="https://x.com/SanketSameer" target="_blank">@SanketSameer</a></p>
              </div>
            </div>
          </div>
          <div class="contact-form-container">
            <div class="form-header">
              <h2>Start a Project</h2>
              <p>Tell me about your vision and let&apos;s make it reality</p>
            </div>
            <form class="contact-form" id="contactForm">
              <div class="form-row">
                <div class="form-group">
                  <input type="text" id="firstName" name="firstName" placeholder="Your first name" autoComplete="given-name" required />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div class="form-group">
                  <input type="text" id="lastName" name="lastName" placeholder="Your last name" autoComplete="family-name" required />
                  <label htmlFor="lastName">Last Name</label>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <input type="email" id="email" name="email" placeholder="your@email.com" autoComplete="email" required />
                  <label htmlFor="email">Email Address</label>
                </div>
                <div class="form-group">
                  <input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" autoComplete="tel" />
                  <label htmlFor="phone">Phone Number</label>
                </div>
              </div>
              <div class="form-group full-width">
                <select id="projectType" name="projectType" required>
                  <option value="">Select project type</option>
                  <option value="website">Website Development</option>
                  <option value="webapp">Web Application</option>
                  <option value="mobileapp">Mobile Application</option>
                  <option value="ecommerce">E-commerce Platform</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="projectType">Project Type</label>
              </div>
              <div class="form-group full-width">
                <textarea id="message" name="message" placeholder="Tell me about your project, goals, timeline, and budget..." required></textarea>
                <label htmlFor="message">Project Details</label>
              </div>
              <button type="submit" class="submit-btn">Send Message</button>
              <div class="success-message" id="successMessage">
                <p>Thanks! Your message has been sent. I&apos;ll get back to you within 24 hours.</p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
