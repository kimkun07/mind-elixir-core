// index.ts - MindElixir 생성자 참고
const mindmap_options = {
  el: '#map',
  newTopicName: 'new topic',
  direction: MindElixir.SIDE,
  defaultStyle: {
    color: 'black', // default: 'inherit'
    background: '#F6F6F6', // default: '#F6F6F6',
    fontSize: '20', // default: '15'
    fontWeight: 'normal', // default: 'normal'
    border: 'none', // default: 'none'
  },
  locale: 'en',
  draggable: true, // default: true
  editable: true, // default: true
  contextMenu: true, // default: true
  contextMenuOption: {
    focus: true,
    link: true,
    extend: [
      {
        name: 'Node edit',
        onclick: () => {
          alert('extend menu')
        },
      },
    ],
  },
  toolBar: true, // default: true
  nodeMenu: true, // default: true
  keypress: true, // default: true
  mobileMenu: undefined, // default undefined
  allowUndo: false, // default: true
  before: {
    moveDownNode() {
      return false
    },
    insertSibling(el, obj) {
      console.log('insertSibling', el, obj)
      return true
    },
    async addChild(el, obj) {
      console.log('addChild', el, obj)
      // await sleep()
      return true
    },
  },
  overflowHidden: false, // default: false
  primaryLinkStyle: 1, // [1 or 2] default 1
  primaryNodeVerticalGap: 25, // default: 25
  primaryNodeHorizontalGap: 65, // default: 65
}

// index.ts - NodeObj 참고
const nodeData_sample = {
  topic: 'Mind Elixir',
  id: 'root',
  root: true,
  children: [
    {
      topic: 'What is Minde Elixir',
      id: 'bd4313fbac40284b',
      direction: 0,
      expanded: true,
      children: [
        { topic: 'A mind map core', id: 'beeb823afd6d2114' },
        { topic: 'Free', id: 'c1f068377de9f3a0' },
        { topic: 'Open-Source', id: 'c1f06d38a09f23ca' },
        {
          topic: 'Use without JavaScript framework',
          id: 'c1f06e4cbcf16463',
          expanded: true,
          children: [],
        },
        {
          topic: 'Use in your own project',
          id: 'c1f1f11a7fbf7550',
          children: [
            {
              topic: "import MindElixir from 'mind-elixir'",
              id: 'c1f1e245b0a89f9b',
            },
            { topic: 'new MindElixir({...}).init(data)', id: 'c1f1ebc7072c8928' },
          ],
        },
        {
          topic: 'Easy to use',
          id: 'c1f0723c07b408d7',
          expanded: true,
          children: [
            {
              topic: 'Use it like other mind map application',
              id: 'c1f09612fd89920d',
            },
          ],
        },
      ],
    },
    {
      topic: 'Basics',
      id: 'bd1b66c4b56754d9',
      direction: 0,
      expanded: true,
      children: [
        { topic: 'tab - Create a child node', id: 'bd1b6892bcab126a' },
        { topic: 'enter - Create a sibling node', id: 'bd1b6b632a434b27' },
        { topic: 'del - Remove a node', id: 'bd1b983085187c0a' },
      ],
    },
    {
      topic: 'Focus mode',
      id: 'bd1b9b94a9a7a913',
      direction: 1,
      expanded: true,
      children: [
        {
          topic: 'Right click and select Focus Mode',
          id: 'bd1bb2ac4bbab458',
        },
        {
          topic: 'Right click and select Cancel Focus Mode',
          id: 'bd1bb4b14d6697c3',
        },
      ],
    },
    {
      topic: 'Left menu',
      id: 'bd1b9d1816ede134',
      direction: 0,
      expanded: true,
      children: [
        {
          topic: 'Node distribution',
          id: 'bd1ba11e620c3c1a',
          expanded: true,
          children: [
            { topic: 'Left', id: 'bd1c1cb51e6745d3' },
            { topic: 'Right', id: 'bd1c1e12fd603ff6' },
            { topic: 'Both l & r', id: 'bd1c1f03def5c97b' },
          ],
        },
      ],
    },
    {
      topic: 'Bottom menu',
      id: 'bd1ba66996df4ba4',
      direction: 1,
      expanded: true,
      children: [
        { topic: 'Full screen', id: 'bd1ba81d9bc95a7e' },
        { topic: 'Return to Center', id: 'bd1babdd5c18a7a2' },
        { topic: 'Zoom in', id: 'bd1bae68e0ab186e' },
        { topic: 'Zoom out', id: 'bd1bb06377439977' },
      ],
    },
    {
      topic: 'Link',
      id: 'bd1beff607711025',
      direction: 0,
      expanded: true,
      children: [
        { topic: 'Right click and select Link', id: 'bd1bf320da90046a' },
        {
          topic: 'Click the target you want to link',
          id: 'bd1bf6f94ff2e642',
        },
        { topic: 'Modify link with control points', id: 'bd1c0c4a487bd036' },
      ],
    },
    {
      topic: 'Node style',
      id: 'bd1c217f9d0b20bd',
      direction: 0,
      expanded: true,
      children: [
        {
          topic: 'Font Size',
          id: 'bd1c24420cd2c2f5',
          style: { fontSize: '32', color: '#3298db' },
        },
        {
          topic: 'Font Color',
          id: 'bd1c2a59b9a2739c',
          style: { color: '#c0392c' },
        },
        {
          topic: 'Background Color',
          id: 'bd1c2de33f057eb4',
          style: { color: '#bdc3c7', background: '#2c3e50' },
        },
        { topic: 'Add tags', id: 'bd1cff58364436d0', tags: ['Completed'] },
        {
          topic: 'Add icons',
          id: 'bd1d0317f7e8a61a',
          icons: ['😂'],
          tags: ['www'],
        },
        {
          topic: 'Bolder',
          id: 'bd41fd4ca32322a4',
          style: { fontWeight: 'bold' },
        },
        {
          topic: 'Hyper link',
          id: 'bd41fd4ca32322a5',
          hyperLink: 'https://github.com/ssshooter/mind-elixir-core',
        },
        // {
        //   topic: 'Image URL',
        //   id: 'bd41fd4ca32322a6',
        //   image: {
        //     url: 'https://cdn.jsdelivr.net/gh/ssshooter/mind-elixir-core/logo.png',
        //     width: 200,
        //   },
        // },
      ],
    },
    {
      topic: 'Draggable',
      id: 'bd1f03fee1f63bc6',
      direction: 1,
      expanded: true,
      children: [
        {
          topic: 'Drag a node to another node\nand the former one will become a child node of latter one',
          id: 'bd1f07c598e729dc',
        },
      ],
    },
    {
      topic: 'TODO',
      id: 'bd1facea32a1967c',
      direction: 1,
      expanded: true,
      children: [
        { topic: 'Add image', id: 'bd1fb1ec53010749' },
        { topic: 'Free node (position)', id: 'bd42d3e3bee992b9' },
        { topic: 'Style adjustment', id: 'beeb7f3db6ad6496' },
      ],
    },
    {
      topic: 'Export data',
      id: 'beeb7586973430db',
      direction: 1,
      expanded: true,
      children: [
        { topic: 'JSON', id: 'beeb784cc189375f' },
        { topic: 'HTML', id: 'beeb7a6bec2d68f5' },
      ],
    },
    {
      topic: 'Caution',
      id: 'bd42dad21aaf6bae',
      direction: 0,
      style: { background: '#f1c40e' },
      expanded: true,
      children: [
        {
          topic: 'Only save manually',
          id: 'bd42e1d0163ebf04',
          expanded: true,
          children: [
            {
              topic: 'Save button in the top-right corner',
              id: 'bd42e619051878b3',
              expanded: true,
              children: [],
            },
            { topic: 'ctrl + S', id: 'bd42e97d7ac35e99' },
          ],
        },
      ],
    },
  ],
  expanded: true,
}

