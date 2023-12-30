import HeroPhoto from "../assets/images/heroImage/photo.jpg";
import Photo1 from "../assets/images/model photos/c63.jpg";
import Photo2 from "../assets/images/model photos/gwagen.jpg";
import Photo3 from "../assets/images/model photos/cla.jpeg";
import Photo4 from "../assets/images/model photos/gla.jpg";
import Photo5 from "../assets/images/model photos/gls.jpeg";
import Photo6 from "../assets/images/model photos/gle.jpg";
import Photo7 from "../assets/images/model photos/van.jpg";
import Photo8 from "../assets/images/model photos/gt.jpg";
import C63Interior1 from "../assets/images/c63/photo (1).jpg";
import C63Interior2 from "../assets/images/c63/photo (2).jpg";
import C63Interior3 from "../assets/images/c63/photo (3).jpg";
import C63Interior4 from "../assets/images/c63/photo (4).jpg";
import C63Interior5 from "../assets/images/c63/photo (5).jpg";
import C63Interior6 from "../assets/images/c63/photo (6).jpg";
// gwagen
import GwagenInterior1 from "../assets/images/gWagen/photo (1).jpg";
import GwagenInterior2 from "../assets/images/gWagen/photo (2).jpg";
import GwagenInterior3 from "../assets/images/gWagen/photo (3).jpg";
import GwagenInterior4 from "../assets/images/gWagen/photo (4).jpg";
import GwagenInterior5 from "../assets/images/gWagen/photo (5).jpg";
import GwagenInterior6 from "../assets/images/gWagen/photo (6).jpg";
// cla
import ClaPhoto1 from "../assets/images/cla/photo1.jpg";
import ClaPhoto2 from "../assets/images/cla/photo2.jpg";
import ClaPhoto3 from "../assets/images/cla/photo3.jpg";
import ClaPhoto4 from "../assets/images/cla/photo4.jpg";
import ClaPhoto5 from "../assets/images/cla/photo5.jpg";
import ClaPhoto6 from "../assets/images/cla/photo6.jpg";
// gal
import GlaPhoto1 from "../assets/images/gla/photo1.webp";
import GlaPhoto2 from "../assets/images/gla/photo2.webp";
import GlaPhoto3 from "../assets/images/gla/photo3.webp";
import GlaPhoto4 from "../assets/images/gla/photo4.webp";
import GlaPhoto5 from "../assets/images/gla/photo5.webp";
import GlaPhoto6 from "../assets/images/gla/photo6.webp";
// gls
import GlsPhoto1 from "../assets/images/gls/photo1.webp";
import GlsPhoto2 from "../assets/images/gls/photo2.webp";
import GlsPhoto3 from "../assets/images/gls/photo3.jpg";
import GlsPhoto4 from "../assets/images/gls/photo4.jpg";
import GlsPhoto5 from "../assets/images/gls/photo5.jpg";
import GlsPhoto6 from "../assets/images/gls/photo6.jpg";
// gle
import GlePhoto1 from "../assets/images/gle/photo1.jpg";
import GlePhoto2 from "../assets/images/gle/photo2.jpg";
import GlePhoto3 from "../assets/images/gle/photo3.jpg";
import GlePhoto4 from "../assets/images/gle/photo4.jpg";
import GlePhoto5 from "../assets/images/gle/photo5.jpg";
import GlePhoto6 from "../assets/images/gle/photo6.jpg";
// luxury van
import LuxuryVan1 from "../assets/images/van/photo1.jpg";
import LuxuryVan2 from "../assets/images/van/photo2.jpg";
import LuxuryVan3 from "../assets/images/van/photo3.jpg";
import LuxuryVan4 from "../assets/images/van/photo4.jpg";
import LuxuryVan5 from "../assets/images/van/photo5.jpg";
import LuxuryVan6 from "../assets/images/van/photo6.jpg";
// amg gt 
import AmgGt1 from "../assets/images/gt/photo1.jpg";
import AmgGt2 from "../assets/images/gt/photo2.jpg";
import AmgGt3 from "../assets/images/gt/photo3.jpg";
import AmgGt4 from "../assets/images/gt/photo4.jpg";
import AmgGt5 from "../assets/images/gt/photo5.jpg";
import AmgGt6 from "../assets/images/gt/photo6.jpg";
export const NavData = [
  {
    name: "Home",
    icon: <i className="fa-light fa-house-chimney text-2xl "></i>,
    path: "home",
  },
  {
    name: "Models",
    icon: <i className="fa-sharp fa-light fa-book text-2xl "></i>,
    path: "models",
  },
  {
    name: "Details",
    icon: <i className="fa-regular fa-book text-2xl "></i>,
    path: "details",
  },
  {
    name: "Overview",
    icon: <i className="fa-sharp fa-light fa-mountain-sun text-2xl "></i>,
    path: "overview",
  },
  {
    name: "About",
    icon: <i className="fa-light fa-memo-circle-info text-2xl "></i>,
    path: "about",
  },
  {
    name: "Contact",
    icon: <i className="fa-light fa-address-book text-2xl "></i>,
    path: "contact",
  },
  {
    name: "More Links",
    icon: <i className="fa-light fa-link text-2xl "></i>,
    path: "morelinks",
  },
];
export const HeroData = [
  {
    id: 1,
    HeroTitle: "  The best or nothing ",
    FirstnavigateBtnTitle: "  Discover more",
    description:
      "reliability, quality, luxury, performance, safety, andadvanced technology is our proud",
    FirstnavigateBtnIcon: <i className="fa-regular fa-right "></i>,
    SecondnavigateBtnTitle: " more colors",
    SecondnavigateBtnIcon: <i className="fa-regular fa-paintbrush-pencil"></i>,
    HeroImage: HeroPhoto,
  },
];
export const ModelData = [
  {
    modelImage: Photo1,
    title: " The all new C-63",
    spacifications:
      "  more power , more capable. And come out to the boundries...",
    path: "",
    path: "/allnewc63-details",
  },
  {
    modelImage: Photo2,
    title: " The all new G-wagen ",
    spacifications:
      " Top of the line marcedes with strong offroad capablities and the strong faster torque  ",
    path: "/allnew63-details",
  },
  {
    modelImage: Photo3,
    title: " The all new CLA",
    spacifications: "Power of the whole lines up to you .... ",
    path: "/allnewcla-details",
  },
  {
    modelImage: Photo4,
    title: " The all new GLA.",
    spacifications: " The proper familly car of the proper uses...",
    path: "/allnewgla-details",
  },
  {
    modelImage: Photo5,
    title: " The all new GLS.",
    spacifications: " The proper familly car of the proper uses...",
    path: "/allnewgls-details",
  },
  {
    modelImage: Photo6,
    title: " The all new GLE.",
    spacifications: " simple as use as a proper familly car...",
    path: "",
    path: "/allnewgle-details",
  },
  {
    modelImage: Photo7,
    title: " The all new luxury van.",
    spacifications: " all luxury features are rounded with this car..",
    path: "/allnewluxuryvan-details",
  },
  {
    modelImage: Photo8,
    title: " The all new AMG GT.",
    spacifications: "whole torque and racing energy in the hand...",
    path:"allnewamgGt-details",
  },
];
// details data
export const AllNewC63 = [
  {
    ModelName: "The all powered cars ",
    ModelImage: Photo1,
    SpecificationsDetails:
      "It is equipped with a 3.0-liter V6 engine that produces 390 horsepower and 520 Nm of torque and comes with a 9-speed automatic transmission and all-wheel drive as standard.",
    InteriorImage1: C63Interior1,
    InteriorImage2: C63Interior2,
    InteriorImage3: C63Interior3,
    InteriorImage4: C63Interior4,
    InteriorImage5: C63Interior5,
    InteriorImage6: C63Interior6,
    torque: "752 lb-ft ",
    speed: "180 ",
    ZeroTop: "0-100km/h in 3.4 seconds",
    fuelEconomy: "21 km  per litre",
    vedioLink: "https://www.youtube.com/embed/gknsIsynlzc",
    path: "/allnewc63-details",
  },
];
export const AllNewGwagen = [
  {
    ModelName: "The Capable offroader in its class..",
    ModelImage:
      "https://robbreport.com/wp-content/uploads/2018/06/al1_2192.jpg?w=1024",
    SpecificationsDetails:
      "It surely isn't just a letter that Mercedes-Benz assigns to different models in its lineup. It stands for “Gelandewagen”, which means cross country vehicle.",
    InteriorImage1: GwagenInterior1,
    InteriorImage2: GwagenInterior2,
    InteriorImage3: GwagenInterior3,
    InteriorImage4: GwagenInterior4,
    InteriorImage5: GwagenInterior5,
    InteriorImage6: GwagenInterior6,
    torque: "850Nm",
    speed: "220 ",
    ZeroTop: "0-100 in 5.4 seconds",
    fuelEconomy: "8.47 Kmpl",
    vedioLink: "https://www.youtube.com/embed/nu-hkg8pLHo",
    path: "/allnew63-details",
  },
];
export const AllNewCla = [
  {
    ModelName: "Untamed. The new CLA... Ready for the next generation",
    ModelImage:
      "http://localhost:5173/src/assets/images/model%20photos/cla.jpeg",
    SpecificationsDetails:
      "a series of luxury compact executive cars manufactured for next generation....",
    InteriorImage1: ClaPhoto1,
    InteriorImage2: ClaPhoto2,
    InteriorImage3: ClaPhoto3,
    InteriorImage4: ClaPhoto4,
    InteriorImage5: ClaPhoto5,
    InteriorImage6: ClaPhoto6,
    torque: "258 lb-ft",
    speed: "	210 km/h",
    ZeroTop: "5seconds",
    fuelEconomy: "5.7L",
    vedioLink: "https://www.youtube.com/embed/d6hqa3sF3aw",
    path: "/allnewcla-details",
  },
];
export const AllNewGla = [
  {
    ModelName: "The compact german offroader car",
    ModelImage: "https://images.pistonheads.com/nimg/38425/AMGC63SCoupe_01.jpg",
    SpecificationsDetails: "all the best capablity in its class...",
    InteriorImage1: GlaPhoto1,
    InteriorImage2: GlaPhoto2,
    InteriorImage3: GlaPhoto3,
    InteriorImage4: GlaPhoto4,
    InteriorImage5: GlaPhoto5,
    InteriorImage6: GlaPhoto6,
    torque: "250Nm",
    speed: "210 ",
    ZeroTop: "6.7",
    fuelEconomy: "17.4 ltr",
    vedioLink: "https://www.youtube.com/embed/ovIvuiaMIN8",
    path: "/allnewgla-details",
  },
];
export const AllNewGls = [
  {
    ModelName: "unparalleled-luxury and capable offroader",
    ModelImage:
      "https://w0.peakpx.com/wallpaper/684/825/HD-wallpaper-mercedes-benz-gls-400-offroad-x167-2020-cars-suvs-2020-mercedes-benz-gls-class-uk-spec-german-cars-mercedes.jpg",
    SpecificationsDetails:
      "best luxury car, and familly freindly , and capable offroader..",
    InteriorImage1: GlsPhoto1,
    InteriorImage2: GlsPhoto2,
    InteriorImage3: GlsPhoto3,
    InteriorImage4: GlsPhoto4,
    InteriorImage5: GlsPhoto5,
    InteriorImage6: GlsPhoto6,
    torque: "730Nm",
    speed: "250 ",
    ZeroTop: "11.7 seconds",
    fuelEconomy: "21km ltr",
    vedioLink: "https://www.youtube.com/embed/rag4v449WJM",
    path: "/allnewgls-details",
  },
];
export const AllNewGle = [
  {
    ModelName:
      " spacious and sophisticated. See design, performance and technology",
    ModelImage:
      "https://images.drive.com.au/caradvice/image/private/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/663e433e8838301368140940a43909df",
    SpecificationsDetails:
      "more fun to drive more capable and family freindly..",
    InteriorImage1: GlePhoto1,
    InteriorImage2: GlePhoto2,
    InteriorImage3: GlePhoto3,
    InteriorImage4: GlePhoto4,
    InteriorImage5: GlePhoto5,
    InteriorImage6: GlePhoto6,
    torque: "500Nm",
    speed: "220 speed",
    ZeroTop: "0-100 6.9s",
    fuelEconomy: "fueleconomy: 19ltr",
    path: "/allnewgle-details",
    vedioLink: "https://www.youtube.com/embed/cg5y4o6D2PU",
  },
];
export const AllNewLuxuryvan = [
  {
    ModelName: "The all new luxury van.",
    ModelImage: "http://localhost:5173/src/assets/images/model%20photos/van.jpg",
    SpecificationsDetails: "Ultra luxury and specisius van with coolests funtions...",
    InteriorImage1: LuxuryVan1,
    InteriorImage2: LuxuryVan2,
    InteriorImage3: LuxuryVan3,
    InteriorImage4: LuxuryVan4,
    InteriorImage5: LuxuryVan5,
    InteriorImage6: LuxuryVan6,
    torque: "360hp",
    speed: "180km",
    ZeroTop: "10seconds",
    fuelEconomy: "15.6litr",
    vedioLink: "https://www.youtube.com/embed/mbmwRRByrb8",
    path: "/allnewluxuryvan-details",

  },
];
export const AllNewAmgGt = [
  {
    ModelName: "Top racing to the steet and feel the formula flavour ",
    ModelImage: "https://img.youtube.com/vi/csAXruiBLTs/maxresdefault.jpg",
    SpecificationsDetails: " The car made its racing debut during the first round of the 2023",
    InteriorImage1:AmgGt1,
    InteriorImage2:AmgGt2,
    InteriorImage3:AmgGt3,
    InteriorImage4:AmgGt4,
    InteriorImage5:AmgGt5,
    InteriorImage6:AmgGt6,
    torque: "800 NM",
    speed: "220",
    ZeroTop: "5seconds",
    fuelEconomy: "5.5liter per km",
    vedioLink: "https://www.youtube.com/embed/QWgoJ6Rm9xw",
    path: "/allnewamgGt-details",


  },
];
