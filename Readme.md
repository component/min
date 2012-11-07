
# min

  Min value utility

## Installation

    $ component install component/min

## API

### min(array)

  Return the min value in `array`:

```js
min([1,5,6,1,2,0])
```

### min(array, fn)

  Max value in `array` with callback `fn(val, i)`:

```js
var age = min(users, function(u){ return u.age })
```

### min(array, string)

  Max value in `array` with the given property `string`:

```js
var age = min(users, 'age')
```

# License

  MIT
