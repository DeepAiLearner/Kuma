export default {
  methods: {
    mapTitle(title) {
      return {
        dashboard: '首页'
      }[title]
    },
    mapIcon(icon) {
      // icons: https://fontawesome.com/icons?d=gallery&s=solid
      return {
        dashboard: 'tachometer-alt'
      }[icon]
    }
  }
}
