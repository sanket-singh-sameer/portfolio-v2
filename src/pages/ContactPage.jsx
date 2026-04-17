import { useEffect, useState } from "react";
import { ContactNav, TransitionLayer } from "../components/LayoutComponents";
import { fetchPublicUser, sendMessage } from "../utils/api";

export function ContactPage() {
  const [publicUser, setPublicUser] = useState(null);
  useEffect(() => {
    const controller = new AbortController();

    const loadPublicUser = async () => {
      try {
        const data = await fetchPublicUser({ signal: controller.signal });
        setPublicUser(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    };
    loadPublicUser();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitMessageForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendMessage(formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
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
                Got a project idea? Need a stunning website or a robust app? Or
                just want to geek out over code and design? I&apos;m all in.
                Drop me a line, and let&apos;s create something extraordinary
                together.
              </p>
            </div>
            <div class="contact-info">
              <div class="contact-info-item">
                <p class="label">Project Inquiries</p>
                <p>
                  <a
                    href={`mailto:${publicUser?.email || "mail@xsam.in"}`}
                    target="_blank"
                  >
                    {publicUser?.email || "mail@xsam.in"}
                  </a>
                </p>
              </div>
              <div class="contact-info-item">
                <p class="label">Quick Chat</p>
                <p>
                  <a href="https://x.com/SanketSameer" target="_blank">
                    @SanketSameer
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="contact-form-container">
            <div class="form-header">
              <h2>Start a Project</h2>
              <p>Tell me about your vision and let&apos;s make it reality</p>
            </div>
            <form class="contact-form" id="contactForm" onSubmit={submitMessageForm}>
              {/* <div class="form-row"> */}
                <div class="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onInput={handleInputChange}
                    placeholder="Your full name"
                    autoComplete="given-name"
                    required
                  />
                  <label htmlFor="name">Full Name</label>
                </div>
                {/* <div class="form-group">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Your last name"
                    autoComplete="family-name"
                    required
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div> */}
              {/* </div> */}
              <div class="form-row">
                <div class="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onInput={handleInputChange}
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                  />
                  <label htmlFor="email">Email Address</label>
                </div>
                <div class="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onInput={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    autoComplete="tel"
                  />
                  <label htmlFor="phone">Phone Number</label>
                </div>
              </div>
              <div class="form-group full-width">
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onInput={handleInputChange}
                    placeholder="Subject"
                    required
                  />
                  <label htmlFor="subject">Subject</label>
              </div>
              <div class="form-group full-width">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onInput={handleInputChange}
                  placeholder="Tell me about your project, goals, timeline, and budget..."
                  required
                ></textarea>
                <label htmlFor="message">Project Details</label>
              </div>
              <button type="submit" class="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              <div class="success-message" id="successMessage">
                <p>
                  Thanks! Your message has been sent. I&apos;ll get back to you
                  within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
