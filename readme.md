![mindelixir logo](https://raw.githubusercontent.com/ssshooter/mind-elixir-core/master/images/logo.png)

참고할 웹 사이트\
[Original repository](https://github.com/ssshooter/mind-elixir-core)\
MindElixir 예시\
mind-api 예시

- [Changes](#changes)
  - [border](#border)
  - [defaultStyle](#defaultstyle)
  - [Client Application of MindElixir](#client-application-of-mindelixir)
- [How to use](#how-to-use)
  - [How to create `MindElixir`](#how-to-create--mindelixir-)
  - [How to set `nodeData`](#how-to-set--nodedata-)
  - [How to run server](#how-to-run-server)
  - [How to implement ??? API](#how-to-implement-----api)
- [How to develop](#how-to-develop)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# Changes

- MindElixir
  - style
    - New feature: border for node style
    - New feature: defaultStyle for mindmap_options
- New Feature: Client Application of MindElixir

## border

|             |                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------- |
| Description | New feature for styling `NodeObj`                                                         |
| Major File  | `utils/dom.ts` - `shpaeTpc`                                                               |
| Usage       | Set `nodeData.style.border`<br>`borderWidth`, `borderStyle`, `borderColor` also available |

```js
nodeData.style = {
  background: 'white',
  border: '2px solid black',
}
```

## defaultStyle

|             |                                                |
| ----------- | ---------------------------------------------- |
| Description | Ability for setting default style of `NodeObj` |
| Major File  | `index.ts` - constructor of `MindElixir`       |
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

## Client Application of MindElixir

|            |                                                               |
| ---------- | ------------------------------------------------------------- |
| Descrition | 1. Fetch server implementing `mind-api`<br>2. Create `MindElixir` |
| File       | `public` directory                                            |
| Usage      | Type url & fetch                                              |

script.js 간단한 설명

[x] mindmap_options와 nodeData 사용 -> 이거 별도의 팩으로 만들까?\
mind (MindElixir) 생성하고, 마인드맵 초기화\
localStorage에 저장된 nodeData를 불러와서 사용\
html에서 URL을 입력하고 fetch 클릭하면 nodeData를 받아와 update_map 실행

# How to use

- Client Side (MindElixir)
  - Basic usage of `script.js`
    - How to create `MindElixir`
    - How to set `nodeData`
  - How to run server
- Implementing `mind-api`

## How to create `MindElixir`

1. Create `mindmap_options`
   ```js
   // check index.ts - MindElixir constructor
   const mindmap_options = {
    el: '#map',
    newTopicName: 'new topic',
    direction: MindElixir.SIDE,
    ...
   }
   ```
1. Instantiate `MindElixir`
   ```js
   const mind = new MindElixir(mindmap_options)
   mind.init(MindElixir.new('new topic')) // it needs an initial data
   ```

---

## How to set `nodeData`

1. Create `nodeData` with `style`
   ```js
   // Check index.ts - NodeObj
   const nodeData_sample = {
     topic: 'Mind Elixir',
     id: 'root',
     root: true,
     style: { // Check index.ts - StyleObj
      color: 'white',
      background: 'CornflowerBlue',
      fontSize: 36,
      border: '1px solid black'
     },
     children: [
       {
         topic: 'What is Minde Elixir',
         id: 'bd4313fbac40284b',
         children: [...],
       },
       ...
     ],
   }
   ```
2. Update `MindElixir`
   ```js
   mind.nodeData = nodeData
   mind.linkData = {}
   mind.refresh()
   ```

---

## How to run server

1. Use npm script (`npm run server`)\
   To serve static file in `public` directory\
   To serve `public/index.html`

---

## How to implement `mind-api`

1. npm install ~\
   Response, MyNodeObj, StyleObj 사용하는 법 알려주기
2. fetch의 결과로 Response를 json으로 반환하면 된다.
   예시 들기

# How to develop

1. MindElixir.js 개발\
   index.ts를 시작으로 수정. npm run start 하면 dev.ts를 바탕으로 개발 서버가 열린다.
2. 수정 이후\
   npm run build_web -> /public 폴더에 컴파일된 MindElixir.js 생성
