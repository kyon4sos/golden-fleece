import { Material } from "three";
import create from "zustand";

type SceneStore = {
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
  changeCurrentMaterial:(val)=>void
};

const useStore = create<SceneStore>((set) => ({
  ambientLight: {
    intensity: 0,
  },
  materials: new Map(),
  setMaterials: (val) => {
    set(() => ({
      materials: { ...val },
    }));
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

export { useStore };
