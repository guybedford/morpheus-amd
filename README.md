Morpheus AMD
==

Bridge module for the [Morpheus](https://github.com/ded/morpheus) library for use in [AMD Query](https://github.com/guybedford/amdquery).

### Install

With [Volo](http://volojs.org):

```
  volo add guybedford/morpheus-amd
```

### Usage

```javascript
  require(['amdquery!morpheus'], function($) {
    $('#myelement').animate({
      left: -50,
      duration: 100,
      complete: function() {
        console.log('done');
      }
    });
  });
```

### API Methods

* $.tween
* animate
* fadeIn
* fadeOut

See the [API documentation from the morpheus project page](https://github.com/ded/morpheus).