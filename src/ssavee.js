//                 axios.post("https://staging.yooii.com/api/instagram-after-auth/", {
//                     headers: {
//                         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTgxOTA5MzI0NCwiaWF0IjoxNzMyNzEzMDQ0LCJqdGkiOiJiNmMzNzIwNWJlY2Y0NmE1YjYwYTc0MTkzOTQxMmFmNyIsInVzZXJfaWQiOjR9.6mu22Mrbvmcnp2ZDCXpbQZnEdAbT2i-woD1XW7FhrdM
// `, // Use Authorization header with Bearer schema
//                     }
//                 })
//                     .then((res) => console.log(res))

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

console.log(urlParams);

if (code) {
    console.log(code);
}

