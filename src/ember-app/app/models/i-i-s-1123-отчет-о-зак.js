import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as ОтчетОЗакMixin
} from '../mixins/regenerated/models/i-i-s-1123-отчет-о-зак';

import ЗаказПостModel from './i-i-s-1123-заказ-пост';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-1123-заказ-пост';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = ЗаказПостModel.extend(ОтчетОЗакMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
