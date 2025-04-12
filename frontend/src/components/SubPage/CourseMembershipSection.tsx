import { HiOutlineArrowRight } from "react-icons/hi";
import { Button } from "..";
import { useEffect, useState } from "react";
import useFetchData from "../../hooks/useFetchData";

const CourseMembershipSection = () => {
  const {
    data,
    error,
  }: {
    data: any;
    error: any;
  } = useFetchData("course", "membership");

  const [mainData, setMainData] = useState(null);
  useEffect(() => {
    if (data) {
      setMainData(data.membership[0]);
    }
  }, [data]);
  
  return (
    <>
      {error && <h1>Something went wrong</h1>}
      {mainData && (
        <>
          <div className="course-membership-title">
            <h2>{mainData.membershipTitle}</h2>
            <span>{mainData.membershipDescription}</span>
          </div>
          <div className="course-membership-cards">
            {mainData.membershipItem?.map((membership: any, index: number) => (
              <div
                className={`card ${index === 1 ? "bestSeller" : ""} `}
                key={membership.membershipItemTitle}
              >
                <div className="card-title">
                  <h3>{membership.membershipItemTitle}</h3>
                </div>
                <div className="card-price">
                  <h3>
                    <span>₹</span>
                    {membership.membershipItemPrice}
                  </h3>
                </div>
                <div className="card-chip">
                  <span>{membership.membershipItemBadge}</span>
                </div>
                <div className="card-description">
                  {membership.membershipItemList?.map((item: any) => (
                    <p key={item}>
                      <HiOutlineArrowRight />
                      {item}
                    </p>
                  ))}
                </div>
                <div className="card-action">
                    <Button
                      name="Get Started"
                      backgroundColor="rgb(255, 255, 255, 0.1)"
                      color="#ffffff"
                      hoverBackgroundColor="rgb(255, 255, 255, 0.1)"
                      hoverColor="#ffffff"
                      backgroundBlur={42}
                      width="100%"
                      action="redirectExternal"
                      actionData={membership.membershipItemButtonRedirect}
                    />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default CourseMembershipSection;
