import {
  DemoExpert,
  DomaneLT,
  MadoneSL6,
  PowerflyFS4,
  SpeedmaxCF7,
  StriveCF8,
  UrbanArrowFamily,
} from "#images/Race";
import {
  BoardmanSLR,
  ExceedCF8,
  GainD30,
  GTGrade,
  Hightower,
  StumpjumperEvo,
  SuperSixEvo,
} from "#images/Performance";
import {
  Disc520,
  DudeCF8,
  EmondaALR5,
  GrailCFSL7,
  RadRover5,
  RadRunner1,
  RadWagon4,
  StumpjumperAlloy,
} from "#images/Sport";
import {
  FX3Disc,
  KidsTrail,
  Larkspur1,
  NeroSS,
  Tilt500,
} from "#images/Commuter";
import { ColinPic } from "#images/About";

export const formStatuses = {
  FORM: 0,
  SENT: 1,
  ERROR: 2,
};

export const FontIcons = {
  road: <i className="fas fa-road text-secondary"></i>,
  mountain: <i className="fas fa-mountain text-success"></i>,
  bolt: <i className="fas fa-bolt text-warning"></i>,
  trailer: <i className="fas fa-trailer text-info"></i>,
  cogs: <i className="fas fa-cogs text-secondary"></i>,
  feather: <i className="fas fa-feather-alt text-primary"></i>,
  disc: <i className="fas fa-compact-disc text-secondary"></i>,
  starOutline: <i className="far fa-star text-warning"></i>,
  starSolid: <i className="fas fa-star text-warning"></i>,
  ring: <i className="fas fa-ring text-secondary"></i>,
  calendar: <i className="far fa-calendar-check text-primary"></i>,
  clock: <i className="far fa-clock text-success"></i>,
  apple: <i className="fas fa-apple-alt text-danger"></i>,
  tags: <i className="fas fa-tags text-success"></i>,
  tools: <i className="fas fa-tools text-secondary"></i>,
  wrench: <i className="fas fa-wrench text-secondary"></i>,
  handSparkles: <i className="fas fa-hand-sparkles text-secondary"></i>,
  unlock: <i className="fas fa-unlock text-secondary"></i>,
  running: <i className="fas fa-running text-secondary"></i>,
  truckLoading: <i className="fas fa-truck-loading text-success"></i>,
  bicycle: <i className="fas fa-bicycle text-primary"></i>,
  baby: <i className="fas fa-baby fa-xs text-secondary"></i>,
  child: <i className="fas fa-child fa-sm text-secondary"></i>,
  woman: <i className="fas fa-female fa-lg text-secondary"></i>,
  man: <i className="fas fa-male fa-lg text-secondary"></i>,
  carCrash: <i className="fas fa-car-crash text-danger"></i>,
  globe: <i className="fas fa-globe-americas text-success"></i>,
  frown: <i className="far fa-frown text-info"></i>,
  flagCheckered: <i className="fas fa-flag-checkered text-primary"></i>,
  binoculars: <i className="fas fa-binoculars text-success"></i>,
  home: <i className="fas fa-home text-primary"></i>,
  couch: <i className="fas fa-couch text-secondary"></i>,
  glasses: <i className="fas fa-glasses text-info"></i>,
  sun: <i className="fas fa-sun text-warning"></i>,
  leaf: <i className="fas fa-leaf text-success"></i>,
  dollar: <i className="fas fa-dollar-sign text-success"></i>,
  strava: <i className="fab fa-strava text-danger"></i>,
  facebook: <i className="fab fa-facebook text-primary"></i>,
  externalLink: <i className="fas fa-external-link-alt"></i>,
  facebookSquare: <i className="fab fa-facebook-square text-primary"></i>,
  twitterSquare: <i className="fab fa-twitter-square text-info"></i>,
  discord: <i className="fab fa-discord text-secondary"></i>,
  envelope: <i className="fas fa-envelope text-secondary"></i>,
  apartment: <i class="far fa-building text-secondary"></i>,
};

