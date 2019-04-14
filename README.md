This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Movie Search App
Simple movie search app created with React. Allows user to search for movie via text search. App uses search text to query MovieDB API, version 3.

## Getting Started
Fork and/or clone to local machine. Run `npm install` to install below dependencies (under Prerequisites) AND create-react-app.

Run `npm start` to run application in browser via localhost on port 3000.
Run `npm test` to run tests in terminal.

### Prerequisite Dependencies (if want to run one by one rather than npm install)
`npm install axios`
Alternative to fetch. Advantages: Returns JSON response and may require less work to handle all errors from failed promise. (ie 404s may not be caught)

`npm install react-ratings-declarative`
React component module that uses props to build rating stars.

`npm install react-paginate`
React component that uses props to build pagination UI.

`npm install @fortawesome/fontawesome-svg-core`
`npm install @fortawesome/free-solid-svg-icons`
`npm install @fortawesome/react-fontawesome`
Icons as font - used for search icon.

`npm install enzyme enzyme-adapter-react-16 react-test-renderer`
Additional testing tools.

## Challenges and Design Decisions
1. MovieDB query results - I was initially unsure how MovieDB query determined order and selection for movie query results. Eventually found confirmation in forum that results are returned via a 'relevancy' to query text determination with a 'popularity' boost. [https://www.themoviedb.org/talk/5339fe0ac3a3680e7f006a90] See #1 on Future Improvements below.
2. Search bar placement - Experimented with placing search bar in sticky header that remains attached to top window as user scrolls down to view results on current page, acting more like a fixed header. 
..* Conceptually, this would allow user to adjust query text if determine results are not narrow enough when reach bottom of page (after 20 results) without needing to scroll back up. Theorize that user may do this after 20 results if also see that total results and total pages in pagination display are too broad. Would require A/B testing to confirm/refute theory. ..* Chose sticky position property over fixed position to keep Header component in DOM flow as wanted to avoid absolute positioning and maximize use of flex layout. Sticky positioned Header would only remain visible until bottom of Main component (which contained List component) if Main component acted as container. So, placed Header into Main. Tradeoff - This compromised my initial component hierarchy for Header, Main, and footer to act as siblings.
3. Movie results as cards in flex layout - Formatted individual results into card layout to allow user to see as many results on screen as possible. Flex layout makes results liquid for many desktop viewport sizes. (Assuming desktop and separate apps for mobile.)  
4. Pagination vs. infinite scrolling - Based on preliminary review of UX articles on issue, decided to implement pagination rather than infinite scrolling. Infinite scrolling ideal for user generated social content constantly renewing and no guarantee see everything. Pagination ideal for searching for specific item, like favorite movie. (Assuming desktop - mobile will have different considerations and likely benefit from 'load more' pattern.) Used react-paginate module to construct pagination UI. Utilized props for 'breaklabel' that allow users to skip five pages ahead (or back) when click ellipses. Some concern about clarity to user although rest of paginate UI is standard and likely familiar. 

## Future Improvements
1. Search Results Ordering Options - Movie DB docs for v3 note query results are optimized for ordering by relevancy. User may wish to further analyze results based on star rating, title alphabetical order, etc. These can be accomplished either with more specific query or handled client side.
2. Handling for individual movie search results with missing images, descriptions, etc.
3. Custom Loader and animations - Make more visible and animated. Fade out over results after they return for smoother experience.
4. Animated transitions for movie search results as load in/out.
5. Better branding design considerations re color palette, use of shadow vs. flat design, etc.
