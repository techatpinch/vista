import  React,{useContext} from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { multiStepContext } from "../../ContextApi/StepContext";
import PersonalInformationData from "../ycw/StepperFormComponent.js/PersonalInformationData";
import AddressInformation from "../ycw/StepperFormComponent.js/AddressInformation";
import SkillInformationData from "../ycw/StepperFormComponent.js/SkillInformationData"
import JobRequirementData from "../ycw/StepperFormComponent.js/JobRequirementData";
import BankInformation from "../ycw/StepperFormComponent.js/BankInformation";
import HouseHoldMemberData from "../ycw/StepperFormComponent.js/HouseHoldMemberData";
import DocumentData from "../ycw/StepperFormComponent.js/DocumentData";
import SkillQuestion from "../ycw/StepperFormComponent.js/SkillQuestion";


const steps = [
  "PERSONAL",
  "SKILL",
  "JOB",
  "ADDRESS",
  "DOCUMENT",
  "HOUSEHOLD",
  "BANK",
];

function YcwStepper() {
    const {currentSteps, setCurrentSteps} = useContext(multiStepContext)
    let newNumber = localStorage.getItem('number');
    // setCurrentSteps(newNumber)

    function showSteps(steps){
        switch(steps){
            case 1 : return <PersonalInformationData/>
            case 4 : return <AddressInformation/>
            case 2 : return <SkillInformationData/>
            case 3 : return <JobRequirementData/>
            case 7 : return <BankInformation/>
            case 5 : return <DocumentData/>
            case 6 : return <HouseHoldMemberData/>
            
        }
      }
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={currentSteps-1} alternativeLabel>
          {steps.map((label, index) => (
            <Step sx={{cursor: "pointer"}} onClick={()=>{setCurrentSteps(index+1)}} key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      {showSteps(currentSteps)}
    </div>
  );
}

export default YcwStepper;
