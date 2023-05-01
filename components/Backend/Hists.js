class Hist {
  constructor(
    NomeLongo,
    NomeCurto,
    REF,
    ImgVertical,
    ImgHorizontal,
    ImgQuadrada,
    Categorias,
    Sinopse,
    Capitulos,
    Relacionados,
    Local,
    Ato,
    Tipo
  ) {
    this.NomeLongo = NomeLongo; // Várias palavras
    this.NomeCurto = NomeCurto; // Nome de 1 palavra
    this.REF = REF; // S_REF OU SE_REF
    this.ImgVertical = ImgVertical; // flickr
    this.ImgHorizontal = ImgHorizontal; // flickr
    this.ImgQuadrada = ImgQuadrada; // flickr
    this.Categorias = Categorias; // Array de srings
    this.Sinopse = Sinopse;
    this.Capitulos = Capitulos; // Array de obj.
    //this.Eps = Eps; // Episódios(obj) em array dentro de arrays.. eps dentro do capitulo
    this.Relacionados = Relacionados; // HISTÓRIAS RELACIONADAS (POR REFERENCIA)
    this.Local = Local.toUpperCase(); // TERRA OU UNIVERSAL
    this.Ato = Ato; // 0 (Pré universal) / 1 (Ato 0) / 2 (Ascensão) 3 (Redenção) 4 (Renegação)
    this.Tipo = Tipo.toUpperCase(); // Solos ou Serie
  }
}

//   "Capitulos": [
//     {
//        "Nome": "Metamorfoses",
//        "Disponivel": true,
//        "NumEps": 3,
//        "DescCap": "blablabla",
//        "Episodios": {
//           "Ep1": {
//              "Nome":"Mudanças",
//              "Ref":"01.txt",
//              "Numero": 1
//           },
//           "Ep2": {
//              "Nome":"Dificuldades",
//              "Ref":"02.txt",
//              "Numero": 2
//           },
//           "Ep3": {
//              "Nome": "Poderes",
//              "Ref": "03.txt",
//              "Numero": 3
//           }
//        }
//     },

