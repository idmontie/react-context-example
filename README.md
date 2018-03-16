React Context Example
=====================

This webapp shows an example of the new `createContext` API in React 16.3.

```
yarn global add parcel-bundler
yarn install
yarn start
```

## Scenario

Keeping track and updating readable DateTimes throughout your application can be annoying to deal with. If each component runs its own timer, your application can become laggy once you start adding many DateTimes.

Using the new `createContext` makes it simple to update all of the DateTimes at the same interval.

## Components

### TimeProvider

The `<TimeProvider>` component will have a interval where it updates the time context with a new DateTime every second.

### TimeConsumer

The `<TimeConsumer>` component has a render-prop that will have the latest DateTime passed to it.

### Clock

In this example, the `<Clock>` component does the heavy lifting of showing the diff between a given DateTime and the current DateTime.

## License

MIT License
