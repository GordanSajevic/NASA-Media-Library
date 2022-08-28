import Model from "../core/Model";

export interface TData {
  center: string;
  title: string;
  photographer: string;
  keywords: string[];
  location: string;
  nasaId: string;
  date_created: string;
  mediaType: string;
  description: string;
}

export interface IData extends TData  {}

const Data = Model((model: TData): IData => {
  const _value: TData = Object.assign({}, model);

  let _model = {
    get center() {
      return _value.center;
    },
    set center(value) {
      _value.center = value;
    },
    get title() {
      return _value.title;
    },
    set title(value) {
      _value.title = value;
    },
    get photographer() {
      return _value.photographer;
    },
    set photographer(value) {
      _value.photographer = value;
    },
    get keywords() {
      return _value.keywords;
    },
    set keywords(value) {
      _value.keywords = value;
    },
    get location() {
      return _value.location;
    },
    set location(value) {
      _value.location = value;
    },
    get nasaId() {
      return _value.nasaId;
    },
    set nasaId(value) {
      _value.nasaId = value;
    },
    get date_created() {
      return _value.date_created;
    },
    set date_created(value) {
      _value.date_created = value;
    },
    get mediaType() {
      return _value.mediaType;
    },
    set mediaType(value) {
      _value.mediaType = value;
    },
    get description() {
      return _value.description;
    },
    set description(value) {
     _value.description = value;
    }
  };

  return _model;
});

export default Data;
