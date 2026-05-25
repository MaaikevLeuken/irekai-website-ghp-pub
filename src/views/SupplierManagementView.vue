<template>
  <div>
    <section class="product-hero">
      <div class="container">
        <div class="hero-top">
          <RouterLink to="/" class="breadcrumb">← Back to home</RouterLink>
          <span class="badge" style="background:rgba(251,113,133,0.1);color:#fb7185;border-color:rgba(251,113,133,0.35);">
            Programme
          </span>
        </div>

        <div class="hero-body">
          <div class="hero-text">
            <div class="section-label" style="margin-bottom:1rem;color:#fb7185;opacity:0.85;">
              Quantum Threat Supplier Management Programme
            </div>
            <h1 class="hero-h1 font-display">
              Your direct control ends<br/>
              <em style="color:#fb7185">where your vendors begin.</em>
            </h1>
            <p class="hero-lead">
              Third-party cryptographic risk is an underestimated exposure surface in
              cryptographic transitions. IREKAI's Supplier Management Programme gives you structured
              tools, templates, and processes to extend quantum-readiness across your entire supply chain.
            </p>
            <div class="hero-actions">
              <button @click="openPreview" class="btn rose-btn">
                Preview overview →
              </button>
              <a href="mailto:info@irekai.nl?subject=Request%3A%20Quantum%20Threat%20Supplier%20Management%20Programme" class="btn btn-ghost" style="font-size:0.8rem;padding:0.75rem 1.5rem;">
                Request full programme →
              </a>
            </div>
          </div>

          <!-- Supply chain visual -->
          <div class="supply-card">
            <div class="font-mono" style="font-size:0.62rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-dim);margin-bottom:1.25rem;">
              Supply chain risk tiers
            </div>
            <div class="supply-tiers">
              <div class="supply-tier" v-for="t in supplyTiers" :key="t.label">
                <div class="supply-bar" :style="`width:${t.fill}%;background:${t.color}`"></div>
                <div class="supply-info">
                  <span class="supply-label">{{ t.label }}</span>
                  <span class="supply-pct font-mono" :style="`color:${t.color}`">{{ t.risk }}</span>
                </div>
              </div>
            </div>
            <div class="supply-note">
              Risk exposure across vendor categories before implementation of the programme.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programme phases -->
    <section class="phases-section">
      <div class="container">
        <div class="section-label" style="margin-bottom:1.5rem;">Programme phases</div>
        <div class="phases-grid">
          <div class="phase-card" v-for="p in phases" :key="p.phase">
            <div class="phase-num font-mono">Phase {{ p.phase }}</div>
            <div class="phase-name font-display">{{ p.name }}</div>
            <div class="phase-desc">{{ p.desc }}</div>
            <ul class="phase-items">
              <li v-for="item in p.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- What's included -->
    <section class="included-section">
      <div class="container">
        <div class="two-col">
          <div>
            <div class="section-label" style="margin-bottom:1.25rem;">What's included</div>
            <div class="included-list">
              <div class="included-item" v-for="item in included" :key="item.title">
                <div class="included-icon" v-html="item.icon"></div>
                <div>
                  <div class="included-title">{{ item.title }}</div>
                  <div class="included-body">{{ item.body }}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="section-label" style="margin-bottom:1.25rem;">Key outcomes</div>
            <div class="outcomes">
              <div class="outcome" v-for="o in outcomes" :key="o">
                <div class="outcome-check">✓</div>
                <span>{{ o }}</span>
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

          <!-- Preview card -->
          <div class="cta-card cta-card--preview">
            <div class="badge rose-badge" style="margin-bottom:0.85rem;">Free · Instant access</div>
            <h3 class="font-display cta-card-title">Programme overview</h3>
            <p class="cta-card-body">
              A high-level overview of the Quantum Threat Supplier Management Programme —
              including the assessment framework, programme phases, and sample deliverables.
              Free, immediately after you share your details.
            </p>
            <button @click="openPreview" class="btn rose-btn" style="margin-top:auto;">
              Get preview document →
            </button>
          </div>

          <!-- Full programme card -->
          <div class="cta-card cta-card--full">
            <div class="badge" style="background:rgba(251,113,133,0.06);color:#fb7185;border-color:rgba(251,113,133,0.2);margin-bottom:0.85rem;">Full engagement</div>
            <h3 class="font-display cta-card-title">Full programme</h3>
            <p class="cta-card-body">
              Ready to run the programme across your supplier base? Get in touch and we'll
              scope the engagement — discovery, assessment, contracting, and ongoing monitoring
              — to your organisation's size and risk profile.
            </p>
            <a
              href="mailto:info@irekai.nl?subject=Request%3A%20Quantum%20Threat%20Supplier%20Management%20Programme&body=Hi%20IREKAI%2C%0A%0AI%27d%20like%20to%20discuss%20the%20full%20Quantum%20Threat%20Supplier%20Management%20Programme.%0A%0AOrganisation%3A%20%0AContact%20name%3A%20%0ANumber%20of%20suppliers%20in%20scope%20(approx.)%3A%20%0A%0ALooking%20forward%20to%20hearing%20from%20you."
              class="btn btn-ghost"
              style="font-size:0.8rem;padding:0.75rem 1.5rem;margin-top:auto;"
            >
              Request full programme →
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- Preview access modal -->
    <Transition name="modal">
      <div v-if="previewOpen" class="modal-backdrop" @click.self="closePreview">
        <div class="modal-card">

          <template v-if="!previewDone">
            <button class="modal-close" @click="closePreview" aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div class="modal-label font-mono">Free access</div>
            <h3 class="modal-heading font-display">Get the programme overview</h3>
            <p class="modal-sub">Fill in your details and the preview document is yours immediately.</p>

            <form class="access-form" @submit.prevent="submitPreview">
              <div class="form-row">
                <div class="form-field">
                  <label class="form-label">Name</label>
                  <input v-model="previewForm.name" type="text" class="form-input" placeholder="Jane Smith" required />
                </div>
                <div class="form-field">
                  <label class="form-label">Job title</label>
                  <input v-model="previewForm.title" type="text" class="form-input" placeholder="CISO" required />
                </div>
              </div>
              <div class="form-field">
                <label class="form-label">Company</label>
                <input v-model="previewForm.company" type="text" class="form-input" placeholder="Acme Corp" required />
              </div>
              <div class="form-field">
                <label class="form-label">Work email</label>
                <input v-model="previewForm.email" type="email" class="form-input" placeholder="jane@acme.com" required />
              </div>
              <button type="submit" class="btn form-submit-btn">
                Get instant access →
              </button>
            </form>
          </template>

          <template v-else>
            <div class="modal-success">
              <div class="success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fb7185" stroke-width="1.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 class="modal-heading font-display">You're in, {{ previewForm.name.split(' ')[0] }}.</h3>
              <p class="modal-sub">Your preview of the Quantum Threat Supplier Management Programme is ready.</p>
              <a :href="previewDocUrl" download class="btn form-submit-btn" style="text-align:center;justify-content:center;">
                ↓ Download preview
              </a>
              <p class="modal-note">
                A copy will also be sent to {{ previewForm.email }} within 24 hours.
              </p>
              <button class="modal-close-text font-mono" @click="closePreview">Close</button>
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

