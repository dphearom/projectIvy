import PlaceholderImage from "@/components/PlaceholderImage";

const OurStory = () => (
  <section className="founder our-story" id="story">
    <div className="wrap">
      <div className="founder-grid">
        <div className="founder-photo" data-reveal>
          <PlaceholderImage label="Founder portrait" aspect="4 / 5" />
        </div>

        <div className="founder-text" data-reveal data-reveal-d="2">
          <h2>Built by students who lived the journey</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. From a small
            community to the halls of the world&rsquo;s leading universities, our founder
            navigated the path to global education largely on their own — discovering
            firsthand how the right guidance at the right moment can change everything.
          </p>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Project Ivy
            was born from that experience: a commitment to ensuring the next generation of
            ambitious students never has to figure out admissions, scholarships, and study
            abroad alone.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Today, a
            community of mentors and advisors who&rsquo;ve walked the same path stands ready
            to guide students from discovery to acceptance — turning ambition into admission,
            one story at a time.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default OurStory;
