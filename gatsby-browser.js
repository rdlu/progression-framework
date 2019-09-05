const ReactGA = require('react-ga')

ReactGA.initialize('UA-25299114-21')
ReactGA.set({
  appName: 'Progression at GetNinjas'
})

exports.onRouteUpdate = (state) => {
  ReactGA.pageview(state.location.pathname)
}