// ── Preview modal ─────────────────────────────────────────────────────────────
const previewDocUrl = '/assets/irekai-supplier-programme-preview.pdf'
const previewOpen = ref(false)
const previewDone = ref(false)
const previewForm = reactive({ name: '', title: '', company: '', email: '' })

function openPreview()  { previewOpen.value = true; previewDone.value = false }
function closePreview() { previewOpen.value = false }
function submitPreview() {
  navigator.clipboard.writeText('info@irekai.nl').then(() => showCopiedToast('info@irekai.nl'))
  previewDone.value = true
}

const supplyTiers = [
  { label: 'Tier 1 — Critical software vendors', fill: 92, color: '#f87171', risk: 'Critical' },
  { label: 'Tier 2 — Hardware & HSM suppliers',  fill: 75, color: '#fb923c', risk: 'High' },
  { label: 'Tier 3 — SaaS & cloud services',     fill: 68, color: '#fbbf24', risk: 'High' },
  { label: 'Tier 4 — OT / IoT suppliers',        fill: 55, color: '#fbbf24', risk: 'Medium' },
  { label: 'Tier 5 — Long-tail vendors',          fill: 40, color: '#a3e635', risk: 'Medium' },
]

const phases = [
  {
    phase: 1, name: 'Discovery & Scoping',
    desc: 'Identify and classify all third-party cryptographic dependencies.',
    items: ['Critical vendor catalogue', 'SBOM/CBOM intake', 'Dependency risk tier assignment']
  },
  {
    phase: 2, name: 'Assessment',
    desc: 'Structured questionnaires and workshops to evaluate vendor posture.',
    items: ['Vendor crypto questionnaire', 'Workshop facilitation', 'PQC roadmap documentation']
  },
  {
    phase: 3, name: 'Requirements & Contracting',
    desc: 'Embed quantum-readiness into procurement and existing agreements.',
    items: ['Contract language templates', 'PQC procurement clauses', 'Remediation timelines']
  },
  {
    phase: 4, name: 'Monitoring & Assurance',
    desc: 'Ongoing visibility into supplier quantum posture.',
    items: ['Supplier migration tracker', 'Continuous CBOM monitoring', 'Escalation process']
  },
]

