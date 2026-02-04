
// Add React import for React.ReactNode namespace
import React from 'react';

export interface Product {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  imageUrl: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface GalleryItem {
  id: number;
  category: 'product' | 'process' | 'field';
  imageUrl: string;
  title: string;
}