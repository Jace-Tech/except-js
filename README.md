# EXCEPT

A simple script that adds a function to objects to help with key filtering.

## Examples: 
     
```html
<!-- BASIC HTML  -->
<script src="/js/except.js"></script>

<script>     
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
</script>

```