export const RaceBikes = [
  //    {
  //    "name":"",
  //    "type":"",
  //    "price":"",
  //    "link":"",
  // },
  {
    name: "Trek Madone SL6 Disc",
    type: (
      <>
        <span className="me-2">
          <i className="fas fa-road"></i>
        </span>
        Aero Road
      </>
    ),
    price: "4,700",
    link:
      "https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/madone/madone-sl/madone-sl-6/p/28714/",
    image: MadoneSL6,
  },
  {
    name: "Canyon Speedmax CF 7 Disc",
    type: "Triathlon Road",
    price: "3,800",
    link:
      "https://www.canyon.com/en-us/road-bikes/triathlon-bikes/speedmax/cf/speedmax-cf-7-disc/2554.html",
    image: SpeedmaxCF7,
  },
  {
    name: "Specialized Demo Expert",
    type: "Downhill MTB",
    price: "5,300",
    link:
      "https://www.specialized.com/us/en/demo-expert/p/175246?color=281620-175246",
    image: DemoExpert,
  },
  {
    name: "Canyon Strive CF 8",
    type: "Enduro MTB",
    price: "5,000",
    link:
      "https://www.canyon.com/en-us/mountain-bikes/enduro-bikes/strive/cf/strive-cf-8/2684.html",
    image: StriveCF8,
  },
  {
    name: "Trek Powerfly FS 4",
    type: "E-MTB",
    price: "4,700",
    link:
      "https://www.trekbikes.com/us/en_US/bikes/mountain-bikes/electric-mountain-bikes/powerfly/powerfly-full-suspension/powerfly-fs-4/p/32759/",
    image: PowerflyFS4,
  },
  {
    name: "Trek Domane+ LT",
    type: "E-Road",
    price: "6,000",
    link:
      "https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/domane/domane-lt/domane-lt/p/30915/",
    image: DomaneLT,
  },
  {
    name: "Urban Arrow Family",
    type: "E-Cargo",
    price: "7,000",
    link: "https://www.urbanarrow.com/en/family",
    image: UrbanArrowFamily,
  },
];

export const PerformanceBikes = [
  {
    name: "Boardman SLR 9.4 Disc",
    type: "All-round Road",
    price: "3,000",
    link:
      "https://www.boardmanbikes.com/gb_en/products/2383-slr-9.4-disc-carbon-2021.html",
    image: BoardmanSLR,
  },
  {
    name: "Cannondale SuperSix EVO Carbon Disc Ultegra",
    type: "All-round Road",
    price: "4,200",
    link:
      "https://www.cannondale.com/en/bikes/road/race/supersix-evo/supersix-evo-carbon-disc-ultegra",
    image: SuperSixEvo,
  },
  {
    name: "GT Grade Carbon Pro",
    type: "Gravel",
    price: "3,900",
    link: "https://www.gtbicycles.com/esp_en/grade-carbon-pro-3086",
    image: GTGrade,
  },
  {
    name: "Specialized Stumpjumper EVO Comp",
    type: "Trail MTB",
    price: "4,300",
    link: "https://www.specialized.com/us/en/stumpjumper-evo-comp/p/175271",
    image: StumpjumperEvo,
  },
  {
    name: "Canyon Exceed CF 8",
    type: "Cross-country MTB",
    price: "3,700",
    link:
      "https://www.canyon.com/en-us/mountain-bikes/cross-country-bikes/exceed/cf/exceed-cf-8/2894.html",
    image: ExceedCF8,
  },
  {
    name: "Orbea Gain D30",
    type: "E-Road",
    price: "3,700",
    link: "https://www.orbea.com/us-en/ebikes/road/gain/cat/gain-d30-1x-20mph",
    image: GainD30,
  },
  {
    name: "Santa Cruz Hightower",
    type: "E-Mountain",
    price: "3,900",
    link: "https://www.santacruzbicycles.com/en-US/bikes/hightower",
    image: Hightower,
  },
];

