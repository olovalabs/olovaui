# Floating Elements Effect

Create a delightful floating animation that gives elements a gentle, weightless appearance. Perfect for creating depth and adding subtle motion to your interface.

## Implementation

```jsx
<div className="animate-float relative w-16 h-16 bg-blue-500 rounded-lg"></div>
```

## CSS Classes

- `animate-float`: Custom animation class for floating effect
- `relative`: Positions the element relatively
- `w-16 h-16`: Sets the width and height
- `bg-blue-500`: Background color
- `rounded-lg`: Rounded corners

## Custom CSS

Add this to your global CSS file:

```css
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

## Advanced Implementation

```jsx
<div className="group relative inline-block">
  <div className="animate-float group-hover:pause-animation transition-all duration-300">
    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg"></div>
  </div>
</div>
```

## Use Cases

- Social media icons
- Floating action buttons
- Decorative elements
- Product showcases
- Interactive cards