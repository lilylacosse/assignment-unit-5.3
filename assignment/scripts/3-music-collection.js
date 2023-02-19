console.log('***** Music Collection *****')

let collection = [];
//collection starts as empty array
let album;
//declared empty global variable album to temporarily hold new objects as they are created 

function addToCollection(title, artist, yearPublished) { 
   album = {
        'title': title,
        'artist': artist,
        'yearPublished': yearPublished
    } // using the variable album to my new object, 
    collection.push(album);
    // adds new object to collection array, this saves my object so I can access it globally
    return album;
    // returns the object, album will be written over next time the function is called
}

// Testing addToCollection function: 
addToCollection('Revolver', 'The Beatles', 1966);
console.log(album);
addToCollection('The White Album', 'The Beatles', 1966);
console.log(album);
addToCollection('Icky Thump', 'The White Stripes', 2007);
console.log(album);
addToCollection('Blonde on Blonde', 'Bob Dylan', 1966);
console.log(album);
addToCollection('Blood on the Tracks', 'Bob Dylan', 1975);
console.log(album);
addToCollection('White Blood Cells', 'The White Stripes', 2001);
console.log(album);

// console.logging collection array 
console.log('Albums in Collection:', collection);

function showCollection(array) {
    //log number of items in the collection: 
    console.log('Number in Collection:', array.length);
    //create loop that identifies what is in the array by logging it 
    for (let item of array) {
        console.log(item.title, 'by', item.artist+', published in', item.yearPublished);
    }
}

// test showCollection function
showCollection(collection);


function findByArtist(artistString) {
    //create empty array to hold results 
    let searchResult = [];
    //create loop to search collection array for any object values that exactly match the input artistString
    for (let object of collection) {
        if (object.artist === artistString) {
            searchResult.push(object);
            //if the value saved at the object key artist exactly matches the input artist string... then the entire object is added to the end of the searchResult array
            //because this is a loop, every oject is checked and every object with a matching result is pushed to the array 
            //if no match is found the searchResult array remains empty and returns an empty array
            //this works time after time because searchReult is a local variable and refreshes everytime the function is called. 
        }
    }
    return console.log(artistString,'Search Results:', searchResult);
}

//test findByArtist Function 
findByArtist('The White Stripes');
findByArtist('Bob Dylan');
//artist not in collection array 
findByArtist('Yellowcard');
findByArtist('The Beatles');

// STRETCH GOALS

function search(object) {
    //create new array to hold results
    let results = [];
    // first, does this object even exist?
    if (object === undefined) {
        //if no, return full collection
        return console.log(collection);
    }
    // 2nd, if this object does exist, does it have anything in it?
    if (Object.keys(object).length === 0) {
        // if it is an empty object, return the full collection
      return console.log(collection);
    }
    //3rd, since we now know a) this object exists and b) the object has properties: loop through the collection to find key value pairs that match the key value pairs we are looking for. If all the search criteria is met, add the matching object from collection to the end of the results array. Log the new array so we know what matches were found. 
    for (let item of collection) {
        if (item.artist === object.artist && item.yearPublished === object.year) {
            results.push(item);
        }
    }
    return console.log('Search by object results:', results);
}

search({ artist: 'The Beatles', year: 1966 });
search({ artist: 'The Beatles', year: 1967 });
search({});
search();

