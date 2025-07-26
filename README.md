
# AI-Powered Social Media Dashboard 📱🧠

A cross-platform React Native app demonstrating smart authentication, an infinite social feed, post creation, and AI-assisted development practices.

---

## 🚀 Features

- 🔐 **Login Authentication** with form validation and persistent state
- 📲 **Infinite Feed** with pull-to-refresh and smart search
- 📝 **Post Creation** using a multi-step form
- 🧠 **Advanced State Management** with Redux Toolkit + RTK Query
- 🔎 **Search Functionality** with debounce for intelligent filtering
- ✅ **Logout & Protected Routes**
- ⚡ Smooth performance and minimalistic UI

---

## 🧰 Tech Stack

| Tech | Description |
|------|-------------|
| React Native | Cross-platform app development |
| TypeScript | Type-safe coding |
| Redux Toolkit + RTK Query | State management & API caching |
| React Navigation v6 | App routing and navigation |
| Formik + Yup | Form handling and validation |
| AsyncStorage | Persistent auth storage |
| JSONPlaceholder API | Mock social data (posts, users) |

---

## 🧠 AI Usage Summary

- **Used AI** to scaffold project structure, form validation logic, debounce, and RTK slice examples
- **Enhanced manually** by writing custom navigation flow, local state logic, and architecture decisions
- Full documentation: [`AI_Development_Journal.md`](./AI_Development_Journal.md)

---

## 🧪 How to Run Locally

1. Clone the repo  
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run on Android:
   ```bash
   npx react-native run-android
   ```

4. (Optional) Run on iOS:
   ```bash
   cd ios && pod install && cd ..
   npx react-native run-ios
   ```

---

## 🌐 API Used

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
  - `GET /posts`, `POST /posts`, `GET /users`

---

## 📸 Screens

- Login Screen  
- Feed with Infinite Scroll  
- Create Post Form  
- Logout Flow  
- Search Filter on Feed

---

## 📹 Demo Video

_Link to 5–10 minute walkthrough here_

---

## 📄 License

MIT
