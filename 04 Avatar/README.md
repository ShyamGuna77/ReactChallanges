# Avatar Challange 


This application allows users to select from multiple avatars. Instead of rendering each avatar manually, we dynamically generate them by iterating over an array of avatar data.

## Features

- Displays a set of selectable avatars.
- Dynamically renders avatars using an array of data.
- Prevents duplicate code by using iteration.
- Properly handles unique keys for React elements to avoid warnings.

## Implementation

### Steps to Implement:

1. **Create an Array of Avatar Data**:
   - Store each avatar's `src` (image URL) and `alt` (description) in an array.

2. **Iterate Over the Array**:
   - Use `map()` to iterate through the array and generate an `<Avatar />` component for each item.

3. **Ensure Unique Keys**:
   - Assign a unique `key` prop for each avatar using a unique identifier (e.g., index or ID).

4. **Update the Component**:
   - Replace hardcoded `<Avatar />` elements with the dynamically generated list.

**The  Starter code Available in [codesandbox](https://codesandbox.io/p/sandbox/distracted-hertz-7qvhkn)