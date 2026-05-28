<template>
  <div>
    <!-- Hero -->
    <section class="product-hero" style="--accent:#d4a574;--accent-soft:rgba(212,165,116,0.08);">
      <div class="container">
        <div class="hero-top">
          <RouterLink to="/" class="breadcrumb">← Back to home</RouterLink>
          <div class="hero-badges">
            <span class="badge" style="background:rgba(74,222,128,0.08);color:#4ade80;border-color:rgba(74,222,128,0.3);">PDF · Free</span>
            <span class="badge" style="background:rgba(212,165,116,0.08);color:#d4a574;border-color:rgba(212,165,116,0.3);">Tailored delivery · On request</span>
          </div>
        </div>

        <div class="hero-body">
          <div class="hero-text">
            <div class="section-label" style="margin-bottom:1rem;color:#d4a574;opacity:0.8;">
              Board & CISO Briefing Pack
            </div>
            <h1 class="hero-h1 font-display">
              Get your leadership<br/>
              <em style="color:#d4a574">aligned on quantum risk.</em>
            </h1>
            <p class="hero-lead">
              A ready-made executive slide deck that explains the quantum threat,
              regulatory timelines, and the migration path — without requiring the audience to
              understand the cryptography. Download the PDF free, or engage IREKAI to present,
              tailor, and deliver it — including access to the editable source file.
            </p>
            <div class="hero-actions">
              <button class="btn btn-gold" @click="openDeck">
                Get the briefing deck →
              </button>
              <a
                :href="tailoredMailto"
                class="btn btn-ghost"
                style="font-size:0.8rem;padding:0.75rem 1.4rem;"
              >
                Request tailored presentation →
              </a>
            </div>
          </div>

          <div class="hero-visual">
            <div class="slide-preview-card">
              <div class="slide-label font-mono">Slide preview · Title slide</div>
              <img
                :src="titleSlideUrl"
                alt="Title slide of the IREKAI Board Briefing deck — Board Briefing on The Quantum Threat to &lt;COMPANY&gt;"
                class="slide-preview-image"
                loading="lazy"
              />
              <div class="slide-outline">
                <div class="outline-item font-mono" v-for="s in slideOutline" :key="s.n">
                  <span class="outline-n">{{ s.n }}</span>
                  <span class="outline-title">{{ s.title }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What's in the deck -->
    <section class="content-section">
      <div class="container">
        <div class="two-col">
          <div>
            <div class="section-label" style="margin-bottom:1.25rem;">What's in the deck</div>
            <div class="deliverable-list">
              <div class="deliverable" v-for="d in deckContents" :key="d.title">
                <div class="deliverable-icon" style="color:#d4a574;">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <div>
                  <div class="deliverable-title">{{ d.title }}</div>
                  <div class="deliverable-body">{{ d.body }}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="section-label" style="margin-bottom:1.25rem;">Two ways to use it</div>
            <div class="use-list">
              <div class="use-card use-card--free">
                <div class="use-card-badge font-mono">PDF download · Free</div>
                <h4 class="use-card-title font-display">Self-serve</h4>
                <p class="use-card-body">
                  Download the deck as a PDF and present it yourself. Works best when an internal
                  champion already understands the topic and needs a polished set of slides
                  to bring leadership up to speed.
                </p>
                <div class="use-card-note font-mono">Read-only · IREKAI branding must remain · Behind a short sign-up</div>
                <button class="btn btn-gold use-card-btn" @click="openDeck">Get the PDF →</button>
              </div>
              <div class="use-card use-card--paid">
                <div class="use-card-badge font-mono">On request</div>
                <h4 class="use-card-title font-display">IREKAI presents</h4>
                <p class="use-card-body">
                  Hire an IREKAI expert to deliver the briefing to your board or CISO. We tailor every
                  slide to your sector, regulatory context, and business cases — and we handle
                  the Q&A. Includes a one-page follow-up summary memo and access to the editable source file.
                </p>
                <div class="use-card-note font-mono">Custom scope · Day-rate engagement</div>
                <a :href="tailoredMailto" class="btn btn-ghost use-card-btn" style="font-size:0.78rem;padding:0.65rem 1.25rem;">Request a proposal →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who it's for -->
    <section class="audience-section">
      <div class="container">
        <div class="section-label" style="margin-bottom:1.5rem;">Who this is for</div>
        <div class="audience-grid">
          <div class="audience-card" v-for="a in audiences" :key="a.role">
            <div class="audience-icon" v-html="a.icon"></div>
            <div class="audience-role font-display">{{ a.role }}</div>
            <div class="audience-desc">{{ a.desc }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <Transition name="modal">
      <div class="modal-backdrop" v-if="deckOpen" @click.self="closeDeck">
        <div class="modal-box">
          <button class="modal-close" @click="closeDeck">✕</button>

          <div v-if="!deckDone">
            <div class="modal-label font-mono">Board &amp; CISO Briefing Pack</div>
            <h3 class="modal-heading font-display">Get the executive deck</h3>
            <p class="modal-sub">
              Free to download as a PDF. We'll send it to your email and notify you when
              an updated version is released.
            </p>
            <p class="modal-licence">
              The PDF is licensed for internal use only. IREKAI branding may not be removed
              or altered. To receive the editable source file, <a :href="tailoredMailto" style="color:#d4a574;">request a tailored engagement</a>.
            </p>
            <form class="modal-form" @submit.prevent="submitDeck">
              <div class="modal-field">
                <label class="modal-field-label">Language</label>
                <div class="lang-toggle" role="radiogroup" aria-label="Deck language">
                  <button
                    v-for="opt in languageOptions"
                    :key="opt.code"
                    type="button"
                    role="radio"
                    :aria-checked="selectedLanguage === opt.code"
                    :disabled="!opt.available"
                    class="lang-toggle-btn"
                    :class="{ 'is-active': selectedLanguage === opt.code, 'is-disabled': !opt.available }"
                    @click="opt.available && (selectedLanguage = opt.code)"
                  >
                    <span class="lang-toggle-flag" aria-hidden="true">{{ opt.flag }}</span>
                    <span class="lang-toggle-label">{{ opt.label }}</span>
                    <span v-if="!opt.available" class="lang-toggle-note font-mono">Coming soon</span>
                  </button>
                </div>
              </div>
              <div class="modal-field">
                <label class="modal-field-label">Name</label>
                <input v-model="deckForm.name" type="text" class="modal-input" placeholder="Your name" required/>
              </div>
              <div class="modal-field">
                <label class="modal-field-label">Work email</label>
                <input v-model="deckForm.email" type="email" class="modal-input" placeholder="you@organisation.com" required/>
              </div>
              <div class="modal-field">
                <label class="modal-field-label">Organisation</label>
                <input v-model="deckForm.org" type="text" class="modal-input" placeholder="Organisation name" required/>
              </div>
              <div class="modal-field">
                <label class="modal-field-label">Your role</label>
                <input v-model="deckForm.role" type="text" class="modal-input" placeholder="e.g. CISO, Head of Security" />
              </div>
              <button type="submit" class="btn btn-gold modal-submit">Send me the PDF →</button>
            </form>
          </div>

          <div v-else class="modal-success">
            <div class="modal-success-icon" style="color:#d4a574;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9 12l2 2 4-4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="modal-heading font-display">You're on the list</h3>
            <p class="modal-sub">
              We've also sent the <strong>{{ selectedLanguageLabel }}</strong> deck to <strong>{{ deckForm.email }}</strong>.
              You can download it right now using the link below.
            </p>
            <a :href="deckPdfUrl" target="_blank" rel="noopener" class="btn btn-gold" style="font-size:0.8rem;padding:0.75rem 1.4rem;">Download the PDF ({{ selectedLanguageLabel }}) →</a>
            <a :href="tailoredMailto" class="btn btn-ghost" style="font-size:0.78rem;padding:0.65rem 1.25rem;">Request tailored delivery →</a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

// ── Hero visual ──────────────────────────────────────────────────────
// Title-slide image rendered from page 1 of the deck PDF.
const titleSlideUrl = `${import.meta.env.BASE_URL}assets/board_briefing_title_slide.png`

// Matches the four sections of the PUBLIC board briefing deck.
const slideOutline = [
  { n: '01', title: 'The Quantum Threat' },
  { n: '02', title: 'Post-Quantum Cryptography' },
  { n: '03', title: 'Cryptographic Migration' },
  { n: '04', title: 'Necessities' },
]

// ── Deck contents ────────────────────────────────────────────────────
// Mirrors the four sections of the PUBLIC board briefing PDF.
const deckContents = [
  { title: 'Section 01 · The quantum threat', body: 'Why the quantum computer breaks the cryptography we rely on today. From a plain-language overview of cryptography (confidentiality, integrity, authentication, non-repudiation) to symmetric vs asymmetric, one-way functions, Shor\'s algorithm, and the concept of Q-day — the moment a cryptographically relevant quantum computer arrives.' },
  { title: 'Section 02 · Post-quantum cryptography', body: 'How PQC replaces what\'s broken. The mathematical families that survive quantum attack (lattice, hash, code, multivariate, isogeny) and the NIST-standardised algorithms now available — ML-KEM, ML-DSA, SLH-DSA — for key encapsulation and digital signatures.' },
  { title: 'Section 03 · Cryptographic migration', body: 'The numbers that frame the timeline: data is already at risk through harvest-now-decrypt-later, migrations take 5–10+ years, and PQC deadlines land in 2030 (US) and 2035 (EU). Illustrated with the SHA-1 migration — 13 years from first practical attack to removal deadline — and a MOSCA-based approach to migration planning.' },
  { title: 'Section 04 · What we need from the board', body: 'A concrete ask: a PQC Champion empowered to drive the migration across the organisation, a multi-year budget, engineering and product-owner time, a board decision on which data must remain confidential past ~2035, external support where needed, and agreed metrics to track progress.' },
]

// ── Who it's for ─────────────────────────────────────────────────────
const audiences = [
  {
    role: 'CISOs & security leaders',
    desc: 'Get your board to fund and prioritise the migration to post-quantum cryptography. The deck gives you the narrative to turn a technical topic into a business risk conversation.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    role: 'Board members & executives',
    desc: 'Understand why quantum cryptography matters for your organisation, what the regulatory picture looks like, and what decisions need to be made now.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    role: 'Risk & compliance officers',
    desc: 'Map the quantum threat to your existing risk register and compliance obligations. Supports mandatory reporting under NIS2, DORA, and sector-specific guidance.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  },
  {
    role: 'Internal champions',
    desc: 'Driving the quantum transition from inside? Use the deck to align stakeholders, secure budget, and build a multi-disciplinary team around migration.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  },
]

// ── Modal state ──────────────────────────────────────────────────────
const deckOpen = ref(false)
const deckDone = ref(false)
const deckForm = reactive({ name: '', email: '', org: '', role: '' })

// ── Language selection ──────────────────────────────────────────────
// Set `available: true` for Dutch once the translated PDF is placed at
// public/assets/public_board_briefing_deck_nl.pdf.
const languageOptions = [
  {
    code: 'en',
    label: 'English',
    flag: '🇬🇧',
    file: 'public_board_briefing_deck.pdf',
    available: true,
  },
  {
    code: 'nl',
    label: 'Nederlands',
    flag: '🇳🇱',
    file: 'public_board_briefing_deck_nl.pdf',
    available: false,
  },
]
const selectedLanguage = ref('en')

const selectedLanguageOption = computed(
  () => languageOptions.find(o => o.code === selectedLanguage.value) || languageOptions[0]
)
const selectedLanguageLabel = computed(() => selectedLanguageOption.value.label)

// PDF served from public/assets — Vite's base is './', so a relative
// path resolves correctly from any route.
const deckPdfUrl = computed(
  () => `${import.meta.env.BASE_URL}assets/${selectedLanguageOption.value.file}`
)

function openDeck()  { deckOpen.value = true }
function closeDeck() { deckOpen.value = false }

function submitDeck() {
  // TODO: wire to actual form backend / email delivery
  deckDone.value = true
  // Open the PDF in a new tab once the email wall is passed.
  window.open(deckPdfUrl.value, '_blank', 'noopener')
}

// ── Mailto ───────────────────────────────────────────────────────────
const tailoredMailto = `mailto:info@irekai.nl?subject=${encodeURIComponent('Request: Tailored Board & CISO Briefing Presentation')}&body=${encodeURIComponent(
  'Hi IREKAI team,\n\nI would like to request a tailored delivery of the Board & CISO Briefing Pack.\n\nOrganisation:\nSector:\nAudience (board, CISO, risk committee, other):\nPreferred format (on-site / virtual):\nPreferred timeframe:\n\nKind regards'
)}`
</script>

<style scoped>
.hero-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem; }
.breadcrumb { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim); text-decoration: none; transition: color 0.15s; }
.breadcrumb:hover { color: var(--text-muted); }
.hero-badges { display: flex; flex-wrap: wrap; gap: 0.5rem; }

.hero-body { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: start; }
@media (min-width: 900px) { .hero-body { grid-template-columns: 1fr 360px; } }

.hero-h1 { font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 500; line-height: 1.15; color: var(--text); margin-bottom: 1.25rem; }
.hero-lead { font-size: 1rem; line-height: 1.75; color: var(--text-muted); max-width: 56ch; margin-bottom: 2rem; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; }

/* Slide preview card */
.slide-preview-card { background: rgba(28,25,23,0.7); border: 1px solid var(--border); border-radius: 14px; padding: 1.5rem; }
.slide-label { font-size: 0.62rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-dim); margin-bottom: 1rem; }

/* Title-slide image — rendered from page 1 of the deck PDF */
.slide-preview-image {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid rgba(212,165,116,0.2);
  margin-bottom: 1rem;
  background: #0f0d0c;
}

.slide-outline { display: flex; flex-direction: column; gap: 0.4rem; }
.outline-item { display: flex; gap: 0.65rem; align-items: baseline; }
.outline-n { font-size: 0.55rem; letter-spacing: 0.12em; color: #d4a574; opacity: 0.6; flex-shrink: 0; width: 1.4rem; }
.outline-title { font-size: 0.72rem; color: var(--text-muted); line-height: 1.4; }

/* Content sections */
.content-section { padding: 4rem 0; border-top: 1px solid var(--border); }
.two-col { display: grid; grid-template-columns: 1fr; gap: 3rem; }
@media (min-width: 768px) { .two-col { grid-template-columns: 1fr 1fr; } }

.deliverable-list { display: flex; flex-direction: column; gap: 1.25rem; }
.deliverable { display: flex; gap: 0.75rem; align-items: flex-start; }
.deliverable-icon { width: 20px; height: 20px; flex-shrink: 0; margin-top: 0.15rem; }
.deliverable-icon svg { width: 100%; height: 100%; }
.deliverable-title { font-size: 0.9rem; font-weight: 500; color: var(--text); margin-bottom: 0.25rem; }
.deliverable-body { font-size: 0.82rem; line-height: 1.6; color: var(--text-muted); }

/* Use cards */
.use-list { display: flex; flex-direction: column; gap: 1rem; }
.use-card {
  padding: 1.25rem; border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.07);
  background: rgba(28,25,23,0.5);
  display: flex; flex-direction: column; gap: 0.6rem;
}
.use-card--free  { border-top: 2px solid rgba(74,222,128,0.4); }
.use-card--paid  { border-top: 2px solid rgba(212,165,116,0.4); }
.use-card-badge { font-size: 0.58rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--text-dim); }
.use-card--free .use-card-badge  { color: #4ade80; }
.use-card--paid .use-card-badge  { color: #d4a574; }
.use-card-title { font-size: 1rem; font-weight: 500; color: var(--text); }
.use-card-body { font-size: 0.82rem; line-height: 1.6; color: var(--text-muted); }
.use-card-note { font-size: 0.62rem; letter-spacing: 0.06em; color: var(--text-dim); }
.use-card-btn { align-self: flex-start; margin-top: 0.25rem; }

/* Audience section */
.audience-section { padding: 4rem 0; border-top: 1px solid var(--border); }
.audience-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
.audience-card {
  padding: 1.25rem; border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.06);
  background: rgba(28,25,23,0.5);
  display: flex; flex-direction: column; gap: 0.65rem;
  transition: border-color 0.2s;
}
.audience-card:hover { border-color: rgba(212,165,116,0.3); }
.audience-icon { width: 28px; height: 28px; color: #d4a574; opacity: 0.75; }
.audience-icon svg { width: 100%; height: 100%; }
.audience-role { font-size: 0.95rem; color: var(--text); }
.audience-desc { font-size: 0.8rem; line-height: 1.65; color: var(--text-muted); }

/* Modal */
.modal-backdrop {
  position: fixed; inset: 0; z-index: 500;
  background: rgba(0,0,0,0.65); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center; padding: 1.5rem;
}
.modal-box {
  background: #181512; border: 1px solid rgba(212,165,116,0.25);
  border-radius: 16px; padding: 2.25rem 2.5rem;
  width: 100%; max-width: 460px; position: relative;
}
.modal-close {
  position: absolute; top: 1.1rem; right: 1.25rem;
  background: none; border: none; color: var(--text-dim);
  font-size: 0.85rem; cursor: pointer; transition: color 0.15s;
}
.modal-close:hover { color: var(--text); }
.modal-label { font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; color: #d4a574; opacity: 0.75; margin-bottom: 0.6rem; }
.modal-heading { font-size: 1.4rem; font-weight: 500; color: var(--text); margin-bottom: 0.6rem; }
.modal-sub { font-size: 0.85rem; line-height: 1.7; color: var(--text-muted); margin-bottom: 0.75rem; }
.modal-licence { font-size: 0.75rem; line-height: 1.65; color: var(--text-dim); border-left: 2px solid rgba(212,165,116,0.25); padding-left: 0.75rem; margin-bottom: 1.5rem; }
.modal-form { display: flex; flex-direction: column; gap: 1rem; }
.modal-field { display: flex; flex-direction: column; gap: 0.4rem; }
.modal-field-label { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.08em; color: var(--text-muted); }
.modal-input {
  background: rgba(255,255,255,0.04); border: 1px solid var(--border);
  border-radius: 7px; padding: 0.6rem 0.85rem;
  font-size: 0.85rem; color: var(--text); outline: none;
  transition: border-color 0.15s;
}
.modal-input:focus { border-color: rgba(212,165,116,0.5); }
.modal-submit { margin-top: 0.5rem; align-self: flex-start; }

.modal-success { display: flex; flex-direction: column; align-items: flex-start; gap: 0.75rem; }
.modal-success-icon { width: 40px; height: 40px; }
.modal-success-icon svg { width: 100%; height: 100%; }

/* Modal transitions */
.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

/* Buttons */
.btn-gold {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-family: var(--font-mono); font-size: 0.8rem;
  padding: 0.75rem 1.6rem; border-radius: 6px;
  border: 1px solid rgba(212,165,116,0.4);
  background: rgba(212,165,116,0.1); color: #d4a574;
  transition: all 0.2s; text-decoration: none; cursor: pointer;
}
.btn-gold:hover {
  background: rgba(212,165,116,0.18); border-color: rgba(212,165,116,0.7);
  box-shadow: 0 0 18px -5px rgba(212,165,116,0.4);
}

/* Language toggle */
.lang-toggle {
  display: flex;
  gap: 0.5rem;
}
.lang-toggle-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.55rem 0.75rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  border-radius: 7px;
  color: var(--text-muted);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.15s;
  position: relative;
}
.lang-toggle-btn:hover:not(.is-disabled) {
  border-color: rgba(212,165,116,0.4);
  color: var(--text);
}
.lang-toggle-btn.is-active {
  border-color: rgba(212,165,116,0.7);
  background: rgba(212,165,116,0.12);
  color: #d4a574;
}
.lang-toggle-btn.is-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
.lang-toggle-flag { font-size: 1rem; line-height: 1; }
.lang-toggle-label { font-weight: 500; }
.lang-toggle-note {
  font-size: 0.55rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-left: 0.25rem;
}
</style>
