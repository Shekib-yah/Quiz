// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "Afin d'utiliser des fonctions prédéfinies tel que « render » dans le contrôleur de quelle classe doit-on hériter ?",
    answer: "AbstractController",
    options: [
      "Controller",
      "AppController",
      "AbstractController",
      "Aucune de ces réponses"
    ]
  },
    {
    numb: 2,
    question: "Dans un projet symfony 4, quel fichier est considéré comme le contrôleur frontal « Front Controller » ?",
    answer: "public/index.php",
    options: [
      "bin/console.php",
      "public/index.php",
      "src/kernel.php",
      "composer.json"
    ]
  },
    {
    numb: 3,
    question: "Que contient le dossier Vendor dans un projet Symfony 4 ?",
    answer: "Les dépendances nécessaires au projet",
    options: [
      "Les fichiers de configuration de Symfony",
      "Les tests automatiques",
      "La configuration de l'environnement du projet.",
      "Les dépendances nécessaires au projet"
    ]
  },
    {
    numb: 4,
    question: "Dans quel fichier on définit la version de TWIG ?",
    answer: "composer.json",
    options: [
      "index.html.twig",
      ".env",
      "composer.json",
      "symfony.lock"
    ]
  },
    {
    numb: 5,
    question: "Quelle est la syntaxe utilisée pour parcourir un tableau Users dans le TWIG ?",
    answer: "{% for Users in Users%}",
    options: [
      "{% for Users in User%}",
      "{# for Users in User#}",
      "{% for Users in Users%}",
      "{# for Users in User#}"
    ]
  },
  {
    numb: 6,
    question: "Quel code doit-on indiquer sur un attribut dans une classe pour qu&#39;il soit incrémenté automatiquement ?",
    answer: "@ORM\GeneratedValue",
    options: [
      "@ORM\AutoIncrement(strategy=&quot;AUTO&quot;)",
      "@ORM\GeneratedValue",
      "@ORM\Column(type=&quot;id&quot;, strategy=&quot;generated&quot;)ur",
      "Aucune de ces réponses"
    ]
  },
  
];