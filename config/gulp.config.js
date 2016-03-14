module.exports = (function() {

  var client = './client/';
  var index  = client + 'index.html';
  var build = client + './dist';
  

  var config = {

    /** Src Files */
    srcJs : [client + "**/*.js",client + "**/*.jsx"],

    /** Client Dir */


    /** dist dir */
    build : build,

    /**
     * Build Time Files
     */

    config : './config/config.json',
    destConfig : `${client}app/config/config.js`,
    destConfigDir : `${client}app/config`

    /** Server Files */
  
    
  };

  return config;


})();
