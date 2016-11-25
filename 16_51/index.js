function* walkingDownSidewalk(stuffFromHouse) {
    //  stuff on the sidewalk

    //  walking down the sidewalk
    //  go into the store with cash
    const stuffFromStore = yield stuffFromHouse;

    //  walking back home
    return stuffFromStore;
}

//  stuff in the store

const gen = walkingDownSidewalk('cash');
console.log(gen.next()); // leaving the house
// walked into the store
// walking up and down the aisles
// purchase our stuff
console.log(gen.next('groceries')); // leaving the store with groceries
