import { MeshStandardMaterialProps } from "@react-three/fiber";
import { MeshPhysicalMaterial } from "three";
import create from "zustand";

type SceneStore = {
  ambientLight: {
    intensity: number;
  };
  newMaterial: {
    type: "meshPhysicalMaterial" | "meshStandardMaterial" | "meshToonMaterial" | "meshToonMaterial";
  };
  increaseAmbientLight?: (val: number) => void;
  changeColor?: (val) => void;
  changeMaterial: (val: number) => void;
};

const useStore = create<SceneStore>((set) => ({
  ambientLight: {
    intensity: 0,
  },
  newMaterial: {
    type: "meshPhysicalMaterial",
    options: {},
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
