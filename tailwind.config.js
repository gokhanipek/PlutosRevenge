/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Space palette. The game canvas sits on `void`; panels and overlays
        // step up from it so text keeps its contrast against the starfield.
        abyss: '#06060a',
        void: '#0b0b12',
        panel: '#15151f',
        edge: '#2b2b3d',
        ice: '#b1e4e8',
        ember: '#ff7a45',
        plasma: '#a78bfa',
        chalk: '#ececf5',
        muted: '#a6a6bd',
      },
      fontFamily: {
        display: ['Orbitron', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        // Sphere lighting. The sun sits at the left of the map, so the lit side
        // is the left: a soft white inset on the left/top, a heavy black inset
        // on the right/bottom for the terminator and limb, and a faint outer
        // rim so the body reads as an object in space rather than a hole.
        // Units are `em` and `.planet` sets font-size to its own diameter, so
        // the lighting scales with a body from Pluto's 5px to Jupiter's 90px.
        sphere:
          'inset 0.05em 0.03em 0.08em -0.02em rgba(255,255,255,0.22), inset -0.09em -0.05em 0.15em 0.02em rgba(0,0,0,0.85), 0 0 0.12em -0.02em rgba(177,228,232,0.25)',
        'sphere-sun': '0 0 40px 10px rgba(255,122,69,0.45), 0 0 90px 30px rgba(255,122,69,0.18)',
        panel: '0 10px 30px -12px rgba(0,0,0,0.8)',
      },
      fontSize: {
        // The 800x500 canvas is transform-scaled down to ~0.45 on a phone, so
        // in-canvas copy starts larger than a browser default would.
        canvas: ['17px', { lineHeight: '1.6' }],
        'canvas-sm': ['15px', { lineHeight: '1.55' }],
        'canvas-xs': ['13px', { lineHeight: '1.5' }],
      },
    },
  },
  plugins: [],
};
