import room1 from "../assets/img/jpeg/details-1.jpeg";
import room2 from "../assets/img/jpeg/details-2.jpeg";
import room3 from "../assets/img/jpeg/details-3.jpeg";
import room4 from "../assets/img/jpeg/details-4.jpeg";
import img1 from "../assets/img/jpeg/room-1.jpeg";
import img2 from "../assets/img/jpeg/room-2.jpeg";
import img3 from "../assets/img/jpeg/room-3.jpeg";
import img4 from "../assets/img/jpeg/room-4.jpeg";
import img5 from "../assets/img/jpeg/room-5.jpeg";
import img6 from "../assets/img/jpeg/room-6.jpeg";
import img7 from "../assets/img/jpeg/room-7.jpeg";
import img8 from "../assets/img/jpeg/room-8.jpeg";
import img9 from "../assets/img/jpeg/room-9.jpeg";
import img10 from "../assets/img/jpeg/room-10.jpeg";
import img11 from "../assets/img/jpeg/room-11.jpeg";
import img12 from "../assets/img/jpeg/room-12.jpeg";

const data = [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "Bassi Show",
      slug: "Bassi Show",
      type: "",
      price: 400,
      size: 200,
      capacity:200,
      pets: false,
      featured: false,
      duration:"2 hours",
      description:
      "Join us for the Culinary Collective, a street food extravaganza featuring gluten-free artisanal bites and craft brew tastings in a hipster haven. Experience farm-to-table freshness with vegan tacos, local cheeses, and vintage decor, all under one roof. Enjoy live music, interactive cooking demos, and a celebration of culinary creativity in the heart of the city. Admission is free, with food tokens available for purchase, so come for the food and stay for the vibrant community spirit!",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "Leisure Games",
      slug: "Leisure Games",
      type: "single",
      price: 150,
      capacity:600,
      pets: false,
      featured: false,
      duration:"6 hours",
      description:
      "Leisure Games: Enjoy a relaxing yet engaging experience with our selection of leisure games designed for all ages. From classic board games and strategic card games to mind-bending puzzles and interactive challenges, these games are perfect for unwinding and connecting with friends or family. Whether you're looking to spark friendly competition or simply pass the time in good company, leisure games offer a delightful mix of fun, relaxation, and casual entertainment that everyone can enjoy. Dive into an atmosphere of easygoing fun and rediscover the joy of play!",
      extras: [
        "Variety of classic and modern board games",
        "Complimentary snacks and refreshments",
        "Comfortable seating areas for relaxed gameplay",
        "Guided instructions for new games",
        "Exclusive access to premium game selections",
        "On-site game assistants for setup and guidance",
        "Take-home game scorecards and small prizes"
      ],
      images: [
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "Public Spectacle",
      slug: "Public Spectacle",
      type: "single",
      price: 250,
      capacity:400,
      pets: true,
      featured: false,
      duration:"6 hours",
      description:
      "A public spectacle brings art and entertainment to life on the streets, with performances like street theater, live music, dance acts, and unique art installations. These events transform everyday spaces into vibrant stages, inviting people to pause, watch, and feel part of the shared energy. From acrobatic displays to spoken word, public spectacles turn ordinary surroundings into moments of wonder and community connection right in the heart of the city.",
      extras: [
        "Interactive street art installations",
        "Free snack and drink stalls",
        "Reserved viewing areas for early attendees",
        "Live artist meet-and-greet sessions",
        "Immersive sound and lighting effects",
        "Street guides and event staff for assistance",
        "Pop-up photo booths and collectible memorabilia"
      ],
      images: [
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "Samay Show",
      slug: "Samay Show",
      type: "single",
      price: 300,
      capacity: 500,
      pets: true,
      featured: false,
      duration:"2 hours",
      description:
      "Join us for an evening of laughter with comedian Samay Raina! Known for his relatable humor and sharp wit, Samay blends observational comedy and storytelling that resonates with all audiences. His knack for finding humor in everyday situations makes for a hilarious and engaging performance. Don’t miss the chance to see this rising star live, as he delivers fresh jokes that will leave you laughing long after the show ends. Get ready for a night filled with joy and connection through the comedic genius of Samay Raina!",
      extras: [
        "Exclusive meet-and-greet with Samay",
        "Complimentary snacks and beverages",
        "Priority seating for early arrivals",
        "Engaging audience interaction segments",
        "Professional sound and lighting setup",
        "On-site event staff for assistance",
        "Memorabilia and merchandise available"
      ],
      images: [
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "Carnival Spectacle",
      slug: "Carnival Spectacle",
      type: "double",
      price: 100,
      capacity: 200,
      pets: false,
      duration:"3 hours",
      featured: false,
      description:
      "A carnival spectacle is a lively celebration filled with color and energy, captivating audiences of all ages. This event features a mix of performances, including acrobats, clowns, and live musicians, creating an immersive and joyful atmosphere. With dazzling costumes, interactive games, and delicious food stalls, attendees can enjoy a feast for the senses. Whether experiencing thrilling rides or watching breathtaking acts, a carnival spectacle promises an unforgettable experience that fosters connection and excitement within the community.",
      extras: [
        "Colorful carnival games and prizes",
        "Delicious food stalls with a variety of treats",
        "Live performances and entertainment",
        "Interactive photo booths with props",
        "Face painting and balloon animals for kids",
        "Seating areas with shade for relaxation",
        "Free admission for children under a certain age"
      ],
      images: [
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "Puppet Spectacle",
      slug: "Puppet Spectacle",
      type: "double",
      price: 250,
      duration:"2 hours",
      capacity:200,
      pets: false,
      featured: false,
      description:
      "A puppet spectacle is a captivating performance that showcases the artistry of puppetry, bringing stories to life through a variety of puppets, from marionettes to hand puppets. With colorful sets and imaginative themes, these shows engage audiences of all ages, transporting them into whimsical worlds filled with humor and creativity. Skilled puppeteers weave emotion and interactive elements into the performance, inviting the audience to be part of the experience. Whether it’s a classic tale or an original story, a puppet spectacle promises a delightful journey filled with laughter and wonder.",
      extras: [
        "Colorful puppet displays and interactive stations",
        "Complimentary snacks and beverages",
        "Seating areas with great views of the performance",
        "Meet-and-greet with puppeteers after the show",
        "Craft stations for kids to make their own puppets",
        "Themed merchandise and souvenirs available",
        "Face painting and fun activities for children"
      ],
      images: [
        {
          fields: {
            file: {
              url: img6,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "7",
    },
    fields: {
      name: "Sky Spectacle",
      slug: "Sky Spectacle",
      type: "double",
      price: 300,
      capacity:200,
      duration:"8 hours",
      pets: true,
      featured: false,
      description:
      "A sky spectacle is an enchanting event that showcases the beauty of kites soaring against clear blue skies. This vibrant celebration features a dazzling array of kites in various shapes and colors, with skilled flyers performing impressive aerial maneuvers. Families and friends can join in the fun with hands-on activities like kite-making workshops and friendly competitions. Whether you’re watching from the ground or flying your own kite, a sky spectacle offers a joyful experience filled with creativity and the magic of flight.",
      extras: [
        "Vibrant kite displays and aerial performances",
        "Complimentary refreshments and snacks",
        "Designated viewing areas for optimal sky views",
        "Interactive kite-making sessions for all ages",
        "Exciting competitions with prizes for participants",
        "Photo ops with larger-than-life kites",
        "Merchandise stalls featuring sky-themed souvenirs"
      ],
      images: [
        {
          fields: {
            file: {
              url: img7,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "8",
    },
    fields: {
      name: "Games Fest",
      slug: "Games Fest",
      type: "double",
      price: 400,
      capacity: 200,
      pets: true,
      duration:"8 hours",
      featured: true,
      description:
      "Experience a pixelated paradise filled with controller clicks and neon lights, where local talent showcases the latest in gaming and eSports. It’s a vibrant celebration of competition and creativity, with tournaments that spark excitement and indie games waiting to be discovered. Craft snacks and energy drinks fuel the fun, while chill zones with retro consoles offer a place to unwind between matches. This event brings together gamers in a social hub celebrating community and culture through the joy of gaming. Don’t miss out—this is the ultimate gathering where legends are made!",
      extras: [
        "Gaming stations with the latest consoles",
        "High-speed Wi-Fi for online play",
        "Complimentary energy drinks and snacks",
        "Exclusive game demos and previews",
        "On-site tech support",
        "Chill-out zones with retro gaming setups",
        "Merchandise giveaways and prizes"
      ],
      images: [
        {
          fields: {
            file: {
              url: img8,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "9",
    },
    fields: {
      name: "Magic Spectacle",
      slug: "Magic Spectacle",
      type: "family",
      price: 300,
      capacity:300,
      pets: false,
      duration:"3 hours",
      featured: false,
      description:
      "A magic show is an enchanting performance that captivates audiences with a mix of illusion and mystery. Skilled magicians showcase a variety of mind-boggling tricks and breathtaking illusions, leaving spectators in awe. The atmosphere is filled with excitement as audience members are often invited to participate, adding to the thrill. Whether it’s a classic card trick or an astonishing escape act, a magic show promises an unforgettable experience that sparks wonder and imagination in everyone.",
      extras: [
        "Mystical ambiance with enchanting decor",
        "Complimentary snacks and drinks",
        "Seating with great views of the stage",
        "Interactive magic workshops for kids",
        "Souvenir programs and merchandise",
        "Meet-and-greet opportunities with the magician",
        "Photo ops with magical props and illusions"
      ],
      images: [
        {
          fields: {
            file: {
              url: img9,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "10",
    },
    fields: {
      name: "Poetry Slam",
      slug: "Poetry Slam",
      type: "family",
      price: 350,
      capacity:400,
      pets: false,
      duration:"2 hours",
      featured: false,
      description:
      "A poetry slam is an energetic event that showcases the art of spoken word. Poets take the stage to perform their original pieces, sharing powerful verses that resonate with emotions and personal experiences. The atmosphere is lively, with judges scoring the performances, adding an element of friendly competition. Poetry slams create a sense of community, inviting both poets and audiences to connect through language and expression. Whether you're a seasoned poet or a newcomer, a poetry slam promises an inspiring evening filled with creativity and the transformative power of words.",
      extras: [
        "Comfortable seating for a relaxed vibe",
        "Complimentary refreshments and light snacks",
        "Open mic slots for spontaneous performances",
        "Printed programs showcasing all participants",
        "Quality sound system for clear delivery",
        "Meet-and-greet sessions with performers",
        "Merchandise stalls with poetry books and art"
      ], 
      images: [
        {
          fields: {
            file: {
              url: img10,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "11",
    },
    fields: {
      name: "Fable Fest",
      slug: "Fable Fest",
      type: "family",
      price: 400,
      capacity:500,
      pets: false,
      featured: false,
      description:
      "Fable Fest is an engaging storytelling event that immerses audiences in a world of captivating tales. Featuring talented storytellers, the festival showcases a mix of classic fables and modern interpretations, each brought to life through expressive performances. Attendees can connect with the stories and one another, fostering a sense of community. Whether you’re a fan of timeless tales or new to storytelling, Fable Fest offers a memorable experience filled with inspiration and the magic of words.",
      extras: [
        "Comfortable seating for an immersive experience",
        "Complimentary snacks and beverages",
        "Interactive storytelling sessions for all ages",
        "Printed programs featuring participating storytellers",
        "Ambient lighting for a cozy atmosphere",
        "Meet-and-greet opportunities with the storytellers",
        "Merchandise stalls with books and storytelling resources"
      ],
      images: [
        {
          fields: {
            file: {
              url: img11,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "12",
    },
    fields: {
      name: "DJ Night",
      slug: "DJ Night",
      type: "DJ", 
      price: 500,
      duration:"5 hours",
      capacity: 600,
      featured: true,
      pets: false,
      description:
      "Join us for an electrifying evening filled with neon lights and bass drops, as local talent takes the stage to spin deep house beats and hip-hop flows. Experience the vibrant energy of the crowd, moving to the rhythm with glow sticks in hand and craft cocktails fueling the night. Chill zones with retro vibes offer a perfect escape to catch your breath between sets. With an atmosphere rich in music, community, and culture, this is not just a party—it’s an unforgettable experience. Don’t miss out—this is the night to be seen!",
      extras: [
        "VIP lounge access",
        "Glow sticks and party favors",
        "Complimentary drink samples",
        "Chill-out zones with cozy seating",
        "Photo booth with props",
        "On-site security",
        "Exclusive merch giveaways"
      ],
      images: [
        {
          fields: {
            file: {
              url: img12,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "13",
    },
    fields: {
      name: "Food Fair",
      slug: "Food Fair",
      type: "local_event",
      price: 200,
      capacity: 200,
      pets: true,
      duration:"4 hours",
      featured: true,
      description:
      "Join us for the Culinary Collective, a street food extravaganza featuring gluten-free artisanal bites and craft brew tastings in a hipster haven. Experience farm-to-table freshness with vegan tacos, local cheeses, and vintage decor, all under one roof. Enjoy live music, interactive cooking demos, and a celebration of culinary creativity in the heart of the city. Admission is free, with food tokens available for purchase, so come for the food and stay for the vibrant community spirit!", 
      extras: [
        "Local artisan food samples",
        "Live cooking demonstrations",
        "Complimentary drink tastings",
        "Interactive food workshops",
        "Ample seating areas",
        "Family-friendly activities",
        "Access to local vendor booths"
      ],
      images: [
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
];

export default data;
