# `data` Branch

This branch contains **data files for the [Cyclone-react](../) pet project**.  
Its main purpose is to store static resources (for example JSON files) that the main branch can retrieve via `fetch`.

## Structure

data/
├─ topics.json
└─ ...

*File names and quantity may vary depending on the project’s needs.*

## Usage in the main branch

In the **`main`** branch (or any other working branch) you can load the data either through direct GitHub raw links or through your own backend.

### Example fetch request from the frontend

```javascript
fetch("https://raw.githubusercontent.com/<USER>/<REPO>/data/tours.json")
  .then(response => response.json())
  .then(data => {
    console.log("Fetched data:", data);
  })
  .catch(error => console.error("Error while loading:", error));
  ```
