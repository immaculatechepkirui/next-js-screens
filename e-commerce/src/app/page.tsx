"use client"; // Required for client-side hooks

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import PromoBanner from '../components/Homepage/PromoBanner';
import FlashSales from '../components/Homepage/FlashSales';
import Categories from '../components/Homepage/Categories';
import BestSelling from '../components/Homepage/BestSelling';
import ExploreProducts from '../components/Homepage/ExploreProducts';
import NewArrivals from '../components/Homepage/NewArrivals';
import Features from '../components/Homepage/Features';
import Footer from '../components/Footer/Footer';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn');
    if (!loggedIn) {
      router.push('/signup'); 
    }
  }, [router]);

  return (
    <main>
      <Header />
      <Banner />
      <PromoBanner />
      <FlashSales />
      <Categories />
      <BestSelling />
      <ExploreProducts />
      <NewArrivals />
      <Features />
      <Footer />
    </main>
  );
}