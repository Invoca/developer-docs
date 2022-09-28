window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // https://github.com/swagger-api/swagger-ui/issues/3725#issuecomment-334899276
  const DisableTryItOutPlugin = function() {
    return {
      statePlugins: {
        spec: {
          wrapSelectors: {
            allowTryItOutFor: () => () => false
          }
        }
      }
    }
  }

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: "https://petstore.swagger.io/v2/swagger.json", // TODO: replace with real schema when versioning is in-place
    dom_id: '#swagger-ui',
    deepLinking: "True",
    syntaxHighlight: { theme: 'arta'},
    presets: [
      SwaggerUIBundle.presets.apis,
    ],
    plugins: [
      DisableTryItOutPlugin
    ]
  });

  //</editor-fold>
};