var Hists = [
  new Hist(
    "Kerry, o Guerreiro da Vingança",
    "Kerry",
    "S_KER",
    "",
    "",
    "https://live.staticflickr.com/65535/52739030508_e60672c0fd.jpg",
    ["Drama", "Violência", "Ação",'Terra'],
    "Entenda a origem do herói metálico,que se fortaleceu em meios a perdas e confusões, utilizando o trauma e a vingança como sua maior motivação.",
    null,
    ["SE_GUARD", "SE_MR1"],
    "TERRA",
    2,
    "SOLO"
  ),
  new Hist(
    "Guardiões",
    "Guardiões",
    "SE_GUARD",
    "",
    "",
    "https://live.staticflickr.com/65535/52739030543_751119292d_n.jpg",
    ["Drama", "Ação", "Equipe",'Terra'],
    "Beenie se muda da cidade com seus pais em busca de uma vida melhor e um futuro promissor. Porém nessa cidade,há coisas que eles nunca imaginariam que teriam que enfrentar.",
    [
      {
        Nome: 'Metamorfoses',
        Disponivel: true,
        NumEps: 3,
        DescCap: "Blablabla",
        Episodios: [
          {
            Nome: "Mudanças",
            Ref: "01.txt",
            Numero: 1,
          },
          {
            Nome: "Dificuldades",
            Ref: "02.txt",
            Numero: 2,
          },
          {
            Nome: "Poderes",
            Ref: "03.txt",
            Numero: 3,
          },
        ],
      },
    ],
    ["S_KER", "SE_MR1"],
    "TERRA",
    2,
    "SERIE"
  ),
  new Hist(
    "Ciecon, o Justiceiro Espacial",
    "Ciecon",
    "S_CIEC",
    "",
    "",
    "https://live.staticflickr.com/65535/52738589846_0158b4f28c_z.jpg",
    ["Drama", "Universal", "Sci-Fi",'Terra'],
    "Leia a história origem difícil do justiceiro espacial,Ciecon. Que posteriormente avançou a jornada e se tornou o líder dos Congregadores.",
    null,
    ["SE_CONG", "S_HAD"],
    "UNIVERSAL",
    1, 'SOLO'
  ),
  new Hist(
    'Punho Mortal',
    'Punho Mortal',
    "S_PM",
    "",
    '',
    "https://live.staticflickr.com/65535/52848281377_e6a3d19661_n.jpg",
    ['Violência','Drama','Ação','Universal'],
    'Entenda a origem dos Aedificantes, e como eles resistiram a soberania da Red Right Hand.',
    null,
    ['SE_CONG'],
    'UNIVERSAL',
    2,
    'SOLO'
  ),
  new Hist(
    'Hades','Hades',
    'S_HAD',
    '',
    '',
    'https://live.staticflickr.com/65535/52739035768_37250eb886_n.jpg',
    ['Violência', 'Ação','Sci-Fi','Universal'],
    'Conheça profundamente a origem e os objetivos do Monstruoso e Soberano Demônio, que pretende dominar todo o universo com seu poder divino e maligno.',
    null,
    ['S_CIEC','SE_CONG','SE_GUA'], 'UNIVERSAL', 0, 'SOLO'
  ),
  new Hist(
    "Menino Resiliente I",
    "Menino Resiliente",
    "SE_MR1",
    "",
    "",
    "https://live.staticflickr.com/65535/52739881142_cc750f9fba_m.jpg",
    ["Drama","Ação", "Teen", "Terra"],
    "Larry, um menino tranquilo se envolve em acidentes e ocorre atrocidades em sua vida. Porém, em meio a tristeza e a perdição, ele percebe que ele tem um poder incomum.",
    [
      {
        Nome: "Uma nova Luz",
        Disponivel: true,
        NumEps: 3,
        DescCap: "Lorem Ipsum blablabla",
        Episodios: [
          {
            Nome: "Desejos",
            Ref: "01.txt",
            Numero: 1
          },
          {
            Nome: "O Experimento",
            Ref: "02.txt",
            Numero: 2
          },
          {
            Nome: "Sonhos",
            Ref: "03.txt",
            Numero: 3
          }
        ]
      },
      {
        Nome: "Resiliência e Persistência",
        Disponivel: true,
        NumEps: 3,
        DescCap: "Lorem Ipsum blablabla",
        Episodios: [
          {
            Nome: "Contra tudos,contra todos.",
            Ref: "04.txt",
            Numero: 4
          },
          {
            Nome: "Superações",
            Ref: "05.txt",
            Numero: 5
          },
          {
            Nome: "Novos Desafios",
            Ref: "06.txt",
            Numero: 6
          }
        ]
      },
      {
        Nome: "Persistência e Ascensão",
        Disponivel: true,
        NumEps: 3,
        DescCap: "blablabla",
        Episodios: [
          {
            Nome: "A sombra da noite",
            Ref: "07.txt",
            Numero: 7
          },
          {
            Nome: "Predador e a presa",
            Ref: "08.txt",
            Numero: 8
          },
          {
            Nome: "Repetições sem fim",
            Ref: "09.txt",
            Numero: 9
          }
        ]
      },
      {
        Nome: "Ascensão e Vitória!",
        Disponivel: true,
        NumEps: 3,
        DescCap: "blablabla",
        Episodios: [
          {
            Nome: "Sem descanso",
            Ref: "10.txt",
            Numero: 10
          },
          {
            Nome: "Dois por um",
            Ref: "11.txt",
            Numero: 11
          },
          {
            Nome: "Vitória ou Auto-Ilusão?",
            Ref: "12.txt",
            Numero: 12
          }
        ]
      }
    ],
    ["SE_GUARD", "S_KER"],
    "TERRA",
    2,
    "SERIE"
  ),
];

// SOLO E SERIE, NAO "SOLOS" / "SERIES" NO TIPO.


var Solos = Hists.filter(Hist => Hist.Tipo === 'SOLO')
var Serie = Hists.filter(Hist => Hist.Tipo === 'SERIE')
var Terra = Hists.filter(Hists => Hists.Local === 'TERRA')
var Universal = Hists.filter(Hists => Hists.Local === 'UNIVERSAL')

export default Hists