[![https://img.shields.io/npm/v/css-style-inject](https://img.shields.io/npm/v/css-style-inject)](https://www.npmjs.com/package/css-style-inject)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=sebgroup/frontend-tools)](https://dependabot.com)
![https://img.shields.io/npm/l/css-style-inject](https://img.shields.io/npm/l/css-style-inject)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/css-style-inject)


# CSS Style Injector

## Installation

### npm

```terminal
npm i css-style-inject
```

### yarn

```terminal
yarn add css-style-inject
```

<hr/>

## Usage
Add this to your javascript/ typescript file

### attach styles to head
```typescript
import { injectCSS } from "css-style-inject";
injectCSS('..css', 'uniqueId');
```

### detach styles from head
```typescript
import { detachCSS } from "css-style-inject";
detachCSS('uniqueId')
```
