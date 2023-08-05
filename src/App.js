import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {




  // const step = 1
  const [step, setStep] = useState(1)  //  argument ma - default value of this state variable. Second chei function hunxa This useState will return an array. 
  // also this useState function is what we call 'hook' in react. We can identify it's hook because , it starts with 'use' keyword. For example useEffect, useReducer etc are react hooks. React hook ko barema chei alik paxi research hunxa.
  //We can only call hooks like useState on the top level of a function. We cannot call it inside if statement or inside another function or inside a loop. tala ko handlePrevious function ma useState use garyo bhane error auxa kina ki yo top level function mai use hunu parxa.
  // Also we should only update state using setter functions

  const [isOpen, setIsOpen] = useState(true) // by default isOpen true xa.


  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1)

    }

    /*
      -------------------------
      Doesn't Work ! 
      ------------------------
      setStep 2 choti ghatdaina! 
      -------------------------
      K hudo raixa bhanda feri, setStep(step-1) 2 choti call garda same function ma , react doesn;t immediately perform a separate render for each update.
      Instead, it queues up these updates and applies them all together in a single pass before rendering the updated UI. 

      Bhannu ko artha , euta function ma ek - ek line re-render gardaina raixa react le. So hamro case ma react le 2ta same value dekhxa ani latest value update gardinxa. Jun second setStep ho.

      setStep(step - 1)
      setStep(step - 1)


      Instead we do this code to make it workk.

      setStep((s) => s - 1)
      setStep((s) => s - 1)

      */


    //step = step - 1 // nothing happens! Because in useState we need to update the variable using setter function. Aile ko tarika works normal on js , tara in react, it has no way of knowing that hamile useState ko step lai change garna khojirako xam bhanera.
    // That's why we use setter setStep to update step. Wrong tarikale garda we are mutuating data and react is all about immutabilaity.
    //In short , hamile gareko yo normal update le re-render gardaina ani use-state le update garda chei re-render ni garxa.


  }

  function handleNext() { // as we clicked on the next button, hendleNext function was caught and then this event handler le chei step state update gardiyo ani react le automatically render garyo.
    if (step < 3) {
      setStep((s) => s + 1)

    }
  }

  return (

    <> {/* Yo div chei jsx mode ma xirna lai haleko lol. Kina bhane div vitra matra hami jsx mode chirna millxa ni ta, normal js ma mildaina*/}

      <button className="close" onClick={() => setIsOpen((is) => !is)}>&times;</button>
      {isOpen && (

        <div className="steps">
          <div className='numbers'>
            <div className={`${step >= 1 ? 'active' : ''}`}> 1</div>
            <div className={`${step >= 2 ? 'active' : ''}`}> 2</div>
            <div className={`${step >= 3 ? 'active' : ''}`}> 3</div>

          </div>
          <p className="message">Step {step} : {messages[step - 1]}
          </p> {/* Step 1 : Learn react auxa by default.  message[step-1] bhaneko chei, hamro const step already 1 deko xam . Aba message[step-1] bhaneko message[1-1] =message[0] ho.
    so message 0 bhaneko 'Learn React' bhanera display hunxa message. Similarlyy steps ko value 2 bhayo bhane message 2-1 =1. messages[1]='Apply for jobs' run hunxa*/}
          <div className="buttons">
            <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handlePrevious}>Previous</button>  {/* handlePrevious() call kina nagarekok bhanda , gareko bhaye reacct le on app.js khulna sath teslai run handintyo and that is not what we want. */}
            <button style={{ backgroundColor: '#7950f2', color: '#fff' }} onClick={handleNext}>Next</button>
          </div>
        </div>
      )

      }
    </>

  )


}

