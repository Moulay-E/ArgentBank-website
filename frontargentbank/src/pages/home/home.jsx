import React from "react";
import "./home.css";
import { DataList } from "../../data/homeImg/homeImg";
import Feature from "../../component/feature/feature";

function Home() {

    return(
        <div>
            <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
          {
            DataList.map((element,i) => 
              < Feature key={i} title={element.title} content={element.content} pictures ={element.pictures} />
            )
          }
      </section>
    </main>
       
        </div>
    ) 
}

export default Home;