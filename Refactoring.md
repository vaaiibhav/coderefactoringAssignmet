# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I have first of all rewritten the code with CommonJS standard practises for exporting functions, After that i noticed a lot of if else which actually slows the code as well as makes if difficult to read, so i have shifted the else statements to negative If statements to make the code more readable, finally i have introduced returns in every IF in the first part ( if (event) ) of the code because it consists to chec a single if and can return there itself saving the cursor to move to next line and then returning as ther will be overwritten. while in hte second IF Part ( if (candidate)) here i am actually overwriting the value for the variable candidate and returning finally. It may occur that this may not be a consistent at first but i tried to display the code cleanliness by treating scenarious with code styles realtively. so please do not judge consitency as a whole but in Parts only.
