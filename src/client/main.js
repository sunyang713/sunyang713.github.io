// webpack in here only

import Application from './Application'

// possibly webpack the HMR process
(function main() {

  // Instantiate an Application.
  const application = new Application(process.env.SOURCE) // webpack injected

  // Activate/Execute/Render/initiate/begin/start the Application.
  application.start()

  // Activate Hot Module Replacement in development mode.
  if (module.hot)
    module.hot.accept(application.source, application.restart) // config 'app'? 

})()
