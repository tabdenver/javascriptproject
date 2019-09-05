let TabsFavouriteFilms = 
["Fight Club","Donnie Darko","2046","Spirited Away","Godfather Part 2"
   ];
   console.log(TabsFavouriteFilms);

   TabsFavouriteFilms.push ("Lord of the Rings", "Chungking Express")

   for (filmIndex = 0; filmIndex < TabsFavouriteFilms.length; filmIndex++) {
    console.log(TabsFavouriteFilms[filmIndex])
}
const filmChecker = () => {
    if (TabsFavouriteFilms[2] == "Ghostbusters") {
        console.log("Yay! It's Ghostbusters.")
    }
    else {
        console.log("No. We want Ghostbusters!")
    }
}
filmChecker()