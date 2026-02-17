# Gradient Text Effect

Create stunning text with gradient colors that adds visual appeal and modern aesthetics to your typography.

## Implementation

```jsx
<h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-4xl font-bold">
  Gradient Text
</h1>
```

## CSS Classes

- `bg-gradient-to-r`: Creates a horizontal gradient
- `from-blue-600 to-purple-600`: Defines the gradient color stops
- `bg-clip-text`: Clips the background to the text shape
- `text-transparent`: Makes the text transparent to reveal the background gradient
- `font-bold`: Makes the text bold for better visibility

## Variations

```jsx
// Vertical gradient
<h1 className="bg-gradient-to-b from-pink-500 to-orange-400 bg-clip-text text-transparent text-4xl font-bold">
  Vertical Gradient
</h1>

// Diagonal gradient
<h1 className="bg-gradient-to-tr from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent text-4xl font-bold">
  Diagonal Gradient
</h1>

// Animated gradient
<h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent text-4xl font-bold bg-[length:200%_200%] animate-gradient-x">
  Animated Gradient
</h1>
```

## Use Cases

- Page headings and titles
- Logo text
- Call-to-action text
- Feature highlights
- Hero sections