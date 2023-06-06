# rn-demo-app-main
Demo app for ZID

Cloned the demo app form repo https://github.com/homaily/rn-demo-app and fix some issue related design and performance

For Android i didnt face any issue to start the project 
For ios you might face some depending upon your local environment(Xcode & Mac Version) below steps helped me with Xcode Version 14.3.1 and Mac Os version 13.4

steps performed

    cd ios && pod repo update && pod install && pod update

then

    In your Xcode project navigator, select Pods.
    Under Targets, select React-Codegen
    Set the window to Build Settings
    Under Deployment, set iOS Deployment Target to 12.4
    Clean project and rebuild: Product > Clean Build Folder, Product > Build


below is a screenshot of(android and ios) app for demo perpous
![image](https://github.com/yusuf987/rn-demo-app-main/assets/24749530/e3900548-f359-48da-82a1-f8552092c8b7)
