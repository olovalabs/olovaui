# Glowing Border Effect

A simple yet eye-catching border effect that creates a glowing appearance around elements. Perfect for highlighting important sections or buttons.

## Implementation

```jsx
<div className="relative rounded-lg p-6 bg-gray-900 border border-gray-800">
  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 blur-sm"></div>
  <div className="relative z-10 rounded-lg bg-gray-900 p-6 border border-gray-700">
    Content goes here
  </div>
</div>
```

## CSS Classes

- `bg-gradient-to-r`: Creates a horizontal gradient
- `from-blue-500 via-purple-500 to-pink-500`: Defines the gradient colors
- `opacity-70`: Makes the glow semi-transparent
- `blur-sm`: Applies subtle blur to create the glow effect
- `z-10`: Ensures content stays above the glow

## Use Cases

- Highlighting featured cards
- Call-to-action buttons
- Important notifications
- Interactive elements that need attention