// Created by andrey on 19.06.16.

define([
    'app',
    'marionette'
    
], function(app, Marionette){
    console.log('Module:Example => Loading...');
    
    var ExampleModule = app.module("Example", function(Example) {
        this.startWithParent = false;
        
        this.addInitializer(function(){
            console.log('Module:Example => initialized');
            
            //this.router = new Router({ controller: Controller });
            
        });
    });

//
//    var SomeView = Marionette.ItemView.extend({
//        // ...
//    });
//
//    ExampleModule.addInitializer(function(){
//        ExampleModule.someView = new SomeView();
//        app.someRegion.show(MyModule.someView);
//    });
//
//    ExampleModule.addFinalizer(function(){
//        app.someRegion.close();
//    });
    
    return ExampleModule;
});
 
