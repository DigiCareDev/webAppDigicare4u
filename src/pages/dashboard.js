import React, { useEffect, useState } from "react";
import DefaultLayout from "../component/Layouts/DefaultLayout";
import GoogleMaps from "../component/GoogleMap/googleMps";
import MemberCard from "../component/MemberCard/memberCard";
import Tabs from "../component/Tabs/tabs"
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter()

    return (
        <DefaultLayout>
         <GoogleMaps/>
         <Tabs/>
         <MemberCard/>
        </DefaultLayout>
    );
};

export default Dashboard;
