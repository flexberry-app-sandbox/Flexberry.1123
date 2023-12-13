import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IIS1123ЕдиницыИзмерLForm from './forms/i-i-s-1123-единицы-измер-l';
import IIS1123ЗаказПостLForm from './forms/i-i-s-1123-заказ-пост-l';
import IIS1123КонтрагентыLForm from './forms/i-i-s-1123-контрагенты-l';
import IIS1123НоменклатураLForm from './forms/i-i-s-1123-номенклатура-l';
import IIS1123ОрганизацииLForm from './forms/i-i-s-1123-организации-l';
import IIS1123ОтчетОЗакLForm from './forms/i-i-s-1123-отчет-о-зак-l';
import IIS1123ПланЗакупокLForm from './forms/i-i-s-1123-план-закупок-l';
import IIS1123СкладыLForm from './forms/i-i-s-1123-склады-l';
import IIS1123ЕдиницыИзмерEForm from './forms/i-i-s-1123-единицы-измер-e';
import IIS1123ЗаказПостEForm from './forms/i-i-s-1123-заказ-пост-e';
import IIS1123КонтрагентыEForm from './forms/i-i-s-1123-контрагенты-e';
import IIS1123НоменклатураEForm from './forms/i-i-s-1123-номенклатура-e';
import IIS1123ОрганизацииEForm from './forms/i-i-s-1123-организации-e';
import IIS1123ОтчетОЗакEForm from './forms/i-i-s-1123-отчет-о-зак-e';
import IIS1123ПланЗакупокEForm from './forms/i-i-s-1123-план-закупок-e';
import IIS1123СкладыEForm from './forms/i-i-s-1123-склады-e';
import IIS1123ЕдиницыИзмерModel from './models/i-i-s-1123-единицы-измер';
import IIS1123ЗаказПостModel from './models/i-i-s-1123-заказ-пост';
import IIS1123КонтрагентыModel from './models/i-i-s-1123-контрагенты';
import IIS1123НоменклатураModel from './models/i-i-s-1123-номенклатура';
import IIS1123ОрганизацииModel from './models/i-i-s-1123-организации';
import IIS1123ОтчетОЗакModel from './models/i-i-s-1123-отчет-о-зак';
import IIS1123ПланЗакупокModel from './models/i-i-s-1123-план-закупок';
import IIS1123ПланModel from './models/i-i-s-1123-план';
import IIS1123СкладыModel from './models/i-i-s-1123-склады';
import IIS1123ТЧЗаказModel from './models/i-i-s-1123-т-ч-заказ';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-1123-единицы-измер': IIS1123ЕдиницыИзмерModel,
    'i-i-s-1123-заказ-пост': IIS1123ЗаказПостModel,
    'i-i-s-1123-контрагенты': IIS1123КонтрагентыModel,
    'i-i-s-1123-номенклатура': IIS1123НоменклатураModel,
    'i-i-s-1123-организации': IIS1123ОрганизацииModel,
    'i-i-s-1123-отчет-о-зак': IIS1123ОтчетОЗакModel,
    'i-i-s-1123-план-закупок': IIS1123ПланЗакупокModel,
    'i-i-s-1123-план': IIS1123ПланModel,
    'i-i-s-1123-склады': IIS1123СкладыModel,
    'i-i-s-1123-т-ч-заказ': IIS1123ТЧЗаказModel
  },

  'application-name': '1123',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '1123',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '1123',
          title: '1123'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        1123: {
          caption: '1123',
          title: '1123',
          'i-i-s-1123-отчет-о-зак-l': {
            caption: 'Отчет о зак',
            title: ''
          },
          'i-i-s-1123-контрагенты-l': {
            caption: 'Контрагенты',
            title: ''
          },
          'i-i-s-1123-склады-l': {
            caption: 'Склады',
            title: ''
          },
          'i-i-s-1123-заказ-пост-l': {
            caption: 'Заказ пост',
            title: ''
          },
          'i-i-s-1123-единицы-измер-l': {
            caption: 'Единицы измер',
            title: ''
          },
          'i-i-s-1123-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-1123-план-закупок-l': {
            caption: 'План закупок',
            title: ''
          },
          'i-i-s-1123-номенклатура-l': {
            caption: 'Номенклатура',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-1123-единицы-измер-l': IIS1123ЕдиницыИзмерLForm,
    'i-i-s-1123-заказ-пост-l': IIS1123ЗаказПостLForm,
    'i-i-s-1123-контрагенты-l': IIS1123КонтрагентыLForm,
    'i-i-s-1123-номенклатура-l': IIS1123НоменклатураLForm,
    'i-i-s-1123-организации-l': IIS1123ОрганизацииLForm,
    'i-i-s-1123-отчет-о-зак-l': IIS1123ОтчетОЗакLForm,
    'i-i-s-1123-план-закупок-l': IIS1123ПланЗакупокLForm,
    'i-i-s-1123-склады-l': IIS1123СкладыLForm,
    'i-i-s-1123-единицы-измер-e': IIS1123ЕдиницыИзмерEForm,
    'i-i-s-1123-заказ-пост-e': IIS1123ЗаказПостEForm,
    'i-i-s-1123-контрагенты-e': IIS1123КонтрагентыEForm,
    'i-i-s-1123-номенклатура-e': IIS1123НоменклатураEForm,
    'i-i-s-1123-организации-e': IIS1123ОрганизацииEForm,
    'i-i-s-1123-отчет-о-зак-e': IIS1123ОтчетОЗакEForm,
    'i-i-s-1123-план-закупок-e': IIS1123ПланЗакупокEForm,
    'i-i-s-1123-склады-e': IIS1123СкладыEForm
  },

});

export default translations;
