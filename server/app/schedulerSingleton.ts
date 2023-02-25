import { useScheduler } from "#scheduler";


export default function startScheduler() {
  Singleton.getInstance()
}

var Singleton = (function () {
  var instance: Object | null;

  function createInstance() {
      const scheduler = useScheduler();
      var object = new Object("I am the instance");
      scheduler.start();    
      scheduler.run(() => {
        console.log("this should run every 5 seconds, cool");
      }).everySeconds(5);
    
      return object;
  }

  return {
      getInstance: function () {
          if (!instance) {
              instance = createInstance();
          }
          return instance;
      }
  };
})();
