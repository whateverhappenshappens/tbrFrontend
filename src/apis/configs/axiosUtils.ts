export function defineCancelApiObject<
  T extends Record<string, (...args: any[]) => Promise<any>>
>(apiObject: T) {
  const cancelApiObject: Record<
    string,
    { handleRequestCancellation: () => AbortController }
  > = {};
  Object.keys(apiObject).forEach((apiPropertyName) => {
    const cancellationControllerObject = {
      controller: undefined as AbortController | undefined,
    };

    cancelApiObject[apiPropertyName] = {
      handleRequestCancellation: () => {
        if (cancellationControllerObject.controller) {
          cancellationControllerObject.controller.abort();
        }
        cancellationControllerObject.controller = new AbortController();
        return cancellationControllerObject.controller;
      },
    };
  });
  return cancelApiObject;
}
