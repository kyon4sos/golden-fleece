import { useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Select } from '@react-three/postprocessing'

type onLoad = (gltf: any) => void
type select = {
  [index:string]:{value:boolean}
}
export default function Model({ path, onLoad,select, ...restProps }: { path: string, onLoad?: onLoad,select?:select }) {
  // const group = useRef()
  // const gltf = useLoader(GLTFLoader, '/Poimandres.gltf')
  const group = useRef(null)

  let gltf = useGLTF(path)
  // console.log(gltf)
  useEffect(() => {
    gltf = useGLTF(path)
    if (onLoad) {
      onLoad(gltf)
    }
  }, [path])

  const { nodes } = gltf;
  return (

    <group ref={group} {...restProps} dispose={null}>
      {
        gltf && Object.keys(nodes)
          .map((key) =>
            <Select  key={key} name={key} enabled={select?.[key]?.value}>
              <mesh geometry={nodes[key].geometry} material={nodes[key].material} />
            </Select>)
      }
    </group>
  )
}