import path from 'path';

export const getFrontPath = () => {
    const currentPath = path.resolve(path.dirname(''));
    const rootPath = currentPath.substring(0, currentPath.length - 7);

    return `${rootPath}/frontend`
}

export function bindMethods(instance, methods) {
    return methods.reduce(
      (obj, method) => ({
        ...obj,
        [method]: (instance[method]).bind(instance),
      }),
      {} 
    );
  }