window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  SwaggerUIBundle({
    url: "https://petstore.swagger.io/v2/swagger.json", // TODO: replace with real schema when versioning is in-place
    dom_id: '#swagger-ui',
    deepLinking: true,
    syntaxHighlight: { theme: 'arta'},
    presets: [
      SwaggerUIBundle.presets.apis
    ],
    plugins: [
    ],
    tryItOutEnabled: false,
    supportedSubmitMethods: ['']
  });

  //</editor-fold>
};


