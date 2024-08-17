# Next.js E-commerce Project - Assignment for Profile.fyi Frontend Engineer

This is a modern e-commerce web application built with Next.js and styled with Tailwind CSS. It features a responsive design, dynamic product listings, and an interactive shopping cart.

## Live Deployed Link: https://profilefyi-assignment-ecommerce.vercel.app/

## Tech Stack

- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **Context API** - For state management

## Features

### Implemented

#### Product Listing

- Fetches product data from [Fake Store API](https://fakestoreapi.com/)
- Displays product details including name, price, and image
- Responsive grid layout for various screen sizes

#### Shopping Cart

- Add products to cart
- Adjust quantity of items in cart
- Remove items from cart
- Cart summary with total price calculation

#### Cart Interactions

- Quantity selectors for each product in cart
- Remove button for individual items
- Clear cart functionality

#### Price Details

- Subtotal calculation
- Tax calculation (if applicable)
- Total price display

#### Discount Coupons

- Apply discount coupons to the cart
- Validate coupon codes
- Display discount amount in cart summary

#### State Management

- Utilizes React Context API for global state management
- Persistent cart state across page navigation

### Planned Features

#### User Authentication

- User registration and login functionality
- Secure authentication using JWT or similar method

#### Session Management

- Persistent user sessions
- Automatic login for returning users

#### Persistent Cart Storage

- Save cart items to user accounts
- Retrieve saved carts on login

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Hope you like it! Suggestions are welcome.
