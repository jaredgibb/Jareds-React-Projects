// import from a specific subpackage
const { onRequest } = require("firebase-functions/v2/https");
//initialize firebase app
const { initializeApp, cert } = require("firebase-admin/app");
const { getStorage } = require("firebase-admin/storage");

initializeApp({
  credential: cert({
    type: "service_account",
    project_id: "jared-gibb-project-123",
    private_key_id: "bc94175af572f7137af5dbb7fa2d308d14e18d5f",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDq3/4NCpdJwmP/\n7sUhEn5BmOT+Ctoceg5NHwSnjX/JZ+jU2m5nSuFGHKNCa4TTvZD0lhtFMzfn+Kxk\n1mMInll6XvW6Nr3EvgJaknPRfFEYojtGe7AfUw8M/PLOye8gsB7wwaixUk9tfufy\nwzmFR1rE5I/gy1A1GHhpeKyA9QJq+iDBNnpWZxcpsQRG39lG5YUEZbNOQ75ub00B\ng/2tF0ZT52X4Si4hpz5x+Fbe/lMBWhMxKxLECySxTrbiCs4lkqCfZLt6pSQB7bLX\n2/TCEllJpGVOygKfWa3e4lW9vppvIQqZ747PFAO1c9IJowrluY7ig4hFu70ozBCx\n5w72s+aNAgMBAAECggEAAzQsV+4D6uuyNiPqyI0F+2j+RY814Z4yPRuGEmljNG+b\nR9ov0ilVAIIlxIBmIx3O5WxK7qmra2s3uVQ4OJtf/M94J25suctYcmtgig/CXz9r\n/mLoK26rkHphjDu+GrPn8wwjZLX/N6NevwzYxGzHnAzxLmQHlNQCwkmMVZBZSMa1\nh1wx75cpzpAF28pma6la0EOZcrT3zsKI41KGc5OZbFVw2fVGRv9mxAO4T5o8+i9A\nX8a3wqUG4iV7rhRWIeE/JS0gmBa9T1oQWnrpCs+P4sgI1m88XWF7ysAje3IksU24\ncXuZrXCYSHTKC6j95CMmhSKtvUBx36TEGDWq6CbyTwKBgQD2sZl3iRA9CjsE0Cud\n7doAUA/gzyw0fsaq/W/vDVx+vs1V5nkfBeHYvNjijbxGATeamEr81tR4ibArekcY\nocR2m6P50yFK+29RY+ars3Le6dXDYYFQKGTNbc8x11XlWp5trf0Qo/P0U3eVpBjn\n9vk288WnjeLa8CecCV8SM9BT9wKBgQDzvEFT09u3lwQpxPbyeb4GHyzqPgucf3KV\niOZeOyyBwPso/IzgA5znqiC6WJ/aPo/9c3OyqVBssAinkZHLWNiBVwVhnsAXlWoY\nCf3UundKh9E9p6ZES/d4OlH7wh8Y3lixiLVOr1lpvkd8MW+bUDwWZxBB68UxSRuO\nPkCspJNwmwKBgQDc+g9/bO53zv84+4PmjtW1bAIdHVb6mwk4x5aJqw1Ml3t1U+Lx\nMCKzM86PeejJSHPXbk3VmFZwtt1wxLKE1PsYR6ils0LiWMHJRVSuPytJlGqf/mqI\nM/a/sXpkqgBOV1MM6kqCqmpvVIkNKRYKS0fHuqs1wLoR5geFFTvtIS6e1wKBgAVQ\nhIgkZXUSWOfkQJI271rI0TzmT3CBIul5y7QgTC8kGxXgs92qloBCqGYHyqyCkrcv\nDkXGBVfpWrb0qJ4reMURNa/UO1IIUwDlLuC1lCZO4dQbVLfGhEXd163KpMzxBDQS\nzAlEL4nruTlPBqT3UegXJTaawnj5pB0s5FIfYIujAoGAFE2tmf1rGpV/+Z7KZ7g+\nCLYwXmUTUiVeam3c6u30m8Nox1worntExMaBXQ7BWrNYhdn83AgIto21Z2aCkePr\nYw5DmI8mjvR45JWi4CveOQ5ynCmvqLJxjOgeEuqTBczRTUCaQfD8R1zJylwDSqY4\nH+oJ/Ehc9x612uImiHzfKmY=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-vzv16@jared-gibb-project-123.iam.gserviceaccount.com",
    client_id: "117254149626119656757",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vzv16%40jared-gibb-project-123.iam.gserviceaccount.com",
  }),
  storageBucket: "gs://jared-gibb-project-123.appspot.com",
});

