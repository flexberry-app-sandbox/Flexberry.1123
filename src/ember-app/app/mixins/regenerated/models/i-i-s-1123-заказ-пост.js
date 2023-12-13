import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаНачала: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаОкончания: DS.attr('date'),
  номер: DS.attr('number'),
  состОтгрузки: DS.attr('i-i-s-1123-сост-отгрузки'),
  состояниеОплаты: DS.attr('i-i-s-1123-сост-оплаты'),
  суммаВклНДС: DS.attr('boolean'),
  суммаДокумента: DS.attr('number'),
  контрагенты: DS.belongsTo('i-i-s-1123-контрагенты', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-1123-организации', { inverse: null, async: false }),
  склады: DS.belongsTo('i-i-s-1123-склады', { inverse: null, async: false }),
  тЧЗаказ: DS.hasMany('i-i-s-1123-т-ч-заказ', { inverse: 'заказПост', async: false })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-1123-заказ-пост.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-1123-заказ-пост.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-1123-заказ-пост.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  состОтгрузки: {
    descriptionKey: 'models.i-i-s-1123-заказ-пост.validations.состОтгрузки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояниеОплаты: {
    descriptionKey: 'models.i-i-s-1123-заказ-пост.validations.состояниеОплаты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаВклНДС: {
    descriptionKey: 'models.i-i-s-1123-заказ-пост.validations.суммаВклНДС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаДокумента: {
    descriptionKey: 'models.i-i-s-1123-заказ-пост.validations.суммаДокумента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контрагенты: {
    descriptionKey: 'models.i-i-s-1123-заказ-пост.validations.контрагенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-1123-заказ-пост.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  склады: {
    descriptionKey: 'models.i-i-s-1123-заказ-пост.validations.склады.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧЗаказ: {
    descriptionKey: 'models.i-i-s-1123-заказ-пост.validations.тЧЗаказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказПостE', 'i-i-s-1123-заказ-пост', {
    номер: attr('Номер', { index: 0 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 1 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 2 }),
    суммаДокумента: attr('Сумма документа', { index: 3 }),
    состОтгрузки: attr('Сост отгрузки', { index: 4 }),
    датаНачала: attr('Дата начала', { index: 5 }),
    датаОкончания: attr('Дата окончания', { index: 6 }),
    организации: belongsTo('i-i-s-1123-организации', 'Организации', {
      организация: attr('Организация', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'организация' }),
    контрагенты: belongsTo('i-i-s-1123-контрагенты', 'Контрагенты', {
      контрагент: attr('Контрагент', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'контрагент' }),
    склады: belongsTo('i-i-s-1123-склады', 'Склады', {
      склад: attr('Склад', { index: 12, hidden: true })
    }, { index: 11, displayMemberPath: 'склад' }),
    тЧЗаказ: hasMany('i-i-s-1123-т-ч-заказ', 'Т ч заказ', {
      сумма: attr('Сумма', { index: 0 }),
      этоУслуга: attr('Это услуга', { index: 1 }),
      количество: attr('Количество', { index: 2 }),
      суммаНДС: attr('Сумма НДС', { index: 3 }),
      цена: attr('Цена', { index: 4 }),
      номенклатура: belongsTo('i-i-s-1123-номенклатура', 'Номенклатура', {
        номенклатура: attr('Номенклатура', { index: 6, hidden: true })
      }, { index: 5, displayMemberPath: 'номенклатура' })
    })
  });

  modelClass.defineProjection('ЗаказПостL', 'i-i-s-1123-заказ-пост', {
    номер: attr('Номер', { index: 0 }),
    состояниеОплаты: attr('Состояние оплаты', { index: 1 }),
    суммаВклНДС: attr('Сумма вкл НДС', { index: 2 }),
    суммаДокумента: attr('Сумма документа', { index: 3 }),
    состОтгрузки: attr('Сост отгрузки', { index: 4 }),
    датаНачала: attr('Дата начала', { index: 5 }),
    датаОкончания: attr('Дата окончания', { index: 6 }),
    организации: belongsTo('i-i-s-1123-организации', 'Организация', {
      организация: attr('Организация', { index: 7 })
    }, { index: -1, hidden: true }),
    контрагенты: belongsTo('i-i-s-1123-контрагенты', 'Контрагент', {
      контрагент: attr('Контрагент', { index: 8 })
    }, { index: -1, hidden: true }),
    склады: belongsTo('i-i-s-1123-склады', 'Склад', {
      склад: attr('Склад', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
