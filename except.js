;(function() {
    /**
     * It returns a new object with the keys that were passed to the function removed
     * @param args Can be an array of keys or strings[keys] to be removed from the object.
     * @returns  an object with the keys that were not passed in the arguments.
     * 
     * Examples: 
     * 
     * ```js
     *      
        const obj1 = { name: "foo",  age: 20, city: "bar" }

        console.log(obj1.except('name')) 
        // output: { age: 20, city: "bar" }

        console.log(obj1.except(['name'])) 
        // output: { age: 20, city: "bar" }

        console.log(obj1.except('name', 'age')) 
        // output: { city: 'bar' }

        console.log(obj1.except(['name', 'age'])) 
        // output: { city: 'bar' }


        const user = { name: "John Smith", age: 45, email: "john.smith@gmail.com", password: "password"}
        console.log(user.except('password'))
        // output: { name: "John Smith", age: 45, email: "john.smith@gmail.com" }
     * ```
     */
    function except (args) {
        const values = this
        const result = {...values}
        const keys = Object?.keys(values)

    
        if(arguments.length) {
            for(let arg in arguments) {
                if(arg != "except") {
                    if(typeof arguments[arg] == 'string') {
                        keys.forEach(key => {
                            if(key == arguments[arg]) {
                                delete result[key]
                            }
                        })
                    }
                    else if(typeof arguments[arg] == 'object') {
                        if(arguments[arg][0]) {
                            arguments[arg].forEach((keyItem) => {
                                keys.forEach(key => {
                                    if(key == keyItem) {
                                        delete result[key]
                                    }
                                })
                            })
                        }
                        else {
                            throw new Error('except() expects only arrays or strings')
                        }
                    }
                    else {
                        throw new Error('except() expects only arrays or strings')
                    }
                }
            }
        }
        return result

    }

    Object.prototype.except = except
})()