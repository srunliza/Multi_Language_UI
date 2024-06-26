"use client";
import { useState } from "react";
import { useEffect } from "react";
import OneSignal from "react-onesignal";

export const OneSignalComponent = ({ userId }) => {
  const [subscriptionId, setSubscriptionId] = useState(null);

  useEffect(() => {
    OneSignal.init({ appId: "433e0e46-a7fd-44cf-ba42-4712400797ea" })
      .then(() => {
        setSubscriptionId(OneSignal.User.PushSubscription.id);
        OneSignal.User.addAlias("external_id", `${userId}`);
      })
      .catch((error) => {
        console.error("OneSignal initialization failed:", error);
      });
  }, []);
};
