# Polyteach Mobile Application

## Presentation

Polyteach Mobile Application is the mobile version of the Polyteach. 
A web plateform meant to gather teaching video content and to facilitate the exchange between teachers and students.
This application only manage the student part. A student logged-in can watch every videos of the courses he has access to.
He can navigate offline and download videos.

You have to connect on the web application in order to be seen as a user and be added to courses https://polyteach-staging.igpolytech.fr/dashboard

### Installation on Android

Just open your browser, go to the APK file provided with the app rendering, and tap it – you should then be able to see it downloading on the top bar of your device.
Once it's downloaded, open Downloads, tap on the APK file, and tap Yes when prompted.
The app will begin installing on your device. Simple.

### Installation on IOS

You need a MAC computer, the IDE XCode and cocoaPods.
Plug your IOS device into the MAC.
Download the project as if you wanted to develop on the app (find the instructions in the following paragraph below).
Open the project with XCode (here is the command to type into a terminal on the project root)
```
polyteach.xcworkspace
```
Then enter the command :
```
cd ios
pod install
```
Run on XCode (click on the run button)


### Installation to develop

Pre-requisite : GIT, react, node.js and npm

Open a terminal and hit the command
```bash
git clone https://gitlab.com/ClaraJacintho/awi_mobile.git
```
In order to run it on an emulator you can follow this tutorial https://medium.com/@wnyao0830/run-create-react-native-app-on-android-studios-emulator-ad678a0c362f


**DO NOT USE EXPO**


Then use the following command on the root of your project file to install the dependencies and start the developement server:

```bash
npm i
npm start
```

## Technology choices 

We chose to use React-native because it is a cross-platform language that facilitates the development of the app and allows us to go faster.

We use Redux to manage the state of the app and we make the store persistent with a specific library of Redux. Redux allows us to well manage the data in the app and to easily have persistent data for the offline mode.  

To make the data persistent we use the Async Storage system because it is an asynchronous and persistent storage adapt to React native platform.  Moreover, it is a popular storage so a lot of documentation and tutorials exist to help us. Moreover, it is well adapted to our case because it is a key-value storage so it is adapted to store the state of the application. 


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Credits
This project has been made by Maria Clara Machry Jacintho, Marie Salelles, Yvan Sanson et Nathan Traineau
