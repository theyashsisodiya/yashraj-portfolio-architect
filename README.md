The issue in your README file is that it ends with a **dangling code block** that was never properly closed.

### ❌ The Problem:

At the very end, you have this:

```markdown
```

You can paste this directly into your `README.md` file on GitHub. Let me know if you'd like to add sections like screenshots, badges, or contribution guidelines.

```
```

This part is **wrapped inside a code block**, but it's just regular text. Since it's not meant to be code, it shouldn't be in triple backticks (\`\`\`), and also it's missing a closing backtick block, which breaks the Markdown rendering on GitHub.

---

### ✅ The Fix:

Remove the incorrect triple backticks and treat the last paragraph as regular Markdown text. Here's the **corrected version**:

````markdown
# Welcome to My Project

## 📌 Project Info

**Live URL**: [Project Link](https://special-space-broccoli-5wqg6j4r7r2vpjj-8080.app.github.dev/)

---

## 🛠️ How to Edit the Code

You can update this project by working locally with your preferred development environment.

### 1. Edit Locally Using Your IDE

#### Prerequisites:
- [Node.js & npm installed](https://github.com/nvm-sh/nvm#installing-and-updating)

#### Steps:

```sh
# Step 1: Clone the repository
git clone https://github.com/theyashsisodiya/yashraj-portfolio-architect/

# Step 2: Navigate into the project directory
cd yashraj-portfolio-architect

# Step 3: Install project dependencies
npm install

# Step 4: Start the development server
npm run dev
````

---

## 🚀 Deployment

To deploy this project, you can use any static hosting platform that supports Vite or React, such as **Vercel**, **Netlify**, or your preferred service.

To create a production build:

```sh
npm run build
```

Then deploy the contents of the `dist` folder following your host’s deployment instructions.

---

## 🌐 Custom Domain Setup

If your hosting platform supports it, you can connect a custom domain to your deployment. Refer to your hosting provider’s documentation for detailed setup instructions.

---

## 🧱 Tech Stack

This project is built with:

* **Vite**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui**

---

You can paste this directly into your `README.md` file on GitHub. Let me know if you'd like to add sections like screenshots, badges, or contribution guidelines.

```

Let me know if you'd like this version saved as a file or need help adding any visuals or links!
```
