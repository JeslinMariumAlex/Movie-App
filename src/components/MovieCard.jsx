import React from 'react'

function MovieCard({ movie }) { 

    function handleFavoriteClick() {
        alert('Added to favorites!')
    }

  return (
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src="{movie.url} " alt={movie.title} />
            <div className='movie-overlay'>
                <button className='favorite-btn' onClick={handleFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className='movie-info'>
            <h3>{movie.title}</h3>
            <span>{movie.year}</span>
        </div>
    </div>
  )
}

export default MovieCard