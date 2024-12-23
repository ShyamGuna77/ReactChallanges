# Locally-persisted state
- Let's suppose we're building an application with a “Dark Mode” toggle.

- It would be really annoying if users had to keep toggling their preferred mode every time they load our application!

- Let's update the code below so that the user's preference is saved in localStorage, and restored when the page loads.

- In other words, the current value of isDarkMode should be "remembered", and used when the page is refreshed:

## Live Demo 

The code available in [sandbox](https://codesandbox.io/s/r2483l?file=%2FApp.js&utm_medium=sandpack)

### We can do this in plain JS with the following code:

``` javascript 

// Save the value:
window.localStorage.setItem('is-dark-mode', true);

// Retrieve the value:
window.localStorage.getItem('is-dark-mode');
 ```

## Acceptance Criteria:

1. The value of isDarkMode should be saved in localStorage whenever it changes, using the useEffect hook.

2. The initial value of the isDarkMode state variable should be retrieved from localStorage (or set to false if no value has been saved).

3. You can use the string "is-dark-mode" for the key.

4. Note: Items saved to localStorage are always saved as a string. You'll need to convert the stored value back to boolean. You can do this with JSON.parse().