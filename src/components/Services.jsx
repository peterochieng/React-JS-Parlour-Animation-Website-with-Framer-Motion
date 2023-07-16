import React from "react";
import styled from "styled-components";
import service1 from "assets/service1.png";
import service2 from "assets/service2.png";
import service3 from "assets/service3.png";
import play from "assets/play.png";
import Title from "./Title";
import { useScroll } from "components/useScroll";
import { motion } from "framer-motion";
import { servicesAnimations } from "animation";

function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "Waxing",
      text: (
        <ul>
          <li>Under Arms</li> <li>Full Leg </li> <li>Bikini</li>{" "}
          <li>Brazilian</li> <li>Chin</li> <li>Chest</li>{" "}
        </ul>
      ),
      image: service1,
    },
    {
      type: "Massage",
      text: (
        <ul>
          <li>Swedish</li> <li>Deep tissue </li> <li> Hot stone massage</li>{" "}
          <li>Back and Shoulder Massage </li>{" "}
        </ul>
      ),
      image: service2,
    },
    {
      type: "Body Scrub",
      text: (
        <ul>
          <li>Coffee Scrub </li> <li>Herbal-Turmeric full body Scrub </li>{" "}
        </ul>
      ),
      image: service3,
    },
    {
      type: "Facials",
      text: (
        <p style={{ textAlign: "justify" }}>
          To treat and prevent stubborn acne, shrink enlarged pores, reduce the
          appearance of fine lines and wrinkles, decongest puffy eyes, fade dark
          eye circles and even rejuvenate the condition of the skin and nourish
          for healthier skin.
        </p>
      ),
      heading: <h3>High Frequency Facial </h3>,
      image: service1,
    },
    {
      type: "Facials",
      text: (
        <p style={{ textAlign: "justify" }}>
          An anti-age care experience that treats wrinkles, skin slackening and
          loss of radiance. This sensory delight allies Supreme Juenesse Masque
          with Vitamin C and Hylauronic Acid to deliver incredible results. A
          signature massage of the face, scalp, neck, hands and feet will leave
          you completely restored and serene.
        </p>
      ),
      heading: <h3>Perfect experience (60mins) </h3>,
      image: service2,
    },
    {
      type: "Facials",
      text: (
        <p style={{ textAlign: "justify" }}>
          This facial contains a powerful antioxidant mask enriched with a
          cocktail of super fruits to help improve circulation & brighten the
          skin. Your skin will be instantly luminous. Includes a 15–20-minute
          face, neck & massage
        </p>
      ),
      heading: <h3>Azalea Spa Signature Facial 1 hour </h3>,
      image: service3,
    },
    {
      type: "Facials",
      text: (
        <p style={{ textAlign: "justify" }}>
          A delightful mini treat for those on the go. Includes deep cleansing
          treatment, exfoliation and clarifying mask.
        </p>
      ),
      heading: <h3>Booster Facial (30 min) </h3>,
      image: service1,
    },
    {
      type: "Facials",
      text: (
        <p style={{ textAlign: "justify" }}>
          Improve your skin with this super charged facial including a deep
          cleanse, exfoliation, steam and extractions to clear, renew, hydrate
          and tone
        </p>
      ),
      heading: <h3>Teen Power Facial – 30mins </h3>,
      image: service2,
    },
    {
      type: "Facials",
      text: (
        <p style={{ textAlign: "justify" }}>
          A man’s face is their own unique brand, their business card. Looking
          fresh and invigorated sends out signals of strength, confidence, and
          high self esteem to the world.{" "}
        </p>
      ),
      heading: <h3>Deep Cleansing Facial for Him (45min) </h3>,
      image: service3,
    },
  ];
  return (
    <Section id="services" ref={element}>
      <Title value="services" />
      <div className="services__Details">
        <p>
          we are committed to offering bespoke services designed to replenish
          your skin, mind and body, making your visit particularly blissful. We
          believe that your wellbeing is an essential element to strengthen the
          bonds in your relationships and inspire the people you love
          positively. To achieve this, we’ve thoughtfully chosen a collection of
          high-quality modalities to deeply nourish and detoxify your skin,
          uplift your mood and mindfulness to encourage harmony, rejuvenation,
          and cellular renewal. A perfect blend of anti ageing and well-being
          solutions tailored specifically for you.
        </p>
      </div>
      <div className="services">
        {data.map(({ type, text, image, heading }, index) => {
          return (
            <motion.div
              className="services__service"
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
              <div className="services__service__image">
                <img src={image} alt="Service" />
              </div>
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{type}</h2>
              </div>
              <h3>{heading}</h3>
              <p className="services__service__description">{text}</p>
              <img src={play} alt="Readmore" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .services__Details {
    display: flex;
    align-items: center;
    margin: 6.88rem auto;
    p {
      text-align: justify;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    margin: 0 14rem;
    margin-top: 10rem;
    gap: 5rem;
    &__service {
      padding: 2rem;
      &:nth-of-type(2),
      &:nth-of-type(5),
      &:nth-of-type(8) {
        background-color: var(--primary-color);
        color: #fff;
        .services__service__title {
          span {
            color: #fff;
          }
        }
        .services__service__description {
          color: #fff;
        }
      }
      &__image {
        margin-bottom: 3rem;
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--secondary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 0 2rem;
    }
  }
`;

export default Services;
