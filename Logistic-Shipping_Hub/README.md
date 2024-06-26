## Logistics and Shipping Hub - React App
## Overview
Welcome to the Logistics and Shipping Hub React App! This application is designed to streamline and manage logistics and shipping operations for businesses. It provides a user-friendly interface for handling various tasks related to shipping, tracking, and managing inventory.
 
## Database Setup
For the project to work, first, run the mysql.sql script in your MySQL, which will create the necessary database and tables required for the project. For MongoDB, create a database named "reviews" from mongosh using command "use reviews"
 
## Project Structure
The application has two folders inside the main folder 'Logistics':
 
1.     backend
2.     Logistics-Hub-main
 
## Installation
To start the project, first, install all dependencies by running the following command:
npm install
 
If npm install doesn't work, run the following command to force the installation and override any version dependencies:
npm install –force
 
## Running the Project
1. Backend:
Navigate to cd backend
Start MySQL server: nodemon server.js.    --this backend is listening on port 8081
Start MongoDB server: nodemon index.js.    ---this backend is running on port 8080
 We have usen nodemon to keep the server continously running. 

2. Frontend:
Navigate to cd Logistics-Hub-main
Start the React server: npm start.
The React app will run on port 3000.

## Note
1. Make sure to follow the specified sequence for starting the backend servers first (MySQL and MongoDB) and then the frontend server.
2. If you are navigating to Data Analystics tab in the application, it requires to have some data in database. For this if you havent placed any reviews, orders, etc. You can use the test data files given. i.e 
            import reviews.reviews.json in your mongodb compass under reviews db. Test data for mysql is already in test.sql

## Answers to questions 
1. How many total lines of code written?
   
Ans. frontend: 8457 lines
backend: 753
total: 9210

                             
2. What are the features implemented and functional in your project?

Ans.
Below functionalities implemented:                                    
1. User Account/Profile/Transaction management & MySQL
2. Recommender --using open AI and MySQL db integration (used orders and location table from mysql to integrate with open AI)
3. Analytics & Visual Reports
4. Reviews & Trending & MongoDB
5. Auto-Complete Search feature --implemented for order search
6. Google MAPS - Near ME search feature and also for tracking shipments

## Demo
https://www.youtube.com/watch?v=of8gsmfj_Xc&t=20s
