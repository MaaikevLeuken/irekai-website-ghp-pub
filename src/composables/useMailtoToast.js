import { ref } from 'vue'

export const toastEmail   = ref('')
export const toastVisible = ref(false)
let timer = null

export function showCopiedToast(email) {
  toastEmail.value   = email
  toastVisible.value = true
  clearTimeout(timer)
  timer = setTimeout(() => { toastVisible.value = false }, 2800)
}
