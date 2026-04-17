import { useEffect, useState } from "react";
import { fetchPublicUser, fetchSocials } from "../utils/api";

export function TransitionLayer() {
  return (
    <div class="transition">
      <div class="transition-overlay overlay-1"></div>
      <div class="transition-overlay overlay-2"></div>
      <div class="transition-overlay overlay-3"></div>
      <div class="transition-overlay overlay-4"></div>
      <div class="transition-overlay overlay-5"></div>
    </div>
  );
}

export function HomeNav() {
  return (
    <nav>
      <div class="logo">
        <div class="logo-container">
          <p class="mn">
            <a href="/">X ✦ S</a>
          </p>
        </div>
      </div>
      <div class="menu-toggle-btn">
        <div class="menu-toggle-btn-wrapper">
          <p class="mn open-label">Menu</p>
          <p class="mn close-label">Close</p>
        </div>
      </div>
    </nav>
  );
}

export function HomeNavOverlay() {
    const [publicProfile, setPublicProfile] = useState(null);
  useEffect(() => {
    const controller = new AbortController();

    const loadPublicProfile = async () => {
      try {
        const data = await fetchPublicUser({ signal: controller.signal });
        setPublicProfile(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    };

    loadPublicProfile();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div class="nav-overlay">
      <div class="nav-items">
        <div class="nav-item active">
          <p>
            <a href="/">Home</a>
          </p>
        </div>

        <div class="nav-item">
          <p>
            <a href="/contact">Contact</a>
          </p>
        </div>
      </div>
      <div class="nav-footer">
        <div class="nav-footer-item">
          <div class="nav-footer-item-header">
            <p class="mn">Find Me</p>
          </div>
          <div class="nav-footer-item-copy">
            <p class="mn">
              <a href="https://github.com/sanket-singh-sameer" target="_blank">
                Github
              </a>
            </p>
            <p class="mn">
              <a
                href="https://www.linkedin.com/in/sanket-singh-sameer/"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div class="nav-footer-item">
          <div class="nav-footer-item-copy">
            <p class="mn"></p>
          </div>
        </div>
        <div class="nav-footer-item">
          <div class="nav-footer-item-header">
            <p class="mn">Get in Touch</p>
          </div>
          <div class="nav-footer-item-copy">
            <p class="mn">
              <a href={`mailto:${publicProfile?.email || "mail@xsam.in"}`} target="_blank">
                {publicProfile?.email || "mail@xsam.in"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ContactNav() {
  return (
    <nav>
      <div class="logo">
        <div class="logo-container">
          <p class="mn">
            <a href="/">X ✦ S</a>
          </p>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  const [socials, setSocials] = useState(null);
  useEffect(() => {
    const controller = new AbortController();

    const loadSocials = async () => {
      try {
        const data = await fetchSocials({ signal: controller.signal });
        setSocials(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    };

    loadSocials();

    return () => {
      controller.abort();
    };
  }, []);
  const [publicProfile, setPublicProfile] = useState(null);
  useEffect(() => {
    const controller = new AbortController();

    const loadPublicProfile = async () => {
      try {
        const data = await fetchPublicUser({ signal: controller.signal });
        setPublicProfile(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    };

    loadPublicProfile();

    return () => {
      controller.abort();
    };
  }, []);


  return (
    <footer>
      <div class="footer-container">
        <div class="footer-symbols footer-symbols-1">
          <img src="/images/global/s6.png" alt="" />
          <img src="/images/global/s6.png" alt="" />
        </div>
        <div class="footer-symbols footer-symbols-2">
          <img src="/images/global/s6.png" alt="" />
          <img src="/images/global/s6.png" alt="" />
        </div>
        <div class="footer-header">
          <h1>Sanket Singh Sameer</h1>
        </div>
        <div class="footer-row">
          <div class="footer-col">
            <p>Explore</p>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/contact">Contact</a>
            </p>
          </div>
          <div class="footer-col">
            <p>Creative Hub</p>
            <p>
              <a href="https://xsam.in" target="_blank">
                View Portfolio
              </a>
            </p>
            <p>
              <a href="https://blog.xsam.in" target="_blank">
                View Blog
              </a>
            </p>
          </div>
          <div class="footer-col">
            <p>Connect</p>
            <p>
              <a
                href={
                  socials?.find(
                    (social) => social.name.toLowerCase() === "linkedin",
                  )?.profileUrl || "https://www.linkedin.com/in/sanket-singh-sameer/"
                }
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                href={
                  socials?.find(
                    (social) => social.name.toLowerCase() === "github",
                  )?.profileUrl || "https://github.com/sanket-singh-sameer"
                }
                target="_blank"
              >
                Github
              </a>
            </p>
            <p>
              <a
                href={
                  socials?.find(
                    (social) => social.name.toLowerCase() === "x",
                  )?.profileUrl || "https://x.com/SanketSameer"
                }
                target="_blank"
              >
                Twitter
              </a>
            </p>
          </div>
          <div class="footer-col">
            <p>Extras</p>
            <p>
              <a href="https://www.awwwards.com/winner-list/" target="_blank">
                Design Archive
              </a>
            </p>
            <p>
              <a href="https://www.pillarstack.com/" target="_blank">
                Basic References
              </a>
            </p>
            <p>
              <a href="https://blog.olivierlarose.com/" target="_blank">
                Animation References
              </a>
            </p>
          </div>
        </div>
        <div class="copyright-info">
          <p class="mn">© - {publicProfile?.name || "Sanket Singh Sameer"} // {new Date().getFullYear()}</p>
          <p class="mn"></p>
        </div>
        <div class="explosion-container"></div>
      </div>
    </footer>
  );
}