const included = [
  {
    title: 'Vendor assessment questionnaire',
    body: 'A structured, weighted questionnaire to evaluate any vendor\'s current cryptographic posture and PQC readiness.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`
  },
  {
    title: 'Risk scoring methodology',
    body: 'Quantitative risk scoring framework that integrates vendor scores into your overall cryptographic risk register.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`
  },
  {
    title: 'Contract clause library',
    body: 'Ready-to-use contract language covering PQC migration milestones, SBOM/CBOM disclosure, and audit rights.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    title: 'Migration tracker template',
    body: 'A structured tracking sheet for monitoring vendor PQC migration commitments and progress over time.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
  },
]

const outcomes = [
  'Visibility into third-party cryptographic exposure',
  'PQC requirements embedded in all new and renewed contracts',
  'Prioritised vendor risk remediation roadmap',
  'Continuous SBOM/CBOM-driven monitoring in place',
  'Audit-ready evidence of supply chain governance',
  'Alternatives for non-compliant vendors',
]
</script>

<style scoped>
.hero-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem; }
.breadcrumb { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim); text-decoration: none; transition: color 0.15s; }
.breadcrumb:hover { color: var(--text-muted); }

.hero-body { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: flex-start; }
@media (min-width: 900px) { .hero-body { grid-template-columns: 1fr 380px; } }

.hero-h1 { font-size: clamp(1.9rem, 5vw, 3rem); font-weight: 500; line-height: 1.15; color: var(--text); margin-bottom: 1.25rem; }
.hero-lead { font-size: 1rem; line-height: 1.75; color: var(--text-muted); max-width: 56ch; margin-bottom: 2rem; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; }

/* Supply card */
.supply-card {
  background: rgba(28,25,23,0.7);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 1.5rem;
}
.supply-tiers { display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 1rem; }
.supply-tier { display: flex; flex-direction: column; gap: 0.3rem; }
.supply-bar { height: 3px; border-radius: 2px; transition: width 1s ease; }
.supply-info { display: flex; justify-content: space-between; align-items: center; }
.supply-label { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted); }
.supply-pct { font-size: 0.65rem; font-weight: 600; }
.supply-note { font-family: var(--font-mono); font-size: 0.6rem; color: var(--text-dim); line-height: 1.5; border-top: 1px solid var(--border); padding-top: 0.75rem; }

