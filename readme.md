![mindelixir logo](https://raw.githubusercontent.com/ssshooter/mind-elixir-core/master/images/logo.png)

## About

This project is fork of `MindElixir`.

Related Link

- [NPM Package](https://www.npmjs.com/package/@kimkun07/mindmap_mind-elixir-core-revised)
- [Original repository](https://github.com/ssshooter/mind-elixir-core)
- [mind-api](https://github.com/kimkun07/mindmap_mind-api)
- [Example using MindElixir](https://github.com/kimkun07/mindmap_mind-elixir-client)

<details>
<summary>Table of Contents</summary>

- [Changes](#changes)
  - [Implementation of `mind-api`](#implementation-of-mind-api)
  - [border](#border)
  - [defaultStyle](#defaultstyle)
- [How to use](#how-to-use)
  - [Create `MindElixir`](#create-mindelixir)
  - [Set `nodeData`](#set-nodedata)
- [How to develop](#how-to-develop)
- [How to understand](#how-to-understand)

</details>

## Changes

- Implementation of `mind-api`
- style
  - New feature: border for node style
  - New feature: defaultStyle for mindmap_options

### Implementation of `mind-api`

|             |                                           |
| ----------- | ----------------------------------------- |
| Description | Use `NodeObj`, `StyleObj` from `mind-api` |
| Major File  | `./src/index.ts`                          |

> **Note**\
> `NodeObj.id` of original `MindElixir` is string.\
> Whereas `NodeObj.id` of `mind-api` is string?.

### border

|             |                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------- |
| Description | New feature for styling `NodeObj`                                                         |
| Major File  | `./src/utils/dom.ts` - `shpaeTpc()`                                                       |
| Usage       | Set `nodeData.style.border`<br>`borderWidth`, `borderStyle`, `borderColor` also available |

```js
nodeData.style = {
  background: 'white',
  border: '2px solid black',
}
```

### defaultStyle

|             |                                                |
| ----------- | ---------------------------------------------- |
| Description | Ability for setting default style of `NodeObj` |
| Major File  | `./src/index.ts` - constructor of `MindElixir` |
| Usage       | Set `mindmap_options.defaultStyle`             |

```js
const mindmap_options = {
  el: '#map',
  newTopicName: 'new topic',
  defaultStyle: {
    color: 'black', // default: 'inherit'
    background: '#F6F6F6', // default: '#F6F6F6',
    fontSize: '20', // default: '15'
    fontWeight: 'normal', // default: 'normal'
    border: 'none', // default: 'none'
  },
  ...
}
new MindElixir(mindmap_options)
```

## How to use

- How to create `MindElixir`
- How to set `nodeData`

### Create `MindElixir`

1. Install
   ```bash
   npm i -D @kimkun07/mindmap_mind-elixir-core-revised
   ```
   ```ts
   // @ts-ignore
   import MindElixir from '@kimkun07/mindmap_mind-elixir-core-revised'
   ```
2. Initialize `MindElixir`

   ```ts
   // Check MindElixir constructor of "./index.ts"
   const mindmap_options = {
    el: '#map',
    newTopicName: 'new topic',
    direction: MindElixir.SIDE,
    ...
   }

   mindelixir: any = new MindElixir(sample_mindmap_options)
   mindelixir.init(MindElixir.new('new topic')) // init needs an initial data
   ```

### Set `nodeData`

1. Create `nodeData` with `style`
   ```ts
   // Check NodeObj of "./index.ts"
   const nodeData_sample = {
     topic: 'Mind Elixir',
     id: 'root',
     root: true,
     style: { // Check StyleObj of "./index.ts"
      color: 'white',
      background: 'CornflowerBlue',
      fontSize: 36,
      border: '1px solid black'
     },
     children: [
       {
         topic: 'What is Mind Elixir',
         id: 'bd4313fbac40284b',
         children: [...],
       },
       ...
     ],
   }
   ```
2. Update `MindElixir`
   ```ts
   mindelixir.nodeData = nodeData
   mindelixir.linkData = {}
   mindelixir.refresh()
   ```

## How to develop

1. Debug
   ```bash
   npm run start
   ```
2. Publish to npm
   ```bash
   npm run build
   npm version patch
   npm publish --access public
   ```
3. (Sync from upstream)\
   Merge conflicts between `revised` and `upstream`\
   Check NodeObj, StyleObj matches `mind-api`

## How to understand

webpack.config.js
|||
|-----|------|
|build|Build `./src/index.ts`, `./src/index.lite.ts` ...<br>Emitted in `./dist`|
|development|Start debugging with `./src/index.html` & `./src/dev.ts`<br>Show mindmap example of `./src/exampleData/1.js`|

`./src/index.ts`\
Import `index.less`: Style HTML Element.\
Set `MindElixir.prototype`: Use functions imported from `./src/utils`.\
ex) `mindElixirInstance.layout()`

`./src/utils/dom.ts`\
`createGroup()`, `createTopic()` ... : Creates custom HTML Element.\
`shapeTpc()`: Apply style for HTML Element with StyleObj.

HTML Element
| | |
|---|------------------------------|
| `grp` | Group for `t`, `children`, `svg` |
| `t` | Topic of `NodeObj` |
| `children` | Children `grp`[] |
| `svg` | Connecting sublines between `t` and `children` |
