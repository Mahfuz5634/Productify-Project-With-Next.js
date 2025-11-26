# 🎉 Eventify — Modern Event Management App (Next.js + MongoDB + Auth)

A clean, responsive, and modern **Event Management Web App** built using **Next.js App Router**, **MongoDB**, **NextAuth**, and **TailwindCSS**.  
Users can browse events, view details, and add new events using protected pages.

🔥 Deployed on **Vercel** | ⚡ Fast | 🎨 Beautiful UI | 🔐 Secure Authentication

---

## 🚀 Features

### 🖥 Frontend
- ⚡ Built with **Next.js App Router**
- 🎨 Modern UI using **TailwindCSS + ShadCN**
- 📱 Fully **responsive** design
- 📌 Home page with featured events
- 🔍 Event details page with emoji-based thumbnails
- 📝 Event creation form (Title, Description, Price, Date, Priority, Image URL)

### 🔐 Authentication
- Powered by **NextAuth.js**
- Email/password login
- Google OAuth
- Protected route for event creation

### 🗄 Database
- **MongoDB Atlas**
- Events stored with title, description, price, date, priority & icon
- Optimized using `clientPromise`

---

## 📂 Project Structure

```
app/
 ├── api/
 │    ├── auth/route.js
 │    └── events/route.js
 ├── events/
 │    └── [id]/page.js
 ├── login/page.js
 ├── register/page.js
 ├── add-event/page.js
 ├── page.js    → Homepage
 └── layout.js
lib/
 ├── mongodb.js
 └── auth.js
components/
 ├── Navbar.js
 ├── EventCard.js
 └── Footer.js
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|----------|
| **Next.js 14 (App Router)** | Frontend + Server Components |
| **MongoDB** | Database |
| **NextAuth.js** | Authentication |
| **TailwindCSS** | Styling |
| **ShadCN UI** | Components |
| **Vercel** | Deployment |

---

## 🧪 Running the Project Locally

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/eventify.git
cd eventify
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Add environment variables  
Create a `.env.local` file:

```
MONGODB_URI=your_mongo_connection_string
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=xxxx
GOOGLE_CLIENT_SECRET=xxxx
```

### 4️⃣ Run locally
```bash
npm run dev
```

App will run at:
```
http://localhost:3000
```

---

## 🚀 Deployment on Vercel

1. Push your project to GitHub  
2. Go to **https://vercel.com**  
3. Import your repository  
4. Add environment variables under  
   **Vercel → Project → Settings → Environment Variables**  
5. Click **Deploy** 🎉





