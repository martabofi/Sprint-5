import styled from "styled-components";

export const Dot = styled.button`
height: ${props => props.active ? '8px' : '10px'};;
width: ${props => props.active ? '20px' : '10px'};
border: none;
margin: 0 4px;
text-align: right;
place-items: right;
align-items: right;
align-content: right;
justify-content: right;
border-radius: 30px;
background-color: ${props => props.active ? '#333' : '#d3d3d3'};
margin-bottom: 5px;
display: inline-block;
cursor: pointer;
`

export const IndicatorDiv = styled.div`

`

const Indicator = ({ totalSteps, steps, onClick }) => {

    return (
        <>
            <IndicatorDiv>
                {Array.from({ length: totalSteps }).map((_, index) => (
                    <Dot
                        key={index}
                        active={index === steps}
                        onClick={() => onClick(index)}
                    />
                ))}
            </IndicatorDiv>
        </>
    )
}

export default Indicator;