export default function autoBind(classComponent) {
  const classMethods = Object.getOwnPropertyNames(classComponent.prototype);
  classMethods.forEach((method) => {
    if (method.startsWith('handle')) {
      this[method] = this[method].bind(this);
    }
  });
}

export const validateContinent = (payload) => {
  if (!payload._id) {
    throw new Error('VALIDATION ERROR: continent must have an id');
  }

  if (!payload.location) {
    throw new Error('VALIDATION ERROR: continent must have a location');
  }

  if (!payload.description) {
    throw new Error('VALIDATION ERROR: continent must have a description');
  }
};
