# Nature Scene Prototype

A mid-fidelity interactive prototype featuring a calm natural atmosphere with forest and meadow scenes.

## Features

### Initial Screen
- Split view with forest (left) and meadow (right) sections
- Click either section to transition to that scene

### Forest Scene Interactions
- **Tap Forest Ground**: Grows a flower at the tap location with visible petals and stem
- **Tap Sky Area**: Spawns 2-3 birds that fly diagonally upward with flapping animation

### Meadow Scene Interactions
- **Tap Grass Area**: Grows a flower at the exact tap location with stem growth and bloom animation
- **Tap Sky Area**: Creates a drifting cloud that moves horizontally across the sky

## How to Use

1. Open `index.html` in a web browser
2. Click the left half (forest preview) or right half (meadow preview) to enter that scene
3. Once in a scene, tap different areas to trigger interactions:
   - In forest: tap ground for flowers, tap sky for birds
   - In meadow: tap grass for flowers, tap sky for clouds

## Files

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Interactive functionality

## Technologies

- Pure HTML5, CSS3, and vanilla JavaScript
- CSS animations and transitions
- No external dependencies