export default function autoBind(classComponent) {
  const classMethods = Object.getOwnPropertyNames(classComponent.prototype);
  classMethods.forEach((method) => {
    if (method.startsWith('handle')) {
      this[method] = this[method].bind(this);
    }
  });
}

export const validateTodo = (payload) => {
  if (!payload._id) {
    throw new Error('VALIDATION ERROR: todo must contain an id');
  }

  if (!payload.title) {
    throw new Error('VALIDATION ERROR: todo must contain a title');
  }
};
