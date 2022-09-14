import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SecondNavbar from "../SecondNavbar";
import Searchbars from "../Shared/Searchbars";
import ServiceForSale from "./ServiceForSale";
import BookDescription from "../BookStore/BookDescription";
import Profile from "../Shared/Profile";
import GetData from "../../Api/GetData";
import { Spin } from "antd";
import ICON from "../../../Assets/img/icon.png";
const ServiceSale = () => {
  const { ServiceId, ServiceCategory } = useParams();
  console.log(ServiceId, ServiceCategory);
  const [serviceSaleProvider, setProvider] = useState({});
  const [Loading, setLoading] = useState(true);
  const [noOfElement, setNoOfElement] = useState(3);
  const getData = async () => {
    await GetData.ServiceSaleProvider(parseInt(ServiceId)).then((res) => {
      console.log(res);
      setProvider(res);
    });
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  const showMoreItems = () => {
    setNoOfElement((prevValue) => prevValue + 3);
  };
  return (
    <>
      {console.log("ServiceSaleData", serviceSaleProvider)}
      <SecondNavbar />
      <Searchbars ButtonValue="Post a Service" from="ServiceProvider" />
      <div className="container-fluid mt-5">
        <div className="MaxWidth">
          <div className="row mt-5">
            {Loading ? (
              <Spin />
            ) : (
              <div className="row col-11 mx-auto">
                <div className="col-12 col-lg-8">
                  <div className="btm_bordr">
                    <h4 className="mb-3">For Sale</h4>
                  </div>
                  <div className="mt-3">
                    {serviceSaleProvider && (
                      <BookDescription
                        Img={serviceSaleProvider.ServiceImages}
                        Date={serviceSaleProvider.createdOn}
                        Price={serviceSaleProvider.price}
                        icon={ICON}
                        Description={serviceSaleProvider.description}
                      />
                    )}
                  </div>
                  <div className="btm_bordr mt-4">
                    <h4 className="mb-3">Related Post</h4>
                  </div>
                  <div className="row">
                    {serviceSaleProvider.related
                      .slice(0, noOfElement)
                      .map((each) => {
                        return (
                          <ServiceForSale
                            Img={each.ServiceImages}
                            Date={each.modifiedOn}
                            Name={each.serviceName}
                            icon={ICON}
                          />
                        );
                      })}
                    <button
                      className="bookloadmore mx-auto border-0 w-50"
                      onClick={showMoreItems}
                    >
                      Load More
                    </button>
                  </div>
                </div>
                <Profile />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSale;
