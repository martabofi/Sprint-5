import styled, { keyframes } from "styled-components";
import Indicator from './Indicator.jsx'

export const Article = styled.article`
width: 300px;
height: 600px;
margin: 0 auto;
border-radius: 30px;
font-family: "Montserrat", 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
background-color: white;
`

export const BgColor = styled.div`
border-top-right-radius: 30px;
border-top-left-radius: 30px;
height: 350px;
text-align: center;
place-items: center;
align-items: center;
align-content: center;
justify-content: center;
`

export const Image = styled.img`
border-top-right-radius: 30px;
border-top-left-radius: 30px;
margin-right: 20px;
margin-left: 20px;
width: 250px;
height: 300px;
animation: ${props => props.prevStep ? slideRight : slideLeft} 0.5s ease both;
`

export const TextArea = styled.div`
text-align: left;
`

export const Header = styled.h1`
font-size: 16px;
color: #333;
`

export const Text = styled.p`
font-size: 12px;
line-height: 20px;
font-weight: light;
color: #737373;
`

export const ButtonArea = styled.div`
margin: 0 2;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
place-items: center;
align-content: center;
`

export const Button = styled.button`
border: 1px solid #333;
border-radius: 100px;
background-color: white;
color: #333;
width: 50px;
height: 50px;
text-align: center;
place-items: center;
align-items: center;
align-content: center;
justify-content: center;
font-size: 18px;
margin-right: 10px;
cursor: pointer;
`;

export const Button2 = styled.button`
background-color: #333;
border-radius: 100px;
color: white;
border: none;
width: 50px;
height: 50px;
text-align: center;
place-items: center;
align-items: center;
align-content: center;
justify-content: center;
font-size: 18px;
cursor: pointer;
`;

export const BodyArea = styled.div`
display: flex;
flex-direction: column;
padding: 20px 20px;
`

const slideLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
  }
`;


function Card({ title, description, next, image, bgColor, prev, steps, totalSteps, setStep }) {

    const dotClick = (clickedStep) => {
        setStep(clickedStep);
    }

    return (
        <>
            <Article>
                <BgColor style={{ backgroundColor: bgColor }}>
                    <Image src={image} prevStep={prev}/>
                </BgColor>
                <BodyArea>
                    <TextArea>
                        <Header>{title}</Header>
                        <Text>{description}</Text>
                    </TextArea>
                    <ButtonArea>
                        <Indicator
                            steps={steps}
                            totalSteps={totalSteps}
                            onClick={dotClick}
                        />
                        {steps === 0 && (
                            <Button2 onClick={next}>🡢</Button2>
                        )}      {steps > 0 && steps < totalSteps - 1 && (
                            <div>
                                <Button onClick={prev}>🡠</Button>
                                <Button2 onClick={next}>🡢</Button2>
                            </div>
                        )}
                        {steps === totalSteps - 1 && (
                            <Button onClick={prev}>🡠</Button>
                        )}
                    </ButtonArea>
                </BodyArea>
            </Article>
        </>
    )
}

export default Card;