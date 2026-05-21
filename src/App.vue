<template>
  <div class="app-root grid-bg">
    <NavBar />
    <main>
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </Transition>
      </RouterView>
    </main>
    <SiteFooter />

    <!-- Global mailto copy toast -->
    <Transition name="toast">
      <div v-if="toastVisible" class="mailto-toast" aria-live="polite">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" class="toast-icon">
          <polyline points="2,8 6,12 14,4"/>
        </svg>
        <span><strong>{{ toastEmail }}</strong> copied to clipboard</span>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import NavBar     from '@/components/NavBar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { toastEmail, toastVisible, showCopiedToast } from '@/composables/useMailtoToast.js'

function handleMailtoClick(e) {
  const link = e.target.closest('a[href^="mailto:"]')
  if (!link) return
  e.preventDefault()
  // Extract just the address (before any ?subject=... query)
  const raw = link.getAttribute('href').replace(/^mailto:/i, '')
  const email = raw.split('?')[0].trim()
  navigator.clipboard.writeText(email).then(() => showCopiedToast(email))
}

onMounted(()  => document.addEventListener('click', handleMailtoClick))
onUnmounted(() => document.removeEventListener('click', handleMailtoClick))
</script>

<style scoped>
.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main { flex: 1; }
</style>

<style>
/* Toast — not scoped so it sits above everything */
.mailto-toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 1.1rem;
  border-radius: 8px;
  background: #1c1917;
  border: 1px solid rgba(122,173,151,0.45);
  box-shadow: 0 8px 32px -4px rgba(0,0,0,0.5), 0 0 0 1px rgba(122,173,151,0.08);
  font-family: var(--font-mono, monospace);
  font-size: 0.72rem;
  color: #e7e5e4;
  white-space: nowrap;
  pointer-events: none;
}
.mailto-toast strong { color: #7aad97; font-weight: 600; }
.toast-icon { width: 13px; height: 13px; color: #7aad97; flex-shrink: 0; }

.toast-enter-active { transition: opacity 0.2s ease, transform 0.2s cubic-bezier(.2,0,.2,1); }
.toast-leave-active { transition: opacity 0.35s ease, transform 0.35s ease; }
.toast-enter-from  { opacity: 0; transform: translateX(-50%) translateY(8px); }
.toast-leave-to    { opacity: 0; transform: translateX(-50%) translateY(4px); }
</style>
