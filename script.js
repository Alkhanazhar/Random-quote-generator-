function quotegenerator(){

    var quotes={
        "Erik Erikson":'“Life doesn’t make any sense without interdependence. We need each other, and the sooner we learn that, the better for us all.”',
        "Robert Biswas-Diener":'“Once you start making the effort to ‘wake yourself up’—that is, be more mindful in your activities—you suddenly start appreciating life a lot more.” ',
        "Sigmund Freud":'“We are what we are because we have been what we have been, and what is needed for solving the problems of human life and motives is not moral estimates but more knowledge.”',
        "Jean Piaget":'“If you want to be creative, stay in part a child, with the creativity and invention that characterizes children before they are deformed by adult society.”',
        "Abraham Maslow":'“If you deliberately plan on being less than you are capable of being, then I warn you that you’ll be unhappy for the rest of your life.” ',
        "Viktor Frankl":'“Everything can be taken from a man, but the last of the human freedoms: to choose one’s attitudes in any given set of circumstances.” ',
        "Ellen J. Langer":'“It is not primarily our physical selves that limit us but rather our mindset about our physical limits.”',
        "Michael Argyle":'“For happy people, time is ‘filled and planned.’ For unhappy people, time is unfilled, open and uncommitted; they postpone things and are inefficient.” '
    }


    var authors=Object.keys(quotes);
    console.log(authors)
    var author=authors[Math.floor(Math.random()*authors.length)];
    // console.log(authors[0])
    // console.log(author)
    var quote=quotes[author];


    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;



}