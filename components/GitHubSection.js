import { Github, Star, GitFork, Users } from 'lucide-react';

const GitHubSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-velura-slate mb-4">
            Open Source
          </h2>
          <p className="text-xl text-velura-slate/80 max-w-2xl mx-auto">
            Velura UI is open source and available on GitHub. Join our community!
          </p>
        </div>

        <div className="bg-white rounded-xl border border-velura-slate/10 p-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Github size={32} className="text-velura-slate" />
              <div>
                <h3 className="text-xl font-semibold text-velura-slate">velura-ui/velura</h3>
                <p className="text-velura-slate/80">Modern React UI components</p>
              </div>
            </div>
            <a
              href="https://github.com"
              className="px-6 py-2 bg-velura-slate text-white rounded-lg hover:bg-velura-blue transition-colors inline-flex items-center gap-2"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-2 text-velura-slate/80">
              <Star size={20} />
              <span>1.2k stars</span>
            </div>
            <div className="flex items-center gap-2 text-velura-slate/80">
              <GitFork size={20} />
              <span>234 forks</span>
            </div>
            <div className="flex items-center gap-2 text-velura-slate/80">
              <Users size={20} />
              <span>45 contributors</span>
            </div>
          </div>

          <div className="bg-velura-sand/10 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-velura-slate">Latest Release: v1.0.0</h4>
            <p className="text-velura-slate/80">
              Major release with new components and improved documentation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;