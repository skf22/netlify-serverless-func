// domain/.netlify/functions/1-hello

exports.handler = async (event, context) => {
  console.log(event);
  return {
    statusCode: 200,
    body: "Hello World! Our First Netlify Function",
  };
};
