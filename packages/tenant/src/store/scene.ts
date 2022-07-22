import { Material } from "three";
import create from "zustand";
import { mountStoreDevtool } from 'simple-zustand-devtools';
type SceneStore = {
  objects:{},
  ambientLight: {
    intensity: number;
  };
  newMaterial: {
    type: "meshPhysicalMaterial" | "meshStandardMaterial" | "meshToonMaterial" | "meshToonMaterial";
  };
  materials:Map<string,Material>,
  currentMaterial: {},
  currentNode: {},
  setCurrentNode: (val) => void;
  setCurrentMaterial: (val) => void;
  setMaterials: (val) => void;
  increaseAmbientLight?: (val: number) => void;
  changeColor?: (val) => void;
  changeMaterial: (val: number) => void;
  changeCurrentMaterial: (val) => void;
  addObject: (val) => void;
};

const useStore = create<SceneStore>((set) => ({
  objects:new Map(),
  ambientLight: {
    intensity: 0,
  },
  materials: new Map(),
  setMaterials: (val) => {
    set(() => ({
      materials: { ...val },
    }));
  },
  addObject: (obj3d) => {
    set((state) => {
      const { id, path,object } = obj3d;
      return {
        objects: {
          ...state.objects,
          [id]: {
            id, path, object
          }
        }
     }
})
  },
  newMaterial: {
    type: "meshPhysicalMaterial",
    options: {},
  },
  currentNode: {},
  setCurrentNode:(val)=> {
    set(() => ({
      currentNode: val,
    }));
  },
  currentMaterial: {},
  setCurrentMaterial: (val) => {
    set(() => ({
      currentMaterial: val,
    }));
  },
  changeCurrentMaterial: (val) => {
    console.log('changeCurrentMaterial',val);
    set((state) => ({
      currentMaterial: { ...state.currentMaterial,...val},
    }));
  },
  increaseAmbientLight: (val) =>
    set(() => ({
      ambientLight: {
        intensity: val,
      },
    })),
  changeRoughness: () => {},
  changeMaterial: (val: any) => {
    set((state) => ({
      newMaterial: { ...state.newMaterial, ...val },
    }));
  },
  //   removeAllBears: () => set({ bears: 0 }),
}));


if (import.meta.env.MODE === 'development') {
  mountStoreDevtool('Store', useStore);
}

export { useStore };
