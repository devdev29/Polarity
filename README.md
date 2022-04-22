
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Polarity

A website that displays the percent positivity the top tweets that contain any hashtag that's been searched 

Tech Stack:  
  
ML- 
![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)
![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)
<br>
<br>
Server- 
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
<br>
<br>
Frontend- 
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

# **How it Works**  
### Tweets- The tweets are gotten in real time using the library [snscrape](https://github.com/JustAnotherArchivist/snscrape) and filtering the tweets by the hashtag entered by the user.  
### Model- The model has been built using the Logistic Regression algorithm and trained on the [Sentiment140](https://www.kaggle.com/datasets/kazanova/sentiment140) dataset, currently it has reached an accuracy of **78%** 

## To set up a dev environment for this repo-
Fork this repo and navigate to the client directory, in the client directory, you can run:

### `npm start`

To fire up the frontend

### Server

To start the server, go to the server directory and run:

###  `flask run`

the website can then be accessed at localhost:3000
