import { GraduationCap, Briefcase, Phone, Mail, MapPin, Facebook, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const education = [
    {
      period: "2024 - 2026",
      institution: 'Universitatea Pedagogică de Stat "Ion Creangă"',
      degree: "Master în Management și consiliere",
    },
    {
      period: "2019 - 2022",
      institution: 'Universitatea Pedagogică de Stat "Ion Creangă"',
      degree: "Master în Tehnologii Informaționale în Instruire",
    },
    {
      period: "2015 - 2019",
      institution: 'Universitatea Pedagogică de Stat "Ion Creangă"',
      degree: "Licență în Pedagogia Învățământului Primar și Preșcolar",
    },
    {
      period: "2003 - 2015",
      institution: "Liceul Teoretic Văratic",
      degree: "Studii liceale",
    },
  ];

  const experience = [
    {
      period: "Prezent",
      institution: 'Liceul Teoretic "George Meniuc"',
      role: "Învățător la clasele primare și informatică",
      current: true,
    },
    {
      institution: "Liceul Teoretic Orizont",
      role: "Educator",
    },
    {
      institution: "Smart Start Kids Academy",
      role: "Educator",
    },
  ];

  const skills = [
    "Google Workspace",
    "Microsoft Office",
    "Canva",
    "Adobe Photoshop",
    "LearningApps",
    "Wordwall",
    "Padlet",
    "Quizlet",
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-pink to-accent bg-clip-text text-transparent">
              Date despre mine
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Află mai multe despre parcursul meu profesional și educațional
          </p>
        </div>

        {/* Profile Card */}
        <Card className="mb-12 overflow-hidden border-2 border-primary/20 shadow-xl">
          <div className="grid md:grid-cols-3 gap-0">
            {/* Photo Section */}
            <div className="relative bg-gradient-to-br from-primary via-pink to-accent p-8 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="relative">
                <img
                  src={profilePhoto}
                  alt="Brînza Dumitrița"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-card shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 bg-yellow rounded-full p-3 shadow-lg">
                  <Award className="w-6 h-6 text-yellow-foreground" />
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="md:col-span-2 p-8">
              <h2 className="text-3xl font-bold mb-2">Brînza Dumitrița</h2>
              <p className="text-xl text-primary font-medium mb-4">
                Învățător la clasele primare și informatică
              </p>
              <p className="text-muted-foreground mb-6 text-lg">
                Sunt pasionată de educație și de crearea unui mediu de învățare 
                interactiv și captivant pentru elevii mei. Folosesc tehnologia 
                modernă pentru a face procesul de învățare mai accesibil și mai 
                interesant pentru copii.
              </p>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href="tel:+373068315807"
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <div className="w-10 h-10 bg-green/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green" />
                  </div>
                  <span>+373 068 315 807</span>
                </a>
                <a
                  href="mailto:brinza.dumitrita@gmail.com"
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <div className="w-10 h-10 bg-pink/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-pink" />
                  </div>
                  <span className="text-sm md:text-base">brinza.dumitrita@gmail.com</span>
                </a>
                <a
                  href="https://www.facebook.com/96miss.d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue/20 rounded-full flex items-center justify-center">
                    <Facebook className="w-5 h-5 text-blue" />
                  </div>
                  <span>Facebook</span>
                </a>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <div className="w-10 h-10 bg-orange/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange" />
                  </div>
                  <span>Chișinău, Moldova</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl">Studii</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-6 pb-4 border-l-2 border-primary/30 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="flex items-center gap-2 text-sm text-primary font-medium mb-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <h4 className="font-semibold">{edu.degree}</h4>
                  <p className="text-muted-foreground text-sm">{edu.institution}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="border-2 border-pink/20 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-12 h-12 bg-pink/20 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-pink" />
                </div>
                <span className="text-2xl">Experiență profesională</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 pb-4 border-l-2 border-pink/30 last:pb-0"
                >
                  <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${exp.current ? 'bg-green animate-pulse' : 'bg-pink'}`} />
                  {exp.period && (
                    <div className="inline-flex items-center gap-2 text-sm text-green font-medium mb-1 bg-green/10 px-2 py-0.5 rounded">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  )}
                  <h4 className="font-semibold">{exp.role}</h4>
                  <p className="text-muted-foreground text-sm">{exp.institution}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <Card className="mt-8 border-2 border-green/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">💻</span>
              </div>
              <span className="text-2xl">Competențe digitale</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-green/20 to-secondary/20 rounded-full font-medium text-foreground border border-green/30 hover:scale-105 transition-transform cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
