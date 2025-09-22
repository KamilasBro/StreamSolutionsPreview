import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../../assets/images/navbar/logo.png";
import submitSuccesImg from "../../assets/animations/submitSucces.webm";
import submitFailImg from "../../assets/animations/submitFail.webm";
import IgSvg from "../../utils/socials/ig";
import YtSvg from "../../utils/socials/yt";
import DcSvg from "../../utils/socials/dc";
// import ReCAPTCHA from "react-google-recaptcha";
import "./formComp.scss";
const GridContainer: React.FC = () => {
  const socialColor = "#E6023D";
  const [isSending, setIsSending] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<null | boolean>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //handled with email js
    event.preventDefault();

    //to show user that form is working
    setIsSending(true);

    //get data from form
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    // Check if honeypot field is filled
    const honeypotValue = formData.get("honeypot");
    if (honeypotValue) {
      console.error(
        "Honeypot field filled. Likely a bot submission. Ignoring form submission."
      );
      setIsSending(false);
      setSubmitSuccess(false);
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 3000);
      return
    }

    //get vulnerable info from .env file
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        "Missing environment variables."
      );
      process.exit(1);
    }

    //determine what data is needed
    const templateParams = {
      from_title: formData.get("title"),
      from_email: formData.get("email"),
      from_message: formData.get("message"),
    };
    //reset form
    formElement.reset();

    //send mail through email js
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        // console.log("succes", response);
        setIsSending(false);
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(null);
        }, 3000);
      })
      .catch((error) => {
        console.log("error", error);
        setIsSending(false);
        setSubmitSuccess(false);
        setTimeout(() => {
          setSubmitSuccess(null);
        }, 3000);
      });

    //node js server (backend not working)
    // try {
    //   const response = await fetch("https://streamsolutions.pl/submitForm", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       title: formData.get("title"),
    //       email: formData.get("email"),
    //       message: formData.get("message"),
    //     }),
    //   });
    //   if (response.ok) {
    //     console.log("Form submitted successfully");
    //   } else if (response.status === 400) {
    //     // Handle a 400 Bad Request
    //     console.error("Bad Request: Check your form data");
    //   } else {
    //     // Handle other error status codes
    //     console.error("Form submission failed with status:", response.status);
    //   }
    // } catch (error) {
    //   console.error("Error during form submission:", error);
    // }
  };

  return (
    <section className="formSection">
      <div>
        <h3>skontaktuj się z nami</h3>
        <p>
          Zainteresowany współpracą z nami? Prosimy o skorzystanie z formularza
          kontaktowego. Wypełnij aplikację, aby dołączyć do naszej wyjątkowej
          sieci partnerów i rozpocząć owocną współpracę, która przyczyni się do
          wzrostu widoczności Twojej marki
        </p>
        <img src={logo} alt="logo" className="logo" />
        <div className="socials">
          <IgSvg
            fillColor={socialColor}
            url="https://www.instagram.com/streamsolutionsofficial/"
          />
          <YtSvg
            fillColor={socialColor}
            url="https://www.youtube.com/channel/UCEZQYs6M5CWHy1bjNO2dy8Q"
          />
          <DcSvg fillColor={socialColor} url="https://discord.gg/RbSguqYBmj" />
        </div>
      </div>
      <form id="form" onSubmit={handleSubmit}>
        {(isSending || submitSuccess !== null) && (
          <div className="submission-tile">
            <div>
              {isSending && (
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M66 96C69.1826 96 72.2348 97.2643 74.4853 99.5147C76.7357 101.765 78 104.817 78 108C78 111.183 76.7357 114.235 74.4853 116.485C72.2348 118.736 69.1826 120 66 120C62.8174 120 59.7652 118.736 57.5147 116.485C55.2643 114.235 54 111.183 54 108C54 104.817 55.2643 101.765 57.5147 99.5147C59.7652 97.2643 62.8174 96 66 96ZM28.446 78C32.4242 78 36.2396 79.5804 39.0526 82.3934C41.8656 85.2064 43.446 89.0218 43.446 93C43.446 96.9782 41.8656 100.794 39.0526 103.607C36.2396 106.42 32.4242 108 28.446 108C24.4678 108 20.6524 106.42 17.8394 103.607C15.0264 100.794 13.446 96.9782 13.446 93C13.446 89.0218 15.0264 85.2064 17.8394 82.3934C20.6524 79.5804 24.4678 78 28.446 78ZM97.914 81C101.097 81 104.149 82.2643 106.399 84.5147C108.65 86.7652 109.914 89.8174 109.914 93C109.914 96.1826 108.65 99.2348 106.399 101.485C104.149 103.736 101.097 105 97.914 105C94.7314 105 91.6792 103.736 89.4287 101.485C87.1783 99.2348 85.914 96.1826 85.914 93C85.914 89.8174 87.1783 86.7652 89.4287 84.5147C91.6792 82.2643 94.7314 81 97.914 81ZM111 55.914C113.387 55.914 115.676 56.8622 117.364 58.55C119.052 60.2379 120 62.5271 120 64.914C120 67.301 119.052 69.5901 117.364 71.278C115.676 72.9658 113.387 73.914 111 73.914C108.613 73.914 106.324 72.9658 104.636 71.278C102.948 69.5901 102 67.301 102 64.914C102 62.5271 102.948 60.2379 104.636 58.55C106.324 56.8622 108.613 55.914 111 55.914ZM15 36C18.9782 36 22.7936 37.5804 25.6066 40.3934C28.4196 43.2064 30 47.0218 30 51C30 54.9782 28.4196 58.7936 25.6066 61.6066C22.7936 64.4196 18.9782 66 15 66C11.0218 66 7.20644 64.4196 4.3934 61.6066C1.58035 58.7936 0 54.9782 0 51C0 47.0218 1.58035 43.2064 4.3934 40.3934C7.20644 37.5804 11.0218 36 15 36ZM106.716 31.242C108.307 31.242 109.833 31.8741 110.959 32.9994C112.084 34.1246 112.716 35.6507 112.716 37.242C112.716 38.8333 112.084 40.3594 110.959 41.4846C109.833 42.6099 108.307 43.242 106.716 43.242C105.125 43.242 103.599 42.6099 102.473 41.4846C101.348 40.3594 100.716 38.8333 100.716 37.242C100.716 35.6507 101.348 34.1246 102.473 32.9994C103.599 31.8741 105.125 31.242 106.716 31.242ZM48 0C52.7739 0 57.3523 1.89642 60.7279 5.27208C64.1036 8.64773 66 13.2261 66 18C66 22.7739 64.1036 27.3523 60.7279 30.7279C57.3523 34.1036 52.7739 36 48 36C43.2261 36 38.6477 34.1036 35.2721 30.7279C31.8964 27.3523 30 22.7739 30 18C30 13.2261 31.8964 8.64773 35.2721 5.27208C38.6477 1.89642 43.2261 0 48 0ZM93 18C93.7956 18 94.5587 18.3161 95.1213 18.8787C95.6839 19.4413 96 20.2044 96 21C96 21.7956 95.6839 22.5587 95.1213 23.1213C94.5587 23.6839 93.7956 24 93 24C92.2044 24 91.4413 23.6839 90.8787 23.1213C90.3161 22.5587 90 21.7956 90 21C90 20.2044 90.3161 19.4413 90.8787 18.8787C91.4413 18.3161 92.2044 18 93 18Z"
                    fill="white"
                  />
                </svg>
              )}
              {submitSuccess === true && (
                <video autoPlay muted>
                  <source src={submitSuccesImg} type="video/webm" />
                </video>
              )}
              {submitSuccess === false && (
                <video autoPlay muted>
                  <source src={submitFailImg} type="video/webm" />
                </video>
              )}
              {/* 
              <h3 className="tempText">
                Formularz obecnie jest niedostępny ze względu na konserwację
                serwisu. Przepraszamy za wszelkie niedogodności. Pytania prosze
                kierować na{" "}
                <a href="mailto:kontakt@streamsolutions.pl" className="red">
                  kontakt@streamsolutions.pl
                </a>
              </h3> */}
            </div>
          </div>
        )}
        <span
          style={
            isSending || submitSuccess !== null
              ? { filter: "blur(5px)", transition: "150ms" }
              : {}
          }
        >
          <input type="text" name="honeypot" hidden />
          <div>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Tytuł"
              required
              disabled={isSending || submitSuccess !== null}
            />
          </div>

          <div>
            <input
              autoComplete="true"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              disabled={isSending || submitSuccess !== null}
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Treść wiadomości..."
              required
              disabled={isSending || submitSuccess !== null}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center">
            {/* <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeNT2cpAAAAAOPDmLIQv2o4meRl16L-1mAWSDib"
              onChange={handleRecaptchaChange}
              hl="pl"
            /> */}
            <button
              type="submit"
              disabled={isSending || submitSuccess !== null}
            >
              Wyślij
            </button>
          </div>
        </span>
      </form>
    </section>
  );
};
export default GridContainer;
