import * as React from "react";
import Layout from "../../components/Layout";

export default () => {
  return (
      <Layout pageTitle="CONTACT BOHO BOSPHORUS">
        <div>
          <section className="section">
            <div className="container">
              <div className="section">
                <div className="columns">
                  <div className="column is-12 m-auto">
                    <div className="column is-8 m-auto container">
                      <div className="block">
                        <h2 className="has-text-weight-bold is-size-2">Contacting us</h2>
                      </div>
                      <div className="block">You can contact us on <a href="tel:+90 537 810 2705">+90 537 810 2705</a> or email us at
                        &nbsp;<a href="mailto:bohobosphorus@gmail.com">bohobosphorus@gmail.com</a>
                      </div>
                      <div className="block">To inquire a quote for your event please fill out the&nbsp;
                        <a href="https://bonjukbay.plumsail.io/6419b524-873b-4f70-9efc-601e7111a644">Request form</a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
  );
}
