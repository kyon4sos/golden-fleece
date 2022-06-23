import { useGLTF } from '@react-three/drei'

export default function Model({ modal }: { modal: string }) {
    // const group = useRef()
    // const gltf = useLoader(GLTFLoader, '/Poimandres.gltf')
    const gltf = useGLTF(modal)
    return (
        <primitive object={gltf.scene} />
        // <group ref={group} {...props} dispose={null}>
        //     <mesh castShadow receiveShadow geometry={nodes.Curve007_1.geometry} material={materials['Material.001']} />
        //     <mesh castShadow receiveShadow geometry={nodes.Curve007_2.geometry} material={materials['Material.002']} />
        // </group>
    )
}

