import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import '@/assets/style.css'

// Lazy-loaded route views
const HomeView             = () => import('@/views/HomeView.vue')
const AboutView            = () => import('@/views/AboutView.vue')
const MaturityModelView    = () => import('@/views/MaturityModelView.vue')
const SupplierMgmtView     = () => import('@/views/SupplierManagementView.vue')
const QuantumReadinessView = () => import('@/views/QuantumReadinessView.vue')
const CodeScanningView     = () => import('@/views/CodeScanningView.vue')
const CryptoAgilityView    = () => import('@/views/CryptoAgilityView.vue')

const routes = [
  { path: '/',                      component: HomeView,             meta: { title: 'IREKAI' } },
  { path: '/about',                 component: AboutView,            meta: { title: 'About — IREKAI' } },
  { path: '/products/maturity-model',       component: MaturityModelView,    meta: { title: 'PQC Maturity Model — IREKAI' } },
  { path: '/products/supplier-management',  component: SupplierMgmtView,     meta: { title: 'Supplier Management — IREKAI' } },
  { path: '/products/quantum-readiness',    component: QuantumReadinessView, meta: { title: 'Quick Quantum Readiness Assessment — IREKAI' } },
  { path: '/products/code-scanning',        component: CodeScanningView,     meta: { title: 'CryptoScope — IREKAI' } },
  { path: '/products/crypto-agility',       component: CryptoAgilityView,    meta: { title: 'Crypto Agility Best Practices — IREKAI' } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta?.title || 'IREKAI'
})

const app = createApp(App)
app.use(router)
app.mount('#app')
