# Introducing Mintalk. (http://mintalk.site/)
Mintalk was created to alleviate mental pain and suffering.

### Backend Github
https://github.com/GDSC-SKHU/2023-Solution_Challenge-Team4-Backend

## The features of Mintalk include
- Self-psychological tests
- Real-time chat with counselors
- Matching with psychiatrists.

## 1. We would like to share the problem that we are trying to solve.

We developed the site with a focus on situations where the happiness index is significantly low. Therefore, we developed features to eliminate the distance or discomfort people may feel when seeking psychological counseling, which can help improve mental health. We believed that many people could benefit from psychological counseling if we could address the stigma or discomfort that people may feel about seeking such help. By doing so, we hope to alleviate the mental pain and suffering of many people.

## 2. How do we plan to solve the problem?

I believe that if we can develop self-tests with an element of fun and allow users to converse with mental health professionals as if they were chatting with friends, they will be able to have a more intuitive understanding of their own mental health. Additionally, if people start saying things like 'Go take a test on Mintalk' naturally and positively, then I believe our site can actually contribute to improving people's mental health.

## 3. Please take a look at our service.

<p>
<img width="1680" alt="스크린샷 2023-03-30 오후 6 23 15" src="https://user-images.githubusercontent.com/104067367/228792168-75bbd104-3942-40e1-b869-337a55e478d3.png">
<img width="1680" alt="스크린샷 2023-03-30 오후 6 26 47" src="https://user-images.githubusercontent.com/104067367/228792305-437577c2-5ddb-45e3-9141-cb99bd5f2aef.png">
<img width="1680" alt="스크린샷 2023-03-30 오후 6 27 07" src="https://user-images.githubusercontent.com/104067367/228792378-5fe0f517-b607-4a28-a4dc-630bdee9da66.png">
<img width="1680" alt="스크린샷 2023-03-30 오후 6 27 30" src="https://user-images.githubusercontent.com/104067367/228792493-2386e20a-5dcd-4296-9f3f-23252cab952b.png">
<img width="1680" alt="스크린샷 2023-03-30 오후 6 27 46" src="https://user-images.githubusercontent.com/104067367/228792557-978ec0ac-7d10-48aa-bf8b-feafd1233e42.png">
<img width="1680" alt="스크린샷 2023-03-30 오후 6 29 57" src="https://user-images.githubusercontent.com/104067367/228793191-ca4f5119-cb6e-4f4b-b1da-f45db74b88da.png">
<img width="1680" alt="스크린샷 2023-03-30 오후 6 32 00" src="https://user-images.githubusercontent.com/104067367/228793783-73f2711f-d304-4c77-9449-91e3e602ce34.png">
<img width="1680" alt="스크린샷 2023-03-30 오후 6 32 27" src="https://user-images.githubusercontent.com/104067367/228793855-34c96db5-efdb-409f-90ea-a2c7a2d33839.png">
<img width="1680" alt="스크린샷 2023-03-30 오후 6 32 42" src="https://user-images.githubusercontent.com/104067367/228793909-67345ace-c6d0-44e1-8919-1aaff17e3e95.png">

</p>

## 4. How to use the features
### Sing up and login instructions
Sign up according to your role.

If you want to receive counseling, sign up as a **client**.

If you are qualified to provide psychological assistance to clients, sign up as a **counselor**.

### Usage instrunctions (after logging in)
*Client*
  
1. Click the list of counselors on the header bar.

2. Select gender and field of the counselor to search.

3. Click on the counselor that matches your search criteria to see their detailed information (education, experience, hospital location).

4. After reviewing the detailed information, you can chat with the appropriate counselor.

5. Leave a review after counseling on the counselor's detailed information page (not mandatory).

*Counselor*

1. Your basic information will be registered on the list of counselors when you sign up.

2. Use the "My Page" section on the header bar to fill in your detailed information. Your information will be updated on your counselor profile page once you complete the form.
  



### 5. source tree

```bash
.
├── components
│   ├── Chat.tsx
│   ├── CheckBox.tsx
│   ├── CheckBoxSearch.tsx
│   ├── Consultant.tsx
│   ├── Googlemaps.tsx
│   ├── Login.tsx
│   ├── LoginC.tsx
│   ├── LoginM.tsx
│   ├── Logout.tsx
│   ├── Mypage.tsx
│   ├── PhotoUpload.tsx
│   ├── RateModal.tsx
│   ├── RatingSection.tsx
│   └── Signup.tsx
├── constants
│   └── index.ts
├── libs
│   └── api.ts
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── clientsConsultantPage.tsx
│   ├── conSearch.tsx
│   ├── consultantsMypage.tsx
│   ├── index.tsx
│   ├── login.tsx
│   ├── onlineChat.tsx
│   ├── signup.tsx
│   ├── signupC.tsx
│   └── singupM.tsx
└── styles
    ├── Find.module.css
    └── globals.css

```

### 6. Here are the upcoming features that Mintalk plans to implement

- Self-psychological tests (in progress)
- Real-time chat with counselors (in progress)
- Matching with psychiatrists.