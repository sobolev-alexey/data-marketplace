import React from 'react';
import styled from 'styled-components';

const sensors = [
  {
    alt: 'Netatmo Weather Station',
    logo: '/static/icons/proof_of_concept/logos/netatmo.png',
    link: 'https://www.netatmo.com/en-US/product/weather/',
  },
  {
    alt: 'Bosch XDK',
    logo: '/static/icons/proof_of_concept/logos/bosch.png',
    link: 'https://xdk.bosch-connectivity.com',
  },
  {
    alt: 'Nordic Semiconductor Thingy:52',
    logo: '/static/icons/proof_of_concept/logos/nordic.png',
    link: 'http://www.nordicsemi.com/eng/Products/Nordic-Thingy-52',
  },
  {
    alt: 'Or simple Raspberry Pi’s, with a sensor kit',
    logo: '/static/icons/proof_of_concept/logos/adafruit.png',
    link: 'https://www.adafruit.com/product/2733',
  },
];

export default class ExampleSensors extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.anchor) {
      const target = document.querySelector(`#${nextProps.anchor}`);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  render() {
    const {
      content: { id, title, text },
    } = this.props;
    return (
      <SensorsWrapper id={id || null}>
        <OuterWrapper>
          <InnerWrapper>
            <TextWrapper>
              <Title>{title}</Title>
              <p>{text}</p>
            </TextWrapper>

            <Sensors>
              <SensorsListTitle>Example Sensors to utilize:</SensorsListTitle>
              <SensorsListWrapper>
                {sensors.map(({ alt, link, logo }) => (
                  <a href={link} key={alt}>
                    <IMG src={logo} alt={alt} />
                  </a>
                ))}
              </SensorsListWrapper>
            </Sensors>
          </InnerWrapper>
        </OuterWrapper>
      </SensorsWrapper>
    );
  }
}

const SensorsWrapper = styled.section`
  background-image: linear-gradient(to bottom, #f1f6f9, #eaf0f4);
  margin: 30px 0 60px;
  transform: skewY(2deg);
`;

const OuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transform: skewY(-2deg);
  padding: 10px 0 30px;
`;

const InnerWrapper = styled.div`
  max-width: 724px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: row;
  padding: 20px;
  font-size: 17px;
  line-height: 32px;
  color: #4e5a61;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;

const SensorsListTitle = styled.p`
  font-size: 22px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.45;
  letter-spacing: normal;
  text-align: left;
  color: #292929;
  text-align: center;
`;

const Sensors = styled.div`
  background-image: url('/static/shapes/proof_of_concept/shape-2.svg');
  background-repeat: no-repeat;
  background-size: 120%;
  background-position-x: -40px;
  background-position-y: -35px;
  margin-top: 70px;
  width: 50%;

  @media (max-width: 650px) {
    background-size: 113%;
    background-position-x: -30px;
    background-position-y: -5px;
  }

  @media (max-width: 580px) {
    width: 100%;
    margin-top: 20px;
    background-size: 400px 339px;
    background-position-x: center;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SensorsListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 110%;
  margin-top: 60px;

  @media (max-width: 710px) {
    margin-top: 20px;
    justify-content: center;
  }

  @media (max-width: 580px) {
    margin-top: 70px;
    width: 80%;
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-right: 10px;

  @media (max-width: 580px) {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #009fff;
  text-align: left;
  padding-bottom: 35px;
`;

const IMG = styled.img`
  width: 100px;
  margin: 10px;
`;