/*

{
  id: 163359,
  kNumber: ,
  APPLICANT: ,
  classAdviseComms: ,
  dateRecieved: ,
  decision: ,
  decisionDate: ,
  descendantList: [],
  descendantsChecked: ,
  predicateList: [],
  product_code: 0,
  deviceDescription: null,
  deviceName: ,
  downloadStatus: null,
  expeditedReview: null,
  indicationsForUse: null,
  intendedUse: null,
  new: null,
  predicatesImport: null,
  reviewAdviseComms: ,
  signature: null,
  stateOrSum: null,
  thirdParty: ,
  type: ,
  url: null,
  unique_id: ,
  prodCodeText: ,
  descendantListText: ,
  predicateListText: 
}


exports.upload510 = onRequest(
  { timeoutSeconds: 3000, memory: "2GB", region: "us-central1" },
  async (req, res) => {
    
    const axios = require("axios");
    const axiosRetry = require("axios-retry");
     axiosRetry(axios, { retries: 3, retryCondition: (_error) => true });
    const postURL =
      "https://xt3h-mjgn-ecgw.f2.xano.io/api:SksPy-Y7/device_510k";
    const json = require("./allk10s.json");
    try {
      const pagesOfData =Math.ceil(json.length / 1000) 
      const pages = Array.from(Array(pagesOfData).keys())

      let i = 0
      for (const page of pages) {
        //grab record i through record i+100
        const records = json.slice(i, i + 1000)
        i += 1000
        const data = {input:records}
        console.log("up to record ", i);
        let response = await axios({
          method: "post",
          url: postURL,
          data: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);
        // cool down for 1 second
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
      res.send("done");
    } catch (error) {
      console.log(error);
    }
  }
);
*/
exports.create510csv = onRequest(
  { timeoutSeconds: 3600, region: ["us-east1"], memory: "16GB" },
  async (req, res) => {
    //require relevant packages
    const axios = require("axios");
     const axiosRetry = require("axios-retry");
     axiosRetry(axios, { retries: 3, retryCondition: (_error) => true });
    const fs = require("fs");
    const { uuid } = require("uuidv4");
    const converter = require("json-2-csv");

    //create a variable that is the month, day, and year
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const dateString = `${month}-${day}-${year}`;

    //create the file stream
    // var stream = fs.createWriteStream(`${dateString}.csv`, { flags: "a" });
    var stream2 = fs.createWriteStream(`${dateString}_510_Table.csv`, {
      flags: "a",
    });

    //get a count of all items in the 510 collection
    let itemCount = await axios.get(
      "https://xt3h-mjgn-ecgw.f2.xano.io/api:VS3myKHh/510-count"
    );
    //get the number of pages to iterate
    const pages = Math.ceil(itemCount.data / 500);
    //const pages = 2
    //create an array to hold the items
    let items = [];

    //create an array of the pages to iterate
    const pagesToIterate = [...Array(pages).keys()].map((x) => x + 1);

    //iterate through the pages
    for (const page of pagesToIterate) {
      console.log("page : " + page + "/" + pages);

      //create the paging object
      var data = JSON.stringify({
        paging: {
          page: page,
          page_size: 500,
        },
      });

      //get the next 1000 items from the 510 collection
      let d = await axios({
        method: "post",
        url: "https://xt3h-mjgn-ecgw.f2.xano.io/api:VS3myKHh/510s",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });

      //add the new items to the items array
      items = [...items, ...d.data];
      //cool down for 1 second
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    //print the number of iteems to the console
    console.log("number of items in the json pre conversion : ", items.length);

    //get a reference to the storage bucket
    const storage = getStorage();
    const bucket = storage.bucket();

    othercsv();

    async function othercsv() {
      let header = Object.keys(items[0]);
      //write the header to the csv
      stream2.write(header.join(",") + "\n");
      for (let i = 0; i < items.length; i++) {
        //get the row values
        let row = Object.values(items[i]);
        //create a clean row array
        let cleanRow = [];
        //iterate through the row values
        row.forEach((elm) => {
          if (typeof elm === "string") {
            let a;
            //replace all double quotes with single quotes
            a = elm.replace(/"/g, "");
            a = a.replace(/”/g, "");
            a = a.replace(/“/g, "");
            a = a.replace(/'/g, "");
            a = a.replace(/’/g, "");
            a = a.replace(/‘/g, "");
            cleanRow.push(JSON.stringify(a));
          } else {
            cleanRow.push(JSON.stringify(elm));
          }
        });

        //write the row to the csv
        stream2.write(cleanRow.join(",") + "\n");
      }
      //close the stream
      stream2.end();
      //upload the file to the bucket
      await bucket.upload(`${dateString}_510_Table.csv`, {
        destination: `${dateString}_510_Table.csv`,
        metadata: {
          metadata: {
            firebaseStorageDownloadTokens: uuid,
          },
        },
      });
      //get a signed url for the file
      const [url] = await bucket
        .file(`${dateString}_510_Table.csv`)
        .getSignedUrl({
          action: "read",
          expires: "03-09-2491",
        });
      //delete the file
      fs.unlink(`${dateString}_510_Table.csv`, function (err) {
        if (err) return console.log(err);
        console.log("file deleted successfully");
        res.send(url);
      });
    }
  }
);

exports.createproductcodecsv = onRequest(
  { timeoutSeconds: 3600, region: ["us-east1"], memory: "16GB" },
  async (req, res) => {
    //require relevant packages
    const axios = require("axios");
    // const axiosRetry = require("axios-retry");
    // axiosRetry(axios, { retries: 3, retryCondition: (_error) => true });
    const fs = require("fs");
    const { uuid } = require("uuidv4");
    const converter = require("json-2-csv");

    //create a variable that is the month, day, and year
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const dateString = `${month}-${day}-${year}`;

    //create the file stream
    // var stream = fs.createWriteStream(`${dateString}.csv`, { flags: "a" });
    var stream2 = fs.createWriteStream(`${dateString}_Product_Table.csv`, {
      flags: "a",
    });

    //get a count of all items in the 510 collection
    let itemCount = await axios.get(
      "https://xt3h-mjgn-ecgw.f2.xano.io/api:VS3myKHh/product_codes_count"
    );
    //get the number of pages to iterate
    const pages = Math.ceil(itemCount.data / 1000);
    //const pages = 2
    //create an array to hold the items
    let items = [];

    //create an array of the pages to iterate
    const pagesToIterate = [...Array(pages).keys()].map((x) => x + 1);

    //iterate through the pages
    for (const page of pagesToIterate) {
      console.log("page : " + page + "/" + pages);

      //create the paging object
      var data = JSON.stringify({
        paging: {
          page: page,
          page_size: 1000,
        },
      });

      //get the next 1000 items from the 510 collection
      let d = await axios({
        method: "post",
        url: "https://xt3h-mjgn-ecgw.f2.xano.io/api:VS3myKHh/getProductCodes",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });

      //add the new items to the items array
      items = [...items, ...d.data];
    }
    //print the number of iteems to the console
    console.log("number of items in the json pre conversion : ", items.length);

    //get a reference to the storage bucket
    const storage = getStorage();
    const bucket = storage.bucket();
    othercsv();

    async function othercsv() {
      let header = Object.keys(items[0]);
      //write the header to the csv
      stream2.write(header.join(",") + "\n");
      for (let i = 0; i < items.length; i++) {
        //get the row values
        let row = Object.values(items[i]);
        //create a clean row array
        let cleanRow = [];
        //iterate through the row values
        row.forEach((elm) => {
          if (typeof elm === "string") {
            let a;
            //replace all double quotes with single quotes
            a = elm.replace(/"/g, "");
            a = a.replace(/”/g, "");
            a = a.replace(/“/g, "");
            a = a.replace(/'/g, "");
            a = a.replace(/’/g, "");
            a = a.replace(/‘/g, "");
            cleanRow.push(JSON.stringify(a));
          } else {
            cleanRow.push(JSON.stringify(elm));
          }
        });

        //write the row to the csv
        stream2.write(cleanRow.join(",") + "\n");
      }
      //close the stream
      stream2.end();
      //upload the file to the bucket
      await bucket.upload(`${dateString}_Product_Table.csv`, {
        destination: `${dateString}_Product_Table.csv`,
        metadata: {
          metadata: {
            firebaseStorageDownloadTokens: uuid,
          },
        },
      });
      //get a signed url for the file
      const [url] = await bucket
        .file(`${dateString}_Product_Table.csv`)
        .getSignedUrl({
          action: "read",
          expires: "03-09-2491",
        });

      //delete the file
      fs.unlink(`${dateString}_Product_Table.csv`, function (err) {
        if (err) return console.log(err);
        console.log("file deleted successfully");
        res.send(url);
      });
    }
  }
);

exports.createpmacsv = onRequest(
  { timeoutSeconds: 3600, region: ["us-east1"], memory: "16GB" },
  async (req, res) => {
    //require relevant packages
    const axios = require("axios");
    // const axiosRetry = require("axios-retry");
    // axiosRetry(axios, { retries: 3, retryCondition: (_error) => true });
    const fs = require("fs");
    const { uuid } = require("uuidv4");
    const converter = require("json-2-csv");

    //create a variable that is the month, day, and year
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const dateString = `${month}-${day}-${year}`;

    //create the file stream
    // var stream = fs.createWriteStream(`${dateString}.csv`, { flags: "a" });
    var stream2 = fs.createWriteStream(`${dateString}_PMA_Table.csv`, {
      flags: "a",
    });

    //get a count of all items in the 510 collection
    let itemCount = await axios.get(
      "https://xt3h-mjgn-ecgw.f2.xano.io/api:VS3myKHh/pma_count"
    );
    //get the number of pages to iterate
    const pages = Math.ceil(itemCount.data / 1000);
    //const pages = 2;
    //create an array to hold the items
    let items = [];

    //create an array of the pages to iterate
    const pagesToIterate = [...Array(pages).keys()].map((x) => x + 1);

    //iterate through the pages
    for (const page of pagesToIterate) {
      console.log("page : " + page + "/" + pages);

      //create the paging object
      var data = JSON.stringify({
        paging: {
          page: page,
          page_size: 1000,
        },
      });

      //get the next 1000 items from the 510 collection
      let d = await axios({
        method: "post",
        url: "https://xt3h-mjgn-ecgw.f2.xano.io/api:VS3myKHh/getPMAs",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });

      //add the new items to the items array
      items = [...items, ...d.data];
    }
    //print the number of iteems to the console
    console.log("number of items in the json pre conversion : ", items.length);

    //get a reference to the storage bucket
    const storage = getStorage();
    const bucket = storage.bucket();

    othercsv();

    async function othercsv() {
      let header = Object.keys(items[0]);
      //write the header to the csv
      stream2.write(header.join(",") + "\n");
      for (let i = 0; i < items.length; i++) {
        //get the row values
        let row = Object.values(items[i]);
        //create a clean row array
        let cleanRow = [];
        //iterate through the row values
        row.forEach((elm) => {
          //check if elm is a string

          if (typeof elm === "string") {
            let a;
            //replace all double quotes with single quotes
            a = elm.replace(/"/g, "");
            a = a.replace(/”/g, "");
            a = a.replace(/“/g, "");
            a = a.replace(/'/g, "");
            a = a.replace(/’/g, "");
            a = a.replace(/‘/g, "");
            cleanRow.push(JSON.stringify(a));
          } else {
            cleanRow.push(JSON.stringify(elm));
          }
        });

        //write the row to the csv
        stream2.write(cleanRow.join(",") + "\n");
      }
      //close the stream
      stream2.end();
      //upload the file to the bucket
      await bucket.upload(`${dateString}_PMA_Table.csv`, {
        destination: `${dateString}_PMA_Table.csv`,
        metadata: {
          metadata: {
            firebaseStorageDownloadTokens: uuid,
          },
        },
      });
      //get a signed url for the file
      let [signedUrl] = await bucket
        .file(`${dateString}_PMA_Table.csv`)
        .getSignedUrl({ action: "read", expires: "03-09-2491" });
      //delete the file
      fs.unlink(`${dateString}_PMA_Table.csv`, function (err) {
        if (err) return console.log(err);
        console.log("file deleted successfully");
        //download the file and send it to the client
        res.send(signedUrl);
      });
    }
  }
);
