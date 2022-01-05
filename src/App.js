import logo from './logo.svg';
import React, { useRef, useState } from 'react'
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber'

function Section(props){
  return (  
    < div className= 'section-main'>

    <h1>{props.name}</h1>
    <p>{props.content}</p>
    
    </div>
  )
    
}

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Section  name='JS Exploration Zone' 
        content='Here is where I experiment with new concepts, designs, 
        and methodologies with everything Javascript,
         mostly just for fun but also to improve my skills and grow as a developer'/>
        <Section name='Three.Js'/>
        <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Box position={[2.4, 0, 0]} />
      <Box position={[3.6, 0, 0]} />
      <Box position={[4.7, 0, 0]} />
    </Canvas>
      </header>
    </div>
  );
}

export default App;