/* Phases */
.phases-section { padding: 4rem 0; border-top: 1px solid var(--border); }
.phases-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
.phase-card {
  padding: 1.4rem;
  border-radius: 12px;
  border: 1px solid rgba(251,113,133,0.2);
  background: rgba(251,113,133,0.04);
}
.phase-num { font-size: 0.6rem; letter-spacing: 0.2em; color: #fb7185; margin-bottom: 0.5rem; }
.phase-name { font-size: 0.95rem; color: var(--text); margin-bottom: 0.5rem; }
.phase-desc { font-size: 0.78rem; line-height: 1.6; color: var(--text-muted); margin-bottom: 0.75rem; }
.phase-items { list-style: none; display: flex; flex-direction: column; gap: 0.35rem; padding: 0; }
.phase-items li {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--text-dim);
  padding-left: 1rem;
  position: relative;
}
.phase-items li::before { content: '·'; position: absolute; left: 0; color: #fb7185; }

/* Included */
.included-section { padding: 4rem 0; border-top: 1px solid var(--border); }
.two-col { display: grid; grid-template-columns: 1fr; gap: 3rem; }
@media (min-width: 768px) { .two-col { grid-template-columns: 1fr 1fr; } }

.included-list { display: flex; flex-direction: column; gap: 1.5rem; }
.included-item { display: flex; gap: 0.85rem; align-items: flex-start; }
.included-icon { width: 20px; height: 20px; color: #fb7185; flex-shrink: 0; margin-top: 0.1rem; }
.included-icon svg { width: 100%; height: 100%; }
.included-title { font-size: 0.9rem; font-weight: 500; color: var(--text); margin-bottom: 0.25rem; }
.included-body { font-size: 0.82rem; line-height: 1.6; color: var(--text-muted); }

.outcomes { display: flex; flex-direction: column; gap: 0.8rem; }
.outcome {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.875rem;
  line-height: 1.6;
  color: var(--text-muted);
}
.outcome-check { color: #fb7185; font-size: 0.85rem; flex-shrink: 0; margin-top: 0.1rem; }

/* CTA split */
.cta-split-section { padding: 3rem 0 5rem; border-top: 1px solid var(--border); }
.cta-split-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}
@media (min-width: 768px) { .cta-split-grid { grid-template-columns: 1fr 1fr; } }

.cta-card {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: 2rem;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(28,25,23,0.5);
}
.cta-card--preview {
  border-color: rgba(251,113,133,0.25);
  background: rgba(251,113,133,0.04);
}
.cta-card-title { font-size: 1.2rem; font-weight: 500; color: var(--text); }
.cta-card-body { font-size: 0.875rem; line-height: 1.7; color: var(--text-muted); flex: 1; }

.rose-btn {
  background: rgba(251,113,133,0.1);
  border: 1px solid rgba(251,113,133,0.4);
  color: #fb7185;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 0.75rem 1.6rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}
.rose-btn:hover {
  background: rgba(251,113,133,0.18);
  border-color: rgba(251,113,133,0.7);
  box-shadow: 0 0 18px -5px rgba(251,113,133,0.35);
}
.rose-badge { background: rgba(251,113,133,0.1); color: #fb7185; border-color: rgba(251,113,133,0.3); }

/* ── Preview modal ─────────────────────────────────────────────── */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(12,10,9,0.82);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 1.5rem;
}
.modal-card {
  background: #1a1714;
  border: 1px solid rgba(251,113,133,0.25);
  border-radius: 16px;
  padding: 2.25rem 2.5rem;
  width: 100%;
  max-width: 480px;
  position: relative;
}
.modal-close {
  position: absolute; top: 1.1rem; right: 1.1rem;
  width: 28px; height: 28px;
  background: transparent; border: none; cursor: pointer;
  color: var(--text-dim); transition: color 0.15s;
  padding: 0; display: flex; align-items: center; justify-content: center;
}
.modal-close:hover { color: var(--text); }
.modal-close svg { width: 16px; height: 16px; }
.modal-label { font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase; color: #fb7185; opacity: 0.8; margin-bottom: 0.75rem; }
.modal-heading { font-size: 1.35rem; font-weight: 500; color: var(--text); margin-bottom: 0.5rem; }
.modal-sub { font-size: 0.85rem; line-height: 1.65; color: var(--text-muted); margin-bottom: 1.75rem; }

.access-form { display: flex; flex-direction: column; gap: 1rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 480px) { .form-row { grid-template-columns: 1fr; } }
.form-field { display: flex; flex-direction: column; gap: 0.4rem; }
.form-label { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-dim); }
.form-input {
  background: rgba(255,255,255,0.04); border: 1px solid var(--border);
  border-radius: 7px; padding: 0.6rem 0.85rem;
  font-family: var(--font-mono); font-size: 0.8rem; color: var(--text);
  outline: none; transition: border-color 0.15s; width: 100%; box-sizing: border-box;
}
.form-input::placeholder { color: var(--text-dim); }
.form-input:focus { border-color: rgba(251,113,133,0.5); }
.form-submit-btn {
  background: rgba(251,113,133,0.12); border: 1px solid rgba(251,113,133,0.45); color: #fb7185;
  font-family: var(--font-mono); font-size: 0.8rem; padding: 0.8rem 1.5rem;
  border-radius: 7px; cursor: pointer; transition: all 0.2s;
  display: inline-flex; align-items: center; gap: 0.5rem;
  text-decoration: none; margin-top: 0.5rem;
}
.form-submit-btn:hover { background: rgba(251,113,133,0.2); border-color: rgba(251,113,133,0.7); box-shadow: 0 0 20px -6px rgba(251,113,133,0.4); }

.modal-success { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.75rem; padding: 0.5rem 0; }
.success-icon { width: 48px; height: 48px; border-radius: 50%; background: rgba(251,113,133,0.08); border: 1px solid rgba(251,113,133,0.25); display: flex; align-items: center; justify-content: center; margin-bottom: 0.5rem; }
.success-icon svg { width: 24px; height: 24px; }
.modal-note { font-size: 0.75rem; color: var(--text-dim); line-height: 1.6; max-width: 34ch; }
.modal-close-text { background: none; border: none; cursor: pointer; font-size: 0.65rem; letter-spacing: 0.1em; color: var(--text-dim); padding: 0; transition: color 0.15s; margin-top: 0.5rem; }
.modal-close-text:hover { color: var(--text-muted); }

.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-active .modal-card, .modal-leave-active .modal-card { transition: transform 0.25s cubic-bezier(.2,0,.2,1), opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .modal-card, .modal-leave-to .modal-card { transform: translateY(16px) scale(0.97); opacity: 0; }
</style>
