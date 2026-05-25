<template>
  <div>
    <section class="product-hero">
      <div class="container">
        <div class="hero-top">
          <RouterLink to="/" class="breadcrumb">← Back to home</RouterLink>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <span class="badge" style="background:rgba(56,189,248,0.1);color:#38bdf8;border-color:rgba(56,189,248,0.35);">Document · Free</span>
            <span class="badge" style="background:rgba(167,139,250,0.08);color:#a78bfa;border-color:rgba(167,139,250,0.3);">CI/CD Tool · Paid</span>
          </div>
        </div>

        <div class="hero-body">
          <div class="hero-text">
            <div class="section-label" style="margin-bottom:1rem;color:#38bdf8;opacity:0.85;">
              Crypto Agility Best Practices
            </div>
            <h1 class="hero-h1 font-display">
              The foundations of a<br/>
              <em style="color:#38bdf8">cryptographically agile organisation.</em>
            </h1>
            <p class="hero-lead">
              Crypto agility is the ability to swap cryptographic algorithms, key sizes, and
              protocols quickly — without architectural surgery. IREKAI offers two things here:
              a free best practices document covering the eight foundations of crypto agility,
              and a paid CI/CD integration that flags agility violations automatically on every
              git push — before they reach production.
            </p>
            <div class="hero-actions">
              <button @click="openDoc" class="btn btn-sky">
                Get best practices doc →
              </button>
              <a href="mailto:info@irekai.nl?subject=Request%3A%20Crypto%20Agility%20CI%2FCD%20Monitor&body=Hi%20IREKAI%2C%0A%0AI%27d%20like%20to%20learn%20more%20about%20the%20Crypto%20Agility%20CI%2FCD%20Monitor.%0A%0AOrganisation%3A%20%0AStack%20%2F%20CI%20platform%20(e.g.%20GitHub%20Actions%2C%20GitLab%20CI)%3A%20%0AContext%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you." class="btn btn-ghost" style="font-size:0.8rem;padding:0.75rem 1.5rem;">
                Request CI/CD tool →
              </a>
            </div>
          </div>

          <div class="agility-visual">
            <div class="agility-score-card">
              <div class="score-label font-mono">Crypto Agility Score</div>
              <div class="score-dimensions">
                <div class="score-dim" v-for="d in scoreDims" :key="d.name">
                  <span class="score-dim-name">{{ d.name }}</span>
                  <div class="score-dim-track">
                    <div class="score-dim-fill" :style="`width:${d.pct}%;background:${d.color}`"></div>
                  </div>
                  <span class="score-dim-val font-mono" :style="`color:${d.color}`">{{ d.val }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What is crypto agility -->
    <section class="intro-section">
      <div class="container">
        <div class="intro-grid">
          <div>
            <div class="section-label" style="margin-bottom:1.25rem;">Why agility, not just compliance</div>
            <p class="intro-body">
              Most cryptographic migrations to date have been painful, expensive, and slow —
              not because the algorithms were hard to understand, but because systems were
              built to depend on specific ones. Hardcoded algorithm names, monolithic crypto
              libraries, and keys with no rotation mechanism all turn a configuration change
              into a multi-year engineering project.
            </p>
            <p class="intro-body">
              The post-quantum transition makes this urgent. Organisations that have invested
              in crypto agility will be able to adopt NIST-standardised PQC algorithms
              (ML-KEM, ML-DSA, SLH-DSA) incrementally, system by system, without halting
              normal operations. Organisations that have not will face the same painful,
              costly replacement exercise that every previous algorithm transition has required.
            </p>
          </div>
          <div>
            <div class="section-label" style="margin-bottom:1.25rem;">Two ways to act on this</div>
            <p class="intro-body">
              The <strong style="color:var(--text);font-weight:500;">best practices document</strong> translates these eight dimensions into
              actionable guidance your teams can apply today — covering architecture patterns,
              configuration templates, and migration sequencing. Free, immediately after you
              share your details.
            </p>
            <p class="intro-body">
              The <strong style="color:var(--text);font-weight:500;">CI/CD Agility Monitor</strong> enforces these practices automatically.
              It integrates with your pipeline and runs on every push — flagging hardcoded
              algorithm strings, missing abstraction layers, deprecated primitives, and
              policy violations before they reach production. Paid, priced per repository.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Best practices -->
    <section class="practices-section">
      <div class="container">
        <div class="section-label" style="margin-bottom:1.75rem;">The eight practices</div>
        <div class="practices-grid">
          <div class="practice-card" v-for="p in practices" :key="p.title">
            <div class="practice-header">
              <div class="practice-num font-mono">{{ p.num }}</div>
              <div class="practice-icon" v-html="p.icon"></div>
            </div>
            <div class="practice-title font-display">{{ p.title }}</div>
            <div class="practice-body">{{ p.body }}</div>
            <div class="practice-signals">
              <div class="signal-label font-mono">Signs of good agility</div>
              <div class="signal-list">
                <div class="signal" v-for="s in p.signals" :key="s">
                  <svg viewBox="0 0 10 10" fill="none" stroke="#38bdf8" stroke-width="1.5" style="width:9px;height:9px;flex-shrink:0;margin-top:2px">
                    <polyline points="1.5,5 4,7.5 8.5,2"/>
                  </svg>
                  <span>{{ s }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA split -->
    <section class="cta-split-section">
      <div class="container">
        <div class="cta-split-grid">

          <div class="cta-card cta-card--doc">
            <div class="badge" style="background:rgba(56,189,248,0.08);color:#38bdf8;border-color:rgba(56,189,248,0.3);margin-bottom:0.85rem;">Free · Instant access</div>
            <h3 class="font-display cta-card-title">Best Practices Document</h3>
            <p class="cta-card-body">
              A structured guide to all eight crypto agility dimensions — with architecture
              patterns, configuration examples, and a self-assessment checklist your team
              can use immediately.
            </p>
            <button @click="openDoc" class="btn btn-sky" style="margin-top:auto;font-size:0.8rem;padding:0.75rem 1.6rem;">
              Get the document →
            </button>
          </div>

          <div class="cta-card cta-card--tool">
            <div class="badge" style="background:rgba(167,139,250,0.08);color:#a78bfa;border-color:rgba(167,139,250,0.3);margin-bottom:0.85rem;">Paid · Per repository</div>
            <h3 class="font-display cta-card-title">CI/CD Agility Monitor</h3>
            <p class="cta-card-body">
              Automated crypto agility enforcement in your pipeline. Runs on every push —
              flags hardcoded algorithms, missing abstraction layers, deprecated primitives,
              and policy violations as inline warnings before they hit production.
            </p>
            <a href="mailto:info@irekai.nl?subject=Request%3A%20Crypto%20Agility%20CI%2FCD%20Monitor&body=Hi%20IREKAI%2C%0A%0AI%27d%20like%20to%20learn%20more%20about%20the%20Crypto%20Agility%20CI%2FCD%20Monitor.%0A%0AOrganisation%3A%20%0AStack%20%2F%20CI%20platform%20(e.g.%20GitHub%20Actions%2C%20GitLab%20CI)%3A%20%0AContext%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you."
               class="btn btn-ghost" style="font-size:0.8rem;padding:0.75rem 1.5rem;margin-top:auto;">
              Request access →
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- Document access modal -->
    <Transition name="modal">
      <div v-if="docOpen" class="modal-backdrop" @click.self="closeDoc">
        <div class="modal-card">

          <template v-if="!docDone">
            <button class="modal-close" @click="closeDoc" aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div class="modal-label font-mono">Free · Instant access</div>
            <h3 class="modal-heading font-display">Get the Crypto Agility Best Practices</h3>
            <p class="modal-sub">Fill in your details and the document is yours immediately.</p>

            <form class="access-form" @submit.prevent="submitDoc">
              <div class="form-row">
                <div class="form-field">
                  <label class="form-label">Name</label>
                  <input v-model="docForm.name" type="text" class="form-input" placeholder="Jane Smith" required />
                </div>
                <div class="form-field">
                  <label class="form-label">Job title</label>
                  <input v-model="docForm.title" type="text" class="form-input" placeholder="Security architect" required />
                </div>
              </div>
              <div class="form-field">
                <label class="form-label">Company</label>
                <input v-model="docForm.company" type="text" class="form-input" placeholder="Acme Corp" required />
              </div>
              <div class="form-field">
                <label class="form-label">Work email</label>
                <input v-model="docForm.email" type="email" class="form-input" placeholder="jane@acme.com" required />
              </div>
              <button type="submit" class="btn form-submit-btn">Get instant access →</button>
            </form>
          </template>

          <template v-else>
            <div class="modal-success">
              <div class="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 class="modal-heading font-display">You're in, {{ docForm.name.split(' ')[0] }}.</h3>
              <p class="modal-sub">Your copy of the IREKAI Crypto Agility Best Practices is ready.</p>
              <a :href="docUrl" download class="btn form-submit-btn" style="text-align:center;justify-content:center;">
                ↓ Download document
              </a>
              <p class="modal-note">A copy will also be sent to {{ docForm.email }} within 24 hours.</p>
              <button class="modal-close-text font-mono" @click="closeDoc">Close</button>
            </div>
          </template>

        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { showCopiedToast } from '@/composables/useMailtoToast.js'

const docUrl   = '/assets/irekai-crypto-agility-best-practices.pdf'
const docOpen  = ref(false)
const docDone  = ref(false)
const docForm  = reactive({ name: '', title: '', company: '', email: '' })

function openDoc()  { docOpen.value = true;  docDone.value = false }
function closeDoc() { docOpen.value = false }
function submitDoc() {
  navigator.clipboard.writeText('info@irekai.nl').then(() => showCopiedToast('info@irekai.nl'))
  docDone.value = true
}

const scoreDims = [
  { name: 'Abstraction',    pct: 80, val: '8.0', color: '#38bdf8' },
  { name: 'Configurability',pct: 55, val: '5.5', color: '#38bdf8' },
  { name: 'Key rotation',   pct: 30, val: '3.0', color: '#f87171' },
  { name: 'Negotiation',    pct: 45, val: '4.5', color: '#fbbf24' },
  { name: 'PQC readiness',  pct: 10, val: '1.0', color: '#f87171' },
]

const practices = [
  {
    num: '01',
    title: 'Algorithm abstraction',
    body: 'Cryptographic algorithm identifiers must never appear directly in business logic. All cryptographic operations should go through an abstraction layer — a provider interface or crypto factory — so the underlying algorithm can be replaced in one place without touching application code.',
    signals: ['Crypto operations behind an interface', 'No algorithm strings in business logic', 'Single point of algorithm selection'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`
  },
  {
    num: '02',
    title: 'Configuration-driven selection',
    body: 'Algorithm choice, key size, and protocol version should be externalised as configuration values. A cryptographic upgrade should require a configuration change and a key rotation — not a code release. This is the difference between a one-day migration and a one-year project.',
    signals: ['Algorithm in config, not code', 'Key size parameterised', 'No recompile needed to upgrade'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>`
  },
  {
    num: '03',
    title: 'Key lifecycle management',
    body: 'Keys must be rotatable without service disruption. Systems that cannot rotate keys are systems that cannot respond to a compromise or a migration deadline. Key expiry, revocation, and re-keying paths must be designed in, not retrofitted.',
    signals: ['Key rotation without downtime', 'Key expiry enforced', 'Re-keying process documented and tested'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`
  },
  {
    num: '04',
    title: 'Algorithm negotiation & fallback',
    body: 'Where two parties communicate, the protocol should support algorithm negotiation so that upgrades can be rolled out on one side without breaking the other. Hybrid modes — running classical and post-quantum algorithms in parallel — are the recommended migration path for TLS and key exchange.',
    signals: ['TLS version and cipher suite negotiable', 'Hybrid PQC mode supported', 'Graceful fallback to previous algorithm version'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>`
  },
  {
    num: '05',
    title: 'Cryptographic inventory (CBOM)',
    body: 'You cannot migrate what you cannot find. A Cryptographic Bill of Materials — scoped to your priority business cases — is the prerequisite for any agility programme. It identifies every cryptographic asset, its location, the library providing it, and the business context it belongs to.',
    signals: ['CBOM exists and is kept current', 'Scoped to business-critical systems', 'Library versions and configurations captured'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`
  },
  {
    num: '06',
    title: 'PQC migration readiness',
    body: 'The abstraction and configuration layers above must actually support post-quantum algorithms. This means using libraries that implement ML-KEM, ML-DSA, and SLH-DSA, and verifying that your abstraction layer can accommodate larger key and signature sizes without architectural changes.',
    signals: ['PQC-capable library in use or evaluated', 'Abstraction layer tested with PQC algorithms', 'Key/signature size constraints reviewed'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    num: '07',
    title: 'Continuous cryptographic monitoring',
    body: 'Cryptographic posture degrades over time as dependencies are updated, new code is written, and standards evolve. Cryptographic scanning should run on every pull request — not just during periodic audits — so that regressions are caught before they reach production.',
    signals: ['Crypto scanner in CI/CD pipeline', 'PR-level detection of deprecated usage', 'Policy-as-code for algorithm requirements'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`
  },
  {
    num: '08',
    title: 'Supplier & dependency awareness',
    body: 'Crypto agility extends beyond your own code. Third-party libraries, SaaS integrations, and hardware suppliers all contribute to your cryptographic posture. Supplier contracts should include cryptographic requirements, and third-party CBOM coverage should be part of your vendor assessment process.',
    signals: ['Crypto requirements in supplier contracts', 'Third-party library crypto usage mapped', 'Supplier PQC roadmaps reviewed'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },
]
</script>

<style scoped>
.hero-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem; }
.breadcrumb { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim); text-decoration: none; transition: color 0.15s; }
.breadcrumb:hover { color: var(--text-muted); }

.hero-body { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
@media (min-width: 900px) { .hero-body { grid-template-columns: 1fr 320px; } }

.hero-h1 { font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 500; line-height: 1.15; color: var(--text); margin-bottom: 1.25rem; }
.hero-lead { font-size: 1rem; line-height: 1.75; color: var(--text-muted); margin-bottom: 2rem; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; }

/* Agility score visual */
.agility-score-card {
  background: rgba(28,25,23,0.7);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.75rem;
}
.score-label { font-size: 0.62rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-dim); margin-bottom: 1.25rem; }
.score-dimensions { display: flex; flex-direction: column; gap: 0.85rem; }
.score-dim { display: flex; align-items: center; gap: 0.75rem; }
.score-dim-name { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); width: 110px; flex-shrink: 0; }
.score-dim-track { flex: 1; height: 4px; background: rgba(255,255,255,0.06); border-radius: 2px; overflow: hidden; }
.score-dim-fill { height: 100%; border-radius: 2px; }
.score-dim-val { font-size: 0.65rem; font-weight: 600; width: 2.5rem; text-align: right; flex-shrink: 0; }

/* Intro */
.intro-section { padding: 4rem 0; border-top: 1px solid var(--border); }
.intro-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
@media (min-width: 768px) { .intro-grid { grid-template-columns: 1fr 1fr; } }
.intro-body { font-size: 0.9rem; line-height: 1.75; color: var(--text-muted); margin-bottom: 1rem; }
.intro-link { color: #38bdf8; text-decoration: none; border-bottom: 1px solid rgba(56,189,248,0.35); transition: border-color 0.15s; }
.intro-link:hover { border-color: #38bdf8; }

/* Practices */
.practices-section { padding: 4rem 0; border-top: 1px solid var(--border); }
.practices-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
@media (min-width: 640px)  { .practices-grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1024px) { .practices-grid { grid-template-columns: 1fr 1fr 1fr 1fr; } }

.practice-card {
  padding: 1.4rem;
  border-radius: 12px;
  border: 1px solid rgba(56,189,248,0.15);
  background: rgba(56,189,248,0.03);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: border-color 0.2s;
}
.practice-card:hover { border-color: rgba(56,189,248,0.35); }

.practice-header { display: flex; align-items: center; justify-content: space-between; }
.practice-num { font-size: 0.6rem; letter-spacing: 0.15em; color: #38bdf8; opacity: 0.7; }
.practice-icon { width: 20px; height: 20px; color: #38bdf8; opacity: 0.7; }
.practice-icon svg { width: 100%; height: 100%; }
.practice-title { font-size: 0.95rem; font-weight: 500; color: var(--text); line-height: 1.3; }
.practice-body { font-size: 0.78rem; line-height: 1.65; color: var(--text-muted); flex: 1; }

.practice-signals { border-top: 1px solid rgba(56,189,248,0.1); padding-top: 0.75rem; margin-top: 0.25rem; }
.signal-label { font-size: 0.58rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-dim); margin-bottom: 0.5rem; }
.signal-list { display: flex; flex-direction: column; gap: 0.35rem; }
.signal { display: flex; align-items: flex-start; gap: 0.4rem; font-family: var(--font-mono); font-size: 0.62rem; color: var(--text-muted); line-height: 1.5; }

/* CTA split */
.cta-split-section { padding: 3rem 0 5rem; border-top: 1px solid var(--border); }
.cta-split-grid { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
@media (min-width: 768px) { .cta-split-grid { grid-template-columns: 1fr 1fr; } }
.cta-card { display: flex; flex-direction: column; gap: 0.85rem; padding: 2rem; border-radius: 14px; border: 1px solid var(--border); background: rgba(28,25,23,0.5); }
.cta-card--doc  { border-color: rgba(56,189,248,0.2);  background: rgba(56,189,248,0.04); }
.cta-card--tool { border-color: rgba(167,139,250,0.2); background: rgba(167,139,250,0.04); }
.cta-card-title { font-size: 1.2rem; font-weight: 500; color: var(--text); }
.cta-card-body  { font-size: 0.875rem; line-height: 1.7; color: var(--text-muted); flex: 1; }

/* Modal */
.modal-backdrop { position: fixed; inset: 0; background: rgba(12,10,9,0.82); backdrop-filter: blur(6px); display: flex; align-items: center; justify-content: center; z-index: 999; padding: 1.5rem; }
.modal-card { background: #1a1714; border: 1px solid rgba(56,189,248,0.25); border-radius: 16px; padding: 2.25rem 2.5rem; width: 100%; max-width: 480px; position: relative; }
.modal-close { position: absolute; top: 1.1rem; right: 1.1rem; width: 28px; height: 28px; background: transparent; border: none; cursor: pointer; color: var(--text-dim); transition: color 0.15s; padding: 0; display: flex; align-items: center; justify-content: center; }
.modal-close:hover { color: var(--text); }
.modal-close svg { width: 16px; height: 16px; }
.modal-label { font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: #38bdf8; opacity: 0.8; margin-bottom: 0.75rem; }
.modal-heading { font-size: 1.35rem; font-weight: 500; color: var(--text); margin-bottom: 0.5rem; }
.modal-sub { font-size: 0.85rem; line-height: 1.65; color: var(--text-muted); margin-bottom: 1.75rem; }
.access-form { display: flex; flex-direction: column; gap: 1rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 480px) { .form-row { grid-template-columns: 1fr; } }
.form-field { display: flex; flex-direction: column; gap: 0.4rem; }
.form-label { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-dim); }
.form-input { background: rgba(255,255,255,0.04); border: 1px solid var(--border); border-radius: 7px; padding: 0.6rem 0.85rem; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text); outline: none; transition: border-color 0.15s; width: 100%; box-sizing: border-box; }
.form-input::placeholder { color: var(--text-dim); }
.form-input:focus { border-color: rgba(56,189,248,0.5); }
.form-submit-btn { background: rgba(56,189,248,0.12); border: 1px solid rgba(56,189,248,0.45); color: #38bdf8; font-family: var(--font-mono); font-size: 0.8rem; padding: 0.8rem 1.5rem; border-radius: 7px; cursor: pointer; transition: all 0.2s; display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; margin-top: 0.5rem; }
.form-submit-btn:hover { background: rgba(56,189,248,0.2); border-color: rgba(56,189,248,0.7); box-shadow: 0 0 20px -6px rgba(56,189,248,0.4); }
.modal-success { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.75rem; padding: 0.5rem 0; }
.success-icon { width: 48px; height: 48px; border-radius: 50%; background: rgba(56,189,248,0.08); border: 1px solid rgba(56,189,248,0.25); display: flex; align-items: center; justify-content: center; margin-bottom: 0.5rem; }
.success-icon svg { width: 24px; height: 24px; }
.modal-note { font-size: 0.75rem; color: var(--text-dim); line-height: 1.6; max-width: 34ch; }
.modal-close-text { background: none; border: none; cursor: pointer; font-size: 0.65rem; letter-spacing: 0.1em; color: var(--text-dim); padding: 0; transition: color 0.15s; margin-top: 0.5rem; }
.modal-close-text:hover { color: var(--text-muted); }
.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-active .modal-card, .modal-leave-active .modal-card { transition: transform 0.25s cubic-bezier(.2,0,.2,1), opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .modal-card, .modal-leave-to .modal-card { transform: translateY(16px) scale(0.97); opacity: 0; }

.btn-sky {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-family: var(--font-mono); font-size: 0.72rem;
  padding: 0.38rem 0.9rem; border-radius: 6px;
  border: 1px solid rgba(56,189,248,0.4);
  background: rgba(56,189,248,0.1); color: #38bdf8;
  transition: all 0.2s; text-decoration: none;
}
.btn-sky:hover {
  background: rgba(56,189,248,0.18); border-color: rgba(56,189,248,0.7);
  box-shadow: 0 0 18px -5px rgba(56,189,248,0.35);
}
</style>
