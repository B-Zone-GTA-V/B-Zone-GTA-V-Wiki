import DefaultTheme from 'vitepress/theme'
import Contributors from './Contribuitors.vue'
import './styles/style.css'
import './styles/job_style.css'
import './styles/hobby_style.css'
import './styles/rules_style.css'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
      app.component('Contributors', Contributors)
    }
  }