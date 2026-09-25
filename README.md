# Dev Stack Builder

A responsive React application that allow user to explore various development technology and build their customs ideal tech stack. 

## Technology Used
- React.js
- Tailwind CSS
- DaisyUI
- Vite
- React-Toastify

## Core Features
1. **Interactive Tech Grid:** Browse a responsive grid of modern web development technologi.
2. **Custom Stack Manager:** Add or remove technologies from your personalized stack sidebar with duplicate checking.
3. **Real-time Notifications:** Get instant visual feedback (alerts) when adding, removing, or trying to add duplicate items.

...

## React Questions & Answers

**1. What is JSX, and why is it used in React?**
JSX stands for JavaScript XML. It allows us to write HTML structure directly inside JavaScript code making it much easier to visualize and build React componentss.

**2. What is the difference between props and state?**
Props are used to pass data from a parent component to a child component and are read-only. State is used to manage dynamic data internally within a single component and can be updated.

**3. What does the useStat hook do, and where did you use it in this project?**
The `useState` hook allows functional components to store and update data. In this project, I used it to store the fetched JSON data and to keep track of the items the user has added to their stack.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?**
The `useEffect` hook used to perform side effects in components, like fetching data. I needed it to fetch the `data.json` file exactly once when the component mounts so the data is ready to be displayed on the screein.

**5. Why does every item in a .map() list need a unique key prop?**
A unique key helps React efficiently identify which specific items in a list have changed, been added, or removed, preventing UI bugs and unnecessary re-renders.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering mean showing different UI based on a certain condition. I used it in the sidebar: if the stack array is empty, it shows "Your stack is empty", otherwise, it renders the list of selected technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Data is passed from parent to child using `props`. To send data back, the parent passes a function to the child via props, and the child calls that function with the necessary data as an argument.