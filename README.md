# React App Collection

Welcome to the React App Collection! This is an ongoing project where I add individual, separate projects which will be various types of applications, all built using React. The purpose of this project is to learn and improve my knowledge of React, as well as to showcase my work and progress over time.

## What is included in this collection?

This collection currently includes no working apps apart from the main menu, I intend to develop a few basic applications to start with such as a calculator, a to-do list, tic-tac-toe, and checkers. Each project is contained in its own subdirectory within the repository and is fully functional as a standalone application.

## Prerequisites

Before running the React App Collection, make sure you have the following software and tools installed on your machine:

- Node.js v18.10.0 or later
- npm (Node Package Manager) - this comes bundled with Node.js
- Visual Studio Code (or any other code editor of your choice)

## Installation

To install and run the React App Collection, follow these steps:

1. Clone the `react-app-collection` repository using the `--recursive` option to ensure that the submodules are initialized and updated automatically: 

   `git clone --recursive https://github.com/SMelidoni/react-app-collection.git`
   
If you have already cloned the repository with the `--recursive` option, you can skip to the next step.

2. If you have not used the `--recursive` option when cloning the repository, or if you have added a new submodule to the repository, you will need to initialize and update the submodules manually:

   `git submodule init`
   `git submodule update`
   
This will ensure that the submodules are properly initialized and updated to the latest version specified by the main repository.

3. Navigate to the root directory of the React App Collection and install the dependencies as well as initializing the sub modules:

   `cd react-app-collection`
   `npm install`
   `git submodule update --init --recursive`
   
Note: This project was developed using Node.js v18.10.0 and Visual Studio Code, but you can use any code editor of your choice.

4. Start the development server:

   `npm start`
   
You can then access the application by opening your web browser and navigating to http://localhost:3000.

## How to run the applications (individually)

To run any of the applications in this collection as a standalone app, simply navigate to the corresponding subdirectory and run the following commands:

   `cd <subdirectory>`
   `npm install //(If not done in step 3 above)`
   `npm start`

You can then access the application as mentioned in point 4 above.

## Contributing

I welcome contributions to this project! If you have an idea for a new application to add to the collection or want to make improvements to an existing one, feel free to follow the steps below or contact me directly.

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Test your changes
5. Submit a pull request

Thank you for checking out my React App Collection!
