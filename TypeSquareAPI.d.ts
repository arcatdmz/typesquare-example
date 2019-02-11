
declare var Ts: TypeSquare;

interface TypeSquare {
  loadFontAsync: (fontObj: FontRequestObj) => void;
}

interface FontObj {
  cssName: string;
  text: string;
  hasHint?: boolean;
  fontFamily?: string;
  outputType?: string;
  callbackId?: number;
}

interface FontRequestObj extends FontObj {
  callback: (result: FontResultObj) => void;
}

interface FontResultObj extends FontObj {
  code: number;
  data: string;
}

interface FontResultData {
  res: string;
}

interface FontResultDataObj {
  "font-weight": string;
  fontFamily: string;
  format: string;
  src: string;
}
