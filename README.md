# How do I get set up?
```
git clone https://github.com/mnervik/Noroff-FinalCA.git
```
```
cd Noroff-FinalCA
```
```
npm install
```
```
ng serve
```

open the browser and navigate to ```http://localhost:4200```

## Login Credentials
username: ```admin```

password: ```pass```

# Info

1. Because of the api having an excessive ammount of cards, I've put a limit in the code to make sure the browser does not crash.
Look for ```private resultLimit = 20;``` (line-18) in ```src/pages/dashboard-page/dashboard-page.component.ts``` and change it to somthing else if you want.
Setting the variable to an excessively high number might cause issues with the code.

2. Early in development I had issues using FireFox to use the app, and although it worked fine at the last commit, if you have any issues, you can use Chrome instead.
