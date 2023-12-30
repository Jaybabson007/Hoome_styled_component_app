import { Container, Row } from "../../GlobalStyle";
import Button from "../button/Button";
import { HeroWrapper } from "./HeroStyle";
import img from "./../../assets/hero-img.png";
import Marquee from "react-fast-marquee";
import star from "./../../assets/star.svg";


const Hero = () => {
    return (
        <HeroWrapper>
            <Container>
                <Row>
                    <div>
                        <h1>DESIGN YOUR DREAM HOME</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Eu scelerisque accumsan,
                            a vestibulum eget velit.
                        </p>
                        <Button>Explore Gallery</Button>
                    </div>
                    <div>
                        <img src={img} width="100%"/>
                    </div>
                </Row>
            </Container>
            <Marquee className="marq">
                <span className="text">modern design</span>
                <img src={star} width="100"/>
                <span className="text">modern design</span>
                <img src={star} width="100"/>
            </Marquee>
        </HeroWrapper>
    );
};

export default Hero;