const errorHandler = async (tryFn, catchFn) => {
  try {
    const result = await tryFn();
    return result;
  } catch (error) {
    catchFn(error);
  }
};

export default errorHandler;
