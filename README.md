# SecGen-

## Random Password Generator

## Project randomly generates a password meeting certain criteria

### click button to generate password

### steps involved in generating the random password

- program initiated by user click on Generate Password button

- presents user with series of prompts for password criteria, beginning with welcome alert, subsequent null returns start over here

- user selects criteria, getUserInfo, for password length and alpha character sets (lower case, upper case, numeric, specialChar) 

- for prompt length: choose at least 8 characters and no more than 128 characters; prompts return null until true criterion met

- for prompt character types: confirm whether/not to include lowercase, uppercase, numeric, and/or special characters

- answer validated: at least one of the four character array types should be selected, or null return

- when all prompts answered... object is created to store user input, confirmUserInfo, with user-selected length and character options

- randomization function uses randomIndex and randomEl * length from arrays based on getUserInfo options chosen

- user-selected options are stored as password is concatenated

- to  ensure all user-chosen options are included in the password -- particulary an issue  with shorter password lengths -- possibleCharacters for each array must be supplemented by guaranteedCharacters, so that at least one character per option appears; this done via push method

- randomization for-loop is applied to possibleCharacters and guaranteedCharacters, the string then joined to concatenate the password

- generated Password is written to browser page in textarea box where Your Secure Password placeholder was originally seen

## Link to code repository

https://github.com/mcleanGit/SecGen-

## Link to deployed application

https://mcleangit.github.io/SecGen-/

## Screenshot of deployed application

<img src="https://user-images.githubusercontent.com/94858165/153774966-9c5b387b-b68e-4ec1-85f5-ca912e52dd46.png" width="15%"></img> 
<img src="https://user-images.githubusercontent.com/94858165/153774976-60b54a45-64df-415c-9853-c64092eee91a.png" width="15%"></img> 

