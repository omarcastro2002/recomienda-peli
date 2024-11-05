"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Github, Linkedin } from "lucide-react";

interface Movie {
  nombre: string;
  descripcion: string;
  categoria: string;
}


export function RecomiendaPeli() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userResponses, setUserResponses] = useState<Record<string, string>>(
    {}
  );
  const [recommendedMovie, setRecommendedMovie] = useState<Movie | null>(null);

  const questions = [
    {
      id: "mood",
      question: "¿Cómo te sientes hoy?",
      options: ["Triste", "Feliz", "Relajado", "Emocionado", "Nostálgico"],
    },
    {
      id: "company",
      question: "¿Con quién verás la película?",
      options: [
        "Solo",
        "Con mi pareja",
        "Con mi familia",
        "Con amigos",
        "Con compañeros de trabajo",
      ],
    },
    {
      id: "genre",
      question: "¿Qué género prefieres?",
      options: [
        "Acción",
        "Comedia",
        "Drama",
        "Ciencia Ficción",
        "Terror",
        "Romántica",
        "Aventura",
      ],
    },
    {
      id: "duration",
      question: "¿Cuánto tiempo tienes para ver la película?",
      options: [
        "Menos de 90 minutos",
        "Entre 90 y 120 minutos",
        "Más de 120 minutos",
      ],
    },
    {
      id: "style",
      question: "¿Prefieres un estilo visual específico?",
      options: [
        "Animación",
        "Blanco y negro",
        "Moderno",
        "Épico",
        "Documental",
      ],
    },
    {
      id: "language",
      question: "¿En qué idioma prefieres la película?",
      options: [
        "Español",
        "Inglés",
        "Subtitulada",
        "Idioma original",
        "No tengo preferencia",
      ],
    },
    {
      id: "setting",
      question: "¿Qué ambiente prefieres en la historia?",
      options: [
        "Histórico",
        "Futurista",
        "Fantástico",
        "Realista",
        "Otro mundo",
      ],
    },
    {
      id: "pace",
      question: "¿Qué ritmo de película te agrada más?",
      options: ["Rápido", "Medio", "Lento"],
    },
    {
      id: "age_rating",
      question: "¿Cuál es tu preferencia de clasificación de edad?",
      options: [
        "Para toda la familia",
        "Adolescentes",
        "Adultos",
        "No tengo preferencia",
      ],
    },
    {
      id: "replay",
      question: "¿Te gustaría ver algo conocido o algo nuevo?",
      options: ["Algo nuevo", "Un clásico", "Una secuela o saga"],
    },
  ];

  const peliculas = [
    {
      nombre: "El Padrino",
      descripcion:
        "Un drama criminal que sigue a la familia Corleone en su lucha por el poder en Nueva York.",
      categoria: "Drama",
    },
    {
      nombre: "Titanic",
      descripcion:
        "Una historia de amor trágica a bordo del famoso barco que se hundió en 1912.",
      categoria: "Romántica",
    },
    {
      nombre: "La Guerra de las Galaxias: Una Nueva Esperanza",
      descripcion:
        "Luke Skywalker comienza su viaje como Jedi para salvar a la galaxia del Imperio.",
      categoria: "Ciencia Ficción",
    },
    {
      nombre: "El Señor de los Anillos: La Comunidad del Anillo",
      descripcion:
        "Un hobbit hereda un anillo poderoso y se embarca en una misión para destruirlo.",
      categoria: "Aventura",
    },
    {
      nombre: "Forrest Gump",
      descripcion:
        "La vida extraordinaria de un hombre que presencia eventos históricos importantes.",
      categoria: "Drama",
    },
    {
      nombre: "Matrix",
      descripcion:
        "Un hacker descubre la verdadera naturaleza de su realidad y su papel en la guerra contra las máquinas.",
      categoria: "Ciencia Ficción",
    },
    {
      nombre: "El Caballero Oscuro",
      descripcion:
        "Batman se enfrenta al Joker en esta oscura adaptación del superhéroe de Gotham.",
      categoria: "Acción",
    },
    {
      nombre: "Avatar",
      descripcion:
        "Un exmarine se encuentra en medio de un conflicto en un mundo alienígena llamado Pandora.",
      categoria: "Ciencia Ficción",
    },
    {
      nombre: "Jurassic Park",
      descripcion:
        "Un parque temático con dinosaurios clonados se convierte en una pesadilla cuando las criaturas escapan.",
      categoria: "Aventura",
    },
    {
      nombre: "Buscando a Nemo",
      descripcion:
        "Un pez payaso busca a su hijo perdido a lo largo del océano.",
      categoria: "Aventura",
    },
    {
      nombre: "Toy Story",
      descripcion: "Los juguetes de un niño cobran vida cuando nadie los ve.",
      categoria: "Comedia",
    },
    {
      nombre: "Inception",
      descripcion:
        "Un ladrón que roba secretos a través de los sueños recibe la tarea de implantar una idea.",
      categoria: "Ciencia Ficción",
    },
    {
      nombre: "Gladiador",
      descripcion:
        "Un general romano se convierte en gladiador para vengar la muerte de su familia y emperador.",
      categoria: "Acción",
    },
    {
      nombre: "El Rey León",
      descripcion:
        "Un joven león príncipe debe superar la traición y el exilio para reclamar su trono.",
      categoria: "Aventura",
    },
    {
      nombre: "Los Vengadores",
      descripcion:
        "Superhéroes se unen para salvar al mundo de una amenaza extraterrestre.",
      categoria: "Acción",
    },
    {
      nombre: "Pulp Fiction",
      descripcion:
        "Historias entrelazadas de crimen y redención en Los Ángeles.",
      categoria: "Drama",
    },
    {
      nombre: "Coco",
      descripcion:
        "Un niño mexicano es transportado al mundo de los muertos y busca a su tatarabuelo músico.",
      categoria: "Aventura",
    },
    {
      nombre: "La La Land",
      descripcion:
        "Un pianista de jazz y una actriz luchan por alcanzar sus sueños en Los Ángeles.",
      categoria: "Romántica",
    },
    {
      nombre: "Parásitos",
      descripcion:
        "Una familia pobre se infiltra en la vida de una familia rica con consecuencias inesperadas.",
      categoria: "Drama",
    },
    {
      nombre: "Interestelar",
      descripcion:
        "Exploradores espaciales viajan a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
      categoria: "Ciencia Ficción",
    },
    {
      nombre: "El Exorcista",
      descripcion:
        "Una niña es poseída por una entidad demoníaca y su madre busca la ayuda de dos sacerdotes.",
      categoria: "Terror",
    },
    {
      nombre: "La Máscara",
      descripcion:
        "Un hombre descubre una máscara que lo transforma en un personaje loco con poderes.",
      categoria: "Comedia",
    },
    {
      nombre: "Terminator 2: El Juicio Final",
      descripcion:
        "Un cyborg es enviado al pasado para proteger a un joven de un asesino robótico.",
      categoria: "Acción",
    },
    {
      nombre: "El Diario de Noa",
      descripcion:
        "Una pareja de enamorados es separada por la guerra y las diferencias sociales.",
      categoria: "Romántica",
    },
    {
      nombre: "Alien: El Octavo Pasajero",
      descripcion:
        "La tripulación de una nave espacial es acechada por una criatura mortal.",
      categoria: "Ciencia Ficción",
    },
    {
      nombre: "Indiana Jones y el Arca Perdida",
      descripcion:
        "Un arqueólogo aventurero busca el Arca de la Alianza antes que los nazis.",
      categoria: "Aventura",
    },
    {
      nombre: "Psicosis",
      descripcion:
        "Una secretaria en fuga encuentra refugio en un motel regentado por un joven perturbado.",
      categoria: "Terror",
    },
    {
      nombre: "Mad Max: Furia en la Carretera",
      descripcion:
        "En un desierto postapocalíptico, un grupo huye de un tirano en un camión cisterna blindado.",
      categoria: "Acción",
    },
    {
      nombre: "Casablanca",
      descripcion:
        "Un hombre se reencuentra con su amor perdido en medio de la Segunda Guerra Mundial.",
      categoria: "Drama",
    },
    {
      nombre: "Shrek",
      descripcion:
        "Un ogro se embarca en una aventura para rescatar a una princesa.",
      categoria: "Comedia",
    },
    {
      nombre: "Blade Runner",
      descripcion: "Un policía del futuro busca y elimina androides rebeldes.",
      categoria: "Ciencia Ficción",
    },
    {
      nombre: "El Resplandor",
      descripcion:
        "Un escritor se vuelve loco mientras cuida un hotel aislado con su familia.",
      categoria: "Terror",
    },
    {
      nombre: "Amélie",
      descripcion:
        "Una joven francesa decide cambiar la vida de quienes la rodean para mejorarla.",
      categoria: "Romántica",
    },
    {
      nombre: "Guardianes de la Galaxia",
      descripcion: "Un grupo de inadaptados se une para salvar la galaxia.",
      categoria: "Ciencia Ficción",
    },
    {
      nombre: "Kill Bill: Volumen 1",
      descripcion:
        "Una exasesina busca venganza contra su antiguo equipo que intentó matarla.",
      categoria: "Acción",
    },
    {
      nombre: "Up",
      descripcion:
        "Un anciano y un niño exploran América del Sur en una casa flotante impulsada por globos.",
      categoria: "Aventura",
    },
    {
      nombre: "La Vida es Bella",
      descripcion:
        "Un padre utiliza el humor para proteger a su hijo de los horrores del Holocausto.",
      categoria: "Drama",
    },
    {
      nombre: "Grease",
      descripcion:
        "Un romance de verano entre dos adolescentes en los años 50.",
      categoria: "Romántica",
    },
    {
      nombre: "El Sexto Sentido",
      descripcion:
        "Un niño que ve fantasmas busca la ayuda de un psicólogo infantil.",
      categoria: "Terror",
    },
    {
      nombre: "Volver al Futuro",
      descripcion:
        "Un adolescente viaja en el tiempo y debe asegurar que sus padres se enamoren.",
      categoria: "Ciencia Ficción",
    },
    {
      nombre: "El Gran Hotel Budapest",
      descripcion:
        "Las aventuras de un legendario conserje y su joven protegido en un famoso hotel europeo.",
      categoria: "Comedia",
    },
    {
      nombre: "Piratas del Caribe: La Maldición del Perla Negra",
      descripcion:
        "Un pirata excéntrico busca recuperar su barco de una tripulación maldita.",
      categoria: "Aventura",
    },
    {
      nombre: "Rocky",
      descripcion:
        "Un boxeador de clase trabajadora tiene una oportunidad por el título de pesos pesados.",
      categoria: "Drama",
    },
    {
      nombre: "Moulin Rouge!",
      descripcion:
        "Un poeta se enamora de una cortesana en un club nocturno bohemio de París.",
      categoria: "Romántica",
    },
    {
      nombre: "Sin City",
      descripcion:
        "Historias de violencia y corrupción en una ciudad oscura y sin ley.",
      categoria: "Acción",
    },
    {
      nombre: "Zombieland",
      descripcion:
        "Un grupo de sobrevivientes navega por un mundo postapocalíptico lleno de zombis.",
      categoria: "Comedia",
    },
    {
      nombre: "La Bruja de Blair",
      descripcion:
        "Tres estudiantes desaparecen mientras investigan una leyenda local en el bosque.",
      categoria: "Terror",
    },
    {
      nombre: "El Lobo de Wall Street",
      descripcion:
        "La vida de un corredor de bolsa de Nueva York que se involucra en fraudes masivos.",
      categoria: "Drama",
    },
    {
      nombre: "En Busca de la Felicidad",
      descripcion:
        "Un padre soltero lucha contra la adversidad para construir una vida mejor para su hijo.",
      categoria: "Drama",
    },
    {
      nombre: "Mi Pobre Angelito",
      descripcion:
        "Un niño es olvidado en casa y debe defenderla de dos ladrones torpes.",
      categoria: "Comedia",
    },
    {
      nombre: "Los Juegos del Hambre",
      descripcion:
        "Una joven debe competir en una batalla televisada donde solo uno puede sobrevivir.",
      categoria: "Ciencia Ficción",
    },
    {
      nombre: "El Pianista",
      descripcion:
        "La historia de un pianista judío polaco que lucha por sobrevivir durante la Segunda Guerra Mundial.",
      categoria: "Drama",
    },
    {
      nombre: "Tiempos Modernos",
      descripcion:
        "Un trabajador industrial lucha contra la mecanización y el desempleo durante la Gran Depresión.",
      categoria: "Comedia",
    },
    {
      nombre: "La Forma del Agua",
      descripcion:
        "Una conserje muda se enamora de una criatura anfibia en un laboratorio secreto.",
      categoria: "Romántica",
    },
    {
      nombre: "Jumanji",
      descripcion:
        "Un juego de mesa mágico libera peligros de la jungla en el mundo real.",
      categoria: "Aventura",
    },
    {
      nombre: "E.T., el Extraterrestre",
      descripcion:
        "Un niño ayuda a un extraterrestre varado a regresar a su hogar.",
      categoria: "Ciencia Ficción",
    },
    {
      nombre: "Bajo la Misma Estrella",
      descripcion:
        "Dos adolescentes con cáncer se enamoran y emprenden un viaje a Ámsterdam.",
      categoria: "Romántica",
    },
    {
      nombre: "El Silencio de los Inocentes",
      descripcion:
        "Una agente del FBI busca la ayuda de un asesino para capturar a otro.",
      categoria: "Terror",
    },
    {
      nombre: "La Princesa Prometida",
      descripcion:
        "Un cuento de aventuras sobre amor verdadero y rescate de una princesa.",
      categoria: "Aventura",
    },
  ];

  const handleResponseChange = (value: string) => {
    setUserResponses((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: value,
    }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Obtener la categoría seleccionada por el usuario
    const selectedGenre = userResponses["genre"];
  
    // Filtrar las películas por la categoría seleccionada
    const filteredMovies = peliculas.filter(
      (movie) => movie.categoria === selectedGenre
    );
  
    if (filteredMovies.length === 0) {
      // Manejar el caso donde no hay películas de esa categoría
      alert("No se encontraron películas para la categoría seleccionada.");
      return;
    }
  
    // Seleccionar una película al azar de la lista filtrada
    const randomIndex = Math.floor(Math.random() * filteredMovies.length);
    const selectedMovie = filteredMovies[randomIndex];
  
    // Establecer la película recomendada
    setRecommendedMovie(selectedMovie);
  };
  

  const teamMembers = [
    {
      name: "J. Santiago Ravelo",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedin: "https://www.linkedin.com/in/jsravelo/",
      github: "https://github.com/JunniorRavelo",
    },
    {
      name: "Omar Castro",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      linkedin: "https://www.linkedin.com/in/omar-castro-6b4ba8207/",
      github: "https://github.com/omarcastro2002",
    },
    {
      name: "Henry Suarez",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      linkedin: "https://www.linkedin.com/in/henry-david-suarez-serrano-74a273248/",
      github: "https://github.com/Henry2715",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Recomienda Peli
          </h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto py-8 px-4">
        {!recommendedMovie ? (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {questions[currentQuestion].question}
                  </h2>
                  <RadioGroup
                    value={userResponses[questions[currentQuestion].id] || ""}
                    onValueChange={handleResponseChange}
                  >
                    {questions[currentQuestion].options.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem
  value={option} // Usamos la opción tal cual
  id={`${
    questions[currentQuestion].id
  }-${option.replace(/\s+/g, "-").toLowerCase()}`}
/>

<Label
  htmlFor={`${
    questions[currentQuestion].id
  }-${option.replace(/\s+/g, "-").toLowerCase()}`}
>
  {option}
</Label>

                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-between">
              {currentQuestion > 0 && (
                <Button type="button" onClick={handleBack} variant="outline">
                  Atrás
                </Button>
              )}
              {currentQuestion === questions.length - 1 && (
                <Button type="submit" className="ml-auto">
                  Recomendar Película
                </Button>
              )}
            </div>
          </form>
        ) : (
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-4">Película Recomendada</h2>
              <p>
                <strong>Título:</strong> {recommendedMovie.nombre}
              </p>
              <p>
                <strong>Año:</strong> {recommendedMovie.descripcion}
              </p>
              <p>
                <strong>Categoría:</strong> {recommendedMovie.categoria}
              </p>
            </CardContent>
          </Card>
        )}
      </main>

      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm mt-2">{member.description}</p>
                  <div className="flex mt-4 space-x-2">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <p>&copy; 2024 Universidad de Pamplona</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
