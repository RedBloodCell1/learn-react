import React, { useState, useEffect } from "react";

const Tour = () => {
  var places = [
    {
      id: "rec6d6T3q5EBIdCfD",
      name: "Best of Paris in 7 Days Tour",
      info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
      image:
        "https://i.ytimg.com/an_webp/b6ozunDfahc/mqdefault_6s.webp?du=3000&sqp=CJO_q6QG&rs=AOn4CLDu7rXzCx9whG3eUbU7vVng5KQaQg",
      price: "1,995",
      hide: true,
    },
    {
      id: "recIwxrvU9HfJR3B4",
      name: "Best of Ireland in 14 Days Tour",
      info: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
      image:
        "https://i.ytimg.com/an_webp/b6ozunDfahc/mqdefault_6s.webp?du=3000&sqp=CJO_q6QG&rs=AOn4CLDu7rXzCx9whG3eUbU7vVng5KQaQg",
      price: "3,895",
      hide: true,
    },
    {
      id: "recJLWcHScdUtI3ny",
      name: "Best of Salzburg & Vienna in 8 Days Tour",
      info: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
      image:
        "https://i.ytimg.com/an_webp/b6ozunDfahc/mqdefault_6s.webp?du=3000&sqp=CJO_q6QG&rs=AOn4CLDu7rXzCx9whG3eUbU7vVng5KQaQg",
      price: "2,695",
      hide: true,
    },
    {
      id: "recK2AOoVhIHPLUwn",
      name: "Best of Rome in 7 Days Tour",
      info: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
      image:
        "https://i.ytimg.com/an_webp/b6ozunDfahc/mqdefault_6s.webp?du=3000&sqp=CJO_q6QG&rs=AOn4CLDu7rXzCx9whG3eUbU7vVng5KQaQg",
      price: "2,095",
      hide: true,
    },
    {
      id: "receAEzz86KzW2gvH",
      name: "Best of Poland in 10 Days Tour",
      info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
      image:
        "https://i.ytimg.com/an_webp/b6ozunDfahc/mqdefault_6s.webp?du=3000&sqp=CJO_q6QG&rs=AOn4CLDu7rXzCx9whG3eUbU7vVng5KQaQg",
      price: "2,595",
      hide: true,
    },
  ];
  //   const url = "https://www.course-api.com/react-tours-project";

  const [tour, setTour] = useState([]);
  //   const [hide, setHide] = useState(true);

  //   const getTours = async () => {
  //     const response = await fetch(url);
  //     const tours = await response.json();
  //     setTour(tours);
  //     console.log(tours);
  //   };

  const deleteTour = (id) => {
    const notDeletedPlaces = tour.filter((place) => place.id !== id);
    setTour(notDeletedPlaces);
  };

  const hideTour = (id) => {
    let tempArr = [...tour];
    const index = tour.findIndex((obj) => obj.id === id);
    tempArr[index].hide = !tempArr[index].hide;
    // console.log(tempArr);

    setTour(tempArr);
  };

  const refreshHandler = () => {
    setTour(places);
  };

  useEffect(() => {
    setTour(places);
    // console.log(places);
  }, []);

  if (tour.length === 0) {
    return (
      <>
        <h1>No More Tours</h1>
        <button className="button" onClick={refreshHandler}>
          Refresh
        </button>
      </>
    );
  }

  return (
    <>
      <div>
        <h1>Our Tours</h1>
        <ul className="users">
          {tour.map((place) => {
            const { id, name, info, image, price, hide } = place;
            return (
              <li key={id}>
                <div>
                  <img
                    src={image}
                    alt={name}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "100%",
                    }}
                  />
                  <h5>{name}</h5>
                  <h4>Only For: ${price}</h4>
                  <h6>
                    {info.slice(0, info.length / 2)}
                    {hide && "..."}
                    {hide && <h4 onClick={() => hideTour(id)}>Read More</h4>}
                    {hide || info.slice(info.length / 2, info.length)}
                    {hide || <h4 onClick={() => hideTour(id)}>Show Less</h4>}
                  </h6>
                  {/* <button className="button" onClick={() => hideTour(id)}>
                    Read More
                  </button> */}
                  <button className="btn" onClick={() => deleteTour(id)}>
                    Not Interested
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Tour;
