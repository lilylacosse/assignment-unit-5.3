console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) { 
    let album = {
        'title': title,
        'artist': artist,
        'yearPublished': yearPublished
    }
    collection.push(album);
    return console.log(album);
}

addToCollection('Revolver', 'The Beatles', 1966);
console.log(collection);
