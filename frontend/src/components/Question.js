const questions = [
  {
    id: 1,
    url: "https://i.ibb.co/syDpqth/pomme.png",
    questionText: "Où va cette pomme ?",
    reponse: "la pomme va dans le compost ",
    answerOptions: [
      { url: "https://i.ibb.co/X5m5Kq0/verre.png", isCorrect: false },
      { url: "https://i.ibb.co/RTFRRxJ/plastique.png", isCorrect: false },
      { url: "https://i.ibb.co/GRw8TPj/poubelle-noir.png", isCorrect: false },
      { url: "https://i.ibb.co/gWwh6b7/compost.png", isCorrect: true },
    ],
  },
  {
    id: 2,
    reponse: "les bouteilles en plastique vont dans la poubelle jaune",
    questionText: "Où vont ces bouteilles ?",
    url: "https://st.depositphotos.com/thumbs/1050070/image/2975/29755003/api_thumb_450.jpg?forcejpeg=true",
    answerOptions: [
      { url: "https://i.ibb.co/X5m5Kq0/verre.png", isCorrect: false },
      { url: "https://i.ibb.co/RTFRRxJ/plastique.png", isCorrect: true },
      { url: "https://i.ibb.co/GRw8TPj/poubelle-noir.png", isCorrect: false },
      { url: "https://i.ibb.co/gWwh6b7/compost.png", isCorrect: false },
    ],
  },
  {
    id: 3,
    reponse: "le masque va dans la poubelle noire ",
    questionText: "Où va ce masque ?",
    url: "https://t4.ftcdn.net/jpg/03/19/70/89/240_F_319708990_eoiQtXcfhpKaK9i55JyxiZItpb6qLY9p.jpg",
    answerOptions: [
      { url: "https://i.ibb.co/X5m5Kq0/verre.png", isCorrect: false },
      { url: "https://i.ibb.co/RTFRRxJ/plastique.png", isCorrect: false },
      { url: "https://i.ibb.co/GRw8TPj/poubelle-noir.png", isCorrect: true },
      { url: "https://i.ibb.co/gWwh6b7/compost.png", isCorrect: false },
    ],
  },
  {
    id: 4,
    reponse: "le carton va au recyclage (poubelle jaune)  ",
    questionText: "Où va le carton ?",
    url: "https://as1.ftcdn.net/v2/jpg/00/52/40/80/1000_F_52408011_YTo1iiOSm8hfIRKszozIfutTcAnOP1On.jpg",
    answerOptions: [
      { url: "https://i.ibb.co/X5m5Kq0/verre.png", isCorrect: false },
      { url: "https://i.ibb.co/RTFRRxJ/plastique.png", isCorrect: true },
      { url: "https://i.ibb.co/GRw8TPj/poubelle-noir.png", isCorrect: false },
      { url: "https://i.ibb.co/gWwh6b7/compost.png", isCorrect: false },
    ],
  },
  {
    id: 5,
    reponse: "les php foncent dans le mur ;)  ",
    questionText: "Ou vont les php ?",
    url: "https://www.globalis-ms.com/media/2015/11/elephpant_760_521-518x355.png",
    answerOptions: [
      { url: "https://i.ibb.co/X5m5Kq0/verre.png", isCorrect: false },
      { url: "https://i.ibb.co/RTFRRxJ/plastique.png", isCorrect: false },
      {
        url: "https://as1.ftcdn.net/v2/jpg/02/74/68/24/1000_F_274682433_fpLZQxQblAh5hwVGqqWN3SazkHP4H9Cn.jpg",
        isCorrect: true,
      },
      { url: "https://i.ibb.co/gWwh6b7/compost.png", isCorrect: false },
    ],
  },
  {
    id: 6,
    questionText: "Où vont ces bouteilles vide?",
    reponse: "les bouteilles en verre vont dans la poubelle verte  ",
    url: "https://as1.ftcdn.net/v2/jpg/00/69/59/30/1000_F_69593078_AHWmV42WS51DJmNWntNeuTduHa06CQcC.jpg",
    answerOptions: [
      { url: "https://i.ibb.co/X5m5Kq0/verre.png", isCorrect: true },
      { url: "https://i.ibb.co/RTFRRxJ/plastique.png", isCorrect: false },
      { url: "https://i.ibb.co/GRw8TPj/poubelle-noir.png", isCorrect: false },
      { url: "https://i.ibb.co/gWwh6b7/compost.png", isCorrect: false },
    ],
  },
  {
    id: 7,
    questionText: "Où vont les piles usagées ?",
    reponse:
      "les piles usagées se déposent dans des poubelles de recyclage de piles dans les grandes surfaces ou à la déchèterie  ",
    url: "https://as1.ftcdn.net/v2/jpg/02/10/91/48/1000_F_210914831_6aMmz7it4u4UlHCJpGN9i4JY8Yv1WqiS.jpg",
    answerOptions: [
      { url: "https://i.ibb.co/X5m5Kq0/verre.png", isCorrect: false },
      {
        url: "https://i.ibb.co/RTFRRxJ/plastique.png",
        isCorrect: false,
      },
      { url: "https://i.ibb.co/GRw8TPj/poubelle-noir.png", isCorrect: false },
      {
        url: "https://www.destinationlaciotat.com/photo/img/bornecorepile.jpeg?time=1629981081801",
        isCorrect: true,
      },
    ],
  },
  {
    id: 8,
    reponse: "le sac poubelle va dans la poubelle noire  ",
    questionText: "Où va ce sac poubelle ?",
    url: "https://as2.ftcdn.net/v2/jpg/00/32/52/65/1000_F_32526547_ejjKQfFEEEceGt9EqagrZ6BLlzsoVJc0.jpg",
    answerOptions: [
      { url: "https://i.ibb.co/X5m5Kq0/verre.png", isCorrect: false },
      { url: "https://i.ibb.co/RTFRRxJ/plastique.png", isCorrect: false },
      { url: "https://i.ibb.co/GRw8TPj/poubelle-noir.png", isCorrect: true },
      { url: "https://i.ibb.co/gWwh6b7/compost.png", isCorrect: false },
    ],
  },
  {
    id: 9,
    questionText: "Où vont ces pots de yaourt ?",
    reponse:
      "les pots de yaourt vont dans la poubelle jaune sauf si il n'y a pas de logo ♻️. ",
    url: "https://as1.ftcdn.net/v2/jpg/01/64/70/76/1000_F_164707627_d0RNEGqpn7beF6UIfbBLjjLylWkBhUDA.jpg",
    answerOptions: [
      { url: "https://i.ibb.co/X5m5Kq0/verre.png", isCorrect: false },
      { url: "https://i.ibb.co/RTFRRxJ/plastique.png", isCorrect: true },
      { url: "https://i.ibb.co/GRw8TPj/poubelle-noir.png", isCorrect: false },
      { url: "https://i.ibb.co/gWwh6b7/compost.png", isCorrect: false },
    ],
  },
  {
    id: 10,
    questionText: "Où va ce mouchoir ?",
    reponse: "les mouchoirs se jettent dans la poubelle noire ",
    url: "https://as1.ftcdn.net/v2/jpg/00/37/96/88/1000_F_37968878_MgqqZ0K8u4YhGQasKm5evKEQeQubPDhb.jpg",
    answerOptions: [
      { url: "https://i.ibb.co/X5m5Kq0/verre.png", isCorrect: false },
      { url: "https://i.ibb.co/RTFRRxJ/plastique.png", isCorrect: false },
      { url: "https://i.ibb.co/GRw8TPj/poubelle-noir.png", isCorrect: true },
      { url: "https://i.ibb.co/gWwh6b7/compost.png", isCorrect: false },
    ],
  },
  {
    id: 11,
    questionText: "Où va cette canette vide ?",
    reponse: "les canettes vides vont dans la poubelle jaune ",
    url: "https://as2.ftcdn.net/v2/jpg/00/38/86/73/1000_F_38867316_It0i1jynh2KV9UpchsXFWMi83GrVIwjR.jpg",
    answerOptions: [
      { url: "https://i.ibb.co/X5m5Kq0/verre.png", isCorrect: false },
      { url: "https://i.ibb.co/RTFRRxJ/plastique.png", isCorrect: true },
      { url: "https://i.ibb.co/GRw8TPj/poubelle-noir.png", isCorrect: false },
      { url: "https://i.ibb.co/gWwh6b7/compost.png", isCorrect: false },
    ],
  },
  {
    id: 12,
    questionText: "Où va cette peau de banane ?",
    reponse: "la peau de banane va au compost ",
    url: "https://as1.ftcdn.net/v2/jpg/00/21/39/36/1000_F_21393632_pCVhdpy26DWtgPPZLddCxjt5iA7Xj16O.jpg",
    answerOptions: [
      { url: "https://i.ibb.co/X5m5Kq0/verre.png", isCorrect: true },
      { url: "https://i.ibb.co/RTFRRxJ/plastique.png", isCorrect: false },
      { url: "https://i.ibb.co/GRw8TPj/poubelle-noir.png", isCorrect: false },
      { url: "https://i.ibb.co/gWwh6b7/compost.png", isCorrect: true },
    ],
  },
  {
    id: 13,
    reponse:
      "les objects electroniques qui ne marchent plus vont à la déchèterie  ",
    questionText: "Où va cette machine à café cassée ?",
    url: "https://as2.ftcdn.net/v2/jpg/00/93/40/29/1000_F_93402918_PzCbSfITN9VJywWvpYGEwoNv0G4DX4an.jpg",
    answerOptions: [
      {
        url: "https://as2.ftcdn.net/v2/jpg/01/86/99/07/1000_F_186990756_Po5Kj24p6JzZHT9URAajpiZLC0bjyhXE.jpg",
        isCorrect: true,
      },
      { url: "https://i.ibb.co/RTFRRxJ/plastique.png", isCorrect: false },
      {
        url: "https://as1.ftcdn.net/v2/jpg/02/82/05/30/1000_F_282053027_kncfrc689Nx6U0naYx2qv3JBOUuSq4kR.jpg",
        isCorrect: false,
      },
      { url: "https://i.ibb.co/gWwh6b7/compost.png", isCorrect: false },
    ],
  },
];

export default questions;
