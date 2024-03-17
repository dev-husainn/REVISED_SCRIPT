 <!-- --------------------------- DATATYPE NOTES ---------------------------- -->
 
 DataType:->> Is used to define the type of data that variable holds the value.

Primitive Datatype ===  Wo data type hote hai jo breakable nhi hote hai...
The data types that, once defined, cannot be changed are known as primitive data types.
 Those data types which can be changed once defined are known as non-primitive data type//

 Note:== Non-primitive datatype ka return type object hi aata h....

null = stand alone value ,ya fir keh skte hai ,, it is representation of empty value...
undefined = variable jiski value initialize nhi hoti hai to undefined aata h ..
boolean
string                                     //These are all primitive datatype
number
bigInt
symbol = kisi bhi value ko unique bnane ke liye symbol use hota h..




<!-- ---------------------------------- 2.1Conversion---------------------------------- -->


 
typeof() operator apne data ka type btata hai...

null ka type object hota h..
undefined ka type undefined hi hota h..  -->



Boolean conversion me jb aap 1 likhte hai to true hota hai, aur jb 0 likhte hai to false deta h.

1=> true;
0=> false;
""=> false   [empty string "" ki value false ]
"xyzz"=> false   ["string"  ki value true ]


 -->

 <!-- ----------------------------- -Stack&Heap ----------------------------- -->

 A reference value allows you to add, change, or delete properties at any time
 Unlike a reference value, a primitive value cannot have properties. This means that you cannot add a property to a primitive value.

 You can add, change, or delete properties to a reference value, whereas you cannot do it with a primitive value.


Because static data has a size that does not change, the JavaScript engine allocates a fixed amount of memory space to the static data and stores it on the stack.
 
 JavaScript stores objects (and functions) on the heap. The JavaScript engine doesn’t allocate a fixed amount of memory for these objects. Instead, it’ll allocate more space as needed.

 