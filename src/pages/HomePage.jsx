import { useEffect, useState } from "react";
import {
  HomeNav,
  HomeNavOverlay,
  SiteFooter,
  TransitionLayer,
} from "../components/LayoutComponents";
import { fetchPublicUser } from "../utils/api";

export function HomePage() {
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

    return () => {
      controller.abort();
    };
  }, []);
  
  return (
    <>
      <TransitionLayer />

      <div class="page home-page">
        <HomeNav />
        <HomeNavOverlay />

        <section class="hero">
          <div class="hero-header-wrapper">
            <div class="hero-header hero-header-1">
              <h1>Sanket</h1>
            </div>
            <div class="hero-header hero-header-2">
              <h1>Singh</h1>
            </div>
          </div>
          <div class="hero-footer">
            <div class="hero-footer-symbols">
              <img src="/images/global/symbols.png" alt="" />
            </div>
            <div class="hero-footer-scroll-down">
              <p class="mn">
                <a
                  href={publicUser?.resumeURL || "#"}
                  target="_blank"
                  class="resume-link"
                >
                  Fetch // Resume
                </a>
              </p>
            </div>
            <div class="hero-footer-tags">
              <p class="mn">Showcase Mode: ON</p>
            </div>
          </div>
        </section>

        <section class="hero-img-holder">
          <div class="hero-img">
            <img src="/images/hero/img1.jpg" alt="" />
          </div>
        </section>

        <section class="about-hero">
          <div class="about-hero-header">
            <h1>Hi, I&apos;m</h1>
            <h1>{publicUser?.name || "Sanket Singh Sameer"}</h1>
          </div>
          <div class="about-hero-bio">
            <p class="ss">
              {publicUser?.bio ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident libero rem repudiandae, harum necessitatibus accusantium consectetur, assumenda, aliquam quod voluptatibus. Aut minus recusandae nulla quis voluptatibus deleniti magnam assumenda ab esse distinctio beatae error, iure tenetur sed, officia facere"}
            </p>
            <p class="mn">Code / Design / Craft / Repeat</p>
          </div>
          <div class="about-hero-portrait">
            <img
              src="https://drive.xsam.in/0:/me/profile1.jpg"
              alt="Sanket Singh Sameer Portrait"
            />
          </div>
        </section>

        <section class="featured-work">
          <div class="featured-images"></div>
          <div class="featured-titles">
            <div class="featured-title-wrapper">
              <h1 class="featured-title">Featured Projects</h1>
            </div>
            <div class="featured-title-wrapper">
              <div class="featured-title-img">
                <img src="/images/work-items/work-item-1.jpg" alt="" />
              </div>
              <h1 class="featured-title">Portfolio - v2</h1>
            </div>
            <div class="featured-title-wrapper">
              <div class="featured-title-img">
                <img src="/images/work-items/work-item-2.jpg" alt="" />
              </div>
              <h1 class="featured-title">Portfolio - v1</h1>
            </div>
            <div class="featured-title-wrapper">
              <div class="featured-title-img">
                <img src="/images/work-items/work-item-4.jpg" alt="" />
              </div>
              <h1 class="featured-title">Premier -UI</h1>
            </div>
            <div class="featured-title-wrapper">
              <div class="featured-title-img">
                <img src="/images/work-items/work-item-3.jpg" alt="" />
              </div>
              <h1 class="featured-title">HBH - AllInOne</h1>
            </div>
          </div>
          <div class="featured-work-indicator"></div>
          <div class="featured-work-footer">
            <p class="mn">Project Portfoliio [ 10 ]</p>
            <p class="mn">///////////////////</p>
            <p class="mn">
              <a href="#">View All Projects</a>
            </p>
          </div>
        </section>

        <section class="services-header">
          <div class="services-header-content">
            <div class="services-profile-icon">
              <img
                src={
                  publicUser?.avatar ||
                  "https://drive.xsam.in/0:/me/profile1.jpg"
                }
                alt="Sanket Singh Sameer's Portrait"
              />
            </div>
            <p>Your Vision. My Expertise.</p>
            <div class="services-header-title">
              <h1>
                {publicUser?.tagline.split("and")[0] || "Full Stack Developer"}
              </h1>
              <h1>
                &amp;{" "}
                {publicUser?.tagline.split("and")[1] ||
                  "System Design Engineer"}
              </h1>
            </div>
            <div class="services-header-arrow-icon">
              <h1>&#8595;</h1>
            </div>
          </div>
        </section>

        <section class="services">
          <div class="service-card" id="service-card-1">
            <div class="service-card-inner">
              <div class="service-card-content">
                <h1>Frontend Development</h1>
              </div>
              <div class="service-card-img">
                <img
                  src="/images/services/service-1.jpg"
                  alt="Front-End Development"
                />
              </div>
            </div>
          </div>
          <div class="service-card" id="service-card-2">
            <div class="service-card-inner">
              <div class="service-card-content">
                <h1>Backend Development</h1>
              </div>
              <div class="service-card-img">
                <img
                  src="/images/services/service-2.jpg"
                  alt="Backend Development"
                />
              </div>
            </div>
          </div>
          <div class="service-card" id="service-card-3">
            <div class="service-card-inner">
              <div class="service-card-content">
                <h1>System Design</h1>
              </div>
              <div class="service-card-img">
                <img src="/images/services/service-3.jpg" alt="UI/UX Design" />
              </div>
            </div>
          </div>
          <div class="service-card" id="service-card-4">
            <div class="service-card-inner">
              <div class="service-card-content">
                <h1>Web Applications</h1>
              </div>
              <div class="service-card-img">
                <img
                  src="/images/services/service-4.jpg"
                  alt="Web Applications"
                />
              </div>
            </div>
          </div>
        </section>

        <section class="contact-cta">
          <div class="contact-button">
            <a href="/contact"></a>
            <div class="contact-text-small">
              <p>Let&apos;s build something amazing together</p>
            </div>
            <div class="contact-text-large">
              <h1>Get in touch</h1>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
