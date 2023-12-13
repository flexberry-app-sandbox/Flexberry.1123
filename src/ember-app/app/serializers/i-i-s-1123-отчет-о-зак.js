import { Serializer as ОтчетОЗакSerializer } from
  '../mixins/regenerated/serializers/i-i-s-1123-отчет-о-зак';
import ЗаказПостSerializer from './i-i-s-1123-заказ-пост';

export default ЗаказПостSerializer.extend(ОтчетОЗакSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
