import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ОтчетОЗакMixin
} from '../mixins/regenerated/models/i-i-s-1123-отчет-о-зак';

import ЗаказПостModel from './i-i-s-1123-заказ-пост';

let Model = ЗаказПостModel.extend(ОтчетОЗакMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
