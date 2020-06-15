import React from "react";
import _ from "lodash";

import { htmlToReact, classNames, safePrefix } from "../utils";

export default class SectionTestimonials extends React.Component {
  render() {
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
          <div>
            <p>
              As an entrepreneur, your focus should be on running your business.
              That's why utilising our professional accounting services will
              assist you in maintaining that focus and keep you on the road
              toward achieving your business goals.
            </p>

            <p>
              We offer monthly or periodic accounting packages that can be
              perfectly tailored to your needs. We will also provide a dedicated
              accounting manager who has the skill and expertise to guide you
              through your journey and set you up for lasting success.
            </p>
            <h4>Our services include:</h4>
            <ul>
              <li>Start to finish data capturing</li>
              <li>
                The production of reports that are compatible with SARS
                reporting structures
              </li>
              <li>Completion and submission of all statutory returns</li>
              <li>Cash flow projections</li>
              <li>Payroll services</li>
              <li>Annual financial statements</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
