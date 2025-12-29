# Men's Club - E-Commerce Store

A modern, fully responsive e-commerce website for men's fashion built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Product Catalog**: Browse products by category with filtering and sorting
- **Product Details**: Detailed product pages with image gallery, size/color selection
- **Shopping Cart**: Full cart functionality with quantity management
- **Sale Section**: Dedicated sale page with discounted products
- **User Account**: Account management with order history and wishlist
- **Search & Filter**: Advanced filtering by size, color, and price range
- **Collections**: Organized product collections (Hoodies, Jackets, Denim, etc.)
- **Navigation**: Mega menu navigation with dropdown categories

## 🛠️ Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Images**: Next.js Image Component with optimization

## 📁 Project Structure

```
mens-store-project/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with mega menu
│   │   ├── Footer.tsx          # Footer with links and newsletter
│   │   └── ProductCard.tsx     # Reusable product card component
│   ├── lib/
│   │   ├── types.ts            # TypeScript type definitions
│   │   ├── products.ts         # Product data and helper functions
│   │   └── collections.ts      # Collection data
│   ├── collections/[slug]/
│   │   └── page.tsx            # Dynamic collection pages with filters
│   ├── products/[id]/
│   │   └── page.tsx            # Dynamic product detail pages
│   ├── sale/
│   │   └── page.tsx            # Sale page
│   ├── cart/
│   │   └── page.tsx            # Shopping cart page
│   ├── account/
│   │   └── page.tsx            # User account page
│   ├── layout.tsx              # Root layout component
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles and Tailwind directives
├── public/
│   └── images/                 # Static images (if needed)
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
└── postcss.config.js           # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Extract the project folder** to your desired location

2. **Navigate to the project directory**:
   ```bash
   cd mens-store-project
   ```

3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

The application should now be running locally!

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding Products

Edit `app/lib/products.ts` to add or modify products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  price: 2000,
  salePrice: 1000, // Optional
  images: ['image-url-1', 'image-url-2'],
  category: 'men',
  subcategory: 'hoodies',
  sizes: ['S', 'M', 'L', 'XL'],
  colors: ['Black', 'White'],
  description: 'Product description',
  inStock: true,
  featured: false
}
```

### Modifying Collections

Edit `app/lib/collections.ts` to add or modify collections.

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component-specific styles: Use Tailwind utility classes in components

## 📱 Pages Overview

### Home Page (`/`)
- Hero banner with call-to-action
- Featured products section
- Collection showcase
- Sale promotions
- "Shop the Look" section

### Collection Page (`/collections/[slug]`)
- Product grid with filters
- Sort by price, name, etc.
- Size and color filters
- Price range slider

### Product Detail Page (`/products/[id]`)
- Image gallery with thumbnails
- Size and color selection
- Quantity selector
- Add to cart functionality
- Related products

### Sale Page (`/sale`)
- All discounted products
- Sale terms and conditions

### Cart Page (`/cart`)
- Cart items with images
- Quantity adjustment
- Remove items
- Order summary
- Checkout button

### Account Page (`/account`)
- Profile management
- Order history
- Saved addresses
- Wishlist
- Settings

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Image Optimization

The project uses Next.js Image component with automatic optimization. Images are fetched from Unsplash for demo purposes.

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This project can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

### Vercel Deployment

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

## 🎯 Key Features Implementation

### Responsive Navigation
- Mobile-friendly hamburger menu
- Desktop mega menu with categories
- Sticky header on scroll

### Product Filtering
- Filter by size, color, price
- Sort options (price, name)
- Real-time updates

### Shopping Cart
- Add/remove items
- Quantity management
- Price calculations
- Free shipping threshold

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For questions or issues, please refer to the Next.js documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 🎉 Credits

- Design inspired by modern e-commerce best practices
- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)

---

**Happy coding! 🚀**
