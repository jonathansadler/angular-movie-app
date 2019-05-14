import { EventEmitter, Injectable } from '@angular/core';

import { movies, Movie } from './movie.model';
import { genreType } from './movie-genre/movie-genre.model';
 
@Injectable()
export class MovieService{
    movieSelected = new EventEmitter<Movie>();

    private movies = movies;
    
    getMovies(){
        return this.movies.slice();
    }

    getMovie(uri: string){
        var obj = this.getMovies().find(x => x.key == uri);
        return obj;
    }  
    
    getMoviesByGenre(uri: string){
        return this.getMovies().filter(function(item) {
            return item.genres === item.genres.indexOf(uri);
        });
    }

    getGenres(){
        return genreType;
    }
}
