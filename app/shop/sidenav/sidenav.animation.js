angular.module('sideNav')
    .animation('.abc',function(){
    return{
        beforeAddClass : function(element,className,doneFn){
           if(className === 'ng-hide'){
              jQuery(element).slideUp(300, doneFn);
           }else{
               doneFn();
           }
        },
        
        removeClass : function(element,className,doneFn){
            if(className === 'ng-hide'){
                
                jQuery(element).slideDown(300, doneFn);
            }else{
                doneFn();
            }
        }
    }
})