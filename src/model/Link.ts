import Model from "../core/Model";

export interface TLink {
  href: string;
  rel: string;
  render: string;
}

export interface ILink extends TLink  {}

const Link = Model((model: TLink): ILink => {
  const _value: TLink = Object.assign({}, model);

  let _model = {
    get href() {
      return _value.href;
    },
    set href(value) {
      _value.href = value;
    },
    get rel() {
      return _value.rel;
    },
    set rel(value) {
      _value.rel = value;
    },
    get render() {
      return _value.render;
    },
    set render(value) {
      _value.render = value;
    }
  };

  return _model;
});

export default Link;
