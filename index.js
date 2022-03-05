var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

hexo.init().then(function(){
    console.log("hola")
    hexo.call('generate').then(function(){
        return hexo.exit();
      }).catch(function(err){
        return hexo.exit(err);
      });
      console.log("hola")
    });