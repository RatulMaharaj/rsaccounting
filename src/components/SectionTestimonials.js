import React from "react";
import _ from "lodash";
import Collapsible from "react-collapsible";
import { htmlToReact, classNames, safePrefix } from "../utils";
import "./collapse.css";

export default class SectionTestimonials extends React.Component {
  render() {
    let today = new Date();
    console.log(today)
    let section = _.get(this.props, "section");
    return (
      <section
        id={_.get(section, "section_id")}
        className="block block-testimonials outer"
      >
        <div className="inner">
          {(_.get(section, "title") || _.get(section, "subtitle")) && (
            <div className="block-header inner-sm">
              {_.get(section, "title") && (
                <h2 className="block-title line-top">
                  {_.get(section, "title")}
                </h2>
              )}
              {_.get(section, "subtitle") && (
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, "subtitle"))}
                </p>
              )}
            </div>
          )}
          {_.get(section, "accounting") ? (
            <div>
              <p>
                As an entrepreneur, your focus should be on running your
                business. That's why utilising our professional accounting
                services will assist you in maintaining that focus and keep you
                on the road toward achieving your business goals.
              </p>

              <p>
                We offer monthly or periodic accounting packages that can be
                perfectly tailored to your needs. We will also provide a
                dedicated accounting manager who has the skill and expertise to
                guide you through your journey and set you up for lasting
                success.
              </p>
              <h4>Our services include:</h4>
              <ul>
                <li>Start to finish data capturing</li>
                <li>
                  The production of reports that are compatible with SARS
                  reporting structures
                </li>
                <li>Completion and submission of all statutory returns</li>
                <li>Reconciliations</li>
                <li>Cash flow projections</li>
                <li>Payroll services</li>
                <li>Management Accounting</li>
                <li>Annual financial statements</li>
              </ul>
            </div>
          ) : (
            <div id="FAQ">
              <Collapsible
                trigger="&#x25BE; I am a start-up or small business - are you able to tailor an affordable solution to my needs so that we can grow together?"
                triggerWhenOpen="&#x25B4; I am a start-up or small business - are you able to tailor an affordable solution to my needs so that we can grow together?"
              >
                <p>
                Most certainly. We have clients that have started as a one-man business and now turnover in excess of R5m.
                </p>
              </Collapsible>
              <Collapsible
                trigger="&#x25BE; I have a great business idea but I am not clued up on paperwork and tax - can you guide me patiently?"
                triggerWhenOpen="&#x25B4; I have a great business idea but I am not clued up on paperwork and tax - can you guide me patiently?"
              >
                <p>
                You focus on growing your idea, we will take care of the paperwork.
                </p>
              </Collapsible>
              <Collapsible
                trigger="&#x25BE; I want an accountant that can meet with me and give me bright ideas - do you have a flair for such things?"
                triggerWhenOpen="&#x25B4; I want an accountant that can meet with me and give me bright ideas - do you have a flair for such things?"
              >
                <p>
                With over {today.getFullYear() - 1997} years of experience, we must have bright ideas!
                </p>
              </Collapsible>
              <Collapsible
                trigger="&#x25BE; I need someone to guide me on how to structure my transactions so that it gives me the best tax advantage - can you help?"
                triggerWhenOpen="&#x25B4; I need someone to guide me on how to structure my transactions so that it gives me the best tax advantage - can you help?"
              >
                <p>
                We have smart ways - talk to us - Tax CPD hours galore.
                </p>
              </Collapsible>
              <Collapsible
                trigger="&#x25BE; I am looking for a one stop accounting tax shop - can you help?"
                triggerWhenOpen="&#x25B4; I am looking for a one stop accounting tax shop - can you help?"
              >
                <p>
                You have come to the right place! We are waiting for your call. We are people who you can have safe discussions with. Try us!
                </p>
              </Collapsible>
            </div>
          )}
        </div>
      </section>
    );
  }
}
