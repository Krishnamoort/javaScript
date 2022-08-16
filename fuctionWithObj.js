/*Objects
Most strongly typed languages such as Java use isEquals() to check whether two objects 
are the same. You may be tempted to simply use the == operator to check whether two 
objects are the same in JavaScript.
However, this will not evaluate to true.
1 var o1 = {};
2 var o2 = {};
3
4 o1 == o2 // returns false
5 o1 === o2 // returns false
Chapter 2 JavaScript: Unique Parts
19
Although these objects are equivalent (same properties and values), they are not 
equal. Namely, the variables have different addresses in memory.
This is why most JavaScript applications use utility libraries such as lodash1
 or 
underscore,2
 which have the isEqual(object1, object2) function to check two objects 
or values strictly. This occurs via implementation of some property-based equality 
checking where each property of the object is compared.
In this example, each property is compared to achieve an accurate object equality result.*/
function isEquivalent(a, b) {
    // arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If their property lengths are different, they're different objects
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If the values of the property are different, not equal
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If everything matched, correct
    return true;
}
isEquivalent({ 'hi': 12 }, { 'hi': 12 }); // returns true