export type Review = {
  name: string;
  initials: string;
  location: string;
  date: string;
  service: string;
  rating: 5;
  body: string;
};

export const reviews: Review[] = [
  {
    name: "Linda M.",
    initials: "LM",
    location: "Horseshoe Bay, TX",
    date: "3 weeks ago",
    service: "Living Trust",
    rating: 5,
    body:
      "We'd been putting off estate planning for years because the Austin firms we'd talked to all felt like they were billing us by the minute. CMS Global Ventures was the opposite — flat fee, plain English, and they actually drove out to our place on Lake LBJ to do the signing. Our living trust was finished in under a month and our lake house is finally titled correctly. Wish we'd done this ten years ago.",
  },
  {
    name: "James & Patricia K.",
    initials: "JK",
    location: "Marble Falls, TX",
    date: "1 month ago",
    service: "Estate Planning",
    rating: 5,
    body:
      "Our daughter just had her first baby and we realized we'd never updated our wills or named guardians. We came in expecting a sales pitch and got a real conversation instead. They walked us through what we actually needed (not what would maximize their fee), built us a complete plan with a trust, wills, and powers of attorney, and answered every question we had. Professional from start to finish.",
  },
  {
    name: "Robert W.",
    initials: "RW",
    location: "Kingsland, TX",
    date: "2 months ago",
    service: "Business Succession",
    rating: 5,
    body:
      "Our family has been ranching in Llano County for four generations and the last thing we wanted was to lose the land to probate or estate taxes when my time comes. CMS Global Ventures structured a business trust that holds the ranch and the LLC, set up clear succession terms with my kids, and made the whole thing private. They understood ranching, they understood Texas, and they got it done.",
  },
  {
    name: "Diane S.",
    initials: "DS",
    location: "Granite Shoals, TX",
    date: "2 months ago",
    service: "Asset Protection",
    rating: 5,
    body:
      "After my husband passed I realized our planning was way out of date and I was carrying a lot of risk I didn't know about. They restructured everything — moved the rental property into an LLC, set up an irrevocable trust for the lake house, and walked me through Texas homestead protections I had no idea existed. I sleep a lot better now. Cannot recommend them more highly.",
  },
  {
    name: "Tom & Karen B.",
    initials: "TB",
    location: "Spicewood, TX",
    date: "3 months ago",
    service: "Probate Assistance",
    rating: 5,
    body:
      "When my mother passed without a trust we had no idea where to start with probate. Burnet County felt like a maze. CMS Global Ventures handled all the paperwork, got us through independent administration without ever needing court appearances, and finished everything in about ten weeks. They also helped us build our own trust so our kids never have to go through what we did.",
  },
  {
    name: "Michael R.",
    initials: "MR",
    location: "Lakeway, TX",
    date: "4 months ago",
    service: "Business Trust",
    rating: 5,
    body:
      "I run two small businesses and a real estate portfolio in Austin and Travis County. I'd been told for years I needed a real asset protection plan but the lawyers I talked to either wanted hourly rates or didn't really understand the Series LLC structure I use. These guys built me a trust-owned Series LLC setup, coordinated with my CPA, and handled the funding themselves. Worth every penny.",
  },
];
