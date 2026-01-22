import { ExternalLink, Play, Gamepad2, Palette, LayoutGrid, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const learningApps = [
    { url: "https://learningapps.org/display?v=pgh89ux4k25", title: "Activitate 1" },
    { url: "https://learningapps.org/display?v=pus0pawnj25", title: "Activitate 2" },
    { url: "https://learningapps.org/display?v=p1hir4ocn24", title: "Activitate 3" },
    { url: "https://learningapps.org/display?v=pnkhhkmon24", title: "Activitate 4" },
  ];

  const canvaLinks = [
    { url: "https://www.canva.com/design/DAGc6kYh4BE/2xAV5ykUeIo2TLjzoH4UEA/edit?utm_content=DAGc6kYh4BE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", title: "Prezentare 1" },
    { url: "https://www.canva.com/design/DAGiYYRhW6k/bhqeGz-ZhrmRsn89fY36gQ/edit?utm_content=DAGiYYRhW6k&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", title: "Prezentare 2" },
    { url: "https://www.canva.com/design/DAGpfR4DtcA/ot7SWgB1lZqKabRIYSGJVQ/edit?utm_content=DAGpfR4DtcA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", title: "Prezentare 3" },
  ];

  const wordwallLinks = [
    { url: "https://wordwall.net/ru/resource/16664377", title: "Joc 1" },
    { url: "https://wordwall.net/ru/resource/16665245", title: "Joc 2" },
    { url: "https://wordwall.net/ru/resource/17213849", title: "Joc 3" },
  ];

  const youtubeVideos = [
    { url: "https://www.youtube.com/watch?v=Pt8B0WSjPlM", title: "Video 1", embedId: "Pt8B0WSjPlM" },
    { url: "https://www.youtube.com/watch?v=fKVDbyi6bkc", title: "Video 2", embedId: "fKVDbyi6bkc" },
  ];

  const ResourceCard = ({ 
    title, 
    icon: Icon, 
    color, 
    links 
  }: { 
    title: string; 
    icon: React.ComponentType<{ className?: string }>; 
    color: string; 
    links: { url: string; title: string }[] 
  }) => (
    <Card className={`border-2 ${color} shadow-lg hover:shadow-xl transition-shadow`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${color.replace('border-', 'bg-').replace('/30', '/20')}`}>
            <Icon className={`w-7 h-7 ${color.replace('border-', 'text-').replace('/30', '')}`} />
          </div>
          <span className="text-xl md:text-2xl">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                variant="outline"
                className="w-full justify-between h-auto py-4 hover:bg-muted group-hover:border-primary transition-all"
              >
                <span className="font-medium">{link.title}</span>
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Button>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-pink to-accent bg-clip-text text-transparent">
              Resurse digitale educaționale
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descoperă o colecție de resurse interactive și materiale educaționale 
            create pentru a face învățarea mai captivantă și mai eficientă.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ResourceCard
            title="Learning Apps"
            icon={Gamepad2}
            color="border-green/30"
            links={learningApps}
          />
          <ResourceCard
            title="Canva"
            icon={Palette}
            color="border-pink/30"
            links={canvaLinks}
          />
          <ResourceCard
            title="Wordwall"
            icon={LayoutGrid}
            color="border-blue/30"
            links={wordwallLinks}
          />
        </div>

        {/* YouTube Videos Section */}
        <Card className="border-2 border-orange/30 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-14 h-14 bg-orange/20 rounded-xl flex items-center justify-center">
                <Video className="w-7 h-7 text-orange" />
              </div>
              <span className="text-xl md:text-2xl">Activități extracurriculare</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {youtubeVideos.map((video, index) => (
                <div key={index} className="space-y-3">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-muted shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Play className="w-4 h-4" />
                    <span>Deschide pe YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fun decorative section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 via-pink/10 to-accent/10 px-8 py-4 rounded-full">
            <span className="text-2xl animate-wiggle">📚</span>
            <span className="font-medium text-lg">Învață prin joacă, descoperă prin creativitate!</span>
            <span className="text-2xl animate-wiggle" style={{ animationDelay: "0.5s" }}>✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
