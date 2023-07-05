const controllerWrapper = (ctrl) => {
  const wrapper = async (req, res, next) => {
    try {
      await ctrl(req, res, next);
    } catch (e) {
      next(e);
    }
  };
  return wrapper;
};

module.exports = controllerWrapper;
