import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow/20 via-pink/10 to-primary/10" />
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow/30 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink/30 rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-green/20 rounded-full blur-xl animate-float" style={{ animationDelay: "0.5s" }} />

        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-yellow/20 text-yellow-foreground px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-yellow" />
                <span className="text-sm font-medium">Cu un click mai aproape de cunoaștere!</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-pink to-accent bg-clip-text text-transparent">
                  Bine ai venit
                </span>
                <br />
                <span className="text-foreground">în lumea cunoștințelor!</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Explorează resurse educaționale interactive și descoperă bucuria învățării 
                alături de mine, Brînza Dumitrița.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/despre-mine">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-pink hover:opacity-90 shadow-lg">
                    Află mai multe despre mine
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/resurse">
                  <Button size="lg" variant="outline" className="gap-2 border-2 border-primary hover:bg-primary/10">
                    <BookOpen className="w-4 h-4" />
                    Resurse educaționale
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-pink to-accent rounded-3xl blur-2xl opacity-30 scale-105" />
                <img
                  src={heroImage}
                  alt="Copii citind cărți în jurul globului"
                  className="relative rounded-3xl shadow-2xl max-w-full h-auto w-full max-h-[400px] md:max-h-[500px] object-cover border-4 border-card"
                />
                
                {/* Floating decorations */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow rounded-xl flex items-center justify-center shadow-lg animate-wiggle">
                  <Star className="w-6 h-6 text-yellow-foreground" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green rounded-xl flex items-center justify-center shadow-lg animate-wiggle" style={{ animationDelay: "0.5s" }}>
                  <BookOpen className="w-6 h-6 text-green-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-primary to-pink bg-clip-text text-transparent">
              Ce vei găsi aici?
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Learning Apps */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-green/30 hover:border-green hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-green/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Learning Apps</h3>
              <p className="text-muted-foreground">
                Aplicații interactive pentru învățare prin joacă și descoperire.
              </p>
            </div>

            {/* Canva */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-pink/30 hover:border-pink hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-pink/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Materiale Canva</h3>
              <p className="text-muted-foreground">
                Prezentări și materiale vizuale create special pentru elevi.
              </p>
            </div>

            {/* Wordwall */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-blue/30 hover:border-blue hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Wordwall</h3>
              <p className="text-muted-foreground">
                Jocuri educaționale și activități interactive pentru consolidare.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/resurse">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-green to-secondary hover:opacity-90">
                Explorează toate resursele
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
