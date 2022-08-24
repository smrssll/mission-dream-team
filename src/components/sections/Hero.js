import React from "react";
import classNames from "classnames";
// import { SectionProps } from "../../utils/SectionProps";
import UploadImageToS3 from "./Uploadtos3";
import NlpGoogleWords from "./NlpGoogle";

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Find the Car you have been{" "}
              <span className="text-color-primary">looking</span> for.
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400"
              >
                See what AWS Rekognition can do. Upload a picture using the
                button below...
              </p>

              <div className="reveal-from-bottom" data-reveal-delay="600">
                <UploadImageToS3 />
              </div>
              <div>
                <NlpGoogleWords />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Hero.propTypes = propTypes;
// Hero.defaultProps = defaultProps;

export default Hero;
