import * as EpnsAPI from "@epnsproject/sdk-restapi";
import * as ethers from "ethers";

const PK = "544c3100122ea42b630ada035a18969a7faadc01df2ffc5834201c827f53bf4a"; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async () => {
  console.log("[blockchain][enps][sendNotification]");
  try {
    const apiResponse = await EpnsAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `[SDK-TEST] notification TITLE:`,
        body: `[sdk-test] notification BODY`,
      },
      payload: {
        title: `[sdk-test] payload title`,
        body: `sample msg body`,
        cta: "",
        img: "",
      },
      recipients: "eip155:42:0x3aeC2276326CDC8E9a8A4351c338166e67105AC3", // recipient address
      channel: "eip155:42:0x31a0368a176Cb42b501Faf1f84a07f36f33125EC", // your channel address
      env: "staging",
    });

    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse.status);
  } catch (err) {
    console.error("Error: ", err);
  }
};

sendNotification();
