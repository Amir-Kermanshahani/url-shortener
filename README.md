# URL Shortener

A URL shortener application built with Next.js, PostgreSQL, Prisma, and ShadCN UI.

## Features
- Shorten long URLs into compact links
- Store and manage shortened URLs in a PostgreSQL database
- View statistics for each shortened URL
- Modern and minimalistic UI with ShadCN components

## Technologies
- **Next.js** - Framework for server-rendered React applications
- **Prisma** - ORM for seamless database interaction with PostgreSQL
- **ShadCN** - Styled component library for UI

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation
1. Clone the repository:
 
   `git clone https://github.com/Amir-Kermanshahani/url-shortener.git`
   
   `cd url-shortener`

3. Install dependencies:
   `npm install`

4. Configure environment variables: Create a .env file in the root directory with:

   `DATABASE_URL=your_postgres_database_url`

### Database Setup

Run Prisma migrations:

`npx prisma migrate dev`

### Running the Application

Start the development server:

`npm run dev`

Access the application at http://localhost:3000.

## License

This project is licensed under the MIT License.


