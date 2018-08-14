# movie API

movie REST API database interacting with external API

## Installation

You have to set few things in config.json file:
* database - your mongoDB database settings
* serverPort - your port for this server by default 8080 or environment port
* apiKey - your own api key for http://www.omdbapi.com API

## Usage
* POST /movies            
    - Return movie details based on passed title and add to database
   - required in body    
        - title: {partOfTitle} - part of movie title
    - Example: send: 'Toy Stor', returned: 'Toy Story'
* GET /movies             
    - Return all movies stored in database, 
    - Sorting by all variables in movie Object,
    - Filtering for containing by [Language, Rated, Actors, Director, Writer, Production, Genre, Country] ,
    - Filtering for range by [imdbRatingMin, imdbRatingMax, YearMin, YearMax],
   - optional in query   
        - sort={queryForSorting}  -Allow sorting. Query model is '{variableName}:{order},...',
           - {order} (1 or -1) allow to sort ascending and descending, 
           - You can set another sort level by using ',' sign, 
            - Example 'sort=imdbRating:-1,Year:-1'
        - {variableName}:{value} -Allow filtering for containing and range, 
             - return object where {variableName} contain substring {value},
             - return object which is in range - only for [YearMin, YearMax, imdbRatingMin, imdbRatingMax]
             - {value} is any
* POST /comments          
    - Return text from comment and add comment with movie assignment to database
    - required in body    
        - imdbID: {imdbIDOfMovie} -imdbID from movie object
        - text: {commentText} -Comment text
* GET /comments           
    - Return all comments
    - optional in query   
         - imdbID: {imdbIDOfMovie} -Allow filtering by movie imdbID

## Credits

**Author:** ***Łukasz Klejszta***