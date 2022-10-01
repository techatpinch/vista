import { Box, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { JobType, PreferredWorkingHour, year, months } from "../../AlllData";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import TextFieldComponent from "../MuiComponents/TextFieldComponent";
import FormControlSingleSelect from "../MuiComponents/FormControlSingleSelect";


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function JobRequirement(props) {
  const [jobtypeDD, setJobtypeDD] = useState([])
  const [trainingDD, setTrainingDD] = useState([])
  const [workingDD, setWorkingDD] = useState([])
  const [lastJobTypeDD, setLastJobTypeDD] = useState([])
  const  [reasionofLeavingJob,setReasionofLeavingJob]=useState([])

  const {
    openToTraining, setOpenToTraining,
    preferJob, setPreferJob,
    preferWorkHour, setPreferWorkHour,
    startTime, setStartTime,
    endTime, setEndTime,
    vehicleAvailable, setVehicleAvailable,
    minSal, setMinSal,
    maxSal, setMaxSal,
    traningMode, setTraningMode,
    jobRemarks, setJobRemarks,
    totalExp, setTotalExp,
    experienceRemarks, setExperienceRemarks,
    lastJobType, setLastJobType,
    lastJobDuration, setLastJobDuration,
    ReasonLeaving, setReasonLeaving,
    jobExpMonth, setJobExpMonth,
    jobExpYear, setJobExpYear,
    LastjobDurationYear, setLastJobDurationYear, 
    LastjobDurationMonths, setLastJobDurationMonths
  } = props;

  useEffect(() => {
    async function fetchData() {
      let Jobtypedata = await fetch("http://13.126.160.155:8080/user/skill/get/skills");
      let trainingModeData = await fetch("http://13.126.160.155:8080/user/drop-down/get/traningMode")
      let workinghoursData = await fetch("http://13.126.160.155:8080/user/drop-down/get/workingHours")
      let reasionForleavingJob = await fetch ("http://13.126.160.155:8080/user/skill/get/skills")
      let res9 = await reasionForleavingJob.json();
      let res3 = await Jobtypedata.json();
      let res4 = await trainingModeData.json();
      let res5 = await workinghoursData.json();
      setJobtypeDD(res3.data || [{ value: "NO DATA" }]);
      setTrainingDD(res4.data || [{ value: "NO DATA" }]);
      setWorkingDD(res5.data || [{ value: "NO DATA" }])
      setLastJobTypeDD(res3.data)
      setReasionofLeavingJob(res9.data)
    }
    fetchData()
  }, [])


  return (
    <Box sx={{ marginTop: 7, display: "grid", gap: 1, }}>
      <h5>Job Requirements</h5>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", rowGap: "30px" }}>
        <FormControl sx={{ minWidth: 120, width: "18%" }} size="small">
          <InputLabel id="demo-select-small">Preferred Job Types</InputLabel>
          <Select sx={{ width: "100%" }} label="Preferred Job Types" value={preferJob}
            onChange={(e) => { setPreferJob(e.target.value) }}
          >
            {jobtypeDD.map((item) => (
              <MenuItem value={item.uuid}>{item.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120, width: "18%" }} size="small">
          <InputLabel id="demo-select-small">Preferred Working Hours</InputLabel>
          <Select sx={{ width: "100%" }} label="Preferred Working Hours" value={preferWorkHour}>
            {workingDD.map((item) => (
              <MenuItem onClick={() => { setPreferWorkHour(item.key) }} value={item.key}>{item.value}</MenuItem>
            ))}
          </Select>
        </FormControl>


        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker label="Preferred Start Time" value={startTime} onChange={(newValue) => {
            setStartTime(newValue);
          }}
            renderInput={(params) => (
              <TextField size="small" sx={{ width: "18%" }} {...params} />
            )}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker label="Preferred End Time" value={endTime} onChange={(newValue) => {
            setEndTime(newValue);
          }}
            renderInput={(params) => (
              <TextField size="small" sx={{ width: "18%" }} {...params} />
            )}
          />
        </LocalizationProvider>

        <FormControl sx={{ minWidth: 120, width: "18%" }} size="small">
          <InputLabel>Cycle/Bike available for travel?</InputLabel>
          <Select sx={{ width: "100%" }} label="Cycle/Bike available for travel?" value={vehicleAvailable} onChange={(e) => {
            setVehicleAvailable(e.target.value)
          }}>
            <MenuItem value={"Cycle"}>Cycle</MenuItem>
            <MenuItem value={"Bike"}>Bike</MenuItem>
            <MenuItem value={"Others"}>Others</MenuItem>
          </Select>
        </FormControl>
        {/* </Box> */}

        {/* <Box sx={{ display: "flex", justifyContent: "space-between", mt: "30px"}}> */}

        <TextField  
          type="number"
           sx={{
              width: "18%",
              '& input[type=number]': {
                '-moz-appearance': 'textfield'
              },
              '& input[type=number]::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
              },
              '& input[type=number]::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
              }
            }} size="small" label="last salary withdraw" variant="outlined" onChange={(e) => {
          setMinSal(e.target.value)
        }}
          value={minSal}

        />

        <TextField  
          type="number"
        sx={{
              width: "18%",
              '& input[type=number]': {
                '-moz-appearance': 'textfield'
              },
              '& input[type=number]::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
              },
              '& input[type=number]::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
              }
            }} size="small" label="Expected Salary [max]" variant="outlined" onChange={(e) => {
          setMaxSal(e.target.value)
        }}
          value={maxSal}
          error={minSal > maxSal ? true : false}
        />

        <FormControl sx={{ minWidth: 120, width: "18%" }} size="small">
          <InputLabel id="demo-select-small">Open to Training?</InputLabel>
          <Select sx={{ width: "100%" }} labelId="demo-select-small" id="demo-select-small" label="Open to Training?" onChange={(e) => {
            setOpenToTraining(e.target.value)
          }}>
            <MenuItem value={true}>YES</MenuItem>
            <MenuItem value={false}>NO</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120, width: "18%" }} size="small">
          <InputLabel id="demo-select-small">Training Mode</InputLabel>
          <Select sx={{ width: "100%" }} label="Training Mode" disabled={!openToTraining} onChange={(e) => {
            setTraningMode(e.target.value)
          }}
            value={traningMode}
          >
            {trainingDD.map((item) => (
              <MenuItem value={item.key}>{item.value}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField sx={{ width: "18%" }} size="small" label="Job Remarks" variant="outlined" onChange={(e) => {
          setJobRemarks(e.target.value)
        }}
          value={jobRemarks}
        />

        <FormControl sx={{ minWidth: 120, width: "18%" }} size="small">
          <InputLabel id="demo-select-small">Total Experience (years)</InputLabel>
          <Select sx={{ width: "100%" }} label="Total Experience (years)" value={jobExpYear} onChange={(e) => {
            setJobExpYear(e.target.value)
          }}>
          {year.map(item=>(
            <MenuItem value={item}>{item}</MenuItem>
          ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120, width: "18%" }} size="small">
          <InputLabel id="demo-select-small">Total Experience (months)</InputLabel>
          <Select sx={{ width: "100%" }}label="Total Experience (months)" value={jobExpMonth} onChange={(e) => {
            setJobExpMonth(e.target.value)
          }}>
             {months.map(item=>(
            <MenuItem value={item}>{item}</MenuItem>
          ))}
          </Select>
        </FormControl>

        <TextFieldComponent
          labelData="Experience Remarks"
          setData={setExperienceRemarks}
          size="18%"
          data={experienceRemarks}
        />

        <FormControlSingleSelect
          labelData="Last Job Type"
          dataDD={lastJobTypeDD}
          setData={setLastJobType}
          values={"name"}
          data={lastJobType}
          size="18%"
        />

          <FormControl sx={{ minWidth: 120, width: "18%" }} size="small">
          <InputLabel id="demo-select-small">Last Job Duration (years)</InputLabel>
          <Select sx={{ width: "100%" }} label="Last Job Duration (years)" value={LastjobDurationYear} onChange={(e) => {
            setLastJobDurationYear(e.target.value)
          }}>
             {year.map(item=>(
            <MenuItem value={item}>{item}</MenuItem>
          ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 120, width: "18%" }} size="small">
          <InputLabel id="demo-select-small">Last Job Duration (months)</InputLabel>
          <Select sx={{ width: "100%" }} label="Last Job Duration (months)" value={LastjobDurationMonths} onChange={(e) => {
            setLastJobDurationMonths(e.target.value)
          }}>
            {months.map(item=>(
            <MenuItem value={item}>{item}</MenuItem>
          ))}
          </Select>
        </FormControl>

        {/* <TextFieldComponent
          labelData="Reason For Leaving Last Job"
          setData={setReasonLeaving}
          size="18%"
          data={ReasonLeaving}

        /> */}
           <Autocomplete
                    disablePortal
                    size="small"
                    id="combo-box-demo"
                    options={reasionofLeavingJob}
                    onChange={(event, newValue) => {
                      // if (newValue.key === "OTHERS") {
                        // setTextfieldshow("visible")
                        setReasonLeaving(newValue.name);
                      // } else {
                      //   setTextfieldshow("none")
                      // }

                    }}
                    renderInput={(params) => (
                      <TextField
                      variant="outlined"
                        sx={{ minWidth: 220, width: "18%" }}
                        {...params}
                        placeholder="Reason For Leaving Last Job"
                        onChange={(event, newValue) => {
                          setReasonLeaving("");
                          // setTextfieldshow("none")
                        }}
                      />
                    )}
                    getOptionLabel={(item) => `${item.name}`}
                  />


        />
       <div style={{width:"59%"}}></div>



      </Box>
    </Box>
  );
}

export default JobRequirement;
