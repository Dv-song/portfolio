import {
  ShaderGradientCanvas,
  ShaderGradient,
  // @ts-ignore
  useThree,
  // @ts-ignore
  useFrame,
} from "shadergradient";

// Gradient Customization No. 1
// https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%2300a455&color2=%232467ca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.15&uStrength=1.5&uTime=8&wireframe=false

const GradientBackground = () => {
  function Gradient() {
    const { scene } = useThree();

    useFrame(() => {
      const mesh: any = scene.getObjectByName("shadergradient-mesh");

      if (mesh.material.userData.uNoiseStrength) {
        mesh.material.userData.uNoiseStrength.value = 5;
      }
    });

    return (
      <ShaderGradient
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.5&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%2300a455&color2=%232467ca&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.05&uStrength=1.5&uTime=8&wireframe=false"
      />
    );
  }

  return (
    <ShaderGradientCanvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <Gradient />
    </ShaderGradientCanvas>
  );
};

export default GradientBackground;
