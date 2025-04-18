import { useEffect, useState } from "react";
import { Button, Input } from "..";
import useFetchData from "../../hooks/useFetchData";
import { client, urlFor } from "../../../client/client";
import { Toast } from "../index";

const CourseMiniFormSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "miniForm");

  const [toast, setToast] = useState<{
    type: "success" | "error" | "def" | "warning";
    message: string;
  }>({ type: "def", message: "" });
  const [mainData, setMainData] = useState(null);
  const [toastOpen, setToastOpen] = useState(false);

  useEffect(() => {
    if (data) {
      setMainData(data.miniForm[0]);
    }
  }, [data]);

  //handling form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = formData;
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (!name || !email) {
      setToast({ type: "warning", message: "Please fill all fields" });
      return false;
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setToast({ type: "warning", message: "Please enter a valid email" });
      return false;
    }

    // setToast({ type: "", message: "" });
    return true;
  };

  useEffect(() => {
    if (toast.message.length > 1 && toastOpen === false) {
      setToastOpen(true);
    }
  }, [toast]);

  const getCurrentDate = () => {
    const now = new Date();

    const formattedDate = now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const formattedTime = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return `${formattedDate} — ${formattedTime}`;
  };

  const formDataSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      const userSubmittedData = {
        _type: "userSubmittedData",
        name: name,
        email: email,
        phone: phone,
        time: getCurrentDate(),
      };

      client
        .create(userSubmittedData)
        .then(() => {
          setToast({ type: "success", message: "Form submitted successfully" });
          setFormData({ name: "", email: "", phone: "" });
        })
        .catch((err) => {
          setToast({ type: "error", message: "Something went wrong" });
          setFormData({ name: "", email: "", phone: "" });
        });
    }
  };

  return (
    <>
      {error && <h1>Something went wrong</h1>}
      <>
        <Toast
          type={toast.type}
          message={toast.message}
          isOpen={toastOpen}
          setIsOpen={setToastOpen}
          setToast={setToast}
        />
      </>
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
                    value={name}
                    required={true}
                    onChange={handleInputChange}
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input"
                    background="#e4e4e4"
                    color="#000000"
                    required={true}
                    onChange={handleInputChange}
                    value={email}
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
                  actionData={formDataSubmit}
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
