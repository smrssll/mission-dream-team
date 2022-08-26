import React from "react";
import classNames from "classnames";
import Input from "../elements/Input";
import Button from "../elements/Button";
import axios from "axios";

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
  //Button function
  const clicker = () => {
    console.log("button is working");
    let query = document.getElementById("query");
    console.log(query.value);

    const str = query.value;
    const SPCfilter = str.replace(/[^\w ]/g, " ");
    console.log(SPCfilter);

    //Space for query answer
    let answer = document.getElementById("answer");
    answer.innerHTML = "";

    //Connection to watson discovery
    axios(`http://localhost:4001/ask/${SPCfilter}`)
      .then((res) => res.json())
      .then((answer.innerHTML = "<p>Searching for answers..Hang on...</p>"))
      .then((data) => {
        console.log(data);
        console.log(data.result);
        let resultsTotal = data.result.matching_results;
        if (resultsTotal === 0) {
          // let answer = document.getElementById("answer");
          answer.innerHTML = `<p>search for <em>'${SPCfilter}'</em> returned no results, <br/>please try rephrase your question  </p>`;
          console.log("no results");
        } else {
          answer.innerHTML = `Returning top result(s) for "${SPCfilter}"`;
          for (let i = 0; i < 3; i++) {
            let question = data.result.results[i].SPCfilter;
            let results = data.result.results[i].highlight.text;
            let questionNumber = i + 1;

            // let answer = document.getElementById("answer");
            answer.innerHTML += `<p>Question ${questionNumber}: ${question}<br/><div id="faqAnswer">Answer: ${results}</div></p>`;
          }
        }
      });
  };

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
        <Button color="primary" onClick={clicker}>
          Search
        </Button>
        <h6>
          <div id="answer"></div>
        </h6>
      </div>
    </section>
  );
};

export default PolicySearch;
