# Natours

A full-stack tour booking application built with Node.js, Express, MongoDB, and Pug. Built as part of Jonas Schmedtmann's Node.js bootcamp.

## Features

- **Authentication & Authorization** — JWT-based auth with secure httpOnly cookies, role-based access control (user, guide, lead-guide, admin)
- **Tour Management** — Browse, filter, and view detailed tour pages with interactive maps
- **Booking System** — Stripe-powered checkout for secure tour payments
- **User Accounts** — Update profile info, upload profile photo, change password
- **Email Notifications** — Welcome emails on signup and password reset emails via SendGrid
- **Security** — Helmet, rate limiting, XSS protection, NoSQL injection prevention, HPP
- **Interactive Maps** — Leaflet.js maps showing tour locations
- **Server-side Rendering** — Pug templates for all rendered pages

## Tech Stack

| Category       | Technology            |
| -------------- | --------------------- |
| Runtime        | Node.js               |
| Framework      | Express.js            |
| Database       | MongoDB + Mongoose    |
| Authentication | JWT + bcrypt          |
| Templating     | Pug                   |
| Payments       | Stripe                |
| Email          | Nodemailer + SendGrid |
| File Upload    | Multer + Sharp        |
| Bundler        | Parcel                |
| Maps           | Leaflet.js            |

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- Stripe account
- SendGrid account
- Mailtrap account (for development emails)

### Installation

```bash
# clone the repo
git clone https://github.com/hagarzakii/natours.git
cd natours

# install dependencies
npm install
```

### Environment Variables

Create a `config.env` file in the root directory:

```env
NODE_ENV=development
PORT=8000

# Database
DATABASE=mongodb+srv://<username>:<password>@cluster.mongodb.net/natours
DATABASE_PASSWORD=your_password

# JWT
JWT_SECRET=your-super-secret-key-min-32-chars
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

# Email (development - Mailtrap)
EMAIL_USERNAME=your_mailtrap_username
EMAIL_PASSWORD=your_mailtrap_password
EMAIL_HOST=sandbox.smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_FROM=your@email.com

# Email (production - SendGrid)
SENDGRID_USERNAME=apikey
SENDGRID_PASSWORD=SG.your_sendgrid_api_key

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

### Running the App

```bash
# development
npm run start:dev

# production
npm run start:prod

# bundle frontend JS
npm run watch:js
```

App runs on `http://localhost:8000`

## Project Structure

```
natours/
├── controllers/       # Route handlers
├── models/            # Mongoose models
├── routes/            # Express routers
├── views/             # Pug templates
├── public/            # Static files (css, img, js)
├── utils/             # Helper functions
├── app.js             # Express app setup
└── server.js          # Server entry point
```

## Author

Hagar Hashesh — built while learning from Jonas Schmedtmann's Node.js bootcamp.