export const SportBikes = [
  {
    name: "Trek Émonda ALR 5",
    type: "Performance Road",
    price: "2,150",
    link:
      "https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/%C3%A9monda/%C3%A9monda-alr/%C3%A9monda-alr-5/p/24166/",
    image: EmondaALR5,
  },
  {
    name: "Canyon Grail CF SL 7",
    type: "Gravel",
    price: "2,700",
    link:
      "https://www.canyon.com/en-us/gravel-bikes/all-road/grail/cf-sl/grail-cf-sl-7/2840.html",
    image: GrailCFSL7,
  },
  {
    name: "Trek 520 Disc",
    type: "Touring Road",
    price: "1,800",
    link:
      "https://www.trekbikes.com/us/en_US/bikes/adventure-touring-bikes/520/520/p/24000/",
    image: Disc520,
  },
  {
    name: "Specialized Stumpjumper Alloy",
    type: "Trail MTB",
    price: "2,400",
    link: "https://www.specialized.com/us/en/stumpjumper-alloy/p/175253",
    image: StumpjumperAlloy,
  },
  {
    name: "Canyon The Dude",
    type: "Fat Bike",
    price: "2,700",
    link:
      "https://www.canyon.com/en-us/mountain-bikes/fat-bikes/dude/dude-cf-8/2622.html?dwvar_2622_pv_rahmenfarbe=GN%2FBK",
    image: DudeCF8,
  },
  {
    name: "Rad Power RadWagon",
    type: "E-Cargo",
    price: "1,900",
    link: "https://www.radpowerbikes.com/products/radwagon-electric-cargo-bike",
    image: RadWagon4,
  },
  {
    name: "Rad Power RadRover",
    type: "E-Fat Bike",
    price: "1,700",
    link: "https://www.radpowerbikes.com/products/radrover-electric-fat-bike",
    image: RadRover5,
  },
  {
    name: "Rad Power RadRunner",
    type: "E-Utility",
    price: "1,300",
    link:
      "https://www.radpowerbikes.com/products/radrunner-electric-utility-bike",
    image: RadRunner1,
  },
];

export const CommuterBikes = [
  {
    name: "Trek FX3 Disc",
    type: "Hybrid Road",
    price: "900",
    link:
      "https://www.trekbikes.com/us/en_US/bikes/hybrid-bikes/fitness-bikes/fx/fx-3-disc/p/28474/",
    image: FX3Disc,
  },
  {
    name: "Marin Larkspur 1",
    type: "Urban Road",
    price: "800",
    link: "https://www.marinbikes.com/bikes/2021-larkspur-1",
    image: Larkspur1,
  },
  {
    name: "B'Twin Tilt 500 ",
    type: "Folding Road",
    price: "400",
    link: "https://www.decathlon.com/products/folding-bike-20-tilt-500",
    image: Tilt500,
  },
  {
    name: "Bianchi Nero SS",
    type: "Single speed / Track",
    price: "650",
    link: "https://www.bianchi.com/bike/pista-nero/",
    image: NeroSS,
  },
  {
    name: "Cannondale Trail 20",
    type: "Kids",
    price: "450",
    link:
      "https://www.cannondale.com/en-us/bikes/kids/5-to-8/kids-trail-5-to-8/kids-trail-20-boys",
    image: KidsTrail,
  },
];

const {
  road,
  mountain,
  bolt,
  trailer,
  cogs,
  feather,
  disc,
  starOutline,
  starSolid,
  ring,
  calendar,
  clock,
  apple,
  tags,
  tools,
  wrench,
  handSparkles,
  unlock,
  running,
  truckLoading,
  bicycle,
  baby,
  child,
  woman,
  man,
  carCrash,
  globe,
  frown,
  flagCheckered,
  binoculars,
  home,
  couch,
  glasses,
  strava,
  facebook,
  sun,
  leaf,
  dollar,
  facebookSquare,
  twitterSquare,
  discord,
  apartment,
} = FontIcons;

export const RaceKit = {
  title: "Race Kit",
  description: `High end bikes that are the lightest, most aero, 
and have the nicest components. Great for serious
cyclists or moving cargo.`,
  bikeList: RaceBikes,
  bikeTypes: [
    {
      listText: "Aero",
      icons: [road],
    },
    {
      listText: "Triathlon / Time-trial",
      icons: [road],
    },
    {
      listText: "Downhill",
      icons: [mountain],
    },
    {
      listText: "Enduro",
      icons: [mountain],
    },
    {
      listText: "E-MTB",
      icons: [bolt, mountain],
    },
    {
      listText: "E-Road",
      icons: [bolt, road],
    },
    {
      listText: "E-Cargo",
      icons: [bolt, trailer],
    },
  ],
  features: [
    {
      listText: "Electronic groupsets",
      icons: [cogs],
    },
    {
      listText: "Carbon fiber wheels",
      icons: [feather],
    },
    {
      listText: "Disc brakes",
      icons: [disc],
    },
    {
      listText: "Tubeless tires",
      icons: [ring],
    },
  ],
  bonuses: [
    {
      listText: "Custom wheelset options",
      icons: [starOutline],
    },
  ],

  priceRange: <> {dollar} 4, 000 - 6, 000 </>,
  price: <> {dollar} 150 - 200 / month* </>,
  to: "/kits/race",
  bgImageClass: "bg-race-image",
  bgColorClass: "bg-race-color",
};

