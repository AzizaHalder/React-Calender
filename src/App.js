import {useEffect, useState} from "react";
import moment from "moment";
import './App.css';
import Weekdays from './components/Weekdays';
// import Month from './components/Month';
import Header from './components/Header';
import Dates from './components/Dates';
import {ButtonPrev, ButtonNext} from './components/Button';


function App() { 
    
      const [weekdays, setWeekdays] = useState(moment.weekdays());
      const [months, setMonths] = useState(moment.months());
      const [dates, setDates] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);
      const [currentDate, setCurrentDate] = useState(new Date());
      const [currentMonth, setCurrentMonth] = useState(moment().format());
      const [activeMonth, setActiveMonth] = useState(moment().format());
      

      const getActiveMonth = () => {
        const monthnow = moment(currentMonth).format()
      /*const current = months.filter((month, index) => index ===currentMonth-1) 
      console.log('current', current[0])
      setActiveMonth(current[0])*/
      setActiveMonth(monthnow)
      }
  
      const clickNextMonth= async() => {
       const datenow = moment(activeMonth).add(1, "months")
      //  const newactive = moment(datenow).format('MMMM') 
       setActiveMonth(datenow)

      // const datenow = moment(currentMonth).add(1, "months")
      // const newactive = moment(datenow).format('MMMM')
      // setActiveMonth(newactive)  
      }
      console.log("Hello", activeMonth)

   
    /* if (this.state.currentMonth > 0){
      await this.setState({currentMonth: this.state.currentMOnth-1});
      this.getActiveMonth()
    }
    else {
      await this.setState({currentMonth: 11})
      this.getActiveMonth()
    }
  */

   const clickPrevMonth = async() => {
     const datenow =  moment(activeMonth).subtract(1, "months")
     setActiveMonth(datenow)
     
    /*const datenow = moment(activeMonth).subtract(1, "months")
     setActiveMonth(datenow)
     if (this.state.currentMonth < 11){
       await this.setState({currentMonth: this.state.currentMonth+1});
       this.getActiveMonth()
     }
     else {
       await this.setState({currentMonth: 0})
       this.getActiveMonth()
     }*/
   }

   useEffect(() =>{
     console.log('useEffect')
    //  getActiveMonth()
   }, [])

  


    // console.log(this.getCurrentMonth())
    return (
    <div className="App">
      <h2> Calender </h2>
      <Header active={moment(activeMonth).format('MMMM')}/>
      <ButtonPrev onButtonClick={clickPrevMonth} />
      <ButtonNext onButtonClick={clickNextMonth} />
      <Weekdays weekdays={weekdays} />
      <Dates date={dates} />
      <Month month={month} />
 
      </div>
    );  
  }




export default App;

