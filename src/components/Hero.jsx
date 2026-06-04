import { useEffect } from "react"
import * as THREE from "three"
import "../styles/main.css"

function Hero() {

    useEffect(() => {
        const canvas = document.getElementById('hero-canvas')
        if (!canvas) return

        let width = canvas.clientWidth
        let height = canvas.clientHeight

        // ─── THREE.JS SCENE SETUP ───
        const scene = new THREE.Scene()
        
        // Camera
        const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)
        camera.position.z = 12

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        })
        renderer.setSize(width, height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        // Group to hold all 3D objects
        const group = new THREE.Group()
        scene.add(group)

        // ─── 3D CYBER SPHERE CREATION ───
        const particleCount = 280
        const geometry = new THREE.BufferGeometry()
        const positions = new Float32Array(particleCount * 3)
        const colors = new Float32Array(particleCount * 3)

        const colorCyan = new THREE.Color('#00f2fe')
        const colorPurple = new THREE.Color('#9b51e0')

        for (let i = 0; i < particleCount; i++) {
            // Distribute points evenly on a sphere using Fibonacci lattice
            const phi = Math.acos(-1 + (2 * i) / particleCount)
            const theta = Math.sqrt(particleCount * Math.PI) * phi
            
            const radius = 4.5 + (Math.random() * 0.4 - 0.2) // slight variance in radius
            
            const x = radius * Math.cos(theta) * Math.sin(phi)
            const y = radius * Math.sin(theta) * Math.sin(phi)
            const z = radius * Math.cos(phi)

            positions[i * 3] = x
            positions[i * 3 + 1] = y
            positions[i * 3 + 2] = z

            // Color interpolation (gradient between cyan and purple based on height)
            const mixedColor = colorCyan.clone().lerp(colorPurple, (y + 4.5) / 9)
            colors[i * 3] = mixedColor.r
            colors[i * 3 + 1] = mixedColor.g
            colors[i * 3 + 2] = mixedColor.b
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        // Interactive Points Material
        const material = new THREE.PointsMaterial({
            size: 0.12,
            vertexColors: true,
            transparent: true,
            opacity: 0.85,
            sizeAttenuation: true
        })

        // Particles System
        const points = new THREE.Points(geometry, material)
        group.add(points)

        // Add a soft wireframe sphere inside to give depth
        const sphereGeo = new THREE.SphereGeometry(4.35, 16, 16)
        const sphereMat = new THREE.MeshBasicMaterial({
            color: 0x9b51e0,
            wireframe: true,
            transparent: true,
            opacity: 0.04
        })
        const wireSphere = new THREE.Mesh(sphereGeo, sphereMat)
        group.add(wireSphere)

        // ─── INTERACTION & INTERACTIVE LERP ROTATION ───
        let mouseX = 0
        let mouseY = 0
        let targetX = 0
        let targetY = 0

        function onMouseMove(e) {
            // Normalize mouse position: -1 to 1
            mouseX = (e.clientX / window.innerWidth) * 2 - 1
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1
        }
        window.addEventListener('mousemove', onMouseMove)

        // ─── RESIZING ───
        function onResize() {
            width = window.innerWidth
            height = window.innerHeight
            
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            
            renderer.setSize(width, height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        }
        window.addEventListener('resize', onResize)

        // ─── RENDER LOOP ───
        const clock = new THREE.Clock()
        let animId

        function tick() {
            const elapsedTime = clock.getElapsedTime()

            // Smooth rotation calculations
            points.rotation.y = elapsedTime * 0.08
            points.rotation.x = Math.sin(elapsedTime * 0.2) * 0.1
            wireSphere.rotation.y = -elapsedTime * 0.05

            // Track mouse positions with lerping interpolation
            targetX = mouseX * 0.4
            targetY = mouseY * 0.4

            group.rotation.y += 0.05 * (targetX - group.rotation.y)
            group.rotation.x += 0.05 * (targetY - group.rotation.x)

            // Render
            renderer.render(scene, camera)
            animId = requestAnimationFrame(tick)
        }
        tick()

        // Cleanup on unmount
        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('resize', onResize)
            geometry.dispose()
            material.dispose()
            sphereGeo.dispose()
            sphereMat.dispose()
            renderer.dispose()
        }
    }, [])

    return (
        <section id="hero">
            {/* Interactive 3D Canvas */}
            <canvas id="hero-canvas"></canvas>
            <div className="grid-overlay"></div>
            <div className="glow-orb glow-orb-1"></div>
            <div className="glow-orb glow-orb-2"></div>
            
            {/* HUD Code Decals floating */}
            <div className="code-float" style={{ left: '5%', animationDuration: '24s', animationDelay: '0s' }}>const security = true;</div>
            <div className="code-float" style={{ left: '12%', animationDuration: '30s', animationDelay: '4s' }}>npm audit --fix</div>
            <div className="code-float" style={{ left: '78%', animationDuration: '28s', animationDelay: '1s' }}>aws ec2 describe-instances</div>
            <div className="code-float" style={{ left: '88%', animationDuration: '34s', animationDelay: '5s' }}>{`<SecureApp auth={jwt} />`}</div>
            <div className="code-float" style={{ left: '48%', animationDuration: '26s', animationDelay: '7s' }}>OWASP.top10.map(patch)</div>
            <div className="code-float" style={{ left: '93%', animationDuration: '32s', animationDelay: '2s' }}>git push origin main</div>
            
            <div className="hero-content">
                <div className="hero-badge">Available for Opportunities</div>
                <div className="hero-name">Avigat Sharma</div>
                <h1 className="hero-title">
                    <span className="line1">Full Stack Developer</span>
                    <span className="line2">& Security Engineer</span>
                </h1>
                <p className="hero-sub">Building Secure, Scalable & High-Performance Web Applications</p>
                <p className="hero-intro"> // Security-first developer with expertise in AWS infrastructure & OWASP compliance</p>
                <div className="hero-ctas">
                    <a href="#projects" className="btn btn-primary">⟡ View Projects</a>
                    
                    {/* Resume download/view button */}
                    <a href="https://drive.google.com/file/d/1PIg5fgv2AHClDs2VnfPl70u-4S_RpB1L/view?usp=drive_link" target="_blank" rel="noreferrer" className="btn btn-outline">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px'}}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Download Resume
                    </a>
                    
                    {/* GitHub Profile Button */}
                    <a href="https://github.com/avigats" target="_blank" rel="noreferrer" className="btn btn-outline">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '4px', verticalAlign: 'middle'}}>
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                    </a>

                    {/* LinkedIn Profile Button */}
                    <a href="https://www.linkedin.com/in/avigat-sharma-867b11184" target="_blank" rel="noreferrer" className="btn btn-outline">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: '4px', verticalAlign: 'middle'}}>
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        LinkedIn
                    </a>

                    <a href="#contact" className="btn btn-outline">✉ Contact Me</a>
                </div>
            </div>
        </section>
    )
}

export default Hero