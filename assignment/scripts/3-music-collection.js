console.log('***** Music Collection *****')

let collection = [];
beatlesDiscography = [];

function addToCollection(title, artist, yearPublished) { 
   let album = {
        'title': title,
        'artist': artist,
        'yearPublished': yearPublished
    }
    collection.push(album);
    return console.log('Album Added:',album);
}

addToCollection('Revolver', 'The Beatles', 1966);
addToCollection('The White Album', 'The Beatles', 1968);
addToCollection('Icky Thump', 'The White Stripes', 2007);
addToCollection('Blonde on Blonde', 'Bob Dylan', 1966);
addToCollection('Blood on the Tracks', 'Bob Dylan', 1975);
addToCollection('White Blood Cells', 'The White Stripes', 2001);

console.log('Albums in Colleciton:', collection);

function showCollection(array) {
    console.log('Number of Albums in Collection:', array.length);
    console.log('List of Albums in Collection:');

    for (let item of collection) {
        console.log(item.title, 'by', item.artist, 'published in', item.yearPublished);
    }
}

