<template>
  <div>
    <section class="product-hero">
      <div class="container">
        <div class="hero-top">
          <RouterLink to="/" class="breadcrumb">← Back to home</RouterLink>
          <span class="badge" style="background:rgba(232,121,249,0.1);color:#e879f9;border-color:rgba(232,121,249,0.35);">
            Coming soon
          </span>
        </div>

        <div class="hero-body">
          <div class="hero-text">
            <div class="section-label" style="margin-bottom:1rem;color:#e879f9;opacity:0.85;">
              CryptoScope
            </div>
            <h1 class="hero-h1 font-display">
              Start with business impact.<br/>
              <em style="color:#e879f9">Find the crypto that matters.</em>
            </h1>
            <p class="hero-lead">
              Most scanners try to map every cryptographic call across your entire codebase.
              CryptoScope starts from where it matters most: your business cases. We scope to the systems
              and code environments that carry real risk, assess their crypto usage and libraries
              against agility best practices, and deliver evidence tied to business impact —
              not just an overwhelming inventory.
            </p>
            <div class="hero-actions">
              <a href="mailto:info@irekai.nl?subject=CryptoScope Beta" class="btn" style="background:rgba(232,121,249,0.1);border-color:rgba(232,121,249,0.4);color:#e879f9;font-size:0.8rem;padding:0.75rem 1.6rem;">
                Become our launching customer →
              </a>
            </div>
          </div>

          <!-- Terminal / scan preview -->
          <div class="terminal-card">
            <div class="terminal-bar">
              <div class="terminal-dots">
                <span style="background:#f87171"></span>
                <span style="background:#fbbf24"></span>
                <span style="background:#34d399"></span>
              </div>
              <div class="terminal-title font-mono">cryptoscope v0.9.0</div>
            </div>
            <div class="terminal-body font-mono">
              <div class="line"><span class="prompt">$</span> cryptoscope --scope "Customer auth &amp; payments"</div>
              <div class="line dim">Resolving business case...</div>
              <div class="line dim">  → auth-service  (Java/Spring)</div>
              <div class="line dim">  → payment-api   (Go)</div>
              <div class="line dim">  → token-vault   (Python)</div>
              <div class="line"></div>
              <div class="line dim">Scanning crypto in scoped environments...</div>
              <div class="line"></div>
              <div class="line red">✗ auth-service/src/auth/JwtService.java:142</div>
              <div class="line dim">    RSA-2048 hardcoded — no abstraction layer</div>
              <div class="line red">✗ payment-api/internal/tls/config.go:67</div>
              <div class="line dim">    ECDH-P256 — quantum-vulnerable, no fallback</div>
              <div class="line amber">⚠ token-vault/vault/crypto.py:31</div>
              <div class="line dim">    AES-256-CBC — key rotation not supported</div>
              <div class="line"></div>
              <div class="line red bold">Agility score: 2.8 / 10</div>
              <div class="line amber">Business impact: HIGH — customer PII + payments</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy callout -->
    <section class="philosophy-section">
      <div class="container">
        <div class="philosophy-grid">
          <div class="philosophy-col">
            <div class="phil-label font-mono">Our approach</div>
            <h2 class="phil-heading font-display">
              Top-down, not bottom-up
            </h2>
            <p class="phil-body">
              A complete CBOM of your entire codebase sounds thorough. In practice it creates
              noise: thousands of findings with no clear connection to what actually matters
              to your organisation. It overfloods your CMDB, overwhelms your teams, and buries critical issues under a pile of irrelevant data. 
              <span style="color:#e879f9;font-style:italic;">Gain cryptographic clarity.</span>
            </p>
            <p class="phil-body">
              CryptoScope works the other way. We start with your business cases — the systems
              that process sensitive data, execute critical transactions, or are subject to
              regulatory obligations. If you have completed a
              <RouterLink to="/products/quantum-readiness" class="phil-link">Quick Quantum Readiness Assessment</RouterLink>,
              your highest-priority business cases are already defined: CryptoScope picks up
              exactly where that assessment leaves off. From there we scope to the relevant
              code environments, map their crypto library usage and configuration, and assess
              each finding against crypto agility best practices. Every output line is
              traceable back to a business case and a precise location in code.
            </p>
          </div>
          <div class="philosophy-steps">
            <div class="phil-step" v-for="(s, i) in philosophySteps" :key="i">
              <div class="phil-step-num font-mono">{{ String(i+1).padStart(2,'0') }}</div>
              <div>
                <div class="phil-step-title">{{ s.title }}</div>
                <div v-if="i === 0" class="phil-step-body">
                  The natural starting point after a
                  <RouterLink to="/products/quantum-readiness" class="phil-link">Quick Quantum Readiness Assessment</RouterLink>
                  — your highest-priority business cases and systems are already identified. CryptoScope takes those as direct input, so nothing needs to be re-scoped from scratch.
                </div>
                <div v-else-if="i === 3" class="phil-step-body">
                  Check each finding against
                  <RouterLink to="/products/crypto-agility" class="phil-link">crypto agility best practices</RouterLink>:
                  abstraction, configurability, key rotation, negotiation, and PQC readiness.
                </div>
                <div v-else class="phil-step-body">{{ s.body }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- AI banner -->
        <div class="ai-banner">
          <div class="ai-banner-top">
            <div class="ai-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
                <rect x="4" y="4" width="16" height="16" rx="2"/>
                <rect x="8" y="8" width="8" height="8" rx="1"/>
                <line x1="4" y1="9" x2="2" y2="9"/><line x1="4" y1="12" x2="2" y2="12"/><line x1="4" y1="15" x2="2" y2="15"/>
                <line x1="20" y1="9" x2="22" y2="9"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="20" y1="15" x2="22" y2="15"/>
                <line x1="9" y1="4" x2="9" y2="2"/><line x1="12" y1="4" x2="12" y2="2"/><line x1="15" y1="4" x2="15" y2="2"/>
                <line x1="9" y1="20" x2="9" y2="22"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="15" y1="20" x2="15" y2="22"/>
              </svg>
            </div>
            <div>
              <div class="ai-badge font-mono">Safely supported by AI</div>
              <h3 class="ai-heading font-display">On-premise. Your data under your control.</h3>
              <p class="ai-body">
                CryptoScope ships with carry-on hardware that stays in your environment.
                The device runs any open-source LLM of your choice locally — no cloud calls,
                no data transfer, no third-party exposure. The model assists with scanning,
                contextualises findings against your business cases, and translates
                technical results into plain language your teams can act on immediately.
              </p>
            </div>
          </div>
          <div class="ai-pills">
            <div class="ai-pill" v-for="p in aiPills" :key="p.label">
              <div class="ai-pill-icon" v-html="p.icon"></div>
              <div>
                <div class="ai-pill-title">{{ p.label }}</div>
                <div class="ai-pill-body">{{ p.body }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- What we assess -->
    <section class="detects-section">
      <div class="container">
        <div class="section-label" style="margin-bottom:1.5rem;">What CryptoScope assesses</div>
        <div class="detects-grid">
          <div class="detect-card" v-for="d in detects" :key="d.title">
            <div class="detect-icon" v-html="d.icon"></div>
            <div class="detect-title">{{ d.title }}</div>
            <div class="detect-body">{{ d.body }}</div>
            <div class="detect-examples font-mono">
              <span v-for="e in d.examples" :key="e" class="detect-ex">{{ e }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Output -->
    <section class="output-section">
      <div class="container">
        <div class="two-col">
          <div>
            <div class="section-label" style="margin-bottom:1.25rem;">What you receive</div>
            <div class="output-list">
              <div class="output-item" v-for="o in outputs" :key="o.title">
                <div class="output-num font-mono">{{ o.num }}</div>
                <div>
                  <div class="output-title">{{ o.title }}</div>
                  <div class="output-body">{{ o.body }}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="section-label" style="margin-bottom:0.5rem;">Planned language support</div>
            <p class="planned-note">Not yet available — prioritisation of availability shaped with our launching customer.</p>
            <div class="langs-grid">
              <div class="lang-pill font-mono" v-for="l in langs" :key="l">{{ l }}</div>
            </div>
            <div class="section-label" style="margin-top:2rem;margin-bottom:0.5rem;">Planned integrations</div>
            <p class="planned-note">Not yet available — prioritisation open for input.</p>
            <div class="integ-list">
              <div class="integ" v-for="i in integrations" :key="i">
                <div class="integ-dot"></div>
                <span class="font-mono">{{ i }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fixed right-side launching customer tab -->
    <div class="launch-tab">
      <div class="launch-tab-inner">
        <div class="launch-tab-heading font-mono">Become<br/>Launching<br/>Customer</div>
        <div class="launch-tab-divider"></div>
        <div class="launch-tab-perks">
          <div class="launch-tab-perk" v-for="p in sidePerks" :key="p">
            <svg viewBox="0 0 12 12" fill="none" stroke="#e879f9" stroke-width="1.5" style="width:10px;height:10px;flex-shrink:0;margin-top:2px">
              <polyline points="2,6 5,9 10,3"/>
            </svg>
            <span>{{ p }}</span>
          </div>
        </div>
        <a href="mailto:info@irekai.nl?subject=CryptoScope — Launching customer" class="launch-tab-cta font-mono">
          Reach out →
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const philosophySteps = [
  { title: 'Define business cases',         body: 'The natural starting point after a Quick Quantum Readiness Assessment — your highest-priority business cases and systems are already identified. CryptoScope takes those as direct input, so nothing needs to be re-scoped from scratch.' },
  { title: 'Scope code environments',       body: 'Map the business cases to their code repositories and execution environments — only those are analysed.' },
  { title: 'Assess crypto usage',           body: 'Within the scoped environments, find every crypto library, API call, configuration, and dependency that handles cryptographic operations.' },
  { title: 'Measure adherence to agility standards',    body: 'Check each finding against crypto agility best practices: abstraction, configurability, key rotation, negotiation, and PQC readiness.' },
  { title: 'Deliver business-linked evidence', body: 'Every output line maps a finding to a business case, a file, a line number, and a remediation action — no orphaned results.' },
  { title: 'Actionable migration guidance',    body: 'For each finding, CryptoScope provides concrete code-level suggestions: how to introduce abstraction layers, which PQC algorithms to migrate to, and how to structure the change to maximise crypto agility going forward.' },
]

const aiPills = [
  {
    label: 'On-premise hardware',
    body: 'A carry-on device deployed in your environment. No internet connection required during scanning.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
  {
    label: 'Any open-source LLM',
    body: 'Bring your preferred model — Llama, Mistral, Phi, or others. No vendor lock-in, no licensing surprises.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`
  },
  {
    label: 'Human-readable findings',
    body: 'The model contextualises every technical finding against your business case and writes it in plain language for your teams.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`
  },
]

const detects = [
  {
    title: 'Crypto library & API usage',
    body: 'Identifies every cryptographic library and API call in scoped environments — both direct usage and transitive dependencies — so nothing relevant is missed.',
    examples: ['OpenSSL', 'BouncyCastle', 'cryptography', 'javax.crypto'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`
  },
  {
    title: 'Quantum-vulnerable patterns',
    body: 'Flags key exchange, signature, and encryption schemes that are broken by Shor\'s algorithm, scoped to the business cases where they pose actual risk.',
    examples: ['RSA KEM', 'ECDH', 'ECDSA', 'classical DH'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
  },
  {
    title: 'Algorithm & configuration mapping',
    body: 'Maps which algorithms are in use, how they are configured.',
    examples: ['AES mode', 'key size', 'TLS version', 'curve selection'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
  },
  {
    title: 'Adherence to crypto agility best practices',
    body: 'Assesses each finding against a defined set of agility criteria: abstraction layers, algorithm negotiation, fallback paths, key rotation support, and PQC migration readiness.',
    examples: ['abstraction', 'negotiation', 'rotation', 'PQC fallback'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
  },
]

const outputs = [
  { num:'01', title:'Business-scoped CBOM',       body:'A Cryptographic Bill of Materials scoped to your defined business cases — crypto assets mapped to the systems and transactions that depend on them, not a flat inventory of everything. Can be integrated with your existing asset management tools (e.g., CMDB, ITAM).' },
  { num:'02', title:'Crypto agility report',       body:'Per-system agility score with specific findings against each best-practice criterion, supported by file-level evidence for every gap identified.' },
  { num:'03', title:'Prioritised remediation plan', body:'Actions ranked by business impact and agility gap severity, each with the exact file path, line number, library version, and a concrete remediation step.' },
  { num:'04', title:'Evidence package',             body:'A structured, shareable evidence package mapping each finding to its business case, code location, and recommended fix — ready for your engineering and compliance teams.' },
]



const sidePerks = [
  'Free scoped assessment of your codebase',
  'Direct input on roadmap & language priorities',
  'On-premise AI hardware included',
  'Preferential terms at GA',
]

const langs = ['Python', 'Java', 'Go', 'C / C++', 'JavaScript', 'TypeScript', 'Rust', 'C#', '.NET', 'Kotlin']
const integrations = ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Azure DevOps', 'VS Code extension (beta)']
</script>

<style scoped>
.hero-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem; }
.breadcrumb { font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim); text-decoration: none; transition: color 0.15s; }
.breadcrumb:hover { color: var(--text-muted); }

.hero-body { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: flex-start; }
@media (min-width: 900px) { .hero-body { grid-template-columns: 1fr 400px; } }

.hero-h1 { font-size: clamp(1.9rem, 5vw, 3rem); font-weight: 500; line-height: 1.15; color: var(--text); margin-bottom: 1.25rem; }
.hero-lead { font-size: 1rem; line-height: 1.75; color: var(--text-muted); margin-bottom: 2rem; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; }

/* Terminal */
.terminal-card {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: #0a0908;
}
.terminal-bar {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.65rem 1rem;
  background: #1a1714;
  border-bottom: 1px solid var(--border);
}
.terminal-dots { display: flex; gap: 0.35rem; }
.terminal-dots span { width: 10px; height: 10px; border-radius: 50%; }
.terminal-title { font-size: 0.65rem; letter-spacing: 0.12em; color: var(--text-dim); }

.terminal-body { padding: 1.25rem; font-size: 0.7rem; line-height: 1.8; }
.line { color: var(--text-muted); }
.line.green  { color: #34d399; }
.line.red    { color: #f87171; }
.line.amber  { color: #fbbf24; }
.line.dim    { color: #57534e; }
.line.bold   { font-weight: 600; }
.prompt { color: #2dd4bf; margin-right: 0.4rem; }

/* Philosophy */
.philosophy-section { padding: 4rem 0; border-top: 1px solid var(--border); }
.philosophy-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
@media (min-width: 900px) { .philosophy-grid { grid-template-columns: 1fr 1fr; } }

.phil-label { font-size: 0.62rem; letter-spacing: 0.18em; text-transform: uppercase; color: #e879f9; opacity: 0.8; margin-bottom: 0.75rem; }
.phil-heading { font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 500; color: var(--text); margin-bottom: 1.25rem; line-height: 1.2; }
.phil-body { font-size: 0.9rem; line-height: 1.75; color: var(--text-muted); margin-bottom: 1rem; }
.phil-link { color: #e879f9; text-decoration: none; border-bottom: 1px solid rgba(232,121,249,0.35); transition: border-color 0.15s; }
.phil-link:hover { border-color: #e879f9; }

.philosophy-steps { display: flex; flex-direction: column; gap: 1.25rem; }
.phil-step { display: flex; gap: 1rem; align-items: flex-start; }
.phil-step-num { font-size: 0.6rem; color: #e879f9; opacity: 0.7; min-width: 1.8rem; padding-top: 0.18rem; flex-shrink: 0; }
.phil-step-title { font-size: 0.88rem; font-weight: 500; color: var(--text); margin-bottom: 0.2rem; }
.phil-step-body { font-size: 0.8rem; line-height: 1.6; color: var(--text-muted); }
/* Detects */
.detects-section { padding: 4rem 0; border-top: 1px solid var(--border); }
.detects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1rem; }
.detect-card {
  padding: 1.4rem;
  border-radius: 12px;
  border: 1px solid rgba(232,121,249,0.15);
  background: rgba(232,121,249,0.03);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  transition: border-color 0.2s;
}
.detect-card:hover { border-color: rgba(232,121,249,0.35); }
.detect-icon { width: 22px; height: 22px; color: #e879f9; }
.detect-icon svg { width: 100%; height: 100%; }
.detect-title { font-size: 0.9rem; font-weight: 500; color: var(--text); }
.detect-body { font-size: 0.78rem; line-height: 1.6; color: var(--text-muted); flex: 1; }
.detect-examples { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.detect-ex { font-size: 0.6rem; padding: 0.15rem 0.45rem; border-radius: 3px; background: rgba(232,121,249,0.1); color: #e879f9; border: 1px solid rgba(232,121,249,0.2); }

/* On-premise AI */
.ai-banner {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: 2rem 2.25rem;
  border-radius: 14px;
  border: 1px solid rgba(232,121,249,0.25);
  background: linear-gradient(135deg, rgba(232,121,249,0.04) 0%, rgba(167,139,250,0.04) 100%);
  position: relative;
  overflow: hidden;
}
.ai-banner::before {
  content: '';
  position: absolute;
  top: -40px; right: -40px;
  width: 180px; height: 180px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(232,121,249,0.08) 0%, transparent 70%);
  pointer-events: none;
}

.ai-banner-top { display: flex; gap: 1.25rem; align-items: flex-start; }

.ai-icon {
  width: 38px; height: 38px; flex-shrink: 0;
  color: #e879f9; opacity: 0.85;
  margin-top: 0.1rem;
}
.ai-icon svg { width: 100%; height: 100%; }

.ai-badge {
  font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase;
  color: #e879f9; opacity: 0.8; margin-bottom: 0.5rem;
}
.ai-heading { font-size: 1.15rem; font-weight: 500; color: var(--text); margin-bottom: 0.75rem; line-height: 1.3; }
.ai-body { font-size: 0.85rem; line-height: 1.75; color: var(--text-muted); }

.ai-pills {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
@media (max-width: 640px) { .ai-pills { grid-template-columns: 1fr; } }

.ai-pill {
  display: flex; gap: 0.75rem; align-items: flex-start;
  padding: 0.85rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(232,121,249,0.15);
  background: rgba(232,121,249,0.04);
}
.ai-pill-icon { width: 16px; height: 16px; color: #e879f9; opacity: 0.75; flex-shrink: 0; margin-top: 0.1rem; }
.ai-pill-icon svg { width: 100%; height: 100%; }
.ai-pill-title { font-size: 0.8rem; font-weight: 500; color: var(--text); margin-bottom: 0.2rem; }
.ai-pill-body { font-size: 0.72rem; line-height: 1.55; color: var(--text-muted); }

/* Output */
.output-section { padding: 4rem 0; border-top: 1px solid var(--border); }
.two-col { display: grid; grid-template-columns: 1fr; gap: 3rem; }
@media (min-width: 768px) { .two-col { grid-template-columns: 1fr 1fr; } }

.output-list { display: flex; flex-direction: column; gap: 1.4rem; }
.output-item { display: flex; gap: 1rem; align-items: flex-start; }
.output-num { font-size: 0.6rem; color: #e879f9; opacity: 0.7; min-width: 1.8rem; padding-top: 0.2rem; }
.output-title { font-size: 0.9rem; font-weight: 500; color: var(--text); margin-bottom: 0.25rem; }
.output-body { font-size: 0.82rem; line-height: 1.6; color: var(--text-muted); }

.planned-note { font-family: var(--font-mono); font-size: 0.62rem; color: var(--text-dim); letter-spacing: 0.03em; font-style: italic; margin-bottom: 0.75rem; }
.langs-grid { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.lang-pill { font-size: 0.65rem; padding: 0.25rem 0.65rem; border-radius: 4px; border: 1px solid var(--border); color: var(--text-muted); }

.integ-list { display: flex; flex-direction: column; gap: 0.55rem; }
.integ { display: flex; align-items: center; gap: 0.6rem; }
.integ-dot { width: 5px; height: 5px; border-radius: 50%; background: #e879f9; opacity: 0.7; flex-shrink: 0; }
.integ span { font-size: 0.72rem; color: var(--text-muted); }

/* Fixed launching-customer tab */
.launch-tab {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 900;
}
.launch-tab-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 168px;
  padding: 1.25rem 1.1rem 1.1rem;
  border-radius: 12px 0 0 12px;
  border: 1px solid rgba(232,121,249,0.45);
  border-right: none;
  background: #130d14;
  box-shadow: -4px 0 32px -6px rgba(232,121,249,0.2);
  text-align: center;
}
.launch-tab-heading {
  font-size: 0.82rem;
  font-weight: 600;
  color: #e879f9;
  line-height: 1.35;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.launch-tab-divider {
  width: 100%;
  height: 1px;
  background: rgba(232,121,249,0.2);
  margin-bottom: 1rem;
}
.launch-tab-perks {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 1.1rem;
}
.launch-tab-perk {
  display: flex;
  align-items: flex-start;
  gap: 0.4rem;
  text-align: left;
}
.launch-tab-perk span {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  line-height: 1.5;
  color: var(--text-muted);
}
.launch-tab-cta {
  display: block;
  width: 100%;
  font-size: 0.65rem;
  letter-spacing: 0.04em;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(232,121,249,0.45);
  background: rgba(232,121,249,0.1);
  color: #e879f9;
  text-decoration: none;
  transition: all 0.2s;
}
.launch-tab-cta:hover {
  background: rgba(232,121,249,0.2);
  border-color: rgba(232,121,249,0.75);
  box-shadow: 0 0 14px -3px rgba(232,121,249,0.3);
}

/* Hide tab on small screens where it would overlap content */
@media (max-width: 1100px) { .launch-tab { display: none; } }
</style>
