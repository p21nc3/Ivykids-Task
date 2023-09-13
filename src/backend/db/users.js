import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "yterfc537oi",
    firstName: "Prince",
    lastName: "Bhardwaj",
    password: "helloworld",
    username: "ADMIN",
    bio: "Developer",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628822/Ivykids-Task/Profile%20pics/1681784044184_mj46v5.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686332490/socialMedia/programming-bg_znumg2.jpg",
    createdAt: "2023-09-14T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Hinata",
        lastName: "Hyuga",
        username: "hina",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629156/Ivykids-Task/Profile%20pics/Hinata-Hyuga-anime-diamond-by-number_jupvqo.jpg",
      },
      {
        _id: "1T6Be1QpLm",
        firstName: "Sasuke",
        lastName: "Uchiha",
        username: "the_last_uchiha",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628951/Ivykids-Task/Profile%20pics/37-1_rnh2vb.png",
      },
      {
        _id: "o5gzWjEeX_",
        firstName: "Zoro",
        lastName: "Roronoa",
        username: "piratehunter",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629174/Ivykids-Task/Profile%20pics/one-piece-zoro-in-wano-arc_uk1k03.jpg",
      },
      {
        _id: "79Gksh9otl",
        firstName: "Light",
        lastName: "Yagami",
        username: "Kira",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628928/Ivykids-Task/Profile%20pics/poster_qyrkti.jpg",
      },
    ],
    followers: [
      {
        _id: "ab8zWjEeXd",
        firstName: "Gol D",
        lastName: "Roger",
        username: "PirateKing",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629226/Ivykids-Task/Profile%20pics/928a26fe7efed14515e3a4e622f1962e_vgilsm.jpg",
      },
      {
        _id: "qq8zWjEeXd",
        firstName: "Portgas D",
        lastName: "Ace",
        username: "FireFist",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629341/Ivykids-Task/Profile%20pics/fire_fist___ace_one_piece______by_mada654_dbktz2w-fullview.jpg_g8xx5l.jpg",
      },
      {
        _id: "79Gksh9otl",
        firstName: "Light",
        lastName: "Yagami",
        username: "Kira",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628928/Ivykids-Task/Profile%20pics/poster_qyrkti.jpg",
      },
      {
        _id: "o5gzWjEeX_",
        firstName: "Zoro",
        lastName: "Roronoa",
        username: "piratehunter",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629174/Ivykids-Task/Profile%20pics/one-piece-zoro-in-wano-arc_uk1k03.jpg",
      },
      {
        _id: "1T6Be1QpLm",
        firstName: "Sasuke",
        lastName: "Uchiha",
        username: "the_last_uchiha",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628951/Ivykids-Task/Profile%20pics/37-1_rnh2vb.png",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "t7cZfWIp-q",
    firstName: "Naruto",
    lastName: "Uzumaki",
    password: "hokage@leafvillage",
    username: "uzumakinaruto",
    bio: "Aspiring Hoakge",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628879/Ivykids-Task/Profile%20pics/ef3bd4_73714941e1a64c60b1844d07381dbcd8_mv2_gm64ub.png",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686332490/socialMedia/programming-bg_znumg2.jpg",
    createdAt: "2023-09-14T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Hinata",
        lastName: "Hyuga",
        username: "hina",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629156/Ivykids-Task/Profile%20pics/Hinata-Hyuga-anime-diamond-by-number_jupvqo.jpg",
      },
      {
        _id: "1T6Be1QpLm",
        firstName: "Sasuke",
        lastName: "Uchiha",
        username: "the_last_uchiha",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628951/Ivykids-Task/Profile%20pics/37-1_rnh2vb.png",
      },
      {
        _id: "o5gzWjEeX_",
        firstName: "Zoro",
        lastName: "Roronoa",
        username: "piratehunter",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629174/Ivykids-Task/Profile%20pics/one-piece-zoro-in-wano-arc_uk1k03.jpg",
      },
      {
        _id: "79Gksh9otl",
        firstName: "Light",
        lastName: "Yagami",
        username: "Kira",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628928/Ivykids-Task/Profile%20pics/poster_qyrkti.jpg",
      },
    ],
    followers: [
      {
        _id: "ab8zWjEeXd",
        firstName: "Gol D",
        lastName: "Roger",
        username: "PirateKing",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331038/socialMedia/Gol-D-Roger_djl3zv.jpg",
      },
      {
        _id: "qq8zWjEeXd",
        firstName: "Portgas D",
        lastName: "Ace",
        username: "FireFist",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629341/Ivykids-Task/Profile%20pics/fire_fist___ace_one_piece______by_mada654_dbktz2w-fullview.jpg_g8xx5l.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "79Gksh9otl",
    firstName: "Light",
    lastName: "Yagami",
    password: "sarah123",
    username: "Kira",
    bio: "Be Yourself!",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628928/Ivykids-Task/Profile%20pics/poster_qyrkti.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686341814/socialMedia/be-yourself-bg_rmxvmb.jpg",
    createdAt: "2023-09-14T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "1T6Be1QpLm",
        firstName: "Sasuke",
        lastName: "Uchiha",
        username: "the_last_uchiha",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628951/Ivykids-Task/Profile%20pics/37-1_rnh2vb.png",
      },
    ],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Naruto",
        lastName: "Uzumaki",
        username: "uzumakinaruto",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628879/Ivykids-Task/Profile%20pics/ef3bd4_73714941e1a64c60b1844d07381dbcd8_mv2_gm64ub.png",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Sasuke",
    lastName: "Uchiha",
    password: "jacob123",
    username: "the_last_uchiha",
    bio: "An adventure-seeking explorer",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628951/Ivykids-Task/Profile%20pics/37-1_rnh2vb.png",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686342238/socialMedia/adventure-explorer-bg_i4p63w.jpg",
    createdAt: "2023-09-14T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "ab8zWjEeXd",
        firstName: "Gol D",
        lastName: "Roger",
        username: "PirateKing",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629226/Ivykids-Task/Profile%20pics/928a26fe7efed14515e3a4e622f1962e_vgilsm.jpg",
      },
    ],
    followers: [
      {
        _id: "79Gksh9otl",
        firstName: "Light",
        lastName: "Yagami",
        username: "Kira",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628928/Ivykids-Task/Profile%20pics/poster_qyrkti.jpg",
      },
      {
        _id: "t7cZfWIp-q",
        firstName: "Naruto",
        lastName: "Uzumaki",
        username: "uzumakinaruto",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628879/Ivykids-Task/Profile%20pics/ef3bd4_73714941e1a64c60b1844d07381dbcd8_mv2_gm64ub.png",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Hinata",
    lastName: "Hyuda",
    password: "bakyugan",
    username: "hina",
    bio: "Naruto 💘",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629156/Ivykids-Task/Profile%20pics/Hinata-Hyuga-anime-diamond-by-number_jupvqo.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686342526/socialMedia/musician-bg_qgesca.jpg",
    createdAt: "2023-09-14T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Naruto",
        lastName: "Uzumaki",
        username: "uzumakinaruto",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628879/Ivykids-Task/Profile%20pics/ef3bd4_73714941e1a64c60b1844d07381dbcd8_mv2_gm64ub.png",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "o5gzWjEeX_",
    firstName: "Zoro",
    lastName: "Roronoa",
    password: "rohan123",
    username: "piratehunter",
    bio: "Exploring one delicious bite at a time!",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629174/Ivykids-Task/Profile%20pics/one-piece-zoro-in-wano-arc_uk1k03.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686343623/socialMedia/food-bg_dgsyce.jpg",
    createdAt: "2023-09-14T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Naruto",
        lastName: "Uzumaki",
        username: "uzumakinaruto",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628879/Ivykids-Task/Profile%20pics/ef3bd4_73714941e1a64c60b1844d07381dbcd8_mv2_gm64ub.png",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bzlz",
    firstName: "Sengoku",
    lastName: "Navy",
    password: "navy",
    username: "Budha",
    bio: "Storyteller Extraordinaire",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629572/Ivykids-Task/Profile%20pics/cyK7SSmc2a9kfZgsY_6ZjsdPjaWWwBeOPS3zOUTmMFY74JqatvKGp3Kgm99yRCTmCa5ZmPPeaiMwEUduyJ09VxebByknP4H6MDWM8RKn9twREyIRTAW0dYoO0nhXXpj2sz7WbDoqpDEneP-QxMCmTyM_y0faeo.png",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686343958/socialMedia/storyteller-bg_xzxtd7.jpg",
    createdAt: "2023-09-14T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "qq8zWjEeXd",
    firstName: "Portgas D",
    lastName: "Ace",
    password: "whitebeardpirates",
    username: "FireFist",
    bio: "A Creative Doodlebug",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629341/Ivykids-Task/Profile%20pics/fire_fist___ace_one_piece______by_mada654_dbktz2w-fullview.jpg_g8xx5l.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686344328/socialMedia/pencil-sketch-bg_t0qfe9.jpg",
    createdAt: "2023-09-14T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Naruto",
        lastName: "Uzumaki",
        username: "uzumakinaruto",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628879/Ivykids-Task/Profile%20pics/ef3bd4_73714941e1a64c60b1844d07381dbcd8_mv2_gm64ub.png",
      },
    ],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "ab8zWjEeXd",
    firstName: "Gol D",
    lastName: "Roger",
    password: "onepiece",
    username: "PirateKing",
    bio: "Fashion aficionado",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dohfgct6b/image/upload/v1694629226/Ivykids-Task/Profile%20pics/928a26fe7efed14515e3a4e622f1962e_vgilsm.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686344677/socialMedia/fashion-stage-bg_ykeinp.jpg",
    createdAt: "2023-09-14T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Naruto",
        lastName: "Uzumaki",
        username: "uzumakinaruto",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628879/Ivykids-Task/Profile%20pics/ef3bd4_73714941e1a64c60b1844d07381dbcd8_mv2_gm64ub.png",
      },
    ],
    followers: [
      {
        _id: "1T6Be1QpLm",
        firstName: "Sasuke",
        lastName: "Uchiha",
        username: "the_last_uchiha",
        profileAvatar:
          "https://res.cloudinary.com/dohfgct6b/image/upload/v1694628951/Ivykids-Task/Profile%20pics/37-1_rnh2vb.png",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bert",
    firstName: "Ava",
    lastName: "Turner",
    password: "ava@123",
    username: "avaturn",
    bio: "Haute Couture Maven",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331028/socialMedia/Ava-Turner_vqavsz.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686344889/socialMedia/fashion-designer-bg_osgyw8.jpg",
    createdAt: "2023-09-14T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "1NR81Bzmuh",
    firstName: "Aryan",
    lastName: "Patel",
    password: "aryan@123",
    username: "aryan987",
    bio: "An Ambitious Trailblazer",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dohfgct6b/image/upload/v1652105301/hello-kitty-bCtMa0yj_k2jzij.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686345193/socialMedia/businessman-table-bg_dhgla4.jpg",
    createdAt: "2023-09-14T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "h53vs8_iq",
    firstName: "Ghost",
    lastName: "Account",
    password: "guestUserLoginDetails",
    username: "guestuser",
    bio: "No follower, following and posts. Try it yourself!",
    website: "",
    profileAvatar:
      "https://res.cloudinary.com/dohfgct6b/image/upload/v1694610359/Ivykids-Task/Profile%20pics/ghost1_arbo5q.png",
    backgroundImage:
      "https://res.cloudinary.com/dohfgct6b/image/upload/v1694610568/Ivykids-Task/d6kf5ff-ba72afd1-6c29-466b-b54b-4ec1f9357fab_ghmyhw.png",
    createdAt: "2023-09-13T01:06:00+05:30",
    updatedAt: formatDate()
  },
];
