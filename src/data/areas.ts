export type Area = {
  slug: string;
  city: string;
  county: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  localHook: string;
  driveTime: string;
  population?: string;
  landmarks: string[];
};

export const areas: Area[] = [
  {
    slug: "marble-falls",
    city: "Marble Falls",
    county: "Burnet County",
    h1: "Estate Planning & Trust Services in Marble Falls, TX",
    metaTitle: "Marble Falls Estate Planning & Trusts | CMS Global Ventures",
    metaDescription:
      "Trust formation, estate planning, and asset protection for Marble Falls, TX families. Local Hill Country specialists. 500+ plans built. Schedule your free consultation.",
    intro:
      "Marble Falls sits at the heart of the Highland Lakes — and at the heart of what we do. From the Old Oak Square families to the newer Flat Creek Estates, our Marble Falls clients tend to share one thing: they've built something worth protecting, and they want to make sure it stays in the family. We help Marble Falls families build trust-based estate plans that keep their lake homes, their businesses, and their savings out of probate and on the path they choose.",
    localHook:
      "Burnet County's probate court is right in Burnet — a short drive from Marble Falls. We help families avoid that courthouse altogether through proper trust planning.",
    driveTime: "15 minutes from our Granite Shoals service area",
    population: "~7,200",
    landmarks: ["Lake Marble Falls", "Falls on the Colorado Museum", "Main Street Historic District"],
  },
  {
    slug: "horseshoe-bay",
    city: "Horseshoe Bay",
    county: "Llano & Burnet Counties",
    h1: "Estate Planning & Trust Services in Horseshoe Bay, TX",
    metaTitle: "Horseshoe Bay Estate Planning & Trusts | CMS Global Ventures",
    metaDescription:
      "Estate planning, asset protection, and trust formation for Horseshoe Bay, TX. Specialized planning for lake-home owners and high-net-worth families on Lake LBJ.",
    intro:
      "Horseshoe Bay is one of Texas's most successful destination communities — and one of our most natural client bases. Our Horseshoe Bay clients are often dual-residents: a primary home elsewhere in Texas (or out of state) and a lake home here. That creates planning complexity. Multi-state property. Boat and golf-cart titles. Resort-club memberships. Family members who only see each other on holidays. We build estate plans designed for that exact reality.",
    localHook:
      "Lake-home owners need a plan that handles real property in two counties — Burnet and Llano. We coordinate trust funding across both.",
    driveTime: "20 minutes from our Granite Shoals service area",
    population: "~5,500",
    landmarks: ["Lake LBJ", "Horseshoe Bay Resort", "Slick Rock Golf Course"],
  },
  {
    slug: "kingsland",
    city: "Kingsland",
    county: "Llano County",
    h1: "Estate Planning & Trust Services in Kingsland, TX",
    metaTitle: "Kingsland Estate Planning & Trusts | CMS Global Ventures",
    metaDescription:
      "Trust formation and estate planning for Kingsland, TX families. Custom plans for Lake LBJ homeowners, retirees, and Hill Country business owners.",
    intro:
      "Kingsland anchors the western shore of Lake LBJ. It's a community of multi-generational ranching families, retirees who chose the lake for its quiet, and newer residents who came for the same reason. Our Kingsland clients are typically focused on three things: passing the family land on intact, keeping the lake house in the family, and avoiding probate when the time comes.",
    localHook:
      "Llano County is one of the friendlier probate jurisdictions in Texas, but the right trust structure keeps your family out of court entirely.",
    driveTime: "10 minutes from our Granite Shoals service area",
    population: "~6,400",
    landmarks: ["Lake LBJ", "The Slab on the Llano River", "Antlers Hotel"],
  },
  {
    slug: "llano",
    city: "Llano",
    county: "Llano County",
    h1: "Estate Planning & Trust Services in Llano, TX",
    metaTitle: "Llano Estate Planning & Trusts | CMS Global Ventures",
    metaDescription:
      "Estate planning, trusts, and asset protection for Llano, TX and Llano County families. Multi-generational planning for ranch owners and Hill Country residents.",
    intro:
      "Llano is the county seat — and home to some of the oldest ranching families in the Hill Country. Land tends to be the central planning issue here: family acreage that's been in the same name for three or four generations, mineral rights, deer leases, and the question of how to pass it on without forcing a sale to settle taxes or to satisfy heirs. We build plans that keep the land together.",
    localHook:
      "Llano County is home to a particularly active probate docket. The trust-based plans we build are designed to keep your family off it.",
    driveTime: "25 minutes from our Granite Shoals service area",
    population: "~3,300",
    landmarks: ["Llano County Courthouse", "Badu Park", "Llano River"],
  },
  {
    slug: "burnet",
    city: "Burnet",
    county: "Burnet County",
    h1: "Estate Planning & Trust Services in Burnet, TX",
    metaTitle: "Burnet Estate Planning & Trusts | CMS Global Ventures",
    metaDescription:
      "Trust formation and estate planning for Burnet, TX and Burnet County families. Avoid probate, protect family wealth, and plan for the next generation.",
    intro:
      "Burnet — county seat of Burnet County — is where probate happens for most of our Highland Lakes clients. That's exactly why we're here. We help Burnet families build plans designed to never see the inside of the county courthouse. Whether you own a home in town, a ranch outside it, or a business along Highway 281, we structure your plan to transfer ownership privately, quickly, and on your terms.",
    localHook:
      "The Burnet County Courthouse sits just off the historic square. Probate works there — but quietly skipping it is almost always better for your family.",
    driveTime: "20 minutes from our Granite Shoals service area",
    population: "~6,800",
    landmarks: ["Burnet County Courthouse Square", "Fort Croghan", "Hill Country Flyer"],
  },
  {
    slug: "spicewood",
    city: "Spicewood",
    county: "Burnet County",
    h1: "Estate Planning & Trust Services in Spicewood, TX",
    metaTitle: "Spicewood Estate Planning & Trusts | CMS Global Ventures",
    metaDescription:
      "Estate planning and asset protection for Spicewood, TX. Custom trust structures for Lake Travis homeowners, business owners, and retired professionals.",
    intro:
      "Spicewood sits where the Hill Country meets the Austin metro — and our Spicewood clients reflect that mix. Tech executives with second homes on Lake Travis. Long-time ranching families on the south side of 71. Retired professionals who moved out from the city. The planning need: a structure flexible enough to handle out-of-state heirs, business interests in Austin, and Hill Country property all in one binder.",
    localHook:
      "Spicewood properties often cross the Travis County / Burnet County line, which makes proper trust titling especially important.",
    driveTime: "35 minutes from our Granite Shoals service area",
    population: "~2,400",
    landmarks: ["Lake Travis", "Krause Springs", "Spicewood Vineyards"],
  },
  {
    slug: "cottonwood-shores",
    city: "Cottonwood Shores",
    county: "Burnet County",
    h1: "Estate Planning & Trust Services in Cottonwood Shores, TX",
    metaTitle: "Cottonwood Shores Estate Planning | CMS Global Ventures",
    metaDescription:
      "Trust formation and estate planning for Cottonwood Shores, TX residents. Simple, transparent plans designed to keep your family out of probate court.",
    intro:
      "Cottonwood Shores is the kind of community where everyone knows their neighbors. It's also the kind of community where the wrong estate plan — or no plan at all — can quickly become a problem your kids inherit. We help Cottonwood Shores families build straightforward, transparent plans designed to do exactly one thing: protect what you've built and pass it on the way you want.",
    localHook:
      "Many Cottonwood Shores homes have been in the family for decades. The right trust keeps that streak going.",
    driveTime: "10 minutes from our Granite Shoals service area",
    population: "~1,500",
    landmarks: ["Lake Marble Falls", "Cottonwood Park"],
  },
  {
    slug: "lakeway",
    city: "Lakeway",
    county: "Travis County",
    h1: "Estate Planning & Trust Services in Lakeway, TX",
    metaTitle: "Lakeway Estate Planning & Trusts | CMS Global Ventures",
    metaDescription:
      "Estate planning, trust formation, and asset protection for Lakeway, TX. High-net-worth planning for Lake Travis professionals, executives, and retirees.",
    intro:
      "Lakeway concentrates more high-net-worth households per square mile than almost anywhere in central Texas. The planning need is rarely simple — multiple residences, executive compensation, equity in a business or two, blended families. Our Lakeway clients want plans that handle complexity without becoming complex to live with.",
    localHook:
      "Travis County probate is one of the busiest in the state. Plans built to avoid it altogether — through living trusts and properly funded entities — save Lakeway families months of delay.",
    driveTime: "45 minutes from our Granite Shoals service area",
    population: "~19,000",
    landmarks: ["Lake Travis", "Live Oak Golf Course", "Lakeway Resort"],
  },
  {
    slug: "bee-cave",
    city: "Bee Cave",
    county: "Travis County",
    h1: "Estate Planning & Trust Services in Bee Cave, TX",
    metaTitle: "Bee Cave Estate Planning & Trusts | CMS Global Ventures",
    metaDescription:
      "Estate planning and asset protection for Bee Cave, TX families and business owners. Trust-based plans designed for Austin's Hill Country corridor.",
    intro:
      "Bee Cave grew fast — and brought with it a generation of professionals and entrepreneurs who built real wealth in Austin and now live, raise families, and run companies west of the city. Our Bee Cave clients tend to ask the same question: how do we protect what we have without making our lives more complicated? The answer is almost always a single coordinated plan with trusts, LLCs, and clear succession built in.",
    localHook:
      "Bee Cave business owners benefit from layered structures — trust-owned LLCs that keep ownership private and assets shielded.",
    driveTime: "50 minutes from our Granite Shoals service area",
    population: "~8,800",
    landmarks: ["Hill Country Galleria", "Bee Cave Central Park"],
  },
  {
    slug: "lago-vista",
    city: "Lago Vista",
    county: "Travis County",
    h1: "Estate Planning & Trust Services in Lago Vista, TX",
    metaTitle: "Lago Vista Estate Planning & Trusts | CMS Global Ventures",
    metaDescription:
      "Trust formation and estate planning for Lago Vista, TX. Custom plans for Lake Travis homeowners, retirees, and Hill Country families.",
    intro:
      "Lago Vista is a community shaped by the lake. Many of our Lago Vista clients moved here at retirement, and many more are second-home owners who plan to retire here. The planning conversations almost always center on the lake house — who gets it, how to keep it intact, and how to make sure it doesn't end up tied up in probate at the worst possible time.",
    localHook:
      "Lago Vista property in Travis County paired with primary residences elsewhere makes proper trust funding essential — a will alone usually isn't enough.",
    driveTime: "40 minutes from our Granite Shoals service area",
    population: "~8,400",
    landmarks: ["Lake Travis", "Lago Vista Golf Course"],
  },
];

export const getArea = (slug: string): Area | undefined => areas.find((a) => a.slug === slug);
