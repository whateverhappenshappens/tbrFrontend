function startAnimation() {
  let valueDisplays = document.querySelectorAll(".number");
  let interval = 4000;
  let intervals = [];

  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));

    if (isNaN(endValue)) {
      console.error(`Invalid data-val: ${valueDisplay.getAttribute("data-val")}`);
      return;
    }

    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function() {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);

    intervals.push(counter);
  });

  return intervals;
}

function resetAnimation(intervals) {
  // Clear all running intervals
  intervals.forEach(clearInterval);

  // Reset the text content to 0
  document.querySelectorAll(".number").forEach((valueDisplay) => {
    valueDisplay.textContent = '0';
  });

  // Start the animation again
  return startAnimation();
}

function setupPage() {
  let intervals = startAnimation();

  window.addEventListener('popstate', function() {
    intervals = resetAnimation(intervals);
  });

  window.addEventListener('pushstate', function() {
    intervals = resetAnimation(intervals);
  });

  window.addEventListener('replacestate', function() {
    intervals = resetAnimation(intervals);
  });

  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
      intervals = resetAnimation(intervals);
    }
  });
}

// Custom events for pushState and replaceState
(function(history){
    const pushState = history.pushState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state});
        }
        return pushState.apply(history, arguments);
    };
    window.addEventListener('pushstate', function() {
        const event = new Event('pushstate');
        window.dispatchEvent(event);
    });

    const replaceState = history.replaceState;
    history.replaceState = function(state) {
        if (typeof history.onreplacestate == "function") {
            history.onreplacestate({state: state});
        }
        return replaceState.apply(history, arguments);
    };
    window.addEventListener('replacestate', function() {
        const event = new Event('replacestate');
        window.dispatchEvent(event);
    });
})(window.history);

window.addEventListener('load', setupPage);
