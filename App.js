import { View, Dimensions } from "react-native";
import { Text, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { useRef, Suspense, useLayoutEffect } from "react";
import { PerspectiveCamera } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from "expo-three";
import { s } from "./App.style";

const { width, height } = Dimensions.get("window");

function Shoe() {
  const [base, normal, rough] = useLoader(TextureLoader, [
    require("./assets/Airmax/textures/BaseColor.jpg"),
    require("./assets/Airmax/textures/Normal.jpg"),
    require("./assets/Airmax/textures/Roughness.png"),
  ]);

  const material = useLoader(MTLLoader, require("./assets/Airmax/shoe.mtl"));

  const obj = useLoader(
    OBJLoader,
    require("./assets/Airmax/shoe.obj"),
    (loader) => {
      material.preload();
      loader.setMaterials(material);
    }
  );

  const mesh = useRef();

  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = base;
        child.material.normalMap = normal;
        child.material.roughnessMap = rough;
      }
    });
  }, [obj]);

  // Rotate the object every frame
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01; // Rotate around the Y-axis
    }
  });

  return (
    <mesh ref={mesh} rotation={[0, 0, 0]}>
      <primitive object={obj} scale={10} />
    </mesh>
  );
}

export default function App() {
  const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 7); // Set the camera position to be outside the object

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <View style={s.canvasContainer}>
          <Canvas camera={camera}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1000} />
            <Suspense fallback={null}>
              <Shoe />
            </Suspense>
          </Canvas>
        </View>
        <Image style={s.logo} source={require("./assets/Airmax/nike.png")} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
