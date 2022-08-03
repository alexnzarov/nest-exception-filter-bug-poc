# nest-exception-filter-bug-poc

## Setup

```sh
# cd external-dependency
yarn
yarn build
yarn link

# cd nest-app
yarn
yarn link external-dependency
```

## Run

```sh
cd nest-app && yarn start:dev
curl 127.0.0.1:3000?text=notworld
```

**Expected:** `{"statusCode":400,"message":"'notworld' !== 'world'"}`

**Got:** `{"statusCode":500,"message":"Internal server error"}`