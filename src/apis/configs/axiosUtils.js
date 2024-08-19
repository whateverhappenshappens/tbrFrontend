export function defineCancelApiObject(apiObject) {
    const cancelApiObject = {};
    Object.keys(apiObject).forEach((apiPropertyName) => {
        const cancellationControllerObject = {
            controller: undefined,
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
