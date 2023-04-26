import { UnauthenticatedError } from "../errors";

UnauthenticatedError;
const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new UnauthenticatedError('Authentication Invalid')
  }
};

export default auth;
