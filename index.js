const express = require("express");
const app = express();
const port = 8000;

app.get("/home", (req, res) => {
  res.send({ error: false, message: "This is working great" });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//OCI TOKEN: -.Rr6H_VRfAe29bxQARK

//Weblogictrial
//Namespace : bmjpwhqkc8lp
//TenancyOCID : ocid1.tenancy.oc1..aaaaaaaaaripond5dwu2lscnvsgdgyagp2u4f4armcr4m43zndpujftzny3q
//UserOCID : ocid1.user.oc1..aaaaaaaaeqlbivnb5gtxiwlu4slon7yu5ev6hlgflqsmcdvelswgb4mofuba
//Compartment OCID : ocid1.tenancy.oc1..aaaaaaaaaripond5dwu2lscnvsgdgyagp2u4f4armcr4m43zndpujftzny3q
