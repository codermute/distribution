import { ref, watch } from 'vue'

export default function useTitle(value = '') {
  const title = ref(value)

  watch(
    title,
    (newValue) => {
      document.title = newValue
    },
    {
      immediate: true
    }
  )

  return title
}
