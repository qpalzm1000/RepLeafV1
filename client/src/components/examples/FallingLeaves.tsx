import FallingLeaves from "../FallingLeaves";

export default function FallingLeavesExample() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Click the leaf blower in the bottom right!
        </h1>
        <p className="text-center text-muted-foreground">
          Watch the autumn leaves fall, then blow them away with the leaf blower.
        </p>
      </div>
      <FallingLeaves />
    </div>
  );
}
