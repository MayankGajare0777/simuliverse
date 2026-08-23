import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ═══════════════════════════════════════════════════════════════
//  Ghibli Earth Shaders  —  Procedural, soft, painterly
// ═══════════════════════════════════════════════════════════════
const earthVertex = `
  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const earthFragment = `
  uniform float uTime;
  uniform vec3 uSunDir;
  varying vec3 vNormal;
  varying vec3 vPos;
  varying vec2 vUv;

  // Simplex-like noise
  float hash(vec3 p) {
    p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
             dot(p, vec3(269.5, 183.3, 246.1)),
             dot(p, vec3(113.5, 271.9, 124.6)));
    return fract(sin(p.x * p.y * p.z) * 43758.5453);
  }
  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float n = i.x + i.y * 57.0 + i.z * 113.0;
    return mix(mix(mix(hash(vec3(n)), hash(vec3(n+1.0)), f.x),
                   mix(hash(vec3(n+57.0)), hash(vec3(n+58.0)), f.x), f.y),
               mix(mix(hash(vec3(n+113.0)), hash(vec3(n+114.0)), f.x),
                   mix(hash(vec3(n+170.0)), hash(vec3(n+171.0)), f.x), f.y), f.z);
  }
  float fbm(vec3 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.03;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 pos = vPos * 2.0 + vec3(uTime * 0.012, 0.0, 0.0);
    float n1 = fbm(pos);
    float n2 = fbm(pos * 2.2 + vec3(100.0));
    float land = smoothstep(0.30, 0.50, n1 + n2 * 0.22);

    // Ghibli palette — soft, saturated, painterly
    vec3 oceanDeep  = vec3(0.04, 0.18, 0.28);
    vec3 oceanShal  = vec3(0.08, 0.32, 0.42);
    vec3 landLow    = vec3(0.22, 0.48, 0.32);
    vec3 landHigh   = vec3(0.38, 0.58, 0.30);
    vec3 oceanColor = mix(oceanDeep, oceanShal, n2);
    vec3 landColor  = mix(landLow, landHigh, n2);
    vec3 color = mix(oceanColor, landColor, land);

    // Soft Ghibli lighting — high ambient, gentle diffuse
    float light = dot(vNormal, normalize(uSunDir));
    light = smoothstep(-0.4, 1.0, light);
    float ambient = 0.50;
    float diffuse = light * 0.50;
    color *= (ambient + diffuse);

    // Wispy clouds
    float cloudNoise = fbm(vPos * 4.5 + vec3(uTime * 0.015, uTime * 0.006, 0.0));
    float cloud = smoothstep(0.46, 0.66, cloudNoise) * (1.0 - land * 0.35);
    vec3 cloudCol = vec3(0.94, 0.97, 0.99);
    color = mix(color, cloudCol, cloud * 0.40);

    // Atmospheric rim glow
    float rim = 1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
    rim = pow(rim, 4.0);
    vec3 atmo = vec3(0.28, 0.75, 0.92);
    color += atmo * rim * 0.60;

    // Soft haze
    color = mix(color, vec3(0.50, 0.70, 0.80), 0.05);

    gl_FragColor = vec4(color, 1.0);
  }
`

const atmoVertex = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`
const atmoFragment = `
  varying vec3 vNormal;
  void main() {
    float rim = 1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
    rim = pow(rim, 3.0);
    gl_FragColor = vec4(0.20, 0.70, 0.90, rim * 0.50);
  }
`

