export default ({ store, route, redirect }) => {
  const { user } = store.state
  if ((!user || !user.is_admin) && route.path !== '/login') {
    return redirect('/login')
  }
}
