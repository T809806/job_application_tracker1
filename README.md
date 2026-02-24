# job_application_tracker1


1. Difference between getElementById, getElementsByClassName, querySelector / querySelectorAll

getElementById('id') → single element by ID

getElementsByClassName('class') → multiple elements (live HTMLCollection)

querySelector('.class') → first match, any CSS selector

querySelectorAll('.class') → all matches, static NodeList


2. How do you create and insert a new element into the DOM?

const div = document.createElement('div');
div.textContent = 'Hello';
document.body.appendChild(div);

3. What is Event Bubbling? And how does it work?

Event moves child → parent → root.

 Example: click on button triggers div’s click if not stopped.

4.  What is Event Delegation in JavaScript? Why is it useful?

Attach one listener to parent, handle child events via event.target. Useful for dynamic elements and less code.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() → stops browser default (e.g., link, form)

stopPropagation() → stops event bubbling to parents