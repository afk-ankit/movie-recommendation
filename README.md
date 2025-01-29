# Watch Now

Watch Now is a movie recommendation application built with React, TypeScript, and Vite. It allows users to explore, search, and manage their favorite movies. The application integrates with The Movie Database (TMDB) API to fetch movie data.



Watch Now is a movie recommendation application built with React, TypeScript, and Vite. It allows users to explore, search, and manage their favorite movies. The application integrates with The Movie Database (TMDB) API to fetch movie data.

## Features

- **Home Page**: Displays a list of movies based on the user's selected genres.
- **Explore Page**: Allows users to explore top-rated, recent releases, and popular movies.
- **Search**: Users can search for movies by title.
- **Movie Details**: Provides detailed information about a selected movie, including trailers and watch providers.
- **Watchlist**: Users can add movies to their watchlist for later viewing.
- **Profile**: Users can create and update their profile with a custom avatar.
- **Genre Selection**: Users can select their favorite genres to personalize their movie recommendations.

## Pages

- **Home**: Displays movies based on selected genres.
- **Explore**: Shows top-rated, recent releases, and popular movies.
- **Search**: Allows users to search for movies.
- **Movie Details**: Provides detailed information about a movie.
- **Watchlist**: Displays the user's watchlist.
- **Profile**: Allows users to create and update their profile.
- **Genre Selection**: Allows users to select their favorite genres.

## Hosted Link

You can access the hosted application at [Watch Now](https://watchnow.avocadorable.in).

## Video Explanation

For a detailed explanation of the project, watch the video [here](https://youtu.be/Fr6NolHChXM?si=8Iv_Qy7VyEQDUJkZ).

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/watch-now.git
   cd watch-now


## Features

- **Home Page**: Displays a list of movies based on the user's selected genres.
- **Explore Page**: Allows users to explore top-rated, recent releases, and popular movies.
- **Search**: Users can search for movies by title.
- **Movie Details**: Provides detailed information about a selected movie, including trailers and watch providers.
- **Watchlist**: Users can add movies to their watchlist for later viewing.
- **Profile**: Users can create and update their profile with a custom avatar.
- **Genre Selection**: Users can select their favorite genres to personalize their movie recommendations.

## Pages

- **Home**: Displays movies based on selected genres.
- **Explore**: Shows top-rated, recent releases, and popular movies.
- **Search**: Allows users to search for movies.
- **Movie Details**: Provides detailed information about a movie.
- **Watchlist**: Displays the user's watchlist.
- **Profile**: Allows users to create and update their profile.
- **Genre Selection**: Allows users to select their favorite genres.

## Installation Guide

1. First, clone the repository:
```bash
git clone https://github.com/yourusername/watch-now.git
cd watch-now
```

2. Set up environment variables:
   - Copy the contents of `.env.dummy` to a new file named `.env`:
   ```bash
   cp .env.dummy .env
   ```
   - Open `.env` and update the following variables:
   ```
   VITE_API_ACCESS_TOKEN=YOUR_ACTUAL_TMDB_ACCESS_TOKEN
   VITE_BASE_URL=https://api.themoviedb.org/3
   VITE_IMAGE_URL=https://image.tmdb.org/t/p/original
   VITE_VIDEO_LINK=https://www.youtube.com/watch?v=
   ```

3. To get your TMDB API access token:
   - Visit [TMDB Authentication Page](https://developers.themoviedb.org/3/getting-started/authentication)
   - Create an account if you haven't already
   - Go to your account settings
   - Click on "API" in the left sidebar
   - Request an API key by filling out the form
   - Once approved, generate an API access token
   - Copy the access token and paste it in your `.env` file

4. Install dependencies:
```bash
npm install
```

5. Build the application:
```bash
npm run build
```

6. Start the preview server:
```bash
npm run preview
```

The application should now be running on `http://localhost:4173` (or another port if 4173 is in use).


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
