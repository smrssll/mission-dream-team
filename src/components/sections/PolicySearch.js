import React from "react";
import classNames from "classnames";
import Input from "../elements/Input";
import Button from "../elements/Button";

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
          type="text"
          hasIcon="right"
          placeholder="Search our policies"
        ></Input>
        <Button color="primary"></Button>
      </div>
    </section>
  );
};

export default PolicySearch;
