import { useState } from 'react'
import './App.css'
import Card from './Card.jsx'
import Indicator from './Indicator.jsx'
import timeImage from './assets/time_managment.svg'
import meditationImage from './assets/meditation.svg'
import programmingImage from './assets/programming.svg'

function App() {

  const tutorialData = [
    {
      title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.",
      bgColor: "#4da2a9",
      image: timeImage
    },
    {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "#d3d4d9",
      image: programmingImage
    },
    {
      title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      bgColor: "#ffd167",
      image: meditationImage
    }
  ];

  const [currentStep, setCurrentStep] = useState(0)
  const currentCardData = tutorialData[currentStep];
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <Card
        key={currentStep}
        title={currentCardData.title}
        description={currentCardData.description}
        next={nextStep}
        prev={prevStep}
        image={currentCardData.image}
        bgColor={currentCardData.bgColor}
        steps={currentStep}
        totalSteps={tutorialData.length}
        setStep={setCurrentStep}
      />
    </>
  )
}

export default App;