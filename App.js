import React from "react";
import Plans from "./Plans";
import "./App.css";

function App() {
  const plans = [
    {
      name: "Free",
      price: 0,
      features: [
        { name: "single-user", enabled: true },
        { name: "5GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited Private Projects", enabled: false },
        { name: "Dedicated Phone Support", enabled: false },
        { name: "Free Subdomain", enabled: false },
        { name: "Monthly Status Reports", enabled: false },
      ],
    },
    {
      name: "Plus",
      price: 9,
      features: [
        { name: "single-user", enabled: true },
        { name: "5GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited Private Projects", enabled: true },
        { name: "Dedicated Phone Support", enabled: true },
        { name: "Free Subdomain", enabled: true },
        { name: "Monthly Status Reports", enabled: false },
      ],
    },
    {
      name: "Pro",
      price: 49,
      features: [
        { name: "single-user", enabled: true },
        { name: "5GB Storage", enabled: true },
        { name: "Unlimited Public Projects", enabled: true },
        { name: "Community Access", enabled: true },
        { name: "Unlimited Private Projects", enabled: true },
        { name: "Dedicated Phone Support", enabled: true },
        { name: "Free Subdomain", enabled: true },
        { name: "Monthly Status Reports", enabled: true },
      ],
    },
  ];

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {plans.map((plan, index) => (
            <Plans key={index} name={plan.name} price={plan.price} features={plan.features} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
