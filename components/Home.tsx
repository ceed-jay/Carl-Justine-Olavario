import React, { forwardRef } from 'react';

const Home = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="home" className="h-screen" />
  );
});

export default Home;