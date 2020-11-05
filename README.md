# jest-unhandled-rejection-stack-trace
https://github.com/facebook/jest/issues/10784
## Steps

1. Run `yarn`
2. Run `yarn test`

```
 RUNS  ./index.test.js
node:internal/process/promises:218
          triggerUncaughtException(err, true /* fromPromise */);
          ^

[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "Error".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
```

3. Run `yarn start`

```
Promise.reject(new Error());
               ^

Error
    at Object.<anonymous> (D:\Projects\jest-unhandled-rejection-stack-trace\index.js:1:16)
    at Module._compile (node:internal/modules/cjs/loader:1083:30)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1112:10)
    at Module.load (node:internal/modules/cjs/loader:948:32)
    at Function.Module._load (node:internal/modules/cjs/loader:789:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:72:12)
    at node:internal/main/run_main_module:17:47
```

## Result
The first run does not output the stack trace unlike the second one.
