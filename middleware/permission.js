import sidebarMixin from '~/mixins/sidebar'

export default ({ route, store, redirect }) => {
  const { mapVisit } = sidebarMixin.methods
  const hasRole = route.matched
    .map(_ => _.meta.title)
    .every(_ => mapVisit(_, store))
  console.log(hasRole)
  // return redirect('/dashboard')
}
