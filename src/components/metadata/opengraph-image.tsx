const OpenGraphImage = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        textAlign: "center",
        width,
        height,
        backgroundColor: "black",
        color: "white",
      }}
    >
      <h1 style={{ letterSpacing: "-0.025em", fontSize: "90px" }}>
        Agnivo Neogi
      </h1>
    </div>
  );
};

export default OpenGraphImage;
