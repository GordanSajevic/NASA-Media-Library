import Model from "../core/Model";
import { IData } from "./Data";
import { ILink } from "./Link";

export interface TItem {
  href: string;
  data: IData[];
  links: ILink[];
  images: string[];
}

export interface IItem extends TItem  {}

const Item = Model((model: TItem): IItem => {
  const _value: TItem = Object.assign({}, model);

  let _model = {
    get href() {
      return _value.href;
    },
    set href(value) {
      _value.href = value;
    },
    get data() {
      return _value.data;
    },
    set data(value) {
      _value.data = value;
    },
    get links() {
      return _value.links;
    },
    set links(value) {
      _value.links = value;
    },
    get images() {
      return _value.images;
    },
    set images(value) {
      _value.images = value;
    }
  };

  return _model;
});

export default Item;