export const PerformanceKit = {
  title: "Performance Kit",
  description: "Perfect bikes for club rides, training, and big adventures.",
  bikeList: PerformanceBikes,
  bikeTypes: [
    {
      listText: "All-round Road",
      icons: [road],
    },
    {
      listText: "Gravel",
      icons: [road, mountain],
    },
    {
      listText: "Trail MTB",
      icons: [mountain],
    },
    {
      listText: "Cross-country MTB",
      icons: [mountain],
    },
    {
      listText: "E-MTB",
      icons: [bolt, mountain],
    },
    {
      listText: "E-Road",
      icons: [bolt, mountain],
    },
  ],
  features: [
    {
      listText: "Electronic groupsets",
      icons: [cogs],
    },
    {
      listText: "Carbon fiber wheels",
      icons: [feather],
    },
    {
      listText: "Disc brakes",
      icons: [disc],
    },
    {
      listText: "Tubeless tires",
      icons: [ring],
    },
  ],
  bonuses: [
    {
      listText: "Custom wheelset options",
      icons: [starOutline],
    },
  ],

  priceRange: <> {dollar} 3, 000 - 4, 500 </>,
  price: <> {dollar} 125 - 150 / month* </>,
  to: "/kits/performance",
  background: "bg-performance",
  bgImageClass: "bg-performance-image",
  bgColorClass: "bg-performance-color",
};

export const SportKit = {
  title: "Sport Kit",
  description: `Great value for the money bikes. Good for new cyclists or those who don't take it too seriously.
Also some great E-bikes in this kit.`,
  bikeList: SportBikes,
  bikeTypes: [
    {
      listText: "Performance Road",
      icons: [road],
    },
    {
      listText: "Touring Road",
      icons: [road],
    },
    {
      listText: "Gravel",
      icons: [road, mountain],
    },
    {
      listText: "Trail MTB",
      icons: [mountain],
    },
    {
      listText: "Fat Bike MTB",
      icons: [mountain],
    },
    {
      listText: "E-Fat Bike",
      icons: [bolt, mountain],
    },
    {
      listText: "E-Utility",
      icons: [bolt, road],
    },
    {
      listText: "E-Cargo",
      icons: [bolt, trailer],
    },
  ],
  features: [
    {
      listText: "Disc brakes",
      icons: [disc],
    },
    {
      listText: "Tubeless tires",
      icons: [ring],
    },
  ],
  priceRange: <> {dollar} 1, 000 - 3, 000 </>,
  price: <> {dollar} 100 - 125 / month* </>,
  to: "/kits/sport",
  background: "bg-sport",
  bgImageClass: "bg-sport-image",
  bgColorClass: "bg-sport-color",
};

export const CommuterKit = {
  title: "Commuter Kit",
  description: `Just looking to get around? Going to school, work, the grocery store, exploring the city, or having fun with friends? 
Then this would be a great kit for you. Also includes kids bikes!`,
  bikeList: CommuterBikes,
  bikeTypes: [
    {
      listText: "Hybrid Road",
      icons: [road],
    },
    {
      listText: "Urban Road",
      icons: [road],
    },
    {
      listText: "Folding Road",
      icons: [road],
    },
    {
      listText: "Single speed / Track",
      icons: [road],
    },
    {
      listText: "Kids",
      icons: [road, mountain],
    },
  ],
  priceRange: <> {dollar} 1, 000 or less </>,
  price: <> {dollar} 75 - 100 / month* </>,
  to: "/kits/commuter",
  background: "bg-commuter",
  bgImageClass: "bg-commuter-image",
  bgColorClass: "bg-commuter-color",
};

