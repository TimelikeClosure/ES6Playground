function* walkingDownSidewalk([cashFromHouse, dirtyLaundryFromHouse]) {
    //  stuff on the sidewalk

    //  walking down the sidewalk
    //  go into the store with cash
    const stuffFromStore = yield cashFromHouse;

    //  walking down the sidewalk
    //  go into the laundromat with dirty laundry
    const stuffFromLaundromat = yield dirtyLaundryFromHouse;

    //  walking down the sidewalk
    //  return home
    return [stuffFromStore, stuffFromLaundromat];
}

//  stuff in the store

const gen = walkingDownSidewalk(['cash', 'dirty laundry']);
console.log(gen.next()); // leaving the house
// walk into the store
// walking up and down the aisles
// purchase our stuff
console.log(gen.next('groceries')); // leaving the store with groceries
// put clothes in washing machine
// put clothes in drier
// retrieve clothes
console.log(gen.next('clean clothes')); // leaving the laundromat with clean clothes
