/**
 * Widget for showing the current search terms and suggestions. Should be displayed right below
 * the main Navbar. Manages the search requests, suggesting "featured" entries as default. Also
 * responds to query string params.
 * Updates the search bar suggestions, showing categorized results, prioritized as:
 * - People
 * - Movies
 * - Series
 * - Search terms
 * If a Search Term entry is selected (or enter/search pressed), redirects to List page.
 * If a specific person, movie or TV show is selected, redirects to Details page.
 */
