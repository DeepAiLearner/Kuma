export default {
  methods: {
    mapTitle(title) {
      return {
        dashboard: '首页',
        bangumi: '番剧',
        'bangumi-list': '番剧列表',
        'bangumi-manager': '设置版主'
      }[title]
    },
    mapIcon(icon) {
      // icons: https://fontawesome.com/icons?d=gallery&s=solid
      return {
        dashboard: 'tachometer-alt',
        bangumi: 'globe',
        'bangumi-list': 'th-list',
        'bangumi-manager': 'user-cog'
      }[icon]
    }
  }
}
