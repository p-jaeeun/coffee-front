export class Observer {
  constructor() {
    this.handlers = {};
  }

  register(eventName, handler, userData, context) {
    var handlerArray = this.handlers[eventName];
    if (undefined === handlerArray) {
      handlerArray = this.handlers[eventName] = [];
    }
    handlerArray.push({
      handler: handler,
      context: context,
      userData: userData,
    });
  }

  unregister(eventName, handler, context) {
    var handlerArray = this.handlers[eventName];
    if (undefined === handlerArray) return;
    for (var i = 0, max = handlerArray.length; i < max; i++) {
      var currentHandler = handlerArray[i];
      if (
        handler === currentHandler["handler"] &&
        context === currentHandler["context"]
      ) {
        handlerArray.splice(i, 1);
        return;
      }
    }
  }

  notify(eventName, result, userData, input) {
    var handlerArray = this.handlers[eventName];
    if (undefined === handlerArray) {
      return;
    }
    for (var i = 0, max = handlerArray.length; i < max; i++) {
      var currentHandler = handlerArray[i];
      currentHandler["handler"].call(
        currentHandler["context"],
        result,
        userData,
        input
      );
    } //method.call(context, parameter1, parameter2)
  }
}
