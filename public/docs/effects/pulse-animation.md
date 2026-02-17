# Pulse Animation Effect

A subtle pulsing animation that draws attention to elements without being too distracting. Great for indicating activity or highlighting important information.

## Implementation

```jsx
<div className="animate-pulse bg-gray-200 rounded-full h-12 w-12"></div>
```

## CSS Classes

- `animate-pulse`: Built-in Tailwind class for pulse animation
- `rounded-full`: Makes the element circular
- `h-12 w-12`: Sets the size of the pulsing element

## Advanced Implementation

```jsx
<div className="relative inline-flex">
  <div className="flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
  </div>
</div>
```

## Use Cases

- Notification indicators
- Loading states
- Online status indicators
- Activity markers
- Promotional badges