const famousMovies = [
    'The Godfather',
    'The Shawshank Redemption',
    'Pulp Fiction',
    'The Dark Knight',
    'Forrest Grump',
    "Schindler's List",
    'Inception',
    'The Matrix',
    'Avatar'
  ];
  
  // ! am Ende 'Titanic' einfügen  // Christian
  famousMovies.push('Titanic');
  console.log(famousMovies);
  // ! 'Forrest Grump' durch 'Forrest Gump' ersetzen // Pablo
  famousMovies.splice(4, 1, 'Forrest Gump');
  //famousMovies[4] ='Forrest Gump';
  console.log(famousMovies);
  // ! Alles ab 'Pulp Fiction' in ein neues Array famousMovies2 kopieren // Pius
  let famousMovies2 = famousMovies.slice(2);
  console.log(famousMovies2);
  
  // ! In famousMovies2 die ersten beiden Elemente entfernen // Lisa
  famousMovies2.shift();
  console.log(famousMovies2);
  famousMovies2.shift();
  console.log(famousMovies2);
  famousMovies2.splice(0, 2);
  
  // ! Am Index 5 zwei neue Filme einfügen: 'Star Wars - Episode IV' und 'Taxi Driver' // Dion
  famousMovies.splice(5, 0, 'Star Wars - Episode IV', 'Taxi Driver');
  console.log(famousMovies);
  // ! 'The Godfather' vorne entfernen und hinten anfügen // Julian
  const deleteGodfather = famousMovies.shift();
  if (deleteGodfather) {
    famousMovies.push(deleteGodfather);
    console.log(famousMovies);
  }
  
  // ! 'Inception' löschen -> Jenny
  famousMovies.splice(7, 1);
  console.log(famousMovies);
  
  const indexOfInception = famousMovies.indexOf('Inception');
  if (indexOfInception > -1) {
    famousMovies.splice(indexOfInception, 1);
  }
  
  // ! Alle Filme zu einem einzigen String zusammenführen, getrennt durch ' - '
  const moviesAsString = famousMovies.join(' - ');
  console.log(moviesAsString);