/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let photoElement = document.querySelector('#photo');
let myProfile = {
    name: "Júlio César Nunes de Souza",
    photo: {
        src: "images/eu.jpeg",
        alt: "Profile Picture"
    },
    favoriteFoods: [
        'Pizza',
        'Vegetables',
        'Suchi',
        'Fresh chips'
    ],
    hobbies: [
        'Soccer',
        'Play online games',
        'listen to Music'
    ],
    placesLived: []

}


/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Brazil",
        length: "23 years",
    }
)



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived => {
    const newDt = document.createElement('dt')
    newDt.textContent = placesLived.place
    document.getElementById("places-lived").appendChild(newDt)
    const newDd = document.createElement('dd')
    newDd.textContent = placesLived.length
    document.getElementById("places-lived").appendChild(newDd)
});