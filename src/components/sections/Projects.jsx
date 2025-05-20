export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
            <h3>Pong project</h3>
            <p>A pong game with an AI controlled pad that is played agaisnt the player.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['HTML', 'CSS', 'JavaScript'].map((tech, key) => (
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" 
                  key={key}
                >
                {tech} 
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://github.com/tbuhat102/Pong-revisited" 
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >View Project →</a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
            <h3>MECAZON</h3>
            <p>An online shopping app that is similar to Amazon. I contributed to the server side. </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['MongoDB', 'NodeJS'].map((tech, key) => (
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" 
                  key={key}
                >
                {tech} 
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://github.com/WestMecCoding/12pm-teamD-MECAZON-dev-server" 
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >View Project →</a>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
            <h3>Laravel Task App</h3>
            <p>A task app built in laravel and sqlite. I contributed with my team in creating this task App</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['PHP', 'Blade', 'Laravel'].map((tech, key) => (
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" 
                  key={key}
                >
                {tech} 
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="https://github.com/tbuhat102/laravel-task-app_Andrei" 
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >View Project →</a>
            </div>
          </div>

          {/* <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
            <h3>Cloud Platorm</h3>
            <p>Scalable cloud infrastructure management with automated scaling.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {['tech1', 'tech2'].map((tech, key) => (
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all" 
                  key={key}
                >
                {tech} 
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href="#" 
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >View Project →</a>
            </div>
          </div> */}
        </div>

      </div>
    </section>
  )
}
