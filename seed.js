const { magenta, blueBright, yellow, green, red } = require("chalk");
const db = require("./server/db");
const { Movie, Series, User } = require("./server/db/models");

const seed = async () => {
  try {
    await db.sync({ force: true });

    const meg = await User.create({
      name: "Meghan",
      email: "meghanmc04@mac.com",
      password: "123",
    });
    console.log(blueBright("just one lil user created"));

    const series = [
      {
        title: "Seinfeld",
        platform: "Hulu",
        image:
          "https://media.wired.com/photos/5932425b4dc9b45ccec5ce1d/master/pass/Seinfeld.jpg",
        description:
          "Four single friends -- comic Jerry Seinfeld, bungling George Costanza, frustrated working gal Elaine Benes and eccentric neighbor Cosmo Kramer -- deal with the absurdities of everyday life in New York City.",
        seasons: 9,
        active: false,
        userId: meg.id,
      },
      {
        title: "Bojack Horseman",
        platform: "Netflix",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEsx1lgHmcVybMITP1PIXm9_Gj4rzsg9ICwg&usqp=CAU",
        description:
          "A humanoid horse, BoJack Horseman -- lost in a sea of self-loathing and booze -- decides it's time for a comeback. Once the star of a '90s sitcom, in which he was the adoptive father of three orphaned kids (two girls and a boy). The show was the hottest thing around, then suddenly, was canceled. Now 18 years later, BoJack wants to regain his dignity. With the aid of a human sidekick and a feline ex-girlfriend who is his agent, he sets out to make it happen. But Hollywood is vastly different from those days, and getting used to stuff like Twitter may take some time. This first animated series from Netflix -- with plenty of references to sex, drugs and alcohol -- is not for the little ones.",
        seasons: 6,
        active: false,
        userId: meg.id,
      },
      {
        title: "Serial Killers",
        platform: "Netflix",
        image:
          "https://img1.looper.com/img/gallery/the-ending-of-criminal-minds-explained/intro-1582639384.jpg",
        description:
          "An elite squad of FBI profilers analyzes the country's most-twisted criminal minds, anticipating the perpetrators' next moves before they can strike again. Each member of the 'mind hunter' team brings his or her expertise to pinpoint predators' motivations and identify emotional triggers to stop them. The core group includes an official profiler who is highly skilled at getting into the minds of criminals, a quirky genius, the former media liaison who manages to adeptly balance family life and the job, and a computer wizard.",
        seasons: 15,
        active: false,
        seen: true,
        userId: meg.id,
      },
      {
        title: "Friends",
        platform: "Hulu",
        image:
          "https://cdn.vox-cdn.com/thumbor/yzePlAdBf52QI_l-PJrNidSS9Gs=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15002495/friendscast.0.0.1429818191.jpg",
        description:
          "Three young men and three young women -- of the BFF kind -- live in the same apartment complex and face life and love in New York. They're not above sticking their noses into one another's business and swapping romantic partners, which always leads to the kind of hilarity average people will never experience -- especially during breakups.",
        seasons: 10,
        active: false,
        seen: true,
        userId: meg.id,
      },
      {
        title: "Tuca + Bertie",
        platform: "Netflix",
        image:
          "https://www.dailyxtra.com/content/uploads/2019/08/65-2042x1152.jpg",
        description:
          "This animated comedy series explores the friendship between two 30-year-old bird women who live in the same apartment building. The buddy comedy features cocky, carefree toucan Tuca and anxious, daydreaming songbird Bertie as they live their lives in the metropolis of Bird Town. The former roommates separate when Bertie moves in with chipper architect Speckle and Tuca moves upstairs from them. Tiffany Haddish and Ali Wong voice the titular characters on this animated show that is decidedly not for kids.",
        seasons: 1,
        active: true,
        userId: meg.id,
      },
      {
        title: "Horsin' Around",
        platform: "Netflix",
        image:
          "https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXBZhgY8vhWhmX12MUk_YaqkOZIIfCja9x5vizI-kO37W3d0GblAEUkZJoa7cgjdtLUymEual-JU69kGN2ji-h8_TNJw.jpg?r=bf7",
        description:
          "Three little orphans - one, two, three. Without a home or a family tree. Until this horse said, 'Live with me,' and now they've got a new family!",
        seasons: 9,
        active: false,
        seen: true,
        userId: meg.id,
      },
      {
        title: "Angry Beavers",
        platform: "Amazon Prime",
        image:
          "https://1.bp.blogspot.com/-r2JMcQQdQuY/V_fw5fY8agI/AAAAAAAAqOc/7aKDx5BvRWQiRwUgnkwRvvfLvNCm4_cNwCLcB/s1600/the-angry-beavers-daggett-and-norbert-beaver-cast-stars-characters-in-logo-with-dam-background-nickelodeon-nick-nicktoons-nicktoon-dag-norb.png",
        description:
          "Brothers Daggett and Norbert Beaver have left home to gain independence by living on their own in the forest near their Oregon hometown. Their goal is to live a wild bachelor lifestyle but, as might be expected from young brothers, they get into some weird situations. The brothers run into everything from wacky government scientists to a swamp witch and evil, mind-controlling pond scum. One of the brothers' good friends is Stump, a giant tree stump, who is an integral part of their inner circle.",
        seasons: 4,
        active: false,
        userId: meg.id,
      },
      {
        title: "Ned's Declassified School Survival Guide",
        platform: "Amazon Prime",
        image:
          "https://hips.hearstapps.com/sev.h-cdn.co/assets/15/49/1449153840-1188210469-1.jpg",
        description:
          "Adventures of Ned Bigby with his best friends Moze and Cookie at James K. Polk Middle School in California. Ned shares tips and tricks on navigating middle school or junior high hurdles. Any teen problem you can think of... Ned has a solution to surviving it.",
        seasons: 3,
        active: false,
        userId: meg.id,
      },
      {
        title: "Philbert",
        platform: "What Time Is It Right Now?",
        image: "https://pbs.twimg.com/media/DlynumsXoAIHgP3.jpg",
        description:
          "It's about Detective John Philbert, a man from another time. But now he finds himself in a new time. He finds himself in a time he doesn't understand. A time in which he is alone. Perhaps, all this time, he's been alone.",
        seasons: 1,
        active: false,
        seen: true,
        userId: meg.id,
      },
    ];

    const [
      seinfeld,
      bojackHorseman,
      serialKillers,
      friends,
      tucaAndBertie,
      horsinAround,
      angryBeavers,
      nedsDeclassified,
      philbert,
    ] = await Series.bulkCreate(series);
    console.log(magenta("high quality tv snacks are nigh..."));

    const movies = [
      {
        title: "Hunchback of Notre Dame",
        platform: "Disney+",
        image: "https://flxt.tmsimg.com/assets/p18139_p_v10_ab.jpg",
        description:
          "An animated Disney adventure follows disfigured Quasimodo (Tom Hulce), the bell-ringer of Notre Dame Cathedral, who bides his time locked away in a tower. With only gargoyles to keep him company, Quasimodo longs to be with other people, leading to his chance encounter with the enchanting Gypsy Esmeralda (Demi Moore). When the beautiful young woman catches the attention of Quasimodo's guardian, sinister Frollo (Tony Jay), Quasimodo must help to keep her out of his clutches.",
        year: 1996,
        rating: "G",
        runtime: 91,
        seen: true,
        userId: meg.id,
      },
      {
        title: "Cats Don't Dance",
        platform: "VCR",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/7140iCyCgwL._SL1000_.jpg",
        description:
          "A world of cats and Danny (Scott Bakula) is trying to break into '30s Hollywood. His only problem is that he's a cat and he can't understand why he's only getting parts playing an animal. He gets into trouble with a human star and almost sees his chance at a movie career disappear.",
        year: 1997,
        rating: "G",
        runtime: 89,
        seen: true,
        userId: meg.id,
      },
      {
        title: "Space Jam",
        platform: "HBO",
        image:
          "https://summerofthearts.org/wp-content/uploads/Space-Jam-534x800.jpg",
        description:
          "Swackhammer (Danny DeVito), an evil alien theme park owner, needs a new attraction at Moron Mountain. When his gang, the Nerdlucks, heads to Earth to kidnap Bugs Bunny (Billy West) and the Looney Tunes, Bugs challenges them to a basketball game to determine their fate. The aliens agree, but they steal the powers of NBA basketball players, including Larry Bird (Larry Bird) and Charles Barkley (Charles Barkley) -- so Bugs gets some help from superstar Michael Jordan (Michael Jordan).",
        year: 1996,
        rating: "PG",
        runtime: 88,
        seen: true,
        userId: meg.id,
      },
      {
        title: "Shrek",
        platform: "Hulu",
        image:
          "https://img2.hulu.com/user/v3/artwork/36c01be2-e036-46d9-9da2-522bfd12b54f?base_image_bucket_name=image_manager&base_image=9a05a03d-c56f-450a-b595-38381403835e&size=1200x630&format=jpeg",
        description: "The greatest love story of all time.",
        year: 2001,
        rating: "PG",
        runtime: 95,
        seen: true,
        userId: meg.id,
      },
      {
        title: "Promising Young Woman",
        platform: "Rent",
        image:
          "https://saportakinsta.s3.amazonaws.com/wp-content/uploads/2021/01/PYWevent.jpg",
        description:
          "Nothing in Cassie's life is what it appears to be -- she's wickedly smart, tantalizingly cunning, and she's living a secret double life by night. Now, an unexpected encounter is about to give Cassie a chance to right the wrongs from the past.",
        year: 2020,
        rating: "R",
        runtime: 114,
        userId: meg.id,
      },
      {
        title: "Judah and the Black Messiah",
        platform: "Rent",
        image:
          "https://static.metacritic.com/images/products/movies/9/b95c84d2a2f9832a98c0d17dd2a8825d.jpg",
        description:
          "Offered a plea deal by the FBI, William O'Neal infiltrates the Illinois chapter of the Black Panther Party to gather intelligence on Chairman Fred Hampton.",
        year: 2021,
        rating: "R",
        runtime: 126,
        userId: meg.id,
      },
      {
        title: "Cats",
        platform: "Hulu",
        image:
          "https://upload.wikimedia.org/wikipedia/en/c/cf/Cats_2019_poster.jpg",
        description:
          "A tribe of cats must decide yearly which one will ascend to the Heaviside Layer and come back to a new life.",
        year: 2019,
        rating: "PG",
        runtime: 110,
        userId: meg.id,
      },
    ];

    const [
      hunchback,
      catsDontDance,
      spaceJam,
      shrek,
      promisingYoungWoman,
      judahBlackMessiah,
      absoluteTrash,
    ] = await Movie.bulkCreate(movies);
    console.log(yellow("get yer popcorn..."));
  } catch (err) {
    console.error(err);
  }
};

const runSeed = async () => {
  console.log(green("planting some tasty seeds..."));
  try {
    await seed();
  } catch (err) {
    console.error(red("well, this is embarrasing."));
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log(magenta("closing DB doors!"));
    await db.close();
    console.log(blueBright("OKAY GOOGLE MAKE THE LIGHTS FUCHSIA"));
  }
};

if (require.main === module) {
  runSeed();
}

module.exports = seed;
