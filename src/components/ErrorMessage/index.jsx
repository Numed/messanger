import { ErrorContainer } from "./styles";
import gif from "./error.gif";

const ErrorMessage = () => {
  return (
    <ErrorContainer className="error-container">
      <img src={gif} alt="Error" />
    </ErrorContainer>
  );
};

export default ErrorMessage;
