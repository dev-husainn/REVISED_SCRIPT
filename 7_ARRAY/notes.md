Array = Collection of diffrent data types stored in a single varialble.

<!-- -------------------------- Methods of array --------------------------- -->




<!-- -------------------------------- push --------------------------------- -->

push("parametres") = adds an element at the end of an arry.

<!-- --------------------------------- pop --------------------------------- -->

pop() = removes the last element of an aray.


<!-- ------------------------------- length -------------------------------- -->

length = The length property returns the length (size) of an array.

The length property provides an easy way to append a new element to an array:

Example:

const fruits = ["Banana", "Orange",  "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";

Output = Banana,Orange,Apple,Mango,Kiwi


<!-- ------------------------------ toString ------------------------------- -->


The JavaScript method toString() converts an array to a string of (comma separated) array values.

<!-- -------------------------------- join --------------------------------- -->


The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator.


<!-- -------------------------------- shift -------------------------------- -->


The shift() method removes the first array element and "shifts" all other elements to a lower index


<!-- ------------------------------- unshift ------------------------------- -->


The unshift("parameters") method adds a new element to an array (at the beginning), and "unshifts" older elements

<!-- ------------------------------- concat -------------------------------- -->


 The concat() method creates a new array by merging (concatenating) existing array


<!-- NOTE =  * The concat() method can also take strings as arguments : Example - 
(Merging an Array with Values)

const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter");  -->

Output = "Emil", "Tobias", "Linus", " Peter";

<!-- -------------------------------- flat --------------------------------- -->

The flat() method creates a new array with sub-array elements concatenated to a specified depth

<!-- -------------------------------- splice -------------------------------- -->

The splice("parameters") method adds new items to an array.


With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
<!-- 
The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added. -->


<!-- ------------------------------- -slice -------------------------------- -->

 
The slice() method slices out a piece of an array into a new array:

<!--
Note
The slice() method creates a new array.

The slice() method does not remove any elements from the source array. -->



<!-- -------------------------------- sort --------------------------------- -->

The sort() method sorts an array alphabetically:

<!-- ----------------------------- toSorted() ------------------------------ -->

JavaScript Array toSorted() Method
ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.

<!-- 
The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array. -->













<!-- ------------------------------- 2_Array ------------------------------- -->


<!-- --------------------------- SpreadOperator ---------------------------- -->

Spreadoperator = Spread operator(...) is used to combine the different arrays into a single array.



<!-- ------------------------------- flat() 
-------------------------------- -->


flat() = The flat() method creates a new array with sub-array elements concatenated to a specified depth.

NOTE = flat("depth") 



<!-- ---------------------------------- isArray() ---------------------------------- -->


.isArray()  = This method checks  if an object is an array


The isArray() method returns true if an object is an array, otherwise false.


<!-- ------------------------------- .from() ------------------------------- -->


.from() = Create an array from a string:

 <!-- ----------------------------- Array.of() ------------------------------ -->

 .of() = Returns a set of element to include in the new array object