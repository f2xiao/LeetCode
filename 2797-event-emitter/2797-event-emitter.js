class EventEmitter {
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */

     constructor(){
        this.events = {}
     }
    
    subscribe(eventName, callback) {
        
        if(!this.events[eventName]){
            this.events[eventName] = new Set();
        }
            this.events[eventName].add(callback);

        return {
            unsubscribe: () => {
                this.events[eventName].delete(callback);
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        // const res = [];
        // (this.events[eventName] ?? [] )
        //  .forEach(fn=>res.push(fn(...args)))

        // return res

        return Array.from(this.events[eventName] ?? []).map(fn=>fn(...args))
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */