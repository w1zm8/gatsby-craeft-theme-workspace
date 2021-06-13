import React, { FC } from "react";

import { GoBackTo, Icon, SEO } from "../components";
import { useConvertkitEmailSubscription, useTheme } from "../core";

import { StyleModules } from "../style-modules";
import { icons } from "../icons";
import { PageProps } from "gatsby";

const styles = StyleModules.subscriptionPage;

interface PageContextValue {
  convertkitEndpoint: string;
}

const SubscriptionPage: FC<PageProps<{}, PageContextValue>> = ({
  pageContext: { convertkitEndpoint },
}) => {
  const { theme } = useTheme();
  const {
    handleSubmit,
    handleChangeEmail,
    handleTryAgain,
    email,
    isInitialStatus,
    isErrorStatus,
    isSuccessStatus,
  } = useConvertkitEmailSubscription({ endpoint: convertkitEndpoint });

  return (
    <>
      <SEO theme={theme} title="Join the Mailing List!" isBodyDarker />
      <GoBackTo
        type="link"
        to="/"
        theme={theme}
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
        }}
      >
        Home Page
      </GoBackTo>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Join the Mailing List
          <img
            style={{ width: "55px", marginLeft: "20px" }}
            src={icons.emojiLoveLetter}
            alt="emoji love letter"
          />
        </h1>
        <div
          style={{
            width: "800px",
            margin: "0 auto 20px auto",
            textAlign: "center",
          }}
        >
          <p>
            I write a blog about topics that interest me most: programming in
            general, Back End and Front End, TypeScript, Node.js, testing,
            algorithms and data structures, writing and other great stuff.
          </p>
          <p>Subscribe to my email newsletter to stay up to date.</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              name="email_address"
              placeholder="Email address"
              className={styles.input}
              onChange={handleChangeEmail}
              value={email}
            />
            <button className={styles.button}>Subscribe!</button>
          </form>
        </div>
        {!isInitialStatus && (
          <div
            className={styles.result}
            style={{ margin: "0 auto", fontSize: "20px" }}
          >
            {isSuccessStatus && (
              <div className={styles.resultSuccess}>
                <Icon
                  src={icons.emojiSparkles}
                  widthSize="20px"
                  indentRight="10px"
                />
                <span>Please go confirm your subscription!</span>
              </div>
            )}
            {isErrorStatus && (
              <>
                <div className={styles.resultError}>
                  <Icon
                    src={icons.emojiPoliceCarLight}
                    widthSize="20px"
                    indentRight="10px"
                  />
                  <span>Oops, Something went wrong! Try again.</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default SubscriptionPage;
