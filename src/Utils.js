import _ from 'lodash';

export const updateItem = (item, collection, prop) => {
    let collectionItem = _.find(collection, ['id', item.id]);
    item[prop] = collectionItem ? collectionItem[prop] : 'none';
    return item;
}
