# Background Changer 

A simple web application built with React, Vite.js, and Tailwind CSS that allows users to change the background color of the webpage by clicking on buttons.

## Features

- Multiple buttons for different colors.
- Instant background color change on button click.
- Responsive and user-friendly interface with Tailwind CSS.

## Technologies Used

- React
- Vite.js
- Tailwind CSS
- JavaScript

## Getting Started

### Prerequisites

1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine.


2. Install the dependencies:

   ```bash
   npm install
   ```

3. Install Tailwind CSS:

   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. Configure Tailwind by adding the paths to all of your template files in `tailwind.config.js`:

   ```javascript
   module.exports = {
     content: ['./src/**/*.{js,jsx,ts,tsx}'],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

5. Add the Tailwind directives to your `src/index.css` file:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Running the Project

To start the development server, run:

```bash
npm run dev
```

Open your browser and go to `http://localhost:3000` (or the port indicated in your terminal).

## Usage

- Click on any of the color buttons to change the background color of the webpage.
- The available colors are predefined, but you can modify or add more in the `src/App.js` file.
```

Feel free to use this as needed!


