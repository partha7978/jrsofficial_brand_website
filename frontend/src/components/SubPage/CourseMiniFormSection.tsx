import { useEffect, useState } from "react";
import { Button, Input } from "..";
import useFetchData from "../../hooks/useFetchData";
import { urlFor } from "../../../client/client";

const CourseMiniFormSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "miniForm");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.miniForm[0]);
    }
  }, [data]);

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <section className="mini-form">
          <div className="mini-form-section">
            <div className="mini-form-section-image">
              <img
                src={urlFor(mainData.miniFormImage).url()}
                alt="featured podcast banner"
                loading="lazy"
                height={200}
                width={200}
              />
            </div>
            <div className="mini-form-section-content">
              <h2>{mainData.miniFormTitle}</h2>
              <span className="mini-form-section-content-subtext">
                {mainData.miniFormDescription}
              </span>
              <span className="mini-form-section-content-additionalText">
                {mainData.miniFormAdditionalDescription}
              </span>
              <form action="" className="mini-form-section-content-form">
                <div className="input-box">
                  <Input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input"
                    background="#e4e4e4"
                    color="#000000"
                    required={true}
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input"
                    background="#e4e4e4"
                    color="#000000"
                    required={true}
                  />
                </div>
                <Button
                  name="Get Started"
                  backgroundColor="#141414"
                  color="#ffffff"
                  hoverBackgroundColor="#FFCA85"
                  hoverColor="#141414"
                  width="100%"
                  action="formSubmit"
                />
              </form>
              <div className="mini-form-section-content-terms">
                <span>{mainData.miniFormNoticeText}</span>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CourseMiniFormSection;
