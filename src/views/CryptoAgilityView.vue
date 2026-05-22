<template>
  <div>
    <section class="product-hero">
      <div class="container">
        <div class="hero-top">
          <RouterLink to="/" class="breadcrumb">← Back to home</RouterLink>
          <span class="badge" style="background:rgba(56,189,248,0.1);color:#38bdf8;border-color:rgba(56,189,248,0.35);">
            Framework
          </span>
        </div>

        <div class="hero-body">
          <div class="hero-text">
            <div class="section-label" style="margin-bottom:1rem;color:#38bdf8;opacity:0.85;">
              05 · Crypto Agility Best Practices
            </div>
            <h1 class="hero-h1 font-display">
              The foundations of a<br/>
              <em style="color:#38bdf8">cryptographically agile organisation.</em>
            </h1>
            <p class="hero-lead">
              Crypto agility is the ability to swap cryptographic algorithms, key sizes, and
              protocols quickly — without architectural surgery. It is not a feature you add
              at the end of a migration; it is the property that makes any future migration
              manageable. These are the practices IREKAI assesses and recommends.
            </p>
            <div class="hero-actions">
              <RouterLink to="/products/code-scanning" class="btn btn-sky">
                Assess your codebase with CryptoScope →
              </RouterLink>
              <a href="mailto:info@irekai.nl?subject=Crypto Agility Best Practices" class="btn btn-ghost" style="font-size:0.8rem;padding:0.75rem 1.5rem;">
                Talk to an expert
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
            <div class="section-label" style="margin-bottom:1.25rem;">How IREKAI uses this framework</div>
            <p class="intro-body">
              These practices form the assessment criteria behind
              <RouterLink to="/products/code-scanning" class="intro-link">CryptoScope</RouterLink>.
              When CryptoScope analyses a scoped code environment, it checks each cryptographic
              finding against these dimensions and scores the result. The output tells you not
              just what algorithms are in use, but how easily they can be replaced —
              and what needs to change first.
            </p>
            <p class="intro-body">
              The framework is also used in IREKAI's
              <RouterLink to="/products/quantum-readiness" class="intro-link">Quick Quantum Readiness Assessment</RouterLink>
              to evaluate governance, process, and architectural readiness alongside the
              technical findings.
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

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <div>
            <h3 class="font-display" style="font-size:1.4rem;margin-bottom:0.6rem;color:var(--text);">
              Know where you stand against these practices
            </h3>
            <p class="prose" style="max-width:52ch;">
              CryptoScope assesses your scoped code environments against each of these
              dimensions and produces an evidence-backed agility score — tied to your
              business cases, not a generic codebase sweep.
            </p>
          </div>
          <div class="cta-actions">
            <RouterLink to="/products/code-scanning" class="btn btn-sky" style="font-size:0.8rem;padding:0.75rem 1.6rem;">
              Explore CryptoScope →
            </RouterLink>
            <RouterLink to="/products/quantum-readiness" class="btn btn-ghost" style="font-size:0.8rem;padding:0.75rem 1.5rem;">
              Start with an assessment
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
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

/* CTA */
.cta-section { padding: 4rem 0 5rem; border-top: 1px solid var(--border); }
.cta-card {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
}
@media (min-width: 768px) { .cta-card { flex-direction: row; align-items: center; justify-content: space-between; } }
.cta-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; flex-shrink: 0; }

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
