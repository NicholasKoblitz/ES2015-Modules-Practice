/**
 * choice(items): returns a randomly selected item from array of items
 */

const choice = (items) => {
    const randNum = Math.floor(Math.random() * items.length);
    return items[randNum];
}

/**
 * remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
 */

const remove = (items, item) => {
    const itemIdx = items.findIndex(i => i === item);

    if(!itemIdx) return undefined;

    const returnedListOne = items.slice(0, itemIdx);
    const returnedListTwo = items.slice(itemIdx + 1);
    const newItems = [...returnedListOne, ...returnedListTwo];
    return newItems;

}


export {choice, remove};