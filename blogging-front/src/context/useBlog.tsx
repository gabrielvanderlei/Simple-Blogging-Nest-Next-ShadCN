"use client"
import { useContext, useState, createContext } from "react";

const BlogContext:any = createContext({});

export const BlogProvider = ({ children }:any) => {
  const [hasPostUpdate, setHasPostUpdate] = useState(false);

  const value = {
    hasPostUpdate,
    setHasPostUpdate
  };
  
  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog:any = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('Invalid context use');
  }
  return context;
};