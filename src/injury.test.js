import { render, screen,fireEvent, waitFor } from '@testing-library/react';
import { addInjury } from './action/actionfun';
import {BrowserRouter} from 'react-router-dom'

describe('testing injurycentre ui', () => {afterEach(() => {
    console.log("clean up done...")
})
beforeEach(() => {
    console.log("initialization done")
})
it ('injury centre page',async()=>{
   render (<BrowserRouter><addInjury></addInjury></BrowserRouter>) 

   fireEvent.change(screen.getByTestId('personName'),{target:{value:'raghu'}})
   fireEvent.change(screen.getByTestId('personAddress'),{target:{value:'new address'}})
   fireEvent.change(screen.getByTestId('mobile'),{target:{value:'1234567890'}})
   fireEvent.click(screen.getByTestId('savectrl'),{target:{value:''}})
   fireEvent.click(screen.getByTestId('updatectrl'),{target:{value:'/home/injurycentre/update'}})
   fireEvent.click(screen.getByTestId('viewctrl'),{target:{value:'/home/injurycentre/view'}})
   // expect(screen.getByTestId('msglbl').textContent).toBe("")
//    await waitFor(()=>expect(screen.getByTestId('msglbl').textContent).toBe('valid user'))
   





})
    
});
