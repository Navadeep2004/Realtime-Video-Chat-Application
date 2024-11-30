# Video Chat Application


This application provides a user-friendly interface that allows users to initiate video calls. Users can connect with family, friends, colleagues, or strangers, depending on their privacy settings and preferences. The application typically offers features such as one-on-one video calls, group video calls, and instant messaging, during the chat session using Google authentication

This application is built using the PeerJS library, socket.io and Node.JS library for managing the server. The design for this project is inspired by Google Meet and would look to improve both design and utility in the near future. 

## Table of Contents

- [Project team](#project-team)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Technologies Used](#technologies-used)
- [Setup](#setup)

## Project team

- [@BHOGISAISATHWIK](https://github.com/BHOGISAISATHWIK)
- [@saisanthoshbussa](https://github.com/saisanthoshbussa)
- [@KodudulaAshish](https://github.com/KodudulaAshish)
- [@Navadeep2004](https://github.com/Navadeep2004)
- [@raxhub004](https://github.com/raxhub004)

## Features

- Real-time video conferencing - Users can organize meets where others could join using the meet ID.
- User authentication using Gmail-id and session management.
- Chat functionality - where users can chat with others during video calls.
- Light/dark mode toggle feature for enhanced user experience.

![254037790-a032202a-0613-4fb4-b0b4-e84b380b8146](https://github.com/BHOGISAISATHWIK/REALTIME-VIDEO_CALL-CHATTING-WEBSITE/assets/95133901/05bbf7f1-c030-47b5-a970-48eeadaf34ea)

![WhatsApp Image 2024-11-30 at 13 11 08_ba3f3518](https://github.com/user-attachments/assets/9b696ffb-d3e6-420b-a438-347df9820ebb)
![WhatsApp Image 2024-11-30 at 13 12 57_14846935](https://github.com/user-attachments/assets/55cf4daf-0462-4302-b4fb-732611f8db6e)
![WhatsApp Image 2024-11-30 at 13 13 27_41f54005](https://github.com/user-attachments/assets/e467b37d-b740-4c3a-a981-e257eabe062e)



## Prerequisites

Install [node.js](https://nodejs.org/en/) in your machine

## Technologies Used

- [WebRTC](https://webrtc.org/): A free, open-source project that provides real-time communication capabilities via APIs for voice, video, and data transfer.
- [SocketIO](https://socket.io/): A JavaScript library that enables real-time bidirectional communication between clients and servers using WebSockets.
- [PeerJS](https://peerjs.com/): A library that simplifies WebRTC peer-to-peer data, audio, and video calls by providing a simple API and handling the complexities of WebRTC.
- [EJS](https://ejs.co/): A template engine for Node.js that allows for server-side rendering of HTML templates with JavaScript.
- [Passport.js](http://www.passportjs.org/): A flexible authentication middleware for Node.js that supports various authentication strategies, including Google authentication.

## Setup

1. Clone the project

bash
    git clone https://github.com/Navadeep2004/Realtime-Video-Chat-Application.git


or download the zip file.

2. Go to the project directory and install dependencies

bash
    npm install


3. Start the server

bash
    nodemon server


4.Open the application in your web browser at http://localhost:5000
