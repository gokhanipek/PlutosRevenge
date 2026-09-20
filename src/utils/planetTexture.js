// Single source for surface textures.
//
// Three screens need a texture from nothing but a body's name (the map, the
// planet info screen, and the battle screen, which also has to resolve the
// non-planet "orbit" opponent). Vite resolves this glob at build time, so the
// lookup is synchronous — the screens no longer render a hardcoded default for
// one frame while an async import() settles.
const modules = import.meta.glob('../assets/images/*.jpeg', {
  eager: true,
  import: 'default',
});

const textures = Object.entries(modules).reduce((acc, [path, url]) => {
  const file = path.slice(path.lastIndexOf('/') + 1).replace('.jpeg', '');
  acc[file.toUpperCase()] = url;
  return acc;
}, {});

const FALLBACK = textures.MARS;

/** Texture URL for a body name, case-insensitive. Falls back rather than 404s. */
export function planetTexture(name) {
  if (!name) return FALLBACK;
  return textures[String(name).toUpperCase()] || FALLBACK;
}

/** Same, pre-wrapped for use in a CSS custom property. */
export function planetTextureCss(name) {
  return `url(${planetTexture(name)})`;
}

export default planetTexture;
