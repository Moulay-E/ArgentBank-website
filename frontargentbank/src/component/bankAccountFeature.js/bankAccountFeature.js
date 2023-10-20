import React from "react";
// import "./Account.css";

export default function BankAccountFeature({ user }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{user.title}</h3>
        <p className="account-amount">{user.amout}</p>
        <p className="account-amount-description">{user.description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}