// ═══════════════════════════════════════════════════════════════
//  CosmosScene Component
// ═══════════════════════════════════════════════════════════════
export default function CosmosScene() {
  const canvasRef = useRef(null)
  const dataRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x020204, 1)

    // ── Scene ──
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x020204, 0.012)

    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 16, 36)

    // ── Starfield ──
    const isMobile = window.innerWidth < 768
    const starCount = isMobile ? 1000 : 3000
    const starsGeo = new THREE.BufferGeometry()
    const posArr = new Float32Array(starCount * 3)
    const sizeArr = new Float32Array(starCount)
    for (let i = 0; i < starCount; i++) {
      const r = 50 + Math.random() * 150
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      posArr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      posArr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      posArr[i * 3 + 2] = r * Math.cos(phi)
      sizeArr[i] = Math.random() * 1.0 + 0.2
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3))
    const starsMat = new THREE.PointsMaterial({
      color: 0xffffff, size: 0.06, transparent: true,
      opacity: 0.7, sizeAttenuation: true
    })
    const stars = new THREE.Points(starsGeo, starsMat)
    scene.add(stars)

    // ── Sun ──
    const sunGeo = new THREE.SphereGeometry(2.5, 40, 40)
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffcc44 })
    const sun = new THREE.Mesh(sunGeo, sunMat)
    scene.add(sun)

    const glowGeo = new THREE.SphereGeometry(3.8, 40, 40)
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffaa22, transparent: true, opacity: 0.10,
      blending: THREE.AdditiveBlending, side: THREE.BackSide
    })
    const sunGlow = new THREE.Mesh(glowGeo, glowMat)
    sun.add(sunGlow)

    const sunLight = new THREE.PointLight(0xffcc88, 2.0, 100)
    sunLight.position.set(0, 0, 0)
    scene.add(sunLight)
    scene.add(new THREE.AmbientLight(0x111122, 0.5))

    // ── Planets ──
    const planetData = [
      { d: 5.0, s: 0.25, c: 0x999999, sp: 0.032 },
      { d: 7.5, s: 0.38, c: 0xe8d5a0, sp: 0.022 },
      { d: 10.5, s: 0.48, c: 0x2a7a9a, sp: 0.016 },
      { d: 14.0, s: 0.35, c: 0xc45a3a, sp: 0.011 },
      { d: 20.0, s: 1.3, c: 0xc4a070, sp: 0.007 },
      { d: 28.0, s: 1.1, c: 0xd4c4a0, sp: 0.004, rings: true },
    ]

    const planets = []
    const orbitRings = []

    planetData.forEach((p) => {
      // Orbit ring
      const ringGeo = new THREE.RingGeometry(p.d - 0.02, p.d + 0.02, 128)
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffffff, transparent: true, opacity: 0.03, side: THREE.DoubleSide
      })
      const ring = new THREE.Mesh(ringGeo, ringMat)
      ring.rotation.x = Math.PI / 2
      scene.add(ring)
      orbitRings.push(ring)

      // Planet
      const geo = new THREE.SphereGeometry(p.s, 32, 32)
      const mat = new THREE.MeshStandardMaterial({ color: p.c, roughness: 0.9, metalness: 0.0 })
      const mesh = new THREE.Mesh(geo, mat)

      if (p.rings) {
        const rGeo = new THREE.RingGeometry(p.s * 1.5, p.s * 2.2, 64)
        const rMat = new THREE.MeshBasicMaterial({
          color: 0xc8b898, transparent: true, opacity: 0.4, side: THREE.DoubleSide
        })
        const rMesh = new THREE.Mesh(rGeo, rMat)
        rMesh.rotation.x = Math.PI / 2.3
        mesh.add(rMesh)
      }

      scene.add(mesh)
      planets.push({ mesh, ...p, angle: Math.random() * Math.PI * 2 })
    })

    // ── Ghibli Earth ──
    const earthGeo = new THREE.SphereGeometry(4.2, 128, 128)
    const earthMat = new THREE.ShaderMaterial({
      vertexShader: earthVertex,
      fragmentShader: earthFragment,
      uniforms: {
        uTime: { value: 0 },
        uSunDir: { value: new THREE.Vector3(1, 0.3, 0.5).normalize() },
      },
    })
    const earth = new THREE.Mesh(earthGeo, earthMat)
    earth.position.set(0, -65, 0)
    scene.add(earth)

    // Atmosphere
    const atmoGeo = new THREE.SphereGeometry(4.6, 64, 64)
    const atmoMat = new THREE.ShaderMaterial({
      vertexShader: atmoVertex,
      fragmentShader: atmoFragment,
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const atmosphere = new THREE.Mesh(atmoGeo, atmoMat)
    earth.add(atmosphere)

    // Simulation grid wireframe
    const gridGeo = new THREE.SphereGeometry(5.0, 32, 32)
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff, transparent: true, opacity: 0.0, wireframe: true
    })
    const grid = new THREE.Mesh(gridGeo, gridMat)
    earth.add(grid)

    // Moon
    const moonGeo = new THREE.SphereGeometry(0.8, 20, 20)
    const moonMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.95 })
    const moon = new THREE.Mesh(moonGeo, moonMat)
    scene.add(moon)

    // ── Store refs ──
    dataRef.current = { renderer, scene, camera, earth, sun, planets, stars, moon, grid, orbitRings, earthMat, gridMat, sunGlow }

    // ── Animation Loop ──
    let raf
    const clock = new THREE.Clock()

    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      earthMat.uniforms.uTime.value = t
      earth.rotation.y = t * 0.035
      grid.rotation.y = t * 0.035

      planets.forEach((p) => {
        p.angle += p.sp * 0.3
        p.mesh.position.x = Math.cos(p.angle) * p.d
        p.mesh.position.z = Math.sin(p.angle) * p.d
        p.mesh.rotation.y += 0.005
      })

      moon.position.x = Math.cos(t * 0.22) * 8.5
      moon.position.z = Math.sin(t * 0.22) * 8.5
      moon.position.y = Math.sin(t * 0.06) * 1.0

      stars.rotation.y = t * 0.0012
      sunGlow.scale.setScalar(1 + Math.sin(t * 0.35) * 0.05)

      renderer.render(scene, camera)
    }
    animate()

    // ── Resize ──
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // ── Scroll Animation ──
    const wrapper = document.getElementById('cosmos-wrapper')
    let scrollTl = null

    if (wrapper) {
      scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: '+=400%',
          pin: true,
          scrub: 1.0,
          anticipatePin: 1,
        },
      })

      // Phase 1: Solar system view (0%–25%)
      scrollTl.to(camera.position, { x: 3, y: 14, z: 30, duration: 0.25, ease: 'none' }, 0)

      // Phase 2: Transition — solar system shrinks, Earth rises (25%–65%)
      scrollTl.to(sun.scale, { x: 0.2, y: 0.2, z: 0.2, duration: 0.40, ease: 'none' }, 0.25)
      scrollTl.to(sun.position, { x: -16, y: 8, z: -22, duration: 0.40, ease: 'none' }, 0.25)

      planets.forEach((p) => {
        scrollTl.to(p.mesh.scale, { x: 0.2, y: 0.2, z: 0.2, duration: 0.40, ease: 'none' }, 0.25)
      })
      orbitRings.forEach((ring) => {
        scrollTl.to(ring.material, { opacity: 0, duration: 0.40, ease: 'none' }, 0.25)
      })

      // Earth rises
      scrollTl.to(earth.position, { x: 0, y: 0, z: 0, duration: 0.40, ease: 'none' }, 0.25)
      scrollTl.to(camera.position, { x: 0, y: 0, z: 12, duration: 0.40, ease: 'none' }, 0.25)

      // Phase 3: Earth close-up (65%–100%)
      scrollTl.to(gridMat, { opacity: 0.10, duration: 0.20, ease: 'none' }, 0.65)
      scrollTl.to(camera.position, { x: 2, y: 1, z: 9, duration: 0.35, ease: 'none' }, 0.65)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      if (scrollTl) scrollTl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 1,
      }}
    />
  )
}
