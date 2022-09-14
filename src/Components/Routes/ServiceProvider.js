import React, { useEffect, useState } from "react";
import SecondNavbar from "../SubComponents/SecondNavbar";
import Searchbars from "../SubComponents/Shared/Searchbars";
import Icon from "../../Assets/img/icon.png";
import ServiceForSale from "../SubComponents/ServiceProvider/ServiceForSale";
import ServiceForRequest from "../SubComponents/ServiceProvider/ServiceForRequest";
import FilterBar from "../SubComponents/Shared/FilterBar";
import ServicesData from "../SubComponents/ServiceProvider/ServicesData";
import GetData from "../Api/GetData";
import PostData from "../Api/PostData";
import { message } from "antd";

const ServiceProvider = () => {
  const [noOfElement, setNoOfElement] = useState(3);
  const [usedServices, setUsedServices] = useState([]);
  const [requestedServices, setRequestedServices] = useState([]);

  useEffect(() => {
    getProvided();
    getRequested();
  }, []);

  const getProvided = () => {
    const res = GetData.ProvidedServicListing();
    res.then((value) => {
      if (value.data?.data?.docs) {
        setUsedServices(value.data.data.docs);
      } else {
        setUsedServices([]);
      }
    });
  };
  const getRequested = () => {
    const res = GetData.RequestedServicListing();
    console.log(res);
    res.then((value) => {
      if (value.data?.data?.docs) {
        setRequestedServices(value.data.data.docs);
      } else {
        setRequestedServices([]);
      }
    });
  };
  const pinnedService = (d) => {
    const res = PostData.addServiceFav(d);
    res.then((value) => {
      if (!value.data.success) {
        message.error(value.data.message);
      } else {
        message.success(value.data.message);
      }
    });
  };

  const showMoreItems = () => {
    setNoOfElement((prevValue) => prevValue + 3);
  };
  const RenderingServicesSale = usedServices.map((Service) => {
    console.log("dstata", usedServices);
    return (
      <ServiceForSale
        key={Service.serviceID}
        Img={Service.ServiceImages}
        image={Service.serviceImage}
        Id={Service.serviceID}
        Name={Service.serviceName}
        Date={Service.createdOn}
        Price={Service.price}
        icon={Icon}
        Category={Service.serviceType}
        Description={Service.description}
        pinnedService={pinnedService}
      />
    );
  });
  const RenderingRequestedServices = requestedServices.map((Service) => {
    return (
      <ServiceForRequest
        key={Service.serviceID}
        Id={Service.serviceID}
        Name={Service.serviceName}
        Date={Service.modifiedOn}
        Category={Service.serviceType}
        Description={Service.description}
        icon={Icon}
      />
    );
  });
  return (
    <>
      <SecondNavbar />
      <Searchbars ButtonValue="Post/Request a Service" from="ServiceProvider" />
      <div className="container-fluid mt-5">
        <div className="MaxWidth">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row">
                <div className="col-12 col-md-8 pr-0">
                  <div className="row m-0 p-0">
                    <div className="col-12">
                      <div className="btm_bordr">
                        <h4 className="mb-2">For Sale</h4>
                      </div>
                      <div className="row">{RenderingServicesSale}</div>
                    </div>
                    <div className="col-12 mt-5">
                      <div className="btm_bordr">
                        <h4>Requests</h4>
                      </div>
                      <div className="row">
                        {RenderingRequestedServices}
                        <div
                          className="col-12 text-center mb-5"
                          onClick={showMoreItems}
                        >
                          <p className="Bold" style={{ cursor: "pointer" }}>
                            load More
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-4 col-lg-3 mt-3">
                  <FilterBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceProvider;
