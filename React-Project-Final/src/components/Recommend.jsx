import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import Destination7 from "../assets/Destination7.png";
import Destination8 from "../assets/Destination8.png";
import Destination9 from "../assets/Destination9.png";
import Destination10 from "../assets/Destination10.png";
import Destination11 from "../assets/Destination11.png";
import Destination12 from "../assets/Destination12.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {


  const data = [
    {
      
      image: Destination1,
      title: "Thirumala",
      subTitle: "Surrounding the hills are seven peaks of Seshachalam range, Eastern Ghats",
      cost: "2667",
      duration: "Approx 12 hrs trip",
    },
    {
      
      image: Destination2,
      title: "Munnar Hill Station",
      subTitle: "Escape to the verdant hills and tea plantations of Munnar, a haven for nature lovers.",
      cost: "600",
      duration: "Approx 6 hrs trip",
    },
    {
      image: Destination4,
      title: "Mysore Palace",
      subTitle: "Witness the architectural grandeur of the majestic Mysore Palace, a testament to royal heritage.",
      cost: "999",
      duration: "12 hrs",
    },
    {
      image: Destination3,
      title: "Kerala Backwaters",
      subTitle: "Glide through a maze of serene waterways amidst picturesque landscapes in Kerala.",
      cost: "500",
      duration: "3hrs 40mins",
    },
    {
      image: Destination5,
      title: "Alappuzha Beach",
      subTitle: "Relax on the scenic Alappuzha Beach, renowned for its golden sand and laid-back atmosphere.",
      cost: "600",
      duration: "4hrs 30mins",
    },
    {
      image: Destination7,
      title: "Kodaikanal Hill Station",
      subTitle: "Unwind in the cool climes of Kodaikanal, a picturesque hill station amidst scenic valleys.",
      cost: "700",
      duration: "5 hrs",
    },
    {
      image: Destination6,
      title: "Ooty in the Nilgiris",
      subTitle: "Travel through the scenic toy train ride and marvel at the breathtaking mountains of Ooty.",
      cost: "377",
      duration: "30 mins",
    },
    {
      image: Destination8,
      title: "Chettinad Villages",
      subTitle: "Immerse yourself in the rich culture and heritage of the vibrant Chettinad villages.",
      cost: "999",
      duration: "7 hrs",
    },
    {
      image: Destination9,
      title: "Periyar Tiger Reserve",
      subTitle: "Go on a wildlife safari and spot tigers, elephants, and other exotic animals in Periyar.",
      cost: "1000",
      duration: "8 hrs",
    },
    {
      image: Destination10,
      title: "Kanyakumari Sunset",
      subTitle: "Witness the spectacular sunset where the Arabian Sea, Bay of Bengal, and Indian Ocean meet.",
      cost: "1200",
      duration: "8 hrs 30 mins",
    },
    {
      image: Destination11,
      title: "Mahabalipuram Temples",
      subTitle: "Marvel at the ancient Pallava Dynasty cave temples sculpted from monolithic rock in Mahabalipuram.",
      cost: "999 ",
      duration: "6 hrs",
    },
    {
      image: Destination12,
      title: "Pondicherry ",
      subTitle: "Explore the charming French colonial architecture and vibrant cafes in Pondicherry.",
      cost: "1050",
      duration: "6hrs",
    },
  ];
      
  

  const packages = [
    "Regular train",
    "AC Sleeper",
    "Regular Sleeper",
    "AC Seater",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
