# Parallax Scroll Effect

Create a depth illusion by moving background elements at a different speed than foreground elements during scrolling. Adds dimension and engagement to your pages.

## Implementation

```jsx
<div className="relative h-screen overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-purple-600 transform translate-y-0" style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}></div>
  <div className="relative z-10 flex items-center justify-center h-full">
    <div className="text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Parallax Effect</h1>
      <p>Scroll to see the effect</p>
    </div>
  </div>
</div>
```

## CSS Classes

- `relative`: Positions the container relatively
- `h-screen`: Full viewport height
- `overflow-hidden`: Prevents scrollbars
- `absolute inset-0`: Positions background absolutely
- `transform`: Allows transformation
- `z-10`: Z-index for layering

## JavaScript Implementation

```jsx
import { useState, useEffect } from 'react';

const ParallaxSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-400 to-purple-600" 
        style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
      ></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Parallax Effect</h1>
          <p>Scroll to see the effect</p>
        </div>
      </div>
    </div>
  );
};
```

## Use Cases

- Hero sections
- Landing pages
- Storytelling websites
- Portfolio sites
- Creative showcases