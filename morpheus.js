/*
 * morpheus.js bridge library for amdquery
 * https://github.com/guybedford/morpheus-amd
 *
 * Morpheus:
 * https://github.com/ded/morpheus
 * 
 * Inspiration - https://github.com/ded/morpheus/blob/master/src/ender.js
 * 
 */
define(['amdquery', 'morpheus-lib'], function($, morpheus) {
  return {
    tween: morpheus.tween,
    prototype: {
      animate: function(options) {
        return morpheus(this, options);
      },
      fadeIn: function(duration, callback) {
        return morpheus(this, {
          duration: duration,
          opacity: 1,
          complete: callback
        });
      },
      fadeOut: function (duration, callback) {
        return morpheus(this, {
          duration: duration,
          opacity: 0,
          complete: callback
        });
      }
    }
  };
});