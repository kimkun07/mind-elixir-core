// mindmap API 의 기준이 되어야 한다.
// TODO: npm에 publish?

export interface TreeResponse {
  status: string;
  rawNodeData: MyNodeObj;
}

export interface MyNodeObj {
  topic: string;
  children: MyNodeObj[];
  style?: StyleObj;
}

export interface StyleObj {
  color?: string;
  background?: string;
  fontSize?: string;
  fontWeight?: string;
  border?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
}