const mind = new MindElixir(mindmap_options)

function update_map(rawNodeData) {
  let nodeData = preprocess(rawNodeData)
  mind.nodeData = nodeData
  mind.linkData = {}
  mind.refresh()
}

//#region preprocess
function styleRoot(nodeData) {
  // 기존 style 존중
  if (nodeData.style) return
  nodeData.style = {
    color: 'white',
    background: 'CornflowerBlue',
    fontSize: 36,
    fontWeight: 'bold',
  }
}

function stylePrimary(nodeData) {
  // 기존 style 존중
  if (nodeData.style) return
  nodeData.style = {
    background: 'white',
    border: '2px solid black',
  }
}

// 받은 nodeData에 (id), root, style 등을 추가
function preprocess(rawNodeData) {
  rawNodeData.root = true
  styleRoot(rawNodeData)
  for (let primary of rawNodeData.children) {
    stylePrimary(primary)
  }

  let nodeData = rawNodeData
  return nodeData
}
//#endregion

//#region initialize map
mind.init(MindElixir.new('new topic'))
update_map(nodeData_sample)
//#endregion

function initFromStorage() {
  // 저장되어있는 nodeData 사용
  setStatus('From Storage')
  // localStorage에 데이터가 없으면 그냥 error 로그 뜨고 끝난다.
  let rawNodeData = JSON.parse(localStorage.getItem('rawNodeData'))
  update_map(rawNodeData)
}
initFromStorage()

function setStatus(text) {
  document.getElementById('status').textContent = text
}

// fetch 버튼 클릭
async function onClick() {
  // url에 fetch한 json으로 update_map 실행 + localStorage에 저장
  let url = document.getElementById('input').value
  setStatus('Fetching...')

  try {
    let rawResponse = await fetch(url)
    let treeResponse = await rawResponse.json()
    let { status, rawNodeData } = treeResponse

    localStorage.setItem('rawNodeData', JSON.stringify(rawNodeData))

    setStatus(status)
    update_map(rawNodeData)
  } catch (error) {
    setStatus('ERROR')
    console.log(`Try Fetching ${url}`)
    console.error(error)
  }
}
