/* eslint-disable @stylistic/max-len */
export const advancedTsLearningQuotes = [
  "TS: The bigint type lets you represent integers that are too large to be represented by number type (https://typescriptlang.org/docs/handbook/release-notes/typescript-3-2.html#bigint)",
  "TS: The infer keyword lets you infer the type of a generic type parameter inside a conditional type (https://typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types)",
  "TS: The keyof operator takes a type and returns a union of its keys (https://totaltypescript.com/books/total-typescript-essentials/deriving-types#the-keyof-operator)",
  "TS: The typeof operator can be used to infer the type of a runtime construct (https://totaltypescript.com/books/total-typescript-essentials/deriving-types#the-typeof-operator)",
  "TS: Const assertions – as const – let you mark an expression as deeply immutable. This means it gets narrowed to its narrowest possible type (https://totaltypescript.com/books/total-typescript-essentials/mutability#deep-immutability-with-as-const)",
  "TS: Const assertions on objects – as const – let you mark an object as deeply immutable. This means its attributes get narrowed to their literal types (https://totaltypescript.com/books/total-typescript-essentials/mutability#deep-immutability-with-as-const)",
  "TS: String, number and boolean are all basic types (https://totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#the-basic-types)",
  "TS: The Awaited utility type lets you get the type of a Promise is resolved value (https://totaltypescript.com/books/total-typescript-essentials/deriving-types#awaited)",
  "TS: The Partial utility type lets you make all the properties of an object optional (https://totaltypescript.com/books/total-typescript-essentials/objects#partial)",
  "TS: The Required utility type lets you make all the properties of an object required (https://totaltypescript.com/books/total-typescript-essentials/objects#required)",
  "TS: The Readonly utility type lets you make all the properties of an object readonly (https://totaltypescript.com/books/total-typescript-essentials/mutability#readonly-object-properties)",
  "TS: The Omit utility type lets you create an object type by omitting a set of properties from another type (https://totaltypescript.com/books/total-typescript-essentials/objects#omit)",
  "TS: The Exclude utility type lets you exclude some members of a union type (https://totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude)",
  "TS: The Extract utility type lets you extract some members of a union type (https://totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude)",
  "TS: The NonNullable utility type lets you exclude null and undefined from a union type (https://totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude)",
  "TS: The Record utility type lets you create an object type with a set of properties whose keys are of one type and whose values are of another type (https://totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude)",
  "TS: The ReturnType utility type lets you get the return type of a function type (https://totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude)",
  "TS: The Lowercase utility type lets you convert a string literal type to a string literal type with all characters lowercase (https://totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude)",
  "TS: The Uppercase utility type lets you convert a string literal type to a string literal type with all characters uppercase (https://totaltypescript.com/books/total-typescript-essentials/deriving-types#exclude)",
  "TS: The Parameters utility type lets you get the parameters of a function type (https://typescriptlang.org/docs/handbook/utility-types.html#parameterstype)",
  "TS: The Pick utility type lets you create an object type by picking a set of properties from another type (https://typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)",
  "TS: Type any is a type that pauses type-checking on whatever it is assigned to (https://typescriptlang.org/docs/handbook/2/everyday-types.html#any)",
  "TS: Array type represents an array, which can be any length (https://totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#arrays)",
  "TS: Declare global is a way to extend the global scope of your project is useful for adding types to global variables that are not defined in your project",
  "TS: Window interface pattern lets you extend the Window interface to",
  "TS: Just like functions in JavaScript, you can pass types to other types as arguments. Just like functions, they then return other types (https://totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#passing-types-to-functions)",
  "TS: You can use generics in types to make them more flexible turns them into a kind of function, which can return different types depending on what you pass in",
  "TS: Tuple type represents an array with a fixed number of elements (https://totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#tuples)",
  "TS: You can use the number keyword to create a union type of all the members of an array, it is known as the array member access",
  "TS: Function return type tells the function what type it should return (https://totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#function-return-types)",
  "TS: A union type is a type formed from two or more other types, representing values that may be any one of those types (https://totaltypescript.com/books/total-typescript-essentials/unions-literals-and-narrowing#union-types)",
  "TS: Type assertion is a way to tell TypeScript that you know better than it does what the type of something is (https://totaltypescript.com/books/total-typescript-essentials/annotations-and-assertions#the-as-assertion)",
  "TS: An object literal type is used to represent object types in TypeScript (https://totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#object-literal-types)",
  "TS: Type predicate turns the function into a type guard which asserts this – is a statement (https://totaltypescript.com/books/total-typescript-essentials/utility-folder-development-in-typescript#type-predicates)",
  "TS: An interface declaration is like a type alias, but it can be extended (https://totaltypescript.com/books/total-typescript-essentials/objects#interfaces)",
  "TS: The never keyword is a way to represent the type of something that should never occur (https://totaltypescript.com/books/total-typescript-essentials/unions-literals-and-narrowing#the-narrowest-type-never)",
  "TS: You can use the narrowing in operator to narrow the type of a variable (https://typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing)",
  "TS: You can postfix an expression with ! to tell TypeScript that you know it is not null or undefined. This works the same as an – as assertion (https://totaltypescript.com/books/total-typescript-essentials/annotations-and-assertions#the-non-null-assertion)",
  "TS: Literal type is a way to represent a specific value in TypeScript (https://totaltypescript.com/books/total-typescript-essentials/unions-literals-and-narrowing#literal-types)",
  "TS: The question mark next to this object property means that it is optional - it doesn't need to be specified on this object (https://totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#optional-object-properties)",
  "TS: The readonly keyword means that this property is can't be changed after it is been set (https://totaltypescript.com/books/total-typescript-essentials/mutability#readonly-object-properties)",
  "TS: Type Keyword type alias is like an interface, but it can't be extended - and it can represent things that interfaces can't (https://totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#type-aliases)",
  "TS: Variable type annotation tells the variable what type it should be (https://totaltypescript.com/books/total-typescript-essentials/annotations-and-assertions#annotating-variables-vs-values)",
  "TS: Function parameter type annotation tells the function what type the parameter should be (https://totaltypescript.com/books/total-typescript-essentials/essential-types-and-annotations#function-parameter-annotations)",
  "TS: Conditional type is a kind of if-else logic in TypeScript, but at the type level (https://totaltypescript.com/books/total-typescript-essentials/designing-your-types-in-typescript#conditional-types)",
  "TS: Conditional types can be nested in TypeScript (https://totaltypescript.com/books/total-typescript-essentials/designing-your-types-in-typescript#conditional-types)",
  "TS: You can add type parameters to functions to infer types based on what you call your function with (https://totaltypescript.com/books/total-typescript-essentials/utility-folder-development-in-typescript#generic-functions)",
  "TS: You can use a mapped type to create objects by iterating over keys (https://totaltypescript.com/books/total-typescript-essentials/designing-your-types-in-typescript#mapped-types)",
  "TS: You can remap keys in mapped types using the as keyword (https://totaltypescript.com/books/total-typescript-essentials/designing-your-types-in-typescript#key-remapping-with-as)",
];