'use client';

import { useEffect, useState } from 'react';
import { Check, Download, Heart, Mail, MessageCircle, Phone } from 'lucide-react';

const brandPaths = {
  linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.94v5.666H9.352V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9H7.12v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  instagram: 'M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  github: 'M12 .297C5.373.297 0 5.67 0 12.297c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 6.097c1.02.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.119 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.806 5.624-5.479 5.921.43.372.814 1.103.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .321.216.694.825.576C20.562 22.092 24 17.596 24 12.297 24 5.67 18.627.297 12 .297z',
};

function BrandIcon({ name }: { name: keyof typeof brandPaths }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={brandPaths[name]} /></svg>;
}

const navigation = [
  ['About', 'about'], ['Research', 'research'], ['Publications', 'publications'],
  ['Projects', 'projects'], ['Activity', 'activity'], ['Vitæ', 'vitae'], ['Skills', 'skills'],
];

export default function Home() {
  const [appreciated, setAppreciated] = useState(false);

  useEffect(() => {
    setAppreciated(localStorage.getItem('jooho-portfolio-appreciated') === 'yes');
  }, []);

  function toggleAppreciation() {
    const next = !appreciated;
    setAppreciated(next);
    localStorage.setItem('jooho-portfolio-appreciated', next ? 'yes' : 'no');
  }

  return (
    <div className="site-shell">
      <aside className="sidebar">
        <a className="site-name" href="#about">Jooho Son</a>
        <div className="portrait"><img src="/profile.jpg" alt="Jooho Son" /></div>
        <p className="role">Undergraduate Researcher<br />KAIST · Computer Science</p>
        <p className="place">Daejeon, Republic of Korea</p>

        <div className="socials" aria-label="Social links">
          <a href="https://www.linkedin.com/in/%EC%A3%BC%ED%98%B8-%EC%86%90-2a240a30a" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BrandIcon name="linkedin" /></a>
          <a href="https://www.instagram.com/jooho_s06/" target="_blank" rel="noreferrer" aria-label="Instagram"><BrandIcon name="instagram" /></a>
          <a href="https://github.com/JoohoSon24" target="_blank" rel="noreferrer" aria-label="GitHub"><BrandIcon name="github" /></a>
          <a href="mailto:durei1@kaist.ac.kr" aria-label="Email"><Mail /></a>
        </div>

        <nav aria-label="Page sections">
          {navigation.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </nav>

        <div className="sidebar-actions">
          <a href="/jooho-son-resume.pdf" target="_blank"><Download /> Resume</a>
          <a href="mailto:durei1@kaist.ac.kr?subject=Coffee%20chat%20with%20Jooho"><MessageCircle /> Coffee chat</a>
        </div>
      </aside>

      <main className="content">
        <section className="intro" id="about">
          <p className="kicker">HELLO, I&apos;M</p>
          <h1>Jooho Son</h1>
          <p className="lead">I am an undergraduate researcher at KAIST working on <strong>3D computer vision, neural rendering, reinforcement learning, and multi-agent systems.</strong></p>
          <p>I am interested in systems that understand, reconstruct, and act in the physical world. My work connects research ideas to reproducible experiments—clear assumptions, controlled evaluation, failure analysis, and working code.</p>
          <p>I am currently involved in research at KAIST CVLab. Previously, I explored AI for Science at DSAIL and led applied AI, education, and consulting projects.</p>
          <div className="contact-line">
            <a href="mailto:durei1@kaist.ac.kr">durei1@kaist.ac.kr</a>
            <span>·</span><a href="tel:+821021448064">+82 10-2144-8064</a>
          </div>
        </section>

        <section id="research">
          <h2>Research Interests</h2>
          <div className="interest-list">
            <article><span className="interest-priority">Primary</span><h3>3D/4D Vision & Spatial Intelligence</h3><p>Learning spatial and spatiotemporal representations for 3D reconstruction, dynamic-scene understanding, novel-view synthesis, and neural rendering.</p></article>
            <article><span className="interest-priority">Primary</span><h3>Vision-Language-Action (VLA)</h3><p>Connecting visual perception, language reasoning, and embodied action to build agents that understand and interact with the physical world.</p></article>
            <article className="secondary-interest"><span className="interest-priority">Secondary</span><h3>Human–AI Interaction & Multi-Agent Systems</h3><p>Designing human-centered AI experiences and coordinated agent systems that support communication, collaboration, and real-world decision-making.</p></article>
          </div>
        </section>

        <section id="publications">
          <h2>CVLab Publications & Ongoing Research</h2>
          <article className="publication">
            <div className="pub-year">2026</div>
            <div><h3>4D Novel View Synthesis</h3><p>KAIST CVLab collaborative research · <strong>Contributor (non-first author)</strong></p><p className="muted">Contributed literature review, experimental-condition design, quantitative evaluation tables, baseline comparisons, and paper figures for dynamic-scene reconstruction research.</p><span className="tag">Manuscript under review</span></div>
          </article>
          <article className="publication">
            <div className="pub-year">Ongoing</div>
            <div><h3>City-Scale Mesh Reconstruction</h3><p>KAIST CVLab collaborative research · <strong>Contributor</strong></p><p className="muted">Contributing prior-art and baseline analysis, problem formulation, pipeline design, and weekly research materials for large-scale urban 3D reconstruction.</p><span className="tag ongoing">Work in progress</span></div>
          </article>
          <article className="publication">
            <div className="pub-year">Ongoing</div>
            <div><h3>Asynchronous Novel View Synthesis</h3><p>KAIST CVLab collaborative research · <strong>Contributor</strong></p><p className="muted">Reviewing asynchronous NVS literature and organizing research directions connecting asynchronous camera observations with dynamic-scene and 4D reconstruction.</p><span className="tag ongoing">Research exploration</span></div>
          </article>
          <p className="section-note">Additional project pages, paper links, and code will be added as they become publicly available.</p>
        </section>

        <section id="projects">
          <h2>Selected Projects</h2>
          <div className="project-list">
            <article><div><span>Tech for Impact · 2025</span><h3><a href="https://github.com/JoohoSon24/Tech_for_impact" target="_blank" rel="noreferrer">Ieum ↗</a></h3><p>Developed an AI assistant-powered communication service designed to help adolescents with developmental disabilities express themselves and engage in supportive conversations.</p></div><ul><li>Assistive AI</li><li>Conversational UX</li><li>Social Impact</li></ul></article>
            <article><div><span>Field Study · 2026</span><h3>Starlink × Sky View</h3><p>Measured the relationship between sky obstruction and satellite-internet performance by synchronizing terminal, GPS, network, and sky-mask data.</p></div><ul><li>Networking</li><li>Measurement</li><li>Data Analysis</li></ul></article>
            <article><div><span>Reinforcement Learning · 2026</span><h3>Top-Gun RL</h3><p>Developed a combat-simulation training workflow using PPO, SAC, curriculum learning, self-play, checkpoint recovery, and sequence replay.</p></div><ul><li>Self-play</li><li>PPO / SAC</li><li>Simulation</li></ul></article>
            <article><div><span>Multi-Agent Systems · 2026</span><h3>Plan Bee</h3><p>Built a proxy-agent negotiation system that replans work when schedule changes create bottlenecks in software teams.</p></div><ul><li>LangGraph</li><li>FastAPI</li><li>React</li></ul></article>
          </div>
        </section>

        <section id="activity">
          <h2>Activity</h2>
          <p className="section-intro">Selected moments from consulting, education, and applied AI work beyond the lab.</p>
          <div className="activity-list">
            <article className="activity-card">
              <div className="activity-copy">
                <span>Strategy & Consulting · 2024–2025</span>
                <h3>KAIST Management Study Group (MSK)</h3>
                <p>Led and contributed to strategy projects for Frip, Nota AI, and Coupang Play, turning market research into concrete service and go-to-market proposals.</p>
              </div>
              <div className="activity-gallery activity-gallery-three">
                <a href="/activity/msk-frip.jpg" target="_blank"><img src="/activity/msk-frip.jpg" alt="Frip MateTrip service strategy presentation slide" /></a>
                <a href="/activity/msk-nota.jpg" target="_blank"><img src="/activity/msk-nota.jpg" alt="Nota AI industrial safety market analysis presentation slide" /></a>
                <a href="/activity/msk-coupang-play.jpg" target="_blank"><img src="/activity/msk-coupang-play.jpg" alt="Coupang Play content acquisition strategy presentation slide" /></a>
              </div>
            </article>

            <article className="activity-card activity-card-featured">
              <div className="activity-copy">
                <span>Global Volunteering · 2025</span>
                <h3>AI Education in Timor-Leste</h3>
                <p>Designed and delivered an English-language AI development curriculum with KAIST volunteers and students at the National University of Timor-Leste.</p>
              </div>
              <div className="activity-gallery activity-gallery-three timor-gallery">
                <a href="/activity/timor-leste-volunteering.jpg" target="_blank"><img src="/activity/timor-leste-volunteering.jpg" alt="KAIST volunteers and students during the AI education program in Timor-Leste" /></a>
                <a href="/activity/timor-leste-cultural-activity.jpg" target="_blank"><img src="/activity/timor-leste-cultural-activity.jpg" alt="Cultural exchange activity with students in Timor-Leste" /></a>
                <a href="/activity/timor-leste-exchange-fixed.jpg" target="_blank"><img src="/activity/timor-leste-exchange-fixed.jpg" alt="Jooho Son participating in a student exchange activity in Timor-Leste" /></a>
              </div>
            </article>

            <article className="activity-card">
              <div className="activity-copy">
                <span>AI Competition · 2026</span>
                <h3>Hanwha Life Future Talent Contest</h3>
                <p>Won 3rd Prize in the AI sector by proposing a structured data pipeline and model-selection framework for an insurance AI solution, then presented the work at the final stage.</p>
              </div>
              <div className="activity-gallery activity-gallery-two">
                <a href="/activity/hanwha-solution.jpg" target="_blank"><img src="/activity/hanwha-solution.jpg" alt="Hanwha Life AI solution data pipeline proposal slide" /></a>
                <a href="/activity/hanwha-presentation.jpg" target="_blank"><img src="/activity/hanwha-presentation.jpg" alt="Jooho Son presenting at the Hanwha Finance Future Talent Contest" /></a>
              </div>
            </article>
          </div>
        </section>

        <section id="vitae">
          <div className="section-heading-with-action">
            <h2>Vitæ</h2>
            <a className="resume-download" href="/jooho-son-resume.pdf" target="_blank"><Download /> Download Resume</a>
          </div>
          <div className="timeline">
            <article><time>2022 — 2024</time><details><summary><strong>Chungnam Science High School</strong><span className="expand-mark">+</span></summary><p>29th Cohort · Graduated early before entering KAIST.</p></details></article>
            <article><time>2024 — 2025</time><details><summary><strong>KAIST Management Study Group</strong><span className="expand-mark">+</span></summary><p>Vice President · Led consulting projects for Nota AI and Frip, translating market questions into executable strategies.</p></details></article>
            <article><time>2025</time><details><summary><strong>Timor-Leste Global Volunteering Group</strong><span className="expand-mark">+</span></summary><p>AI Education Lead · Designed and delivered an English-language AI development curriculum.</p></details></article>
            <article><time>Previous</time><details><summary><span><span className="timeline-label muted-label">Previous research lab</span><strong>KAIST DSAIL</strong></span><span className="expand-mark">+</span></summary><p>Undergraduate Researcher · Reviewed AI for Science research and studied graph learning and scientific reasoning pipelines.</p></details></article>
            <article><time>2026</time><details><summary><strong>Hanwha Life Future Talent Contest</strong><span className="expand-mark">+</span></summary><p>3rd Prize, AI Sector · Recognized for an AI project in Hanwha Life&apos;s future-talent competition before joining CVLab.</p></details></article>
            <article className="current-role"><time>2026 — Present</time><details><summary><span><span className="timeline-label">Current research lab</span><strong>KAIST Computer Vision Lab (CVLab)</strong></span><span className="expand-mark">+</span></summary><p>Undergraduate Researcher · Joined CVLab after the Hanwha Life contest, following the earlier research experience at DSAIL. Currently conducting research on 4D novel-view synthesis, city-scale mesh reconstruction, action latent representations, and vision-language-action models.</p></details></article>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="two-column">
            <div><h3>Certifications & Language</h3><p><strong>Craftsman Information Processing</strong><br />Korean National Technical Qualification</p><p><strong>TOEIC 835</strong><br />English proficiency</p></div>
            <div><h3>Technical Skills</h3><p><strong>Research:</strong> 3D Vision, Neural Rendering, RL, Multi-Agent Systems</p><p><strong>Languages:</strong> Python, C, Java, Scala, TypeScript</p><p><strong>Systems:</strong> PyTorch, Node.js, SQL, MongoDB, Git</p></div>
          </div>
        </section>

        <section className="contact-box">
          <h2>Collaboration & Coffee Chats</h2>
          <p>I am always open to discussing research, projects, and new ideas.</p>
          <div><a href="mailto:durei1@kaist.ac.kr"><Mail /> durei1@kaist.ac.kr</a><a href="tel:+821021448064"><Phone /> +82 10-2144-8064</a></div>
        </section>

        <footer>
          <p>© 2026 Jooho Son · Last updated October 2026</p>
          <button className={appreciated ? 'appreciated' : ''} onClick={toggleAppreciation} aria-pressed={appreciated}>
            {appreciated ? <Check /> : <Heart />} {appreciated ? 'Thank you!' : 'Appreciate this portfolio'}
          </button>
        </footer>
      </main>
    </div>
  );
}
