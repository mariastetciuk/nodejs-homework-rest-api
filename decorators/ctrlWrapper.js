const ctrlWrapper = (ctrl) => {
  const fnc = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return fnc;
};

export default ctrlWrapper;
