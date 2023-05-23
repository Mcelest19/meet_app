
# Meet App
<a name="readme-top"></a>

<!--
HOW TO USE:
This is an example of how you may give instructions on setting up your project locally.

Modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

OPTIONAL SECTIONS:
- FAQ

After you're finished please remove all the comments and instructions!
-->

<div align="center">  

  <h3><b>README</b></h3>
  <p align="center" >   
    <img alt="Meet App" src="./public/resultMeet.gif" width="600" height="500" />
 </a>

</p>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack) 
    - [Features](#features) 
    - [User Stories and Scenarios](#User Stories and Scenarios)
    - [🚀 Live Demo](#live-demo)
- [👥 Authors](#authors)



<!-- PROJECT DESCRIPTION -->

# 📖 [Meet App] <a name="Meet App"></a>

Meet App allows users to search for a city and get a list of events hosted in that city (or events in all cities). One chart shows how many events will take place in that city on upcoming days and another visualizes the popularity of event genres in the form of a pie chart. It is a progressive web application built with React using test-driven development (TDD) technique. The app works offline and it can be installed on both mobile devices and computers. Serverless functions are used(AWS Lambda) for the authorization server which generates authorization token(OAuth 2 token) needed in order to access the Google Calendar API and get events data. Scatter chart and pie chart are implemented to visualize data using the recharts library.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>


<details>
  <summary>React, AWS Lamda, serverless, Jest, cucmber-jest, Puppeteer, Atatus etc.</summary>  
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->

## Features <a name="features"></a>

Serverless functions deployed using AWS Lambda. -Performs Oauth and accesses Google Calender API via serverless functions -React Recharts visualization library -Jest test scripting for unit and integration testing -Enzyme for shallow rendering unit tests -Enzyme for full rendering integration tests -Puppeteer for user acceptance and end-to-end testing -Progressive Web Application

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- User Stories and Scenarios -->

## User Stories and Scenarios <a name="User Stories and Scenarios"></a>

  <h3> FEATURE 1: FILTER EVENTS BY CITY </h3></br>
User story: As a user, I should be able to filter events by city so that I can see the events that take place in that city.</br>

<p>Scenario 1: When user hasn’t searched for specific city, show upcoming events from all cities Given app is loaded</p>
<p>When: user hasn’t searched for any city.</p>
<p>Then: the user should see a list of all upcoming events</p></br>

<p>Scenario 2: user should see a list of suggestions when they search for city.</p>
<p>Given: the main page is open with the list of events in all cities</p>
<p>When: user starts typing the name of city in the text box</p>
<p>Then: the user should see a list of cities (suggestions) that match what they have typed</p></br>

<p>Scenario 3: When the user searches for city, a list of upcoming events in this city should be shown</br>
Given: the user was typing “Berlin” in the city textbox, and the list of suggested cities is showing</br>
When: user selects a city (e.g., “Berlin, Germany”) from the list of suggested cities</br>
Then: user city should be changed to the selected city (i.e. “Berlin, Germany”) and the user should receive a list of upcoming events in specified city</p>

<h3>FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS</h3></br>
<p>User story: As a user, I should be able to show/hide event details so that I can see more/less information about an event.</br>
</br>
Scenario 1: An event element is collapsed by default</br>
Given: app is loaded</br>
When: user receive the list of events in all cities (or specified city if searched)</br>
Then: user should see minimal informations about the listed events</br>
</br>
Scenario 2: User can expand an event to see its details</br>
Given: the main page is open with the list of events in all cities or specified city</br>
When: user clicks "show details" button for the associated event from the list</br>
Then: user should see more details of the event associated with the clicked button</br>
</br>
Scenario 3: User can collapse an event to hide its details</br>
Given: the main page is open with the list of upcoming events in all cities or specified city</br>
And: user has clicked "show details" button and details of event are shown</br>
When: user clicks "hide details" button for the associated event from the list</br>
Then: user should see less details of the event associated with the clicked button</p></br>
</br>
<h3>FEATURE 3: SPECIFY NUMBER OF EVENTS </h3></br>
<p>User story: As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.</br>
</br>
Scenario 1: When user hasn’t specified a number, 32 is the default number</br>
Given: user hasn’t specified a number</br>
When: user receives the list of events in all cities or specified city</br>
Then: user should see the list of 32 upcoming events in all cities or specified city</br>
</br>
Scenario 2: User can change the number of events they want to see</br>
Given: the main page is open with the list of events in all cities or specified city</br>
When: user specifies number of events to display</br>
Then: user receives specified number of events on the screen</p></br>
</br>
<h3>FEATURE 4: USE THE APP WHEN OFFLINE</h3></br>
<p>User story: As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online.</br>
</br>
Scenario 1: Show cached data when there’s no internet connection Given user doesn't have an internet connection</br>
When: user opens the app offline</br>
Then: user should see the data viewed last time user was online</br>
</br>
Scenario 2: Show error when user changes the settings (city, time range)</br>
Given: user opened the app offline and received the data viewed last time user was online</br>
When: user tries to change the setting (city, time and range)</br>
Then: user receives error message indicating that data is not available without internet connection</p></br>
</br>
<h3>FEATURE 5: DATA VISUALIZATION</h3></br>
<p>User story: As a user, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.</br>
</br>
Scenario 1: Show a chart with the number of upcoming events in each city</br>
Given: user receives the list of events in specified city which user has set</br>
When: user pushes the button "Visualize"</br>
Then: user should see a chart with the number of upcoming events in the specified city</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://mcelest19.github.io/meet_app//)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Marina Celestino**

- GitHub: [@githubhandle](https://github.com/Mcelest19)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/marina-celestino-90319a166/)


<p align="right">(<a href="#readme-top">back to top</a>)</p> 