export const FamilyKit = {
  title: "Family Kit",
  description: `An awesome affordable option for families with growing kids, changing hobbies, and changing demands.`,
  bikeTypes: [
    {
      listText: "Any bike",
      icons: [road, mountain, bolt],
    },
  ],
  features: [
    {
      listText: "Pay full price for 1 kit and get any other kit for 25% off.",
      icons: [starSolid],
    },
  ],
  priceRange: <> {dollar} 0 - 6, 000 </>,
  price: <> {dollar} varies / month* </>,
  to: "/kits/family",
  background: "bg-family",
  bgImageClass: "bg-family-image",
  bgColorClass: "bg-family-color",
};

export const ShortTermKit = {
  title: "Daily and Weekend Kit",
  description: `This kit makes vacations stress free and try new bikes easier than ever.`,
  bikeTypes: [
    {
      listText: "Any bike",
      icons: [road, mountain, bolt],
    },
  ],
  features: [
    {
      listText: "Daily: $25-50 / day",
      icons: [starSolid],
    },
    {
      listText: "Daily: $40-60 / weekend",
      icons: [starSolid],
    },
  ],
  priceRange: <> {dollar} 0 - 6, 000 </>,
  price: <> {dollar} 25 - 60 / 1 - 2 days* </>,
  to: "/kits/short-term",
  background: "bg-shortTerm",
  bgImageClass: "bg-shortTerm-image",
  bgColorClass: "bg-shortTerm-color",
};

export const GeneralGuidelines = {
  rulesList: [
    {
      listText: "Bikes must be reserved at least 2 days in advance.",
      icons: [calendar],
    },
    {
      listText: `Bikes cannot be used for longer than a month (unless you have a special event or circumstance, like a race).  But you can re-reserve your bike after your use ends (assuming it's still available).`,
      icons: [clock],
    },
  ],
};

export const AllKits = {
  featuresList: [
    {
      listText: "Discounted nutrition, helmets, and accessories.",
      icons: [apple, tags, tools],
    },
    {
      listText: "Replacement bikes if a part breaks or yours gets stolen.",
      icons: [bicycle, running],
    },
    {
      listText: "Clean and maintained bikes.",
      icons: [handSparkles, wrench],
    },
    {
      listText: "Access to any bike from a kit priced below this one.",
      icons: [unlock],
    },
    {
      listText: "Convenient drop-off and pick-up from your home.",
      icons: [truckLoading],
    },
  ],
};

export const WhatWeDo = {
  doList: [
    {
      listText: "Offer bikes of all types and sizes:",
      icons: [bicycle, baby, child, woman, man],
      subList: [
        { listText: "Road", icons: [road] },
        { listText: "Mountain", icons: [mountain] },
        { listText: "Gravel", icons: [mountain, road] },
        { listText: "Electric", icons: [bolt, mountain, road] },
        { listText: "Race", icons: [starSolid] },
        { listText: "Commuter", icons: [starSolid] },
        { listText: "Kids to Adults", icons: [starSolid] },
        { listText: "Small, Medium, Large", icons: [starSolid] },
      ],
    },
    {
      listText: "Keep the bikes clean and maintained",
      icons: [handSparkles, tools],
    },
    {
      listText: "Cover the bikes with insurance",
      icons: [carCrash],
    },
    {
      listText: "Offer easy drop-off and pick-up ",
      icons: [truckLoading],
    },
  ],
};

