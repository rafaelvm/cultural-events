import { CSSProperties } from "react";
import { RingLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "100px auto",
  borderColor: "#008c9e",
};

interface SpinnerProps {
  loading?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <RingLoader
      loading={loading}
      cssOverride={override}
      size={150}
      color={"#008c9e"}
    />
  );
};

export default Spinner;
