import React from "react";
import classNames from "classnames";
import Input from "../elements/Input";

const PolicySearch = ({
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
      <div className="container-sm reveal-from-bottom">
        <div className={innerClasses}>
          <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            Have a question about the policy? <br /> Search it{" "}
            <span className="text-color-primary">below</span>.
          </h3>
        </div>
        <Input
          id="query"
          type="search"
          label="Subscribe"
          labelHidden
          hasIcon="right"
          placeholder="Your best email"
        >
          <svg
            width="16"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            type="submit"
          >
            <path
              d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z"
              fill="#376DF9"
            />
          </svg>
        </Input>
      </div>
    </section>
  );
};

export default PolicySearch;
