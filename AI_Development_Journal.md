
# AI Development Journal

## 👤 Developer Profile
- **Name:** Aditya Verma
- **Experience:** 3 years as a React Native developer
- **Assignment:** AI-Powered Social Media Dashboard
- **Approach:** Used AI selectively — primarily for planning, structure, and quick references. Most implementation decisions, architecture, and refinement were done manually.

---

## 🔍 AI Tools Used
- **ChatGPT (GPT-4)**
- **Copilot (minor usage in suggestions)**

---

## 🛠️ How AI Was Used

### 1. 📁 Project Setup & Architecture
- **Prompt:** _"Generate a modular React Native project structure for a scalable social media app"_
- **AI Output:** Suggested folder structure (`src/screens`, `components`, `store`, etc.)
- **Developer Action:** Adopted and refined based on personal best practices

---

### 2. 🔐 Login Screen (Formik + Yup)
- **Prompt:** _"Create a login form with validation using Formik and Yup in React Native with TypeScript"_
- **AI Output:** Provided basic form scaffold
- **Developer Action:** Extended with AsyncStorage and integrated into navigation flow

---

### 3. 📲 FeedScreen Design (FlatList + API)
- **Prompt:** _"Implement infinite scroll and pull-to-refresh in React Native using FlatList and JSONPlaceholder API"_
- **AI Output:** Shared best practices for FlatList usage
- **Developer Action:** Customized to use RTK Query and later added local search logic manually

---

### 4. 🧠 RTK Query Setup
- **Prompt:** _"Set up Redux Toolkit with RTK Query in a React Native project"_
- **AI Output:** Boilerplate store and API slice structure
- **Developer Action:** Defined all slices, endpoints, and handled mutation states manually

---

### 5. 📝 Create Post Form
- **Prompt:** _"Create a post submission form with Formik and Yup using POST /posts"_
- **AI Output:** Provided title/body form logic
- **Developer Action:** Integrated navigation, success alerts, and added reset logic on submit

---

### 6. 🔎 Debounced Search
- **Prompt:** _"Debounce TextInput in React Native to avoid frequent re-rendering"_
- **AI Output:** Basic debounce function
- **Developer Action:** Wrote custom debounce handler and managed state manually in useEffect

---

## ✅ Areas Where I Went Beyond AI
- Auth logic and navigation protection
- Redux slice architecture and mutation response handling
- Feed filtering and data transformation
- Managing persistent login with AsyncStorage
- Manual styling, layout structure, and spacing
- Error boundaries and loading fallback behavior

---

## 📚 What I Learned from AI Use
- Saved time in boilerplate generation (e.g., RTK slices)
- Reinforced architectural patterns I already follow
- Used prompts for quick validation of my logic
- Gained shortcuts to common utilities like debounce

---

## 🧠 Summary
While AI was useful in speeding up isolated parts of development, the overall app logic, architecture, and integration were developer-led. All features were implemented with conscious attention to structure, performance, and cross-platform consistency.

---
