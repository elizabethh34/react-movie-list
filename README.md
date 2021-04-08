# MITTFlix React

MITTFlix is a web app that shows users a list of movies, sorted into genre categories. Users can search for movies to add to their favourites list

#### To start this app

To start this app, you will need to run 2 separate commands.

`npm run db`

This will start the database so your app actually has movies to query. The database runs on port 3001 just in case you need that info.

`npm start`

This starts up the actual app in the development mode.
Open http://localhost:3000 to view it in the browser.

## Features:

- Users can search for movies
- Users can select their favourite movies to add to their list
- Users can view their favourite movies in a table view as well

## Implementation

- #### Main Page
    - movies are grouped by genre.
    - genre headings only show up if there are movies that belong to that genre.
    - movies can belong to 1 or more genres and show up multiple times on the page.
    - genres are displayed in alphabetical order.
    - all the genres that have movies are displayed.

- #### Search (Filter)
    - The search will apply to the list of movies displayed on any of the pages the user is currently visiting.
    - The search filters the results down based on the input provided
    - The results are filtered based on the finding matching text either within the title or the overview
    - Whenever the text content of the input changes, a new filter is performed. This is dependent upon keystrokes, not submit events.
    - The amount of results found are displayed below the search field.
    - The search query being used is displayed below the search field.

- #### My List
    - Users can see all the movies that have been added to their list
    - Users can choose to view and interact with their list in a table view that includes the title, rating, and genres of each movie. It should be possible to remove items from the list in this view as well.

- ### Adding to My List
    - Users can hover over a movie and see a + sign. Clicking on this button will add a movie to their List.
    - Once a movie is added to the user's list, it will show up under the My List section
    - This update must be made in a way so that the information persists even if the browser is reloaded. This means you'll have to update the API.
    - If a movie is added to the user's list, it must include a red check mark icon.
    - Clicking on the check mark icon of a movie that is in the user's list will remove it from that list.
