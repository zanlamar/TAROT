# ITA SPRINT 4: Fortune teller — by Ana Laf

---

## 📄 Description
Fourth sprint of the bootcamp, focused on API calls and TypeScript.
I apply a twist to the project: instead of jokes, I created a fortune teller website.

## 🎯 Objectives
- Practice how to **fetch and manipulate data from APIs**
- Learn and apply **TypeScript** for type safety and structure
- Improve project architecture and separation of concerns


## 💻 Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **TypeScript**
- **Vite**


## 📋 Requirements

- Modern web browser (Chrome, Firefox, Edge, etc.).
- Node.js + npm
- API keys from:
  - API key from [Weather API](https://www.weatherapi.com/)
  - Cookie fortune [here](https://docs.erensko.site/docs/api-keys/getting-your-key)

## Developer decisions
- The first reading is not shown when launched the website: the goal is to click to then see the fortune.
- The DOMdisplay of each feature is separated from one another in order to personalized how each one is seen on the browser (the tarot card is missing still, but with this independent structure it will be easier to change)
- Only HTML and CSS for styling: minimal and appealing to the look&feel of the project
- Vite installation
- Only 20% chances to get the fortune cookie result, due to less free calls from the API.


---


## 🛠 Installation
1. Clone this repo

```bash
$ git clone https://github.com/antoniofelices/jokes-and-weather .
```

2. Install packages

```bash
$ npm install
```

3. Run develop

```bash
$ npm run dev
```
---


## 📁 Project Structure
The project is **modular** and organized into three main features:

🌤️ Weather API
🥠 Fortune Cookie API
🔮 Tarot Card API

Each feature contains:
- Its own **logic**
- Dedicated **TypeScript types**
- **Independent DOM rendering** logic



---

## 🕹️  Functionalities

### Current Weather according to location
- The browser checks the location of the user.
- If permissions to do so, the page shows the user city, the temperature in celcius, and an image to illustrate the weather.
- If no permissions given, the page showns Barcelona current weather as default.

### Fortune teller
- The start button decides which fortune will be seen: 20% chances of a fortune cookie, 80% of a real tarot card with its title and meaning.
- The user has the chance to select if its fortune reading reflects its present, its past or its future.
- There's always the option to get another fortune reading.

### Fortune reading log
- Each card reading is saved on an array with its timestamp, its title and meaning.
- If the user selects a reflection (present, past, future) it will be saved on the card log with its last choice.

---

## 👩🏻‍🎨 Layout

- **Pixelart** inspired look&feel for deep-dive into the fortune teller experience.
- **Animated background** fully developed on CSS and HTML : minimal and quite retro.

---


### 📸  Preview

(pending)


---

## 🚧 Pending improvements
- ``addVibe`` buttons to be turned into a ``for`` loop.
- When tarot read, image to be seen on screen.
- Improve the styles and button transitions.



### ⭐ Highlights

- Many many many learnings.
- Technically challenging project.
---
