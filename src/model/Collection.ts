import Model from "../core/Model";
import { IItem } from "./Item";

export interface TCollection {
  version: string;
  href: string;
  items: IItem[];
  metadata: any;
  links: any;
}

export interface ICollection extends TCollection {}

const Collection = Model((model: TCollection): ICollection => {
  const _value: TCollection = Object.assign({}, model);

  let _model = {
    get version() {
      return _value.version;
    },
    set version(value) {
      _value.version = value;
    },
    get href() {
      return _value.href;
    },
    set href(value) {
      _value.href = value;
    },
    get items() {
      return _value.items;
    },
    set items(value) {
      _value.items = value;
    },
    get metadata() {
      return _value.metadata;
    },
    set metadata(value) {
      _value.metadata = value;
    },
    get links() {
      return _value.links;
    },
    set links(value) {
      _value.links = value;
    }
  };

  return _model;
});

export default Collection;
