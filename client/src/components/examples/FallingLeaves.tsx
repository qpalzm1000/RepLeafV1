import FallingLeaves from "../FallingLeaves";

export default function FallingLeavesExample() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Drag the leaf blower to blow leaves away!
        </h1>
        <p className="text-center text-muted-foreground">
          Watch the autumn leaves fall continuously. Click and drag the leaf blower around the screen to blow them away in any direction!
        </p>
      </div>
      <FallingLeaves />
    </div>
  );
}
