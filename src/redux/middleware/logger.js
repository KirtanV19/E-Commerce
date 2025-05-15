// export const logger = (store) => (next) => (action) => {
//   console.log("store", store);
//   console.log("next", next);
//   console.log("action", action);
//   next(action);
// };

export const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.log("result", result);
  return result;
};

// next() is like continuation of the flow.

/*

🔄 Analogy: Think of it like a relay race 🏃‍♂️🏃‍♀️

Each middleware is a runner.

next(action) is like passing the baton.

If a runner doesn't pass the baton, the race stops there.

So next(action) is crucial — it moves the action forward to complete the full Redux cycle.
*/
