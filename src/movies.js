// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  const allDirectors = movies.map(function(directorname) {
    return directorname = movies.directorname;
  })
  return getAllDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
  const filteredMovies = moviesArr.filter ((movie) => {
    return movie.director === "Steven Spielberg"
  }).filter((movie) => {
    return movie.genre.includes("Drama")
  })
  return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArr) {
  if (moviesArr.length === 0) {
    return 0;
  } else {
    let total = moviesArr.reduce((acc, movie) => {
      if (movie.score) {
        const updatedAcc = acc + movie.score;
      }else {
        return acc;
      }
    }, 0);
    return Number((total / moviesArr.length).toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
  const moviesArrCopy = moviesArr.map((movie) => {
    return movie
  });
  moviesArrCopy.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title < b.title) {
        return -1;
      }else {
        return 0;
      }
    }
  });
  return moviesArrCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  const moviesArrCopy = moviesArr.map((movie) => {
    return movie
  });
  const orderedMovies = moviesArrCopy
    .sort((a, b) => {
      return a.title.localCompare(b.title)})
    .map((movie) => {
      return movie.title;
    })
    .slice(0, 20);
    return orderedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
