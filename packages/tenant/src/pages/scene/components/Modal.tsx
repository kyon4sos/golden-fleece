import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Select } from '@react-three/postprocessing'
import { useControls, folder } from "leva"
type onLoad = (gltf: any) => void

export default function Model({ path, onLoad, ...restProps }: { path: string, onLoad?: onLoad }) {
  // const group = useRef()
  // const gltf = useLoader(GLTFLoader, '/Poimandres.gltf')
  const group = useRef(null)
  const config = useControls({
    all: { value: false },
    parts: folder(
      {
        shoe: { value: false },
        shoe_1: { value: false },
        shoe_2: { value: false },
        shoe_3: { value: true },
        shoe_4: { value: false },
        shoe_5: { value: false },
        shoe_6: { value: false },
        shoe_7: { value: false },
      },
      { collapsed: true },
    ),
  })
  let gltf = useGLTF(path)
  console.log(gltf)
  useEffect(() => {
    gltf = useGLTF(path)
    if (onLoad) {
      onLoad(gltf)
    }
    console.log(gltf.nodes);

  }, [path])

  return (
    <group ref={group} {...restProps} dispose={null}>
      {
        gltf && Object.keys(gltf.nodes)
          .map((key) =>
            <Select  key={key}name={key} enabled={config[key]}>
              <mesh geometry={gltf.nodes[key].geometry} material={gltf.nodes[key].material} />
            </Select>)
      }
    </group>
  )
}