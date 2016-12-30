(function (global,factory){
    //这句放到electron中海油问题，在electron中有module.export的概念
    if(typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = global.document ?
        factory(global,true) :
        function ( w ) {
           if ( !w.document ) {
               throw new Error('jQuery require a window with a document') ;
           } 
           return factory( w ) ;
        }
    }else{
        factory( global ) ;
    }
}(typeof window !=='undefined' ? window : this,function (window,noGlobal){
    var jQuery = {} ;
    //如果是全局引入，则将jQuery放到window对象上
    if(!noGlobal){
        window.jQuery = window.$ = jQuery ;
    }
    return jQuery ;
})) ;