export const WhoItsFor = {
  forList: [
    {
      listText: (
        <>
          <strong>Anyone </strong> who is tired of:
        </>
      ),
      icons: [globe],
      subList: [
        {
          listText: "Replacing parts (eg. tires, tubes, chains, cables, etc.)",
          icons: [frown],
        },
        { listText: "Cleaning their bike ", icons: [frown] },
        { listText: "Maintaining their bike ", icons: [frown] },
      ],
    },
    {
      listText: (
        <>
          <strong>Racers </strong> who don 't want to spend <em>$$$ </em> on
          bikes they only use in races.
        </>
      ),
      icons: [flagCheckered],
    },
    {
      listText: (
        <>
          <strong>Adventurers </strong> who want to try multiple bike 
          genres (road, gravel, mountain).
        </>
      ),
      icons: [binoculars],
    },
    {
      listText: (
        <>
          <strong>Families </strong> with kids growing faster than weeds.
        </>
      ),
      icons: [home],
    },
    {
      listText: (
        <>
          <strong>Casual riders </strong> who only ride a few times a month.
        </>
      ),
      icons: [couch],
    },
    {
      listText: (
        <>
          <strong>Tech geeks </strong> who always want the latest and greatest.
        </>
      ),
      icons: [glasses],
    },
    {
      listText: (
        <>
          <strong>Seasonal riders </strong> who only ride when the weather is
          nice or in their off-season.
        </>
      ),
      icons: [sun, leaf],
    },
    {
      listText: (
        <>
          <strong>Apartment renters </strong> who don’t have room for multiple bikes.
        </>
      ),
      icons: [apartment],
    },
  ],
};

export const CompanyInfo = {
  socialList: [
    {
      listText: (
        <>
          <a href="https://discord.gg/skcfCKFeRh" target="_blank" rel="noreferrer">
            Discord
          </a>
        </>
      ),
      icons: [discord],
    },
    {
      listText: (
        <>
          <a href="https://www.strava.com/athletes/24708059" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </>
      ),
      icons: [facebookSquare],
    },
    {
      listText: (
        <>
          <a href="https://www.facebook.com/colinsteidtmann" target="_blank" rel="noreferrer">
            Twitter
          </a>
        </>
      ),
      icons: [twitterSquare],
    },
  ],
};

export const EmployeeInfo = {
  employeeList: [
    {
      name: "Colin Steidtmann",
      profilePic: ColinPic,
      about: `Colin was raised in Oakland, CA. He's been 
riding the streets of the East Bay since 
pre-k. He rides road bikes, he wants to try
gravel, but mountain biking scares him.`,
      role: "Engineer",
      achievements: [
        {
          listText: "Biked across America solo at age 17.",
          icons: [starSolid],
        },
      ],
      socials: [
        {
          listText: (
            <>
              Strava &#8212; 
              <a
                href="https://www.strava.com/athletes/24708059"
                className="link-primary"
                target="_blank" rel="noreferrer"
              >
                @colinsteidtmann
              </a>
            </>
          ),
          icons: [strava],
        },
        {
          listText: (
            <>
              Facebook &#8212; 
              <a
                href="https://www.facebook.com/colinsteidtmann"
                className="link-primary"
                target="_blank" rel="noreferrer"
              >
                @colinsteidtmann
              </a>
            </>
          ),
          icons: [facebook],
        },
      ],
    },
  ],
};

export const ReactShareText = {
  shareUrl: "https://polycycles.com/",
  facebook: {
    quote: ` Check out PolyCycles! A new bike subscription service making it easier and more affordable to own a bike. You can swap between road, mountain, electric bikes, and different wheelsets. They keep the bikes in perfect condition so that you never have to clean, fix, or replace anything ever again! It's easy!`,
    hashtag: "#PolyCycles",
  },
  twitter: {
    via: "PolyCycles",
    hashtags: ["PolyCycles"],
    title: `Check out PolyCycles! A new bike subscription service making it easier and more affordable to own a bike. You can swap between road, mountain, electric bikes, and different wheelsets.`,
  },
  reddit: {
    title: "Check out PolyCycles! A new bike subscription service.",
  },
  email: {
    subject: "Check out PolyCycles! A new bike subscription service.",
    body: `Check out PolyCycles! A new bike subscription service making it easier and more affordable to own a bike. You can swap between road, mountain, electric bikes, and different wheelsets. They keep the bikes in perfect condition so that you never have to clean, fix, or replace anything ever again! It's easy!`,
    seperator: "\n\n",
  },
  linkedIn: {
    title: "Check out PolyCycles! A new bike subscription service.",
    summary: `Check out PolyCycles! A new bike subscription service making it easier and more affordable to own a bike. You can swap between road, mountain, electric bikes, and different wheelsets. They keep the bikes in perfect condition so that you never have to clean, fix, or replace anything ever again! It's easy!`,
    source: "PolyCycles",
  },
};
