import React from "react";
import _ from "lodash";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

import { htmlToReact } from "../utils";
import ActionLink from "./ActionLink";

export default class Footer extends React.Component {
  render() {
    return (
      <footer id="colophon" className="site-footer outer">
        <div className="inner">
          <div className="site-footer-inside">
            <div className="site-info">
              {_.get(
                this.props,
                "pageContext.site.siteMetadata.footer.content"
              ) && (
                <span className="copyright">
                  {htmlToReact(
                    _.get(
                      this.props,
                      "pageContext.site.siteMetadata.footer.content"
                    )
                  )}
                </span>
              )}
              {_.map(
                _.get(this.props, "pageContext.site.siteMetadata.footer.links"),
                (action, action_idx) => (
                  <ActionLink
                    key={action_idx}
                    {...this.props}
                    action={action}
                  />
                )
              )}
            </div>

            <div className="social-links" >
                         
              <a href="https://github.com/RatulMaharaj">
              <FaGithub />
              </a>

              <a href="mailto:sarge@rsaccounting.co.za">
              <FaEnvelope />
              </a>

              <a href="tel:+27314632826">
              <FaPhone />
              </a> 
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
