import Reeact from 'react'
import ProgressBar from './progressBar'; 


function App() {

  const stages = [
    {
      name: "customer info",
      div: () => <div>Provide your contact info</div>,
    },
    {
      name: "Shipping info",
      div: () => <div>Enter your shipping adress</div>,
    },
    {
      name: "Payment",
      div: () => <div>complete payment for your order</div>,
    },
    {
      name: "booked",
      div: () => <div>your order has been booked successfully</div>,
    },
  ]; 
  return (
    <div className="App">
      <ProgressBar stages={stages } />
    </div>
  );
}

export default App;
