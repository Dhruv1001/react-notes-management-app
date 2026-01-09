React Notes Management App

A simple React.js Notes Management Application built to demonstrate clean component architecture, proper state management, and handling of different UI states such as loading, empty, and validation errors.

This project was created as part of a frontend technical assignment.

🚀 Features

➕ Add notes with a mandatory title and optional description

📋 View a list of all added notes

❌ Delete notes instantly

⏳ Full-screen loader (buffering) on initial app load

⚠️ Inline validation error when title is missing

🎯 Empty state message when no notes are available


🛠 Tech Stack

React.js (Vite)

JavaScript (ES6+)

CSS


🧠State Management Approach

useState is used for managing:

1.Notes data

2.Loading state

3.Form input and validation errors

useEffect is used only once to simulate an API call during initial app load.

⏳Loader / Buffering Behavior

A full-screen buffering loader appears when the app initially loads.

The loader simulates an API request using setTimeout.

Once loading completes:

If notes exist → notes list is displayed

If no notes exist → empty state message is shown

The loader does not appear during add or delete operations.
