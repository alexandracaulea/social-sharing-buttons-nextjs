# Next.js Social Share Buttons

A lightweight and accessible set of social sharing buttons for Next.js projects. Includes **Copy to Clipboard**, **WhatsApp**, **X**, **Facebook**, and **LinkedIn** share options — built with accessibility in mind, tested using **VoiceOver**, and styled with **Tailwind CSS**.

This component was initially developed for a project I’m currently working on and later integrated into my personal website.  
👉 **Check it out live here:** [https://www.alexandracaulea.com/snippets/redirect-api-to-404-nextjs](https://www.alexandracaulea.com/snippets/redirect-api-to-404-nextjs)

---

## 🚀 Features

- Share to: WhatsApp, X, Facebook, LinkedIn
- Copy to Clipboard
- Accessible and tested using VoiceOver
- Styled using Tailwind CSS
- Smooth animation via Motion - for animating the clipboard success message

---

## 📸 Demo

👉 Check it out live here: https://social-sharing-buttons-nextjs.vercel.app/

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [clsx](https://github.com/lukeed/clsx)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- [Motion](https://motion.dev/)

---

## ♿ Accessibility

Accessibility is a priority for this project.

- `aria-live` region for announcing the "Copied:" message, including the URL
- Copy-to-clipboard feedback text is:
  - **programmatically updated** using a `notificationKey` to force screen readers to re-announce the copied text

---

## 🧪 Getting Started

1. Clone the repo

```bash
git clone https://github.com/alexandracaulea/social-sharing-buttons-nextjs.git
cd social-sharing-buttons-nextjs
```

2. Install dependencies

```bash
npm install
```

3. Run locally

```bash
npm run dev
```

## 📦 Usage Example

```tsx
import ShareSection from './components/ShareSection';

export default function BlogPostPage() {
  return (
    <div>
      {/* Your blog content here */}

      <ShareSection />
    </div>
  );
}
```

## Author

- GitHub: [@alexandracaulea](https://github.com/alexandracaulea)
- My website: [alexandracaulea.com](https://www.alexandracaulea.com/)
