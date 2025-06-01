function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Gradient blur effects */}
      <div className="absolute inset-0 opacity-90">
        <div className="absolute h-full w-full">
          {/* Main glow elements */}
          <div className="blur-float absolute left-[35%] top-[10%] h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[150px]" />
          <div className="blur-float absolute left-[5%] top-[30%] h-[700px] w-[700px] rounded-full bg-orange-500/30 blur-[180px]" style={{ animationDelay: '-5s' }} />
          <div className="blur-float absolute left-[50%] top-[60%] h-[500px] w-[500px] rounded-full bg-amber-400/20 blur-[130px]" style={{ animationDelay: '-10s' }} />
          
          {/* Additional glow elements for more vibrancy */}
          <div className="blur-float absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-500/20 blur-[120px]" style={{ animationDelay: '-7s' }} />
          <div className="blur-float absolute left-[30%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-cyan-500/30 blur-[100px]" style={{ animationDelay: '-3s' }} />
        </div>
      </div>
      
      {/* Grain overlay */}
      <div className="absolute inset-0 z-10 mix-blend-soft-light grain-effect"></div>
      
      {/* Content container */}
      <div className="relative z-20 flex h-screen items-center">
        <div className="w-full max-w-screen-xl px-6 mx-auto">
          <div className="md:max-w-2xl">
            <div className="mb-4 text-neutral-500">
              <span className="font-medium">Vite</span> / Typescript
            </div>
            
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white">
              <span className="inline-block">React 19</span>
              <span className="ml-4 text-neutral-500">|</span>
              <span className="ml-4 text-neutral-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Next Generation</span>
            </h1>
            
            <p className="mt-8 text-lg leading-relaxed text-neutral-400 max-w-md">
              Built to make you extraordinarily productive. 
              The best way to code with modern web technologies.
            </p>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <button onClick={() => window.open('https://vite.dev/', '_blank')} className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200">
                Get Started
              </button>
              <button onClick={() => window.open('https://react.dev/', '_blank')} className="rounded-full bg-transparent px-7 py-3.5 text-sm font-medium text-white ring-1 ring-white/20 transition-colors hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App