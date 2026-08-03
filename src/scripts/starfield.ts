// Lazy-loaded Three.js starfield.
// This file is a separate chunk, fetched only when the effect actually runs.
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  BufferGeometry,
  BufferAttribute,
  Points,
  PointsMaterial,
  Clock,
  AdditiveBlending,
  NormalBlending,
} from 'three';

export function initStarfield(canvas: HTMLCanvasElement) {
  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const camera = new PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
  camera.position.z = 60;

  // Two overlapping parallax layers for depth: a dim far field and a
  // brighter accent layer with additive glow.
  const build = (count: number, spread: { x: number; y: number; z: number }, opacity: number, additive: boolean) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread.x;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread.y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread.z;
    }
    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(positions, 3));

    const mat = new PointsMaterial({
      color: 0x4af6a8,
      size: 0.32,
      sizeAttenuation: true,
      transparent: true,
      opacity,
      depthWrite: false,
      blending: additive ? AdditiveBlending : NormalBlending,
    });
    return new Points(geo, mat);
  };

  const spread = { x: 220, y: 130, z: 90 };
  const farCount = Math.min(Math.floor((innerWidth * innerHeight) / 7000), 320);
  const nearCount = Math.min(Math.floor((innerWidth * innerHeight) / 26000), 70);

  const far = build(farCount, spread, 0.35, false);
  const near = build(nearCount, spread, 0.9, true);
  scene.add(far, near);

  const resize = () => {
    const w = innerWidth;
    const h = innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  };
  resize();
  addEventListener('resize', resize);

  const clock = new Clock();
  let raf = 0;

  const animate = () => {
    raf = requestAnimationFrame(animate);
    const t = clock.getElapsedTime();
    // slow, gentle motion
    far.rotation.y = t * 0.015;
    far.rotation.x = Math.sin(t * 0.04) * 0.04;
    near.rotation.y = -t * 0.03;
    near.rotation.x = Math.cos(t * 0.05) * 0.05;
    renderer.render(scene, camera);
  };

  // Pause when the tab is hidden to save battery.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else animate();
  });

  animate();

  // Allow cleanup if the canvas is ever removed.
  return () => {
    cancelAnimationFrame(raf);
    renderer.dispose();
    geoDispose(far);
    geoDispose(near);
  };

  function geoDispose(points: Points) {
    points.geometry.dispose();
    (points.material as PointsMaterial).dispose();
  }
}
