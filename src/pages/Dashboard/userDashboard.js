import React from "react";
import CardGridUser from "../../components/cards/CardGridUser";

export const UserDashboard = () => {
  return (
    <CardGridUser
      linkRequest="https://t4.ftcdn.net/jpg/02/36/57/91/360_F_236579161_BwYfCPuAytiZRCImG6yIe5RDBUlYpLCq.jpg"
      linkTravelAll="https://mayaonmoney.co.za/wp-content/uploads/2021/03/travel-allowance.jpg"
    />
  );
};
import React from "react";
import CardDashboard from "../../components/cards/CardDashboard";
import CardRequest from "../../images/CardRequest.png";
import CardTravelAll from "../../images/CardTravelAll.png";

export const UserDashboard = () => {
  return (
    <div className="container p-5">
     <div className="container text-center">
        <div className="my-3"></div>
        <div className="row justify-content-center">
        <div className="col-md-6">
            <CardDashboard
              image={CardTravelAll}
              link={"https://mayaonmoney.co.za/wp-content/uploads/2021/03/travel-allowance.jpg"}
            ></CardDashboard>
          </div>
          <div className="col-md-6">
            <CardDashboard
              image={CardRequest}
              link={"https://t4.ftcdn.net/jpg/02/36/57/91/360_F_236579161_BwYfCPuAytiZRCImG6yIe5RDBUlYpLCq.jpg"}
            ></CardDashboard>
          </div>
        </div>
      </div>
    </div>
  );
